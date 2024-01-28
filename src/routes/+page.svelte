<script lang="ts">
    import {NavBar, NavItem, Post, Svg} from "$lib";
    import navigationItems from "$lib/data/header.json"
    import posts from "$lib/data/posts.json"
</script>

<div class="relative flex h-screen snap-y snap-mandatory flex-col items-end gap-y-4 overflow-y-auto pb-80 pr-4 pt-4">
    <NavBar>
        {#each navigationItems as item}
            <NavItem href={item.href} ariaLabel={item.ariaLabel} label={item.label}>
                <Svg svgContent={item.svgContent} size={20} stroke={true} stroke-linecap="round"
                     stroke-linejoin="round"/>
            </NavItem>
        {/each}
    </NavBar>


    <a href="/about"
       class="group relative flex h-[60vh] md:h-[calc(70vh-2rem)] w-[min(80%,700px)] shrink-0 snap-center flex-col justify-end overflow-hidden rounded-xl bg-gray-8/50 backdrop-blur-xl lg:mr-[12vw] lg:ml-[12vw]">

        <img alt=""
             height="800" loading="eager"
             src="/preview.webp" width="700"
             class="absolute inset-0 -z-10 h-full w-full scale-110 object-cover blur brightness-110">

        <img alt=""
             height="800"
             src="/preview.webp" width="700"
             class="absolute inset-0 -z-10 h-full w-full scale-125 object-cover opacity-0 blur-3xl brightness-110 transition-opacity duration-500 ease-in-out group-hover:opacity-100">

        <div class="absolute inset-4 flex flex-col justify-end space-y-4 rounded-xl bg-[white]/30 p-10 text-black brightness-110 backdrop-blur-xl transition-all duration-300 ease-out group-hover:inset-0 group-hover:p-14">
            <div class="space-y-2 xl:space-y-4">
                <h2 class="text-4xl font-bold lg:text-5xl xl:text-6xl">
                    Why our study groups became a club
                </h2>
                <p class="opacity-80 lg:text-2xl xl:text-3xl">
                    Charting the Two-Year Odyssey from discrete Study groups to a Dynamic Club Community
                </p>
            </div>
        </div>
    </a>

    {#each posts as post}
        <Post href={post.url} title={post.title} description={post.subtitle} imageUrl={post.image}/>
    {/each}

</div>