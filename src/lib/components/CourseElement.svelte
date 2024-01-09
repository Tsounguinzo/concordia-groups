<script lang="ts">

    import {isLinkPopUpModelOpen, linkPopUpModelData, subjectBaseUrls} from "$lib/stores";
    import type {Course} from "$lib/types";
    import {getCourseIdByTitle, truncateText} from "$lib/utiles";
    import Svg from "$lib/components/Svg.svelte";

    export let course: Course

    async function gotoCourseDescriptionURL(event: Event) {
        try {
            const courseId = await getCourseIdByTitle(course.subject, course.catalog, subjectBaseUrls);
            window.location.href = `${subjectBaseUrls[course.subject]}#${courseId}`;

        } catch (error) {
            console.error(error);  // handle any errors that occur
        }
    }

</script>

<div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
    <div class="transition-all rounded-lg group col-span-12 sm:col-span-6 md:col-span-4">
        <a class="flex flex-col w-full h-full p-3 text-center text-gray-100" href="/"
           on:click|preventDefault={() => {
                   linkPopUpModelData.set({courseName: `${course.subject} ${course.catalog}`, courseWhatsappURL: course.whatsappLink, courseDiscordURL: course.discordLink})
                   isLinkPopUpModelOpen.set(true)
               }}>
            <div class="self-center w-40 h-20 overflow-hidden transition duration-300 transform rounded-lg group-hover:-translate-y-3">
                <img loading="lazy" src="/course-img.jpg" alt={course.title} class="absolute object-cover w-full h-full rounded-lg bg-gradient-to-t from-primary"/>
                <div class="absolute inset-0 z-10 w-full h-full bg-gradient-to-t from-black"></div>
            </div>
            <h6 class="mb-2 text-lg duration-700 group-hover:-translate-y-2">{course.subject} {course.catalog} - {course.title}</h6>
            <p class="text-sm duration-1000 opacity-60 group-hover:-translate-y-1">{truncateText(course.description, 100)}</p>
            <a class="flex items-center justify-center duration-1000 group-hover:-translate-y-1" on:click|preventDefault|stopPropagation={gotoCourseDescriptionURL} href="/">
                More Info
                <Svg size={18}> <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path></Svg>
            </a>
        </a>
    </div>
</div>