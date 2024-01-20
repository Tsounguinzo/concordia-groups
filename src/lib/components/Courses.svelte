<script lang="ts">
    import {isLinkPopUpModelOpen} from "$lib/stores";
    import Header from "./layout/Header.svelte";
    import Wrapper from "./Wrapper.svelte";
    import SearchBox from "./SearchBox.svelte";
    import PopUp from "./common/PopUp.svelte";
    import NoContent from "./NoContent.svelte";
    import Grid from "./Grid.svelte";
    import {createSearchStore, searchHandler} from "$lib/utiles";
    import {onDestroy} from "svelte";
    import type {Course, SearchStoreModel} from "$lib/types";
    import Footer from "./layout/Footer.svelte";
    import CourseElement from "./CourseElement.svelte";
    import FilterBox from "$lib/components/common/FilterBox.svelte";
    import Filters from "$lib/components/layout/Filters.svelte";

    export let courses;
    let currFilter = 'NONE';

    const filters = ["NONE", "ENGR", "ECON", "PHYS", "MATH", "ITAL", "MIAE", "CHEM", "COMP", "SOEN", "ELEC", "COEN", "MAST", "ENCS", "AERO", "MECH", "INDU", "BIOL", "EDUC", "PHIL", "RELI", "MARK", "THEO"]

    // Copy the provided courses data for searching functionality.
    const searchCourses: Course[] = courses.map((course: Course) => ({...course}));

    const searchStore = createSearchStore(searchCourses);
    $: searchStore.applyFilter(currFilter);

    //When the search model changes, the handler updates the view.
    const unsubscribe = searchStore.subscribe((model: SearchStoreModel<Course>) => searchHandler(model, currFilter));

    const bodyDoubling: Course = {
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
    }
    onDestroy(() => {
        unsubscribe();
    });

</script>

<Wrapper>

    <Header/>

    {#if $isLinkPopUpModelOpen}
        <PopUp/>
    {/if}

    <SearchBox searchQuery={searchStore}/>

    <Filters>
        {#each filters as filter}
            <FilterBox currentValue={currFilter} value={filter} on:click={() => currFilter=filter }/>
        {/each}
    </Filters>

    {#if $searchStore.filtered.length === 0}
        <NoContent/>
    {:else}
        <Grid>

            {#if currFilter === 'NONE'}
                <CourseElement course={bodyDoubling} img="/bodyDoubling-img.webp"/>
            {/if}

            {#each $searchStore.filtered as course}
                <CourseElement {course}/>
            {/each}

        </Grid>
    {/if}

    <Footer/>

</Wrapper>