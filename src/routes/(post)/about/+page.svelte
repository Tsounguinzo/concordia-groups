<script lang="ts">
    import source from "$lib/data/about.md?raw";
    import {header} from "$lib/stores";
    import {MarkDown} from "$lib";


    header.set({title: 'Why our study groups became a club', subtitle: "Charting the Two-Year Odyssey from discrete Study groups to a Dynamic Club Community", gradient: '-45deg, #C6D1DD, #7CE2FE, #58D5BA, #465052, #2B353D'})
</script>

<MarkDown {source}/>
