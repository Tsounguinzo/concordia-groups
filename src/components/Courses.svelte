<script lang="ts">
    import {isLinkPopUpModelOpen} from "$lib/stores/PopUpStore.js";
    import Header from "./Header.svelte";
    import Wrapper from "./Wrapper.svelte";
    import SearchBox from "./SearchBox.svelte";
    import PopUp from "./PopUp.svelte";
    import NoContent from "./NoContent.svelte";
    import Course from "./Course.svelte";
    import Grid from "./Grid.svelte";
    import {createSearchStore, searchHandler} from "$lib/stores/search";
    import {onDestroy} from "svelte";

    export let courses;

    //course record model
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

    // Copy the provided courses data for searching functionality.
    const searchCourses: Course[] = courses.map((course) => ({...course}));

    const searchStore = createSearchStore(searchCourses);

    //When the search model changes, the handler updates the view.
    const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

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
                <Course {course}/>
            {/each}
        </Grid>
    {/if}

</Wrapper>