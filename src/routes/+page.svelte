<script lang="ts">
    import Courses from "$lib/components/Courses.svelte";
    import Error from "$lib/components/layout/Error.svelte";
    import {onMount} from "svelte";
    import Loading from "$lib/components/common/Loading.svelte";

    let courses = Promise.resolve({courses: []});
    const COURSES_STORAGE_KEY = 'coursesData';
    const STORAGE_VERSION = 1;

    onMount(async () => {
         const storedData = localStorage.getItem(COURSES_STORAGE_KEY);
         courses = (storedData && JSON.parse(storedData).version === STORAGE_VERSION) ?
         Promise.resolve({courses: JSON.parse(storedData).courses}) :
         fetch('/api/courses').then((res) => res.json()).then((data) => {
               const coursesData = {
                    version: STORAGE_VERSION,
                    courses: data.courses,
                   };
                localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(coursesData));
                return data;
         });
    })
</script>

{#await courses}
    <Loading message="Loading Courses"/>
{:then value}
    {#if value.courses.length === 0}
        <Error/>
    {:else }
        <Courses courses={value.courses}/>
    {/if}
{:catch error}
    <Error/>
{/await}
