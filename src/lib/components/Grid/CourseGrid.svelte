<script lang="ts">
    import CourseCard from "$lib/components/Card/CourseCard.svelte";
    import type {Course} from "$lib/types";

    export let courses:Course[] = [];
</script>

<ul class="mx-auto grid max-w-[1600px] grid-cols-12 gap-4 px-8">
    {#each courses as course}
        <CourseCard
                href={course.whatsappLink}
                imageSrc="/groups.webp"
                altText={course.title}
                title="{course.subject} {course.catalog} - {course.title}"
                description={course.description}
        />
    {/each}
</ul>