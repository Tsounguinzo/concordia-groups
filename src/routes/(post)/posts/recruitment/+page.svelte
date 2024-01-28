<script lang="ts">
    import {header} from "$lib/stores";
    import {MarkDown} from "$lib";
    import posts from "$lib/data/posts.json";
    import {error} from "@sveltejs/kit";
    import source from "$lib/data/recruitment.md?raw";

    function post(nameToCheck: string) {
        return posts.find(post => post.name === nameToCheck);
    }

    let postObj = post('recruitment');

    if (!postObj) {
        error(404, {
            message: 'Post Not found'
        });
    } else {
        header.set({title: `${postObj.title}`, subtitle: `${postObj.subtitle}`, gradient: `${postObj.gradient}`});
    }

</script>

<MarkDown {source}/>