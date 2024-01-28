<script lang="ts">
    import {header} from "$lib/stores";
    import {page} from "$app/stores";
    import {Loading, CoursesGrid} from "$lib";
    import type {Course} from "$lib/types";
    import {createSearchStore, sharedData} from "$lib/utiles";


    header.set({title: `${$page.params.category}`, subtitle: `Explore all the ${$page.params.category} groups`})

    const bodyDoubling: Course[] = [{
        ID: '',
        title: 'Accountability Partner',
        subject: 'Body Doubling',
        catalog: '',
        career: '',
        classUnit: NaN,
        prerequisites: '',
        crosslisted: '',
        description: '"Body Doubling" is a technique where individuals work alongside others to enhance focus and productivity. An accountability partner may help you show up on campus in the morning or stay on task while studying by committing to someone else that you show up to. An accountability partner may not take the same courses as you. They do what they must do, and you (hopefully) get your tasks completed. This group serves as a platform to connect with potential accountability partners.',
        whatsappLink: 'https://chat.whatsapp.com/L9a9U3inteP7KdTZZpS8Bb',
        discordLink: 'https://discord.gg/na8tcjBpEp',
    }]

    $: courses = $sharedData ?? [];

    let searchCourses: Course[];
    $: if (courses) searchCourses = courses.map((course: Course) => ({...course}));

    $: searchStore = createSearchStore(searchCourses);
    $: searchStore.applyFilter($page.params.category);

</script>

{#if $page.params.category === 'SPECIAL'}
    <CoursesGrid courses={bodyDoubling}/>
{:else }
    {#if $searchStore.filtered.length > 0}
        <CoursesGrid courses={$searchStore.filtered}/>
    {:else }
        <Loading message="Will be loaded in a sec"/>
    {/if}
{/if}
