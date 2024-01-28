<script>
    import Svg from "$lib/components/OldUI/Svg.svelte";
</script>

<div class="flex flex-col items-center justify-center w-full pt-12 mb-2 ">
    <p class="text-xl font-bold">Study Groups</p>
    <div class="px-2 py-4 flex flex-row justify-center items-center">
        <a class="flex flex-row group" href="/search/add">
            <div class="flex items-center justify-center h-[42px] w-[42px] border-dashed border-2 rounded-full duration-700 group-hover:-translate-y-2 group-hover:border-blue-500 group-hover:text-blue-500">
                <Svg size={24} stroke={true}>
                    <path d="M12 4L12 20M20 12L4 12"></path>
                </Svg>
            </div>
            <div class="flex justify-center items-center pl-3 duration-700 group-hover:-translate-y-2">
                <span class="font-medium"> Add a group </span>
            </div>
        </a>
    </div>
</div>