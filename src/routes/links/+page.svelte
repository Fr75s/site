<script lang=ts>
    import LinkList, { LinkTag } from "../components/LinkList.svelte";
    import { linkData } from "../data/linkData";

    import Crown from "../img/links/Crown.svelte";
    import Star from "../img/links/Star.svelte";
</script>

<svelte:head>
	<title>Links</title>
</svelte:head>

<!-- Header -->
<div class="h-24" />

<h1
    class="mt-6 mb-4 text-center font-display font-bold text-4xl text-planet-900 dark:text-planet-100"
>
    Links
</h1>

<!-- Page description -->
<p class="mx-auto p-4 text-justify max-w-prose text-planet-900 dark:text-planet-100">
    Here is a collection of cool links. Some of these are my own content (they are marked), others
    are just some stuff I've found on the web.
    <br class="mb-2">
    Links with a crown (<Crown class="inline h-4 text-blurple" />) link to content made by me.
    Links with a star (<Star class="inline h-4 text-blue" />) are links with in-depth content (you can spend a lot of time in it).
</p>

<LinkList 
    {linkData}
/>

<div class="h-8" />

<h1
    class="mb-6 text-center font-display font-bold text-4xl text-planet-900 dark:text-planet-100"
>
    Bonus Links
</h1>

<div class="flex flex-wrap justify-center space-x-2">
    <a href="/">
        <img 
            src="/img/content/retro/88x31.png"
            alt="Retro style Planet pquirrel link button"
            style="image-rendering: pixelated;"
            width="88"
            height="31"
        />
    </a>
    <a href="https://archlinux.org/">
        <img 
            src="/img/content/retro/arch_88x31.png"
            alt="Retro style Archlinux button"
            style="image-rendering: pixelated;"
            width="88"
            height="31"
        />
    </a>
    <a href="https://c.xkcd.com/random/comic/">
        <img 
            src="/img/content/retro/xkcd_88x31.png"
            alt="Retro style XKCD button"
            style="image-rendering: pixelated;"
            width="88"
            height="31"
        />
    </a>
</div>