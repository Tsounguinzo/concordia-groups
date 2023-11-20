import {writable} from "svelte/store"

export interface SearchStoreModel<T extends Record<PropertyKey, any>> {
    data: T[]
    filtered: T[]
    search: string
}

// Create and return a writable search store with provided data.
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
    }
}

// Update the store's filtered data (what shows up) based on the search query.
export const searchHandler = <T extends Record<PropertyKey, any>>(
    store: SearchStoreModel<T>,
) => {
    const maxResults = 20;

    const searchQuery = store.search.toLowerCase().trim();

    // If search is empty, display first twenty courses.
    if (!searchQuery) {
        store.filtered = store.data.slice(0, maxResults);
        return;
    }

    const rankedResults: { course: T, score: number }[] = [];
    let minScore = 1; // Minimum score in rankedResults.

    // Rank courses based on relevance to the search query.
    for (const item of store.data) {
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
            if (rankedResults.length > 20) {
                rankedResults.pop();
                minScore = rankedResults[rankedResults.length - 1].score; // Update the minimum score.
            } else if (rankedResults.length === 20) {
                minScore = rankedResults[rankedResults.length - 1].score;
            }
        }
    }

    store.filtered = rankedResults.map(item => item.course);
}