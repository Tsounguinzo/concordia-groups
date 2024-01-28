<script lang="ts">
    import {copyToClipboard} from "$lib/utiles";
    import Svg from "$lib/components/OldUI/Svg.svelte";
    export let description: string;
    export let textToCopy: string;

    let textCopied: boolean = false;

    async function copyToClipboardSVGSwitching() {
        const copySuccessful = copyToClipboard(textToCopy);
        if (!textCopied && copySuccessful) {
            // Toggle to show the second SVG
            textCopied = !textCopied;
            // After 1 seconds, toggle back
            setTimeout(() => {
                textCopied = !textCopied;
            }, 1000);
        }
    }
</script>

<div class="w-full bg-neutral-900/90 font-normal text-xs text-white rounded-lg shadow mt-2">
    <header class="text-xs text-white/50 flex justify-between items-center p-2 pl-4">
        <span class="">{description}</span>
    </header>
    <div class="p-4 pl-2 flex flex-row items-center justify-between">
        <div class="overflow-hidden whitespace-nowrap">
            <slot/>
        </div>
        <button class="px-1" on:click={copyToClipboardSVGSwitching} type="button">
            <Svg class="text-gray-500 { textCopied ? 'hidden' : ''} transition ease-in-out duration-1000">
                <path fill-rule="evenodd" d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
            </Svg>
            <Svg class="text-gray-500 { !textCopied ? 'hidden' : ''} transition ease-in-out">
                <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
            </Svg>
        </button>
    </div>
</div>