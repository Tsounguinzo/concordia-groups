import axios from "axios";
import {load} from "cheerio";
import {writable} from "svelte/store";
import type {SearchStoreModel} from "$lib/types";
import {COURSES_STORAGE_KEY, NUMBER_OF_COURSES} from "$lib/constants";

//////////////////////////
// Helper functions
//////////////////////////
export const copyToClipboard = (text: string): boolean => {
	if (!navigator.clipboard) {
		const textArea = document.createElement('textarea');
		textArea.value = text;

		// Avoid scrolling to bottom
		textArea.style.top = '0';
		textArea.style.left = '0';
		textArea.style.position = 'fixed';

		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			const successful = document.execCommand('copy');
			const msg = successful ? 'successful' : 'unsuccessful';
			console.log('Fallback: Copying text command was ' + msg);
			document.body.removeChild(textArea);
			return successful;
		} catch (err) {
			console.error('Fallback: Oops, unable to copy', err);
			document.body.removeChild(textArea);
			return false;
		}

	}

	navigator.clipboard.writeText(text).then(
		function () {
			console.log('Async: Copying to clipboard was successful!');
		},
		function (err) {
			console.error('Async: Could not copy text: ', err);
		}
	);

	return true;
};

export async function getCourseIdByTitle(subject: string, catalog: number, subjectBaseUrls: { [key: string]: string }): Promise<string | null> {
    const URL = subjectBaseUrls[subject.toUpperCase()];
    if (!URL) {
        console.error("Invalid category provided.");
        return null;
    }

    try {
        const {data} = await axios.get(URL);
        const $ = load(data);

        // Using the title attribute for course matching because Concordia's catalog structure embeds the course tag there.
        const targetTitle = `${subject.toLowerCase()}-${catalog}`;
        const courseDiv = $(`.course[title="${targetTitle}"]`);
        const courseId = courseDiv.find('a').attr('id');

        return courseId || null;
    } catch (error) {
        // @ts-ignore
        console.error("Error scraping the website:", error.message);
        return null;
    }
}

export function truncateText(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength - 3) + '...';
}

export const createSearchStore = <T extends Record<PropertyKey, any>>(
    data: T[],
) => {
    const {subscribe, set, update} = writable<SearchStoreModel<T>>({
        data: data,
        filtered: data,
        search: "",
    })

    return {
        subscribe,
        set,
        update,
        applyFilter: (filter: string) => {
            update(store => {
                // Call searchHandler here to apply the filter
                searchHandler(store, filter);
                return store;
            });
        },
    }
}

export const searchHandler = <T extends Record<PropertyKey, any>>(
    store: SearchStoreModel<T>, filter: string) => {

    const searchQuery = store.search.toLowerCase().trim();
    let maxResults;
    let data;

    if(filter === 'NONE') {
        maxResults = 19
        data = store.data
    } else {
        maxResults = 1000
        data = store.data.filter(course => course.subject.toUpperCase().includes(filter))
    }

    // If search is empty, display the required number courses.
    if (!searchQuery) {
        store.filtered = data.slice(0, maxResults);
        return;
    }

    const rankedResults: { course: T, score: number }[] = [];
    let minScore = 1; // Minimum score in rankedResults.

    // Rank courses based on relevance to the search query.
    for (const item of data) {
        let score = 0;
        let courseName = `${item.subject}${item.catalog}`.toLowerCase();
        let courseTitle = `${item.title}`.toLowerCase();
        let courseDescription = `${item.description}`.toLowerCase();

        //weight of the course parameters
        if (courseDescription.includes(searchQuery)) score += 1;
        if (courseTitle.toLowerCase().includes(searchQuery)) score += 5;
        if (courseName.includes(searchQuery.replace(/\s+/g, ''))) score += 10;

        if (score >= minScore) {
            // Insert the current item in the correct sorted position.
            let position = rankedResults.findIndex(r => r.score < score);
            if (position === -1) {
                rankedResults.push({course: item, score: score});
            } else {
                rankedResults.splice(position, 0, {course: item, score: score});
            }

            // Ensure rankedResults doesn't grow beyond 20 items.
            if (rankedResults.length > maxResults) {
                rankedResults.pop();
                minScore = rankedResults[rankedResults.length - 1].score; // Update the minimum score.
            } else if (rankedResults.length === maxResults) {
                minScore = rankedResults[rankedResults.length - 1].score;
            }
        }
    }

    store.filtered = rankedResults.map(item => item.course);
}
export let sharedData = writable(null);
