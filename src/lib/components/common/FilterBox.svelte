<script lang="ts">
    export let value: string
    export let currentValue: string
</script>

<div class="col-span-4 sm:col-span-3 md:col-span-2 lg:col-span-1">
    <button on:click
            itemprop="source"
            class="h-full w-full text-gray-100 p-3 {currentValue === value ? 'border-blue-500' : 'border-gray-800 hover:border-gray-500' } border-2 rounded-md hover:text-white  overflow-hidden"
            aria-label="filter for {value} courses">
        {value}
    </button>
</div>