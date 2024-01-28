<script lang="ts">
    import "../../app.css";
    import {Footer, Svg} from "$lib";
    import {header} from "$lib/stores";

    let y: number;

</script>

<svelte:window bind:scrollY={y}/>

<section class="h-[100dvh] isolate flex flex-col items-center justify-end overflow-hidden p-4 pb-20 transition-opacity duration-700 ease-in-out text-gray-12 md:text-center opacity-{y > 200 ? 0 : 100}">
    <a class="border-2 rounded-full absolute top-1/3 left-[10%] cursor-pointer w-[5em] h-[5em] flex flex-col justify-center items-center hover:animate-ping" href="/" on:click={() => history.back()}>
        <Svg size={30} svgContent= "<path d='M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z'></path>" />
    </a>
    <div class="_heroGradient left-1/2 top-[clamp(10px,30vh,80px)] -z-0 overflow-hidden rounded-full pointer-events-none fixed blur-[60px]"
         style="--gradient: linear-gradient({$header.gradient});">
    </div>
    <h1 class="z-10 text-[clamp(2rem,13vw,3rem)] font-normal leading-none [overflow-wrap:anywhere] md:leading-[0.9]">
        {$header.title}
    </h1>
    <h2 class="z-10 mt-4 text-[clamp(1rem,6vw,1.8rem)] font-light leading-tight opacity-50">
        {$header.subtitle}
    </h2>
</section>

<slot/>

<Footer/>


<style>
    ._heroGradient {
        --gradient-size: clamp(200px, 60vh, 650px);
        --size: var(--gradient-size, clamp(200px, 60vh, 800px));
        width: var(--size);
        height: var(--size);
        overflow: hidden;
        background: var(--gradient);
        background-size: 110% 110%;
        animation: gradient alternate 5s ease infinite;
        transform: translateX(-50%) translateY(-50%);
    }

    .blur-\[60px\] {
        --tw-blur: blur(60px);
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
    }
</style>