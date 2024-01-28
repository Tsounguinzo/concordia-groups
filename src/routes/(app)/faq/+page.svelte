<script lang="ts">
    import {header} from "$lib/stores";
    import source from "$lib/data/faq.md?raw";
    import {MarkDown} from "$lib";

    header.set({title: 'Frequently asked questions', subtitle: 'Some questions, some answers'})
</script>

<MarkDown {source}/>