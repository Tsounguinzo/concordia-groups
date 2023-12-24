<script lang="ts">
    let panelSelected: string = 'group-info';
    let courseName: string;
    let courseLink: string;
    let followUp: boolean = false;
    let groupDescriptionCopied: boolean = false;
    export let form;

    async function handleCopy() {
        if (!groupDescriptionCopied) {

            await navigator.clipboard.writeText(`Link 📍${courseLink}`);
            groupDescriptionCopied = !groupDescriptionCopied; // Toggle to show the second SVG

            // After 1 seconds, toggle back
            setTimeout(() => {
                groupDescriptionCopied = !groupDescriptionCopied;
            }, 1000);
        }
    }


    function updateSelection(value: string) {
        panelSelected = value;
    }

    console.log(form)
</script>

<form class="flex h-screen w-full flex-col text-white" id="form-group" name="form-group" data-name="add-group" method="POST" aria-label="add-group">

    <div class="flex w-full justify-between py-4 px-4 border-b border-b-white">
        <a class="flex items-center group" href="/">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="duration-500 group-hover:-translate-x-2">
                <path d="M15 5L8 12L15 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
            </svg>
            <div class="duration-500 group-hover:-translate-x-2 pl-1 font-medium">All Groups</div>
        </a>

        <button type="submit"
                class="border border-green-400 px-2 py-1 rounded-lg bg-green-500 hover:bg-green-600 duration-500 ease-in-out">
            Send
        </button>
    </div>


    <div class="relative flex w-full grow overflow-hidden max-md:flex-col">

        <div role="radiogroup" aria-required="false" dir="ltr"
             class="flex w-full overflow-hidden rounded-xl p-1.5 md:hidden mb-2 flex-shrink-0 self-center"
             tabindex="0" style="outline: none;">
            <button type="button" role="radio"
                    aria-checked="{panelSelected === 'group-info' ? 'true' : 'false'}"
                    data-state="{panelSelected === 'group-info' ? 'checked' : 'unchecked'}" value="group-info"
                    class="text-md w-1/2 {panelSelected === 'group-info' ? 'bg-gray-800' : 'unchecked'} flex-grow rounded-lg p-1.5 font-medium md:w-1/2"
                    tabindex="0"
                    on:click={() => updateSelection('group-info')}>Group Info
            </button>
            <button type="button" role="radio" aria-checked="{panelSelected === 'preview' ? 'true' : 'false'}"
                    data-state="{panelSelected === 'preview' ? 'checked' : 'unchecked'}" value="preview"
                    class="text-md w-1/2 {panelSelected === 'preview' ? 'bg-gray-800' : 'unchecked'} flex-grow rounded-lg p-1.5 font-medium md:w-1/2"
                    tabindex="-1"
                    on:click={() => updateSelection('preview')}>Preview
            </button>
        </div>

        <!-- Course info panel-->
        <div class="flex w-full h-full justify-center pt-4 md:w-1/2 {panelSelected === 'preview' ? 'max-md:hidden' : ''}">
            <div class="h-full grow overflow-hidden">
                <div class="flex h-full flex-col px-2 pt-2">

                    <!-- Course info panel title-->
                    <div class="max-md:hidden relative mb-2 flex-shrink-0">
                        <div class="flex justify-center py-1">
                            <div class="group flex items-center gap-2 text-lg font-medium">
                                <button class="flex items-center gap-2">
                                    Group Info
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Course info panel content-->
                    <div class="flex h-full grow flex-col overflow-y-auto px-2 pt-6 text-sm">
                        <div class="grow">
                            <div class="mb-6">
                                <div class="mb-1.5 flex items-center">
                                    <label class="block font-medium" for="name">
                                        Course Name <span class="text-red-500">*</span>
                                    </label>
                                </div>
                                <input type="text" placeholder="e.g MATH 205"
                                       class="w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm focus:border-[#3898ec] outline-none border-2 bg-transparent"
                                       name="name"
                                       bind:value={courseName} required></div>
                            <div class="mb-6 mt-4">
                                <div class="mb-1.5 flex items-center">
                                    <label class="block font-medium" for="link">
                                        Whatsapp link <span class="text-red-500">*</span>
                                    </label>
                                </div>
                                <input type="text" placeholder="link to your whatsapp group"
                                       class="w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm focus:border-[#3898ec] outline-none border-2 bg-transparent"
                                       name="link"
                                       bind:value={courseLink} required>
                            </div>
                            <div class="mb-6">
                                <div class="mb-1.5 flex items-center">
                                    <label class="block font-medium" for="comment">Comment</label>
                                </div>
                                <div class="relative">
                                <textarea
                                        class="w-full text-sm overflow-visible rounded-lg focus:border-[#3898ec] outline-none border-2 bg-transparent px-3 py-2 h-32 resize-none"
                                        rows="8"
                                        placeholder="Any thing you want to point out?"
                                        name="comment"
                                ></textarea>
                                </div>
                            </div>

                            <div class="mb-6 {followUp ? '' : 'hidden'}">
                                <div class="mb-1.5 flex items-center">
                                    <label class="block font-medium" for="number">
                                        Whatsapp phone number <span class="text-red-500">*</span>
                                    </label>
                                </div>
                                <div class="relative">
                                    <input type="tel" placeholder="4385093906"
                                           class="w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm focus:border-[#3898ec] outline-none border-2 bg-transparent"
                                           value="" name="number" required="{followUp ? 'required' : ''}">
                                </div>

                            </div>

                            <div class="mb-6">
                                <div class="mb-1.5 flex items-center">Acceptance Criteria</div>
                                <div class="flex flex-col gap-4">
                                    <div class="rounded-lg text-gray-500">
                                        You must follow the specification for the whatsapp group as shown in the
                                        preview,
                                        <a href="/concordia-logo.png" download="group-icon"
                                           class="text-blue-500 animate-pulse">click here</a> to download the group icon
                                    </div>
                                </div>
                            </div>

                            <div class="mb-6">
                                <div class="mb-1.5 flex items-center">
                                    <div class="block font-medium">
                                        Do you want to receive a follow up on whatsapp?
                                    </div>
                                    <div class="flex flex-row mx-2">
                                        <label class="ml-1 cursor-pointer">
                                            <input
                                                    name="followup" class="cursor-pointer"
                                                    type="radio" id="followup" value={true}
                                                    bind:group={followUp}> Yes
                                        </label>
                                        <label class="ml-2 cursor-pointer">
                                            <input
                                                    name="followup" class="cursor-pointer"
                                                    type="radio" id="followup" value={false}
                                                    bind:group={followUp}> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <!-- Course preview panel-->
        <div class="flex w-full h-full justify-center pt-4 md:w-1/2 md:border-l {panelSelected === 'group-info' ? 'max-md:hidden' : ''}">
            <div class="h-full grow overflow-hidden">
                <div class="flex h-full flex-col px-2 pt-4">

                    <!-- Course review panel title-->
                    <div class="max-md:hidden relative mb-2 flex-shrink-0">
                        <div class="flex justify-center py-1">
                            <div class="group flex items-center gap-2 text-lg font-medium">
                                <button class="flex items-center gap-2">
                                    Preview
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Course review panel content-->
                    <div class="relative grow overflow-auto px-2 h-full">
                        <div role="presentation" class="flex h-full flex-col" tabindex="-1">
                            <div class="flex-1 overflow-hidden">
                                <div class="relative h-full w-full">
                                    <div class="absolute left-0 top-0 h-full w-full">
                                        <div class="flex h-full flex-col items-center justify-center">
                                            <div class="relative">
                                                <div class="mb-3 h-[82px] w-[82px]">
                                                    <div class="relative flex h-full items-center justify-center rounded-full bg-white text-black">
                                                        <img src="/concordia-logo.png" alt="concordia logo">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col max-w-md items-center gap-0 p-2 w-full">
                                                {#if courseName}
                                                    <div class="w-full overflow-hidden text-center text-2xl font-medium text-pretty uppercase">
                                                        {courseName}
                                                    </div>
                                                {/if}
                                                {#if courseLink}
                                                    <div class="w-full bg-neutral-900/90 font-normal text-center text-xs text-white rounded-lg shadow mt-2">
                                                        <header class="text-xs text-white/50 flex justify-between items-center p-2 pl-4">
                                                            <span class="">Group Description</span>
                                                        </header>
                                                        <div class="p-4 pl-2 flex flex-row items-center justify-between">
                                                            <pre class="overflow-hidden">Link 📍<a href="{courseLink}"
                                                                                                  class="text-blue-400"> {courseLink} </a></pre>
                                                            <button class="px-1" on:click={handleCopy} type="button">
                                                                <svg width="20" height="20" viewBox="0 0 24 24"
                                                                     fill="none"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     class="text-gray-500 { groupDescriptionCopied ? 'hidden' : ''} transition ease-in-out duration-1000">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                          d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"
                                                                          fill="currentColor"></path>
                                                                </svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 24 24"
                                                                     width="20" height="20"
                                                                     class="text-gray-500 { !groupDescriptionCopied ? 'hidden' : ''} transition ease-in-out">
                                                                    <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
                                                                          fill="currentColor"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                {/if}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</form>