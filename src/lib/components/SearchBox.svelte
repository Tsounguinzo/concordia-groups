<script lang="ts">
    export let searchQuery
</script>

<div class="sticky top-0 z-10 flex flex-col items-center w-full py-4 -mx-3 text-center md:py-6 lg:py-10 bg-gradient-to-b from-black">
    <form class="w-full">
        <!-- svelte-ignore a11y-autofocus -->
        <input bind:value={$searchQuery.search}
               role="searchbox"
               aria-label="Search field"
               class="caret-blue-500 font-medium self-center text-3xl text-center bg-transparent sm:text-4xl md:text-5xl lg:text-7xl focus:outline-none animate-pulse"
               placeholder="Search for a course"
               autofocus={true}
        >
    </form>
</div>