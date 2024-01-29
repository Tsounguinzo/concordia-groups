<script lang="ts">
    import "../app.css"
    import Metadata from "$lib/components/OldUI/Metadata.svelte";
    import {onMount} from "svelte";
    import {COURSES_STORAGE_KEY, NUMBER_OF_COURSES} from "$lib/constants";
    import {sharedData} from "$lib/utiles";
    import {Footer} from "$lib";

    onMount(async () => {
        const storedData = localStorage.getItem(COURSES_STORAGE_KEY);
        if (storedData && JSON.parse(storedData).length === NUMBER_OF_COURSES) {
            sharedData.set(JSON.parse(storedData));
        } else {
            fetch('/api/courses').then((res) => res.json()).then((data) => {
                localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(data));
                sharedData.set(data)
            });
        }
    })
</script>

<Metadata />

<slot />

<Footer/>