<script lang="ts">
    import Svg from "$lib/components/Svg.svelte";

    export let choice: string;
    let isToggled = false;
</script>

<div class="mt-4 flex flex-col items-center">
    <p class="text-xl text-gray-400 uppercase pb-6">Filter</p>

    <span class="items-center w-3/4 md:w-full flex flex-col">
        <button class="md:hidden inline-flex items-center justify-between cursor-pointer text-center h-full w-full text-gray-100 p-3 border-gray-800 hover:border-gray-500 border-2 rounded-md hover:text-white overflow-hidden mb-4"
                on:click={() => isToggled = !isToggled}>
            {choice}
            <Svg class={isToggled ? 'hidden' : 'block w-2.5 h-2.5 ms-3'} aria-hidden="true" viewBox="0 0 10 6" stroke={true}>
                <path d="m1 1 4 4 4-4" />
            </Svg>
            <Svg class={isToggled ? 'block rotate-180 w-2.5 h-2.5 ms-3' : 'hidden'} aria-hidden="true" viewBox="0 0 10 6" stroke={true}>
                <path d="m1 1 4 4 4-4" />
            </Svg>
        </button>

        <div class="{isToggled ? '' : 'max-md:hidden'} grid grid-cols-12 gap-2 place-content-center">
            <slot/>
        </div>
    </span>
</div>
