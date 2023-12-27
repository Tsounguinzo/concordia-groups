<script lang="ts">
    import {onMount} from "svelte";
    import {validateCourseName, validatePhoneNumber, validateWhatsappLink} from "./validators";

    import CustomInput from "./components/CustomInput.svelte";
    import PopUp from "./components/PopUp.svelte";

    let panelSelected: string = 'group-info';

    let groupDescriptionCopied: boolean = false;
    let showSubmissionMessage: boolean = false;

    let courseName: string = '';
    let courseLink: string = '';
    let followUpNumber: string = '';
    let courseNameElement;
    let courseLinkElement;
    let whatsappNumberElement;

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

    function validatePhoneNumberWrapper() {
        validatePhoneNumber(whatsappNumberElement);
    }

    function validateWhatsappLinkWrapper() {
        validateWhatsappLink(courseLinkElement);
    }

    function validateCourseNameWrapper() {
        validateCourseName(courseName, courseNameElement);
    }

    onMount(() => {
        whatsappNumberElement = document.getElementById('followupNumber');
        courseNameElement = document.getElementById('courseName');
        courseLinkElement = document.getElementById('whatsappGroupLink');

        const savedPopupVisibility = window.localStorage.getItem('popupVisible');
        showSubmissionMessage = savedPopupVisibility === 'true';
        window.localStorage.removeItem('popupVisible');
    })

    //|preventDefault
</script>

{#if showSubmissionMessage}
    <PopUp bind:show={showSubmissionMessage}>
        {#if form}
            {#if form.success}
                {#if form.followup}
                    <span class="text-[#155724]">
                        <strong>Success!</strong> Check your WhatsApp for follow-up messages.
                    </span>
                {:else }
                    <span class="text-[#721c24]">
                        <strong>Error:</strong> Follow-up via WhatsApp couldn't be sent. Please ensure your number is correct.
                    </span>
                {/if}
            {:else }
                <span class="text-[#721c24]">
                    <strong>Error:</strong> Submission failed. Please try again later.
                </span>
            {/if}
        {:else }
            <span class="text-[#721c24]">
                <strong>Error:</strong> Unable to submit your form at this time. Please try again later.
            </span>
        {/if}
    </PopUp>

{/if}

<form aria-label="add-group" class="flex h-screen w-full flex-col text-white" data-name="add-group" id="form-add-group"
      method="POST" name="form-group" on:submit={() => window.localStorage.setItem('popupVisible', 'true')}>

    <!------------------------Header start----------------------------->
    <div class="flex w-full justify-between py-4 px-4 border-b border-b-white">
        <a class="flex items-center group" href="/">
            <svg class="duration-500 group-hover:-translate-x-2" fill="none" height="24" viewBox="0 0 24 24" width="24"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L8 12L15 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"></path>
            </svg>
            <div class="duration-500 group-hover:-translate-x-2 pl-1 font-medium">All Groups</div>
        </a>

        <button class="border border-green-400 px-2 py-1 rounded-lg bg-green-500 hover:bg-green-600 duration-500 ease-in-out"
                type="submit">
            Send
        </button>
    </div>
    <!------------------------End Header------------------------->

    <!------------------------Panels start----------------------------->
    <div class="relative flex w-full grow overflow-hidden max-md:flex-col">

        <div aria-required="false"
             class="flex w-full overflow-hidden rounded-xl p-1.5 md:hidden mb-2 flex-shrink-0 self-center" dir="ltr"
             role="radiogroup"
             style="outline: none;" tabindex="0">
            <button aria-checked="{panelSelected === 'group-info' ? 'true' : 'false'}"
                    class="text-md w-1/2 {panelSelected === 'group-info' ? 'bg-gray-800' : 'unchecked'} flex-grow rounded-lg p-1.5 font-medium md:w-1/2"
                    data-state="{panelSelected === 'group-info' ? 'checked' : 'unchecked'}"
                    on:click={() => updateSelection('group-info')} role="radio"
                    tabindex="0"
                    type="button"
                    value="group-info">Group Info
            </button>
            <button aria-checked="{panelSelected === 'preview' ? 'true' : 'false'}"
                    class="text-md w-1/2 {panelSelected === 'preview' ? 'bg-gray-800' : 'unchecked'} flex-grow rounded-lg p-1.5 font-medium md:w-1/2"
                    data-state="{panelSelected === 'preview' ? 'checked' : 'unchecked'}"
                    on:click={() => updateSelection('preview')} role="radio"
                    tabindex="-1"
                    type="button"
                    value="preview">Preview
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
                            <CustomInput
                                    bind:value={courseName}
                                    label="Course Name"
                                    name="courseName"
                                    onFocusCallback={validateCourseNameWrapper}
                                    pattern={"^\\s*([a-zA-Z]{4})[\\s\\-]*(\\d{3,4})\\s*$"}
                                    placeholder="e.g MATH 205"
                            />

                            <CustomInput
                                    bind:value={courseLink}
                                    label="Whatsapp link"
                                    name="whatsappGroupLink"
                                    onInvalidCallback={validateWhatsappLinkWrapper}
                                    pattern="^https://chat.whatsapp.com/.*"
                                    placeholder="link to your whatsapp group"
                            />

                            <div class="mb-6">
                                <div class="mb-1.5 flex items-center">
                                    <label class="block font-medium" for="comment">Comment</label>
                                </div>
                                <div class="relative">
                                <textarea
                                        class="w-full text-sm overflow-visible rounded-lg focus:border-[#3898ec] outline-none border-2 bg-transparent px-3 py-2 h-32 resize-none"
                                        name="comment"
                                        placeholder="Any thing you want to point out?"
                                        rows="8"
                                ></textarea>
                                </div>
                            </div>

                            <CustomInput
                                    bind:value={followUpNumber}
                                    label="Whatsapp number (international format)"
                                    name="followupNumber"
                                    onInvalidCallback={validatePhoneNumberWrapper}
                                    pattern={"^((\\+)?[1-9]{1,3})?([\\-\\s\\.])?((\\(\\d{1,4}\\))|\\d{1,4})(([\\-\\s\\.])?[0-9]{1,12}){1,2}$"}
                                    placeholder="e.g +1 438 589 4367"
                            />

                            <div class="mb-6">
                                <div class="mb-1.5 flex items-center">Acceptance Criteria</div>
                                <div class="flex flex-col gap-4">
                                    <div class="rounded-lg text-gray-500">
                                        You must follow the specification for the whatsapp group as shown in the
                                        preview,
                                        <a class="text-blue-500 animate-pulse" download="group-icon"
                                           href="/concordia-logo.png">click here</a> to download the group icon
                                    </div>
                                </div>
                            </div>

                            <!--div class="mb-6">
                                <div class="mb-1.5 flex items-center">
                                    <div class="block font-medium">
                                        Do you want to receive a whatsapp follow up?
                                    </div>
                                    <div class="flex flex-row mx-2">
                                        <label class="ml-1 cursor-pointer">
                                            <input
                                                    bind:group={followUp} class="cursor-pointer"
                                                    id="followup" name="followup" type="radio"
                                                    value={true}> Yes
                                        </label>
                                        <label class="ml-2 cursor-pointer">
                                            <input
                                                    bind:group={followUp} class="cursor-pointer"
                                                    id="followup" name="followup" type="radio"
                                                    value={false}> No
                                        </label>
                                    </div>
                                </div>
                            </div-->

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
                        <div class="flex h-full flex-col" role="presentation" tabindex="-1">
                            <div class="flex-1 overflow-hidden">
                                <div class="relative h-full w-full">
                                    <div class="absolute left-0 top-0 h-full w-full">
                                        <div class="flex h-full flex-col items-center justify-center">
                                            <div class="relative">
                                                <div class="mb-3 h-[82px] w-[82px]">
                                                    <div class="relative flex h-full items-center justify-center rounded-full bg-white text-black">
                                                        <img alt="concordia logo" src="/concordia-logo.png">
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
    <!------------------------Panels End----------------------------->

</form>