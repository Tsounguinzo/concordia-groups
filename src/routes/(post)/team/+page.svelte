<script lang="ts">
    import source from "$lib/data/team.md?raw";
    import {header} from "$lib/stores";
    import {MarkDown} from "$lib";

    header.set({title: "The Study Hub Club's Dream Team", subtitle: "How the Passion for Learning Meets the Power of Collaboration", gradient: '-45deg, #e33e24, #05080a, #f5e13b, #cc0a27'})
</script>

<MarkDown {source}/>