<script lang="ts">
    import {onMount} from "svelte";
    import {validateCourseName, validateDiscordLink, validatePhoneNumber, validateWhatsappLink} from "$lib/validators";

    import Input from "$lib/components/Input.svelte";
    import SubmissionModel from "$lib/components/common/SubmissionModel.svelte";
    import Copy from "$lib/components/common/Copy.svelte";
    import Svg from "$lib/components/Svg.svelte";

    let panelSelected: string = 'group-info';

    let showSubmissionMessage: boolean = false;
    let platformChosen: string = 'whatsapp';

    let courseName: string = '';
    let courseWhatsappLink: string = '';
    let courseDiscordLink: string = '';
    let followUpNumber: string = '';
    let courseNameElement: HTMLElement | null;
    let courseWhatsappLinkElement: HTMLElement | null;
    let courseDiscordLinkElement: HTMLElement | null;
    let whatsappNumberElement: HTMLElement | null;

    export let form;

    function updateSelection(value: string) {
        panelSelected = value;
    }

    function validatePhoneNumberWrapper() {
        validatePhoneNumber(whatsappNumberElement);
    }

    function validateWhatsappLinkWrapper() {
        validateWhatsappLink(courseWhatsappLinkElement);
    }

    function validateDiscordLinkWrapper() {
        validateDiscordLink(courseDiscordLinkElement);
    }

    function validateCourseNameWrapper() {
        validateCourseName(courseName, courseNameElement);
    }

    onMount(() => {
        whatsappNumberElement = document.getElementById('followupNumber');
        courseNameElement = document.getElementById('courseName');
        courseWhatsappLinkElement = document.getElementById('whatsappGroupLink');
        courseDiscordLinkElement = document.getElementById('discordGroupLink');

        const savedPopupVisibility = window.localStorage.getItem('popupVisible');
        showSubmissionMessage = savedPopupVisibility === 'true';
        window.localStorage.removeItem('popupVisible');
    })

</script>

{#if showSubmissionMessage}
    <SubmissionModel bind:show={showSubmissionMessage}>
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
    </SubmissionModel>

{/if}

<form aria-label="add-group" class="flex w-full flex-col text-white" data-name="add-group" id="form-add-group"
      method="POST" name="form-group" on:submit={() => window.localStorage.setItem('popupVisible', 'true')}>

    <!------------------------Header start----------------------------->
    <div class="flex w-full justify-between py-4 px-4 border-b-4 border-b-gray-800 ">
        <a class="flex items-center group" href="/">
            <Svg size={24} stroke={true} class="duration-500 group-hover:-translate-x-2">
                <path d="M15 5L8 12L15 19"></path>
            </Svg>
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
        <div class="flex flex-col px-2 w-full justify-center pt-4 md:w-1/2 {panelSelected === 'preview' ? 'max-md:hidden' : ''}">

            <!-- Course info panel title-->
            <h2 class="max-md:hidden mb-4 text-lg font-medium text-center py-1">
                Group Info
            </h2>

            <!-- Course info panel content-->
            <div class="flex h-full grow flex-col overflow-y-auto px-2 pt-2 text-sm">
                <div class="grow">

                    <div class="mb-6">
                        <div class="mb-1.5 flex items-center">
                                    <span class="font-medium">
                                        On which platform is your group <span class='text-red-500'>*</span>
                                    </span>
                        </div>

                        <div class="flex flex-row gap-3 p-2">
                            <input type="radio" name="platform" value="whatsapp" id="whatsapp" class="hidden"
                                   checked required bind:group={platformChosen}/>
                            <label class="{platformChosen === 'whatsapp' ? 'border-[#25d366] text-[#25d366]' : 'border-gray-800 text-gray-100'} hover:text-[#25d366] hover:border-[#25d366] w-1/3 flex flex-col items-stretch h-24 justify-between p-3 border-2 rounded-md transition-colors duration-300 ease-in-out overflow-hidden cursor-pointer"
                                   for="whatsapp">
                                <Svg size={18}>
                                    <path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"></path>
                                </Svg>
                                Whatsapp
                            </label>

                            <input type="radio" name="platform" value="discord" id="discord" class="hidden"
                                   required bind:group={platformChosen}/>
                            <label class="{platformChosen === 'discord' ? 'border-[#7289da] text-[#7289da]' : 'border-gray-800 text-gray-100'} hover:text-[#7289da] hover:border-[#7289da] w-1/3 flex flex-col items-stretch h-24 justify-between p-3 border-2 rounded-md transition-colors duration-300 ease-in-out overflow-hidden cursor-pointer"
                                   for="discord">
                                <Svg size={18}>
                                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                                </Svg>
                                Discord
                            </label>

                            <input type="radio" name="platform" value="both" id="both" class="hidden" required
                                   bind:group={platformChosen}/>
                            <label class="w-1/3 group bg-gradient-to-bl from-[#25d366] to-[#7289da] rounded-md cursor-pointer"
                                   for="both">
                                <div class="{platformChosen === 'both' ? 'border-transparent' : 'border-gray-800'} group-hover:border-transparent text-gray-100 border-2 rounded-md overflow-hidden transition-colors duration-300 ease-in-out">
                                    <div class="flex flex-col items-stretch h-[93px] justify-between p-3 bg-primary">
                                        <Svg size={18} class="{platformChosen === 'both' ? 'text-[#50b7a3]' : ''} group-hover:text-[#50b7a3] transition-colors duration-300 ease-in-out">
                                            <path d="M7.10508 8.78991C7.45179 10.0635 8.61653 11 10 11H14C16.4703 11 18.5222 12.7915 18.9274 15.1461C20.1303 15.5367 21 16.6668 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.7334 15.7849 15.6501 16.8949 15.2101C16.5482 13.9365 15.3835 13 14 13H10C8.87439 13 7.83566 12.6281 7 12.0004V15.1707C8.16519 15.5825 9 16.6938 9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.6938 3.83481 15.5825 5 15.1707V8.82929C3.83481 8.41746 3 7.30622 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6C9 7.26661 8.21506 8.34988 7.10508 8.78991ZM6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7ZM6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19ZM18 19C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17C17.4477 17 17 17.4477 17 18C17 18.5523 17.4477 19 18 19Z"></path>
                                        </Svg>
                                        <p class="{platformChosen === 'both' ? 'text-[#6898ca]' : ''} group-hover:text-[#6898ca] transition-colors duration-300 ease-in-out">
                                            Both
                                        </p>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>

                    <Input
                            bind:value={courseName}
                            label="Course Name"
                            name="courseName"
                            on:focus={validateCourseNameWrapper}
                            on:blur={validateCourseNameWrapper}
                            pattern={"^\\s*([a-zA-Z]{4})[\\s\\-]*(\\d{3,4})\\s*$"}
                            placeholder="e.g MATH 205"
                    />

                    <Input
                            bind:value={courseWhatsappLink}
                            show={platformChosen === 'both' || platformChosen === 'whatsapp'}
                            required={platformChosen === 'both' || platformChosen === 'whatsapp'}
                            label="Whatsapp link"
                            name="whatsappGroupLink"
                            on:invalid={validateWhatsappLinkWrapper}
                            pattern="^https://chat.whatsapp.com/.*"
                            placeholder="link to your whatsapp group"
                    />

                    <Input
                            bind:value={courseDiscordLink}
                            show={platformChosen === 'both' || platformChosen === 'discord'}
                            required={platformChosen === 'both' || platformChosen === 'discord'}
                            label="Discord link"
                            name="discordGroupLink"
                            on:invalid={validateDiscordLinkWrapper}
                            pattern="^https://discord.gg/.*"
                            placeholder="link to your Discord server"
                    />


                    <div class="mb-6">
                        <div class="mb-1.5 flex items-center">
                            <label class="block font-medium" for="comment">Comment</label>
                        </div>
                        <div class="relative">
                                <textarea
                                        class="w-full border-gray-800 text-sm overflow-visible rounded-lg focus:border-[#3898ec] outline-none border-2 bg-transparent px-3 py-2 h-32 resize-none"
                                        name="comment"
                                        placeholder="Any thing you want to point out?"
                                        rows="8"
                                ></textarea>
                        </div>
                    </div>

                    <Input
                            bind:value={followUpNumber}
                            label="Follow-Up WhatsApp Number (+ country Code)"
                            name="followupNumber"
                            on:invalid={validatePhoneNumberWrapper}
                            pattern={"^((\\+)?[1-9]{1,3})?([\\-\\s\\.])?((\\(\\d{1,4}\\))|\\d{1,4})(([\\-\\s\\.])?[0-9]{1,12}){1,2}$"}
                            placeholder="e.g +1 438 589 4367"
                    />

                    <div class="mb-6">
                        <div class="mb-1.5 flex items-center">Acceptance Criteria</div>
                        <div class="flex flex-col gap-4">
                            <div class="rounded-lg text-gray-500">
                                Ensure your WhatsApp and/or Discord group uses the exact icon, name, and
                                description provided in the preview.
                                <a class="text-blue-700 animate-pulse" download="group-icon"
                                   href="/concordia-logo.png">click here</a> to download the group icon
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <!-- Course preview panel-->
        <div class="flex flex-col h-screen px-2 w-full items-center justify-center pt-4 md:w-1/2 md:border-l-4 md:border-l-gray-800 {panelSelected === 'group-info' ? 'max-md:hidden' : ''}">

            <!-- Course review panel title-->
            <h2 class="max-md:hidden mb-2 text-lg text-center font-medium py-1">
                Preview
            </h2>

            <!-- Course review panel content-->
            <div class="flex flex-col items-center justify-center h-full">
                <img alt="concordia logo" src="/concordia-logo.png" class="h-[82px] w-[82px]">
                <div class="flex flex-col max-w-md items-center gap-0 p-2 w-full">
                    {#if courseName}
                        <div class="w-full overflow-hidden text-center text-2xl font-medium text-pretty uppercase">
                            {courseName}
                        </div>
                    {/if}
                    {#if courseWhatsappLink}
                        <Copy description="Whatsapp Group Description" textToCopy="Link 📍{courseWhatsappLink}">
                            Link 📍 <a href="{courseWhatsappLink}" class="text-blue-400"> {courseWhatsappLink} </a>
                        </Copy>
                    {/if}
                    {#if courseDiscordLink}
                        <Copy description="Discord Group Description" textToCopy="Link 📍{courseDiscordLink}">
                            Link 📍 <a href="{courseDiscordLink}" class="text-blue-400"> {courseDiscordLink} </a>
                        </Copy>
                    {/if}
                </div>
            </div>

        </div>
    </div>
    <!------------------------Panels End----------------------------->

</form>