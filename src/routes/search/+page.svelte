<script lang="ts">
    import Courses from "$lib/components/OldUI/Courses.svelte";
    import Error from "$lib/components/OldUI/layout/Error.svelte";
    import Loading from "$lib/components/OldUI/common/Loading.svelte";
    import {sharedData} from "$lib/utiles";

    $: courses = $sharedData;

</script>

{#if courses}
     {#if courses.length === 0}
        <Error/>
    {:else }
        <Courses {courses}/>
    {/if}
{:else }
    <Loading message="Loading Courses"/>
{/if}
