<script lang="ts">
    import {typing} from "$lib/actions";

    export let label: string = '';
    export let placeholder: string = '';
    export let pattern: string;
    export let name: string;
    export let required: boolean = true;
    export let value: string = '';
    export let show: boolean = true;
    export let isUserTyping: boolean = false;

    // Styling props
    export let baseClass = "w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none border-2 bg-transparent";
    export let validClass: string = "border-green-400";
    export let invalidClass: string = "border-red-700";
    export let onBlurCallback = () => {};
    export let onInvalidCallback = () => {};
    export let onFocusCallback = () => {};

    $: isValid = new RegExp(pattern).test(value);

    function updateTypingStatus(isTyping: boolean) {
        isUserTyping = isTyping;
    }
</script>

<div class="mb-6 {show ? '' : 'hidden'}">
    <div class="mb-1.5 flex items-center">
        <label class="block font-medium" for={name}>
            {label}
            {#if required}
                <span class='text-red-500'>*</span>
            {/if}
        </label>
    </div>
    <input
            id={name}
            placeholder={placeholder}
            class={`${baseClass} ${isValid ? '' : 'focus:' + invalidClass} ${isValid ? validClass : value ? invalidClass : 'border-gray-800'}`}
            name={name}
            pattern={pattern}
            bind:value={value}
            required={required ? 'required' : ''}
            class:focus:border-yellow-300={isUserTyping === true}
            use:typing={updateTypingStatus}
            on:blur={onBlurCallback}
            on:invalid={onInvalidCallback}
            on:focus={onFocusCallback}
    >
</div>

