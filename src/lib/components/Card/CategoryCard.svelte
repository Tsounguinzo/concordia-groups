<script lang="ts">
    export let href: string;
    export let imageSrc: string;
    export let altText: string;
    export let title: string;
    export let description: string;
</script>

<li class="col-span-full md:col-span-6 lg:col-span-4">
    <a href={href} aria-label={altText}>

        <div class="group relative isolate flex items-end overflow-hidden rounded-md p-2 pr-4 shadow-none h-32 md:h-40 lg:h-64">
            <div class="absolute inset-0">
                <img alt={altText}
                     class="h-full origin-top object-cover opacity-20 scale-105 will-change-transform transform-gpu transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:-translate-y-2"
                     decoding="async" height="300"
                     src={imageSrc}
                     width="500"/>
            </div>
            <div class="absolute inset-0 top-[50%] bg-gradient-to-t from-gray-1 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
            <span class="z-10 block transform-gpu transition-all delay-150 duration-300 ease-in-out will-change-transform group-hover:translate-y-[55%] group-hover:opacity-100">
            {title} <br>
            <span class="text-sm text-gray-11 transition-opacity delay-150 duration-200 ease-in-out group-hover:opacity-0">
                {description}
            </span>
        </span>
        </div>
    </a>
</li>