<script lang="ts">
    import {header} from "$lib/stores";
    import {Loading, CoursesGrid} from "$lib";
    import {sharedData} from "$lib/utiles";

    header.set({title: 'Courses', subtitle: 'See all groups on Study Hub'})

    $: courses = $sharedData;

</script>

{#if !courses}
    <Loading message="Will be loaded in a sec"/>
{:else }
    <CoursesGrid {courses}/>
{/if}
