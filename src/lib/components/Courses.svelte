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
    import type {Course} from "$lib/types";
    import Footer from "./layout/Footer.svelte";
    import CourseElement from "./CourseElement.svelte";
    import type {SearchStoreModel} from "$lib/types";

    export let courses;

    // Copy the provided courses data for searching functionality.
    const searchCourses: Course[] = courses.map((course: Course) => ({...course}));

    const searchStore = createSearchStore(searchCourses);

    //When the search model changes, the handler updates the view.
    const unsubscribe = searchStore.subscribe((model: SearchStoreModel<Course>) => searchHandler(model));

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

    {#if $searchStore.filtered.length === 0}
        <NoContent/>
    {:else}
        <Grid>
            {#each $searchStore.filtered as course}
                <CourseElement {course}/>
            {/each}
        </Grid>
    {/if}

    <Footer/>

</Wrapper>