<script lang="ts">
    import {header} from "$lib/stores";
    import {MarkDown} from "$lib";
    import posts from "$lib/data/posts.json";
    import {page} from "$app/stores";
    import {error} from "@sveltejs/kit";

    let source;

    function post(nameToCheck: string) {
        return posts.find(post => post.name === nameToCheck);
    }

    const postName = $page.params.post;
    let postObj = post(postName);

    if (!postObj) {
        error(404, {
            message: 'Post Not found'
        });
    } else {
        header.set({title: `${postObj.title}`, subtitle: `${postObj.subtitle}`, gradient: `${postObj.gradient}`});
    }

</script>

<!--MarkDown source={source}/-->