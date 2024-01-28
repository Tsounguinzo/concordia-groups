<script lang="ts">
    export let href: string;
    export let title: string;
    export let description: string;
    export let imageUrl: string;
</script>

<a href={href}
   class="group relative z-0 flex h-60 w-[min(80%,700px)] shrink-0 snap-center flex-col justify-end overflow-hidden rounded-xl bg-gray-800 text-white px-10 py-6 lg:mr-[12vw] lg:ml-[12vw]">
    <img alt={title}
         decoding="async"
         height="400"
         loading="lazy"
         src={imageUrl}
         width="600"
         class="absolute inset-0 -z-10 h-full w-full scale-110 rounded-xl object-cover opacity-0 blur-xl transition-opacity duration-500 ease-in-out group-hover:opacity-80">
    <div class="space-y-4">
        <img alt=""
             height="400"
             src={imageUrl}
             width="600"
             class="h-10 w-10 rounded-md object-cover  shadow-md shadow-blackA-6 transition duration-300 ease-in-out group-hover:opacity-0">
        <div>
            <h2 class="text-2xl font-bold">
                {title}
            </h2>
            <p class="text-sm font-medium">
                {description}
            </p>
        </div>
    </div>
</a>
