<script lang="ts">

    import {isLinkPopUpModelOpen, linkPopUpModelData} from "$lib/stores/PopUpStore";
    import {getCourseIdByTitle, subjectUrls} from "$lib/courseMoreInfo";

    type Course = {
        ID: string;
        title: string;
        subject: string;
        catalog: number;
        career: string;
        classUnit: number;
        prerequisites: string;
        crosslisted: string;
        description: string;
        whatsappLink: string;
    };
    export let course: Course

    function truncate(str: string, maxLength: number): string {
        if (str.length <= maxLength) {
            return str;
        }
        return str.slice(0, maxLength - 3) + '...';

    }

    async function handleClick(event: Event) {
        event.preventDefault();  // prevent the default link behavior
        event.stopPropagation();  // stop the event from bubbling up
        try {
            const courseId = await getCourseIdByTitle(course.subject, course.catalog);
            window.location.href = `${subjectUrls[course.subject]}#${courseId}`;

        } catch (error) {
            console.error(error);  // handle any errors that occur
        }
    }

</script>

<div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
    <div class="react-reveal"
         style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-856961280936906-1;">
        <div class="transition-all rounded-lg group col-span-12 sm:col-span-6 md:col-span-4">
            <a class="flex flex-col w-full h-full p-3 text-center text-gray-100" href="#"
               on:click={() => {
                   linkPopUpModelData.set({courseName: `${course.subject} ${course.catalog}`, courseWhatsappURL: course.whatsappLink})
                   isLinkPopUpModelOpen.set(true)
               }}>
                <div class="self-center w-40 h-20 overflow-hidden transition duration-300 transform rounded-lg group-hover:-translate-y-3">
                    <img
                            class="absolute object-cover w-full h-full rounded-lg bg-gradient-to-t from-primary"
                            src="https://cdn.sanity.io/images/udzdriea/production/7cf162664abfd9a1e0886bcbef2d475398c25d5a-960x600.jpg?w=200"
                            alt={course.title}
                            loading="lazy"
                    />
                    <div class="absolute inset-0 z-10 w-full h-full bg-gradient-to-t from-black"></div>
                </div>
                <h6 class="mb-2 text-lg duration-700 group-hover:-translate-y-2">{course.subject} {course.catalog} - {course.title}</h6>
                <p class="text-sm duration-1000 opacity-60 group-hover:-translate-y-1">{truncate(course.description, 100)}</p>
                <a class="flex items-center justify-center duration-1000 group-hover:-translate-y-1"
                   on:click={handleClick} href="#">
                    More Info
                    <svg class="remixicon-icon" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                    </svg>
                </a>
            </a>
        </div>
    </div>
</div>