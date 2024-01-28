<script>
    import CategoryCard from "$lib/components/Card/CategoryCard.svelte";

    export let categories = [];
</script>

<ul class="mx-auto grid max-w-7xl grid-cols-12 gap-4 px-8">
  {#each categories as category}
    <CategoryCard
      href={category.href}
      imageSrc={category.imageSrc}
      altText={category.altText}
      title={category.title}
      description={category.description}
    />
  {/each}
</ul>
