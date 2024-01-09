<script lang="ts">
    import Courses from "$lib/components/Courses.svelte";
    import Error from "$lib/components/layout/Error.svelte";
    import {onMount} from "svelte";
    import Loading from "$lib/components/common/Loading.svelte";

    let courses = Promise.resolve({courses: []});

    onMount(async () => {
         courses = fetch('/api/courses').then((res) => res.json());
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
