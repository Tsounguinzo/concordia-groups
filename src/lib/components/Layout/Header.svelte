<script lang="ts">
    import NavBar from "$lib/components/NavBar/NavBar.svelte";
    import NavItem from "$lib/components/NavBar/NavItem.svelte";
    import Svg from "$lib/components/Svg/Svg.svelte";
    import navigationItems from "$lib/data/header.json"

    export let title: string;
    export let subtitle: string;

</script>

<header>
    <div class="flex flex-col items-center space-y-4 px-4 py-32 text-center lg:px-0">
        <h2 class="text-3xl font-bold">{title}</h2>
        <h3 class="text-xl opacity-80">{subtitle}</h3>
    </div>
    <NavBar homeNav={false}>
        {#each navigationItems as item}
            <NavItem href={item.href} ariaLabel={item.ariaLabel} label={item.label}>
                <Svg svgContent={item.svgContent} size={20} stroke={true} stroke-linecap="round"
                     stroke-linejoin="round"/>
            </NavItem>
        {/each}
    </NavBar>
</header>