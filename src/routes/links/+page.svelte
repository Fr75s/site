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

<div class="flex flex-wrap justify-center">
    <a href="/">
        <img 
            src="/img/content/88x31.png"
            alt="Retro style 88 by 31 Planet pquirrel link button"
            width="88"
            height="31"
        />
    </a>
</div>