<script lang="ts">
    import Courses from "$lib/components/OldUI/Courses.svelte";
    import Error from "$lib/components/OldUI/layout/Error.svelte";
    import Loading from "$lib/components/OldUI/common/Loading.svelte";
    import {sharedData} from "$lib/utiles";

    $: courses = sharedData ? Promise.resolve({courses: $sharedData}) : Promise.resolve({courses: []});

</script>

{#await courses}
    <Loading message="Loading Courses"/>
{:then value}
    {#if value.courses === null || value.courses.length === 0}
        <Error/>
    {:else }
        <Courses courses={value.courses}/>
    {/if}
{:catch error}
    <Error/>
{/await}
