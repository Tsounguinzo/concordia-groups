<script lang="ts">
    import {header} from "$lib/stores";
    import {CategoriesGrid} from "$lib";
    import categories from "$lib/data/category.json"
    header.set({title: 'Categories', subtitle: 'Browse by category'})
</script>

<CategoriesGrid {categories}/>