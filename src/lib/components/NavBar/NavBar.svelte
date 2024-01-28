<script lang="ts">
    export let homeNav: boolean = true;

    const cls: string = homeNav ? "fixed inset-y-0 flex h-screen flex-col justify-end items-start gap-y-1 p-2 text-sm font-light md:gap-y-3 md:p-4 lg:gap-y-4 lg:p-8 xl:p-8 left-0" :
        "flex w-max gap-2 items-center justify-center sm:gap-6 md:gap-8 mx-auto mb-20 lg:mb-32"
</script>

<div class={cls}>
    <slot/>
</div>
