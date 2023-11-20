<script lang="ts">
    import {createSearchStore, searchHandler} from '$lib/stores/search';
    import {onDestroy} from 'svelte';
    import type {PageData} from './$types';
    import NoContent from "../components/NoContent.svelte";
    import Grid from "../components/Grid.svelte";
    import Course from "../components/Course.svelte";
    import {isLinkPopUpModelOpen} from "$lib/stores/PopUpStore";
    import PopUp from "../components/PopUp.svelte";
    import Wrapper from "../components/Wrapper.svelte";
    import Header from "../components/Header.svelte";
    import SearchBox from "../components/SearchBox.svelte";

    export let data: PageData;

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
    const searchCourses: Course[] = data.courses.map((course) => ({...course}));

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