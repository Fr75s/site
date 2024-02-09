<script lang=ts>
    import { onMount } from "svelte";
    
    import ProjectList, { tagData } from "../components/ProjectList.svelte";
    import { projectData } from "../data/projectData";
    
    // Get list of all tags
    const tagList = [...Object.keys(tagData)];

    let tagFilter: string = "";

    // Variable which is only true if JavaScript enabled
    let showOnJS: boolean = false;

    onMount(() => {
        showOnJS = true;
    });
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<!-- Header -->
<div class="h-24" />

<h1
    class="mt-6 mb-4 text-center font-display font-bold text-4xl text-planet-900 dark:text-planet-100"
>
    Projects
</h1>

<!-- Page description -->
<p class="mx-auto p-4 text-justify max-w-prose text-planet-900 dark:text-planet-100">
    Here is some of the stuff that I've made over the years. Some of it is large projects that I've
    worked on for quite a while, others are smaller things that I may have made over a short period.
</p>


<!-- Filtering -->
{#if showOnJS}
<h1 class="my-2 text-center font-display font-bold text-2xl text-planet-900 dark:text-planet-100">
    Filter
</h1>

<!-- Filter buttons (automatically created for each tag) -->
<div class="max-w-7xl mx-auto flex justify-center gap-2">
    {#each tagList as tag}
        <button
            aria-label="Filter to {tag} only"
            class="block align-middle py-2 px-5 rounded-full font-bold text-sm text-planet-900 drop-shadow-md border transition-colors 
            {tagFilter == tag ? 'border-planet-900 dark:border-planet-100' : 'border-planet-900/0 dark:border-planet-100/0'}"
            style="background-color: {tagData[tag].color}"
            on:click={() => {
                if (tagFilter == tag) {
                    tagFilter = "";
                } else {
                    tagFilter = tag;
                }
            }}
        >
            {tag}
        </button>
    {/each}
</div>
{/if}

<!-- All projects -->
<ProjectList 
    {projectData}
    filter={tagFilter}
/>