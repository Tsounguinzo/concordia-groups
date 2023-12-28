<script lang="ts">
    import {isLinkPopUpModelOpen, linkPopUpModelData} from "$lib/stores/PopUpStore";

    function closePopup() {
        isLinkPopUpModelOpen.set(false);
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape' || event.key === ' ') {
            closePopup();
        }
    }

</script>

<svelte:head>
    {#if $isLinkPopUpModelOpen}
        <title>{$linkPopUpModelData.courseName}</title>
        <meta name="description" content="Join {$linkPopUpModelData.courseName}"/>
    {:else }
        <title>Concordia Groups</title>
    {/if}
</svelte:head>

<div class="fixed inset-0 flex items-center justify-center z-50"
     role="button"
     on:keydown={handleKeydown}
     on:click={closePopup}
     tabindex="0"
>

    <!-- Overlay -->
    <div class="absolute inset-0 backdrop-filter backdrop-blur-lg"></div>


    <!-- Modal -->
    <div class="rounded-lg p-6 w-72 border border-gray-300 shadow-lg z-10 relative cursor-default"
         role="button"
         on:keypress
         on:click|stopPropagation
         tabindex="0"
    >

        <!-- Close button -->
        <button class="absolute top-3 left-3" aria-label="Close the model"
                on:click={ () => isLinkPopUpModelOpen.set(false)}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                ></path>
            </svg>
        </button>

        <div class="flex items-center justify-center h-full mb-5">
            <h3 class="mb-2 text-xl text-center">
                Join <br> {$linkPopUpModelData.courseName}
            </h3>
        </div>

        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-6 sm:col-span-6">
                    <span itemscope>
                        <a
                                itemprop="source"
                                href={$linkPopUpModelData.courseWhatsappURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-gray-100 flex flex-col items-stretch h-24 sm:h-28 justify-between p-3 border-gray-800 border-2 rounded-md hover:text-white hover:border-gray-500 transition-colors duration-300 ease-in-out group overflow-hidden"
                                aria-label="Link to external site Guide by Microsoft"
                        >
                            <div class="inline-flex">
                                <div class="duration-300 ease-in group-hover:translate-x-6 group-hover:opacity-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18"
                                         height="18" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                                d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"
                                        ></path>
                                    </svg>
                                </div>
                                <div class="duration-300 ease-in -translate-x-12 opacity-0 group-hover:-translate-x-4 group-hover:opacity-100">
                                    <svg width="18" height="18" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p>Whatsapp</p>
                        </a>
                    </span>
            </div>
            <div class="col-span-6 sm:col-span-6">
                    <span itemscope>
                        <a
                                itemprop="source"
                                href="https://discord.gg/na8tcjBpEp"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-gray-100 flex flex-col items-stretch h-24 sm:h-28 justify-between p-3 border-gray-800 border-2 rounded-md hover:text-white hover:border-gray-500 transition-colors duration-300 ease-in-out group overflow-hidden"
                                aria-label="Link to external site PWABuilder"
                        >
                            <div class="inline-flex">
                                <div class="duration-300 ease-in group-hover:translate-x-6 group-hover:opacity-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18"
                                         height="18" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                                d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                                        ></path>
                                    </svg>
                                </div>
                                <div class="duration-300 ease-in -translate-x-12 opacity-0 group-hover:-translate-x-4 group-hover:opacity-100">
                                    <svg width="18" height="18" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p>Discord</p>
                        </a>
                    </span>
            </div>
        </div>
    </div>
</div>