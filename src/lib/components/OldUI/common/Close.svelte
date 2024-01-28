<script lang="ts">
    import { twMerge } from "tailwind-merge"
    import Svg from "$lib/components/OldUI/Svg.svelte";
    export let ariaLabel: string = "Close"
    export let size: number = 20
</script>

<button class={twMerge("opacity-60 dark:opacity-80 hover:opacity-100 transition-opacity", $$props.class)} aria-label={ariaLabel} on:click>
    <span class="sr-only">{ariaLabel}</span>
    <Svg {size}>
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"></path>
    </Svg>
</button>