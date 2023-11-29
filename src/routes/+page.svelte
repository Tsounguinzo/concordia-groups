<script lang="ts">
    import {Shadow} from "svelte-loading-spinners";
    import Courses from "../components/Courses.svelte";
    import Error from "../components/Error.svelte";
    import {onMount} from "svelte";

    let courses = Promise.resolve({courses: []});

    onMount(async () => {
         courses = fetch('/api/courses').then((res) => res.json());
    })
</script>

{#await courses}
    <div class="flex flex-col justify-center items-center h-screen">
        <div class="h-60">
            <Shadow color="white" size="150"/>
        </div>

        <p class="text-white text-2xl text-center bg-transparent sm:text-4xl md:text-5xl lg:text-7xl animate-pulse">
            Loading Courses
        </p>
    </div>
{:then value}
    {#if value.courses.length === 0}
        <Error/>
    {:else }
        <Courses courses={value.courses}/>
    {/if}
{:catch error}
    <Error/>
{/await}
