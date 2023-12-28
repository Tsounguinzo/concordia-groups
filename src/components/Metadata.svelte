<script lang="ts">
    import {siteConfig} from "$lib/config/site";
    export let title: string = siteConfig.name;

</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={siteConfig.description}/>
    <meta name="keywords" content={siteConfig.keywords}/>
    <meta name="author" content="Beaudelaire Tsoungui Nzodoumkouo"/>
    <meta name="whatsapp:card" content="summary_large_image"/>
    <meta name="whatsapp:site" content={siteConfig.url}/>
    <meta name="whatsapp:title" content={title}/>
    <meta name="whatsapp:description" content={siteConfig.description}/>
    <meta name="whatsapp:image" content={siteConfig.ogImage}/>
    <meta name="whatsapp:image:alt" content={siteConfig.name}/>
    <meta name="whatsapp:creator" content="Beaudelaire Tsoungui Nzodoumkouo"/>
    <meta name="discord:card" content="summary_large_image"/>
    <meta name="discord:site" content={siteConfig.url}/>
    <meta name="discord:title" content={title}/>
    <meta name="discord:description" content={siteConfig.description}/>
    <meta name="discord:image" content={siteConfig.ogImage}/>
    <meta name="discord:image:alt" content={siteConfig.name}/>
    <meta name="discord:creator" content="Beaudelaire Tsoungui Nzodoumkouo"/>
    <meta property="og:title" content={title}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content={siteConfig.url}/>
    <meta property="og:image" content={siteConfig.ogImage}/>
    <meta property="og:image:alt" content={siteConfig.name}/>
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="630"/>
    <meta property="og:description" content={siteConfig.description}/>
    <meta property="og:site_name" content={siteConfig.name}/>
    <meta property="og:locale" content="EN_US"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
</svelte:head>