<script lang="ts">
    export let size: number = 18
    export let stroke: boolean = false

    let focusable: "true" | "false" = "true"
    let viewBox: string = "0 0 24 24"
    let cls = "shrink-0 " + (stroke ? "stroke-current fill-transparent" : "fill-current")
</script>

<svg
        focusable={focusable}
        viewBox={viewBox}
        width="{size}px" height="{size}px"
        {...$$restProps}
        class="{cls} {$$props?.class}"
        class:stroke-icon={stroke}
        xmlns="http://www.w3.org/2000/svg"
>
    <slot/>
</svg>