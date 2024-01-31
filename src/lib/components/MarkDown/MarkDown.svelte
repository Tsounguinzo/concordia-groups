<script lang="ts">
    import {marked} from "marked";
    export let source: string;
</script>

<div class="mx-auto max-w-2xl space-y-12 px-4 pt-12 lg:px-0">
    <article class="prose prose-lg prose-invert max-w-none prose-code:flex prose-code:flex-col transition-opacity duration-[1000ms] ease-in-out will-change-auto prose-code:[direction:ltr] prose-img:rounded-md prose-img:shadow-md prose-img:mx-auto prose-img:max-h-[clamp(400px,50vh,500px)] opacity-80">
        {@html marked(source)}
    </article>
</div>
