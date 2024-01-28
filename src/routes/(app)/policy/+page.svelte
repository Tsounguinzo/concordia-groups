<script lang="ts">
    import {header} from "$lib/stores";
    import source from "$lib/data/policy.md?raw";
    import {MarkDown} from "$lib";

    header.set({title: 'Policy', subtitle: 'A statement about our policy'})
</script>

<MarkDown {source}/>