<script lang="ts">
    import {twMerge} from "tailwind-merge"

    export let size: number = 1
    export let stroke: boolean = false
    export let svgContent: string = '';

    let focusable: "true" | "false" = "true"
    let viewBox: string = "0 0 24 24"
    let cls = "shrink-0 " + (stroke ? "stroke-2 stroke-white fill-transparent" : "fill-current")
</script>

<svg
        {focusable}
        {viewBox}
        width="{size}px" height="{size}px"
        {...$$restProps}
        class={twMerge(cls, $$props?.class)}
        class:stroke-icon={stroke}
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
>
    {@html svgContent}
    <slot/>
</svg>
