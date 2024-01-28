<script lang="ts">
    import {Clock} from "svelte-loading-spinners";

    export let message: string
</script>

<div class="flex flex-col justify-center items-center h-1/3">
    <div class="h-40">
        <Clock color="white" size="80"/>
    </div>

    <p class="text-white text-2xl text-center bg-transparent sm:text-2xl md:text-3xl lg:text-4xl animate-bounce">
        {message}
    </p>
</div>