<script lang="ts">
    import Courses from "$lib/components/Courses.svelte";
    import Error from "$lib/components/layout/Error.svelte";
    import {onMount} from "svelte";
    import Loading from "$lib/components/common/Loading.svelte";
    import {COURSES_STORAGE_KEY, NUMBER_OF_COURSES} from "$lib/constants";

    let courses = Promise.resolve({courses: []});

    onMount(async () => {
        localStorage.removeItem('coursesData');
         const storedData = localStorage.getItem(COURSES_STORAGE_KEY);
         courses = (storedData && JSON.parse(storedData).length === NUMBER_OF_COURSES) ?
         Promise.resolve({courses: JSON.parse(storedData)}) :
         fetch('/api/courses').then((res) => res.json()).then((data) => {
                localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(data));
                return Promise.resolve({courses: data});
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
