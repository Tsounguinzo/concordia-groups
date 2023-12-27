<script lang="ts">
    export let show: boolean;
</script>

<div class="fixed inset-0 flex items-center justify-center z-50"
     on:click={ () => show = false}
>

    <!-- Overlay -->
    <div class="absolute inset-0 backdrop-filter backdrop-blur-lg"></div>


    <!-- Modal -->
    <div class="rounded-lg p-6 w-64 border border-gray-300 shadow-lg z-10 relative text-white"
         on:click|stopPropagation>

        <!-- Close button -->
        <button class="absolute top-1 left-1" aria-label="Close the model"
                on:click={ () => show = false}>
            <svg class="remixicon-icon" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                ></path>
            </svg>
        </button>

        <div class="flex items-center justify-center h-full">
            <h3 class="mb-2 text-xl text-center">
                <slot/>
            </h3>
        </div>

    </div>
</div>