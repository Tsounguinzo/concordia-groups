<script>
    import {Svg} from "$lib";
</script>

<a class="border-2 rounded-full absolute top-1/3 left-[10%] cursor-pointer w-[5em] h-[5em] flex flex-col justify-center items-center hover:animate-ping"
   href="/" on:click={() => history.back()}>
    <Svg size={30} svgContent="<path d='M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z'></path>"/>
</a>