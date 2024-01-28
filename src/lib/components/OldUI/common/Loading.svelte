<script lang="ts">
    import {Shadow} from "svelte-loading-spinners";

    export let message: string
</script>

<div class="flex flex-col justify-center items-center h-screen">
    <div class="h-60">
        <Shadow color="white" size="150"/>
    </div>

    <p class="text-white text-2xl text-center bg-transparent sm:text-4xl md:text-5xl lg:text-7xl animate-pulse">
        {message}
    </p>
</div>