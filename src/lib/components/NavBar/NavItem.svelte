<script lang="ts">
    export let href: string;
    export let ariaLabel: string;
    export let label: string;
    export let footer: boolean = false;
</script>

<a aria-label={ariaLabel}
   href={href}
   class="{footer ? 'h-32 w-full space-y-3 rounded-lg ring-gray-8 transition duration-100 hover:text-gray-300' : 'min-h-[36px] min-w-[36px] space-y-1 rounded-md overflow-hidden p-2 text-lg'} group m-2 flex flex-col items-center"
   {...$$restProps}
>
    <span class="{footer ? 'group-hover:translate-y-3 group-hover:scale-125' : 'group-hover:-translate-y-1 group-hover:opacity-0'} text-[20px] transition duration-300">
        <slot/>
    </span>
    <span class="transition {footer ? 'text-center duration-500 ease-in-out group-hover:translate-y-3 group-hover:scale-90 group-hover:opacity-0' : 'text-gray-100 absolute translate-y-1 transform text-sm opacity-0 delay-75 duration-300 ease-out group-hover:-translate-y-1 group-hover:opacity-100'}">
        {label}
    </span>
</a>
