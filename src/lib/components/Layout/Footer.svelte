<script lang="ts">
    import NavItem from "$lib/components/NavBar/NavItem.svelte";
    import Svg from "$lib/components/Svg/Svg.svelte";
    import navigationItems from "$lib/data/footer.json"

    function createElementFromHTML(htmlString: string) {
        if (document) {
            var div = document.createElement('template');
            div.innerHTML = htmlString.trim();

            return div.firstChild;
        }
    }

</script>

<footer class="space-y-20 mx-auto mb-[clamp(40px,10vh,80px)] mt-[20vh] max-w-2xl px-8">
    <div class="container mx-auto grid grid-cols-12 text-sm text-gray-11">

        {#each navigationItems as item (item.href)}
            <div class="col-span-4">
                <NavItem href={item.href} ariaLabel={item.ariaLabel} label={item.label} footer={true}>
                    <Svg svgContent={item.svgContent} size={20} stroke={true} stroke-linecap="round" stroke-linejoin="round"/>
                </NavItem>
            </div>
        {/each}
    </div>

    <section class="pt-44 text-center text-xl text-gray-10"><p>by Study Hub</p></section>
</footer>