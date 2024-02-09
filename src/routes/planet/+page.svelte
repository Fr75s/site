<script>
    import { fly } from 'svelte/transition';

    import Block from '../components/Block.svelte';

    import { colorData } from '../data/colorData';

    const copiedNotif = new Array(colorData.length);
</script>

<svelte:head>
	<title>Planet Colorscheme</title>
</svelte:head>

<!-- Header -->
<div class="h-24" />

<h1
    class="mt-6 mb-4 text-center font-display font-bold text-4xl text-planet-900 dark:text-planet-100"
>
    The 
    <picture>
        <source srcset="/img/planet_icon.svg" media="(prefers-color-scheme: dark)">
            <img
            class="w-28 mb-2 inline align-middle"
            src="/img/planet_icon_dark.svg"
            alt="Planet Colorscheme logo, identical to the Planet pquirrel logo"
        />
    </picture>
    planet colorscheme
</h1>

<!-- Page description -->
<p class="mx-auto p-4 text-justify max-w-prose text-planet-900 dark:text-planet-100">
Planet is a colorscheme which I personally use for most of my projects.
It is a colorscheme that has proven to work well for the creative projects I've done in the past few years.
It intends to be a set of colors which can be used on their own, but also modified to create something unique.
</p>

<!-- Color table -->
<Block>
    <div class="w-full">
        <h2 class="font-bold text-xl text-center text-planet-900 dark:text-planet-100">
            Full Color List
        </h2>
        <table class="mt-4 w-full table-auto">
            <thead class="border-b border-planet-600 text-planet-800 dark:text-planet-200">
                <tr>
                    <th class="p-2">Color</th>
                    <th class="p-2">Hex Code</th>
                    <th class="p-2">HSV</th>
                </tr>
            </thead>
            <tbody class="text-sm sm:text-md text-planet-700 dark:text-planet-300">
                <!-- Color rows -->
                {#each colorData as color, i}
                    <tr
                        class="border-b border-planet-400 dark:border-planet-700 {i % 2 == 0 ? 'bg-planet-300/35' : ''}"
                        class:dark:bg-planet-850={i % 2 == 0}
                    >
                        <!-- Color name and indicator -->
                        <td class="p-4 flex flex-row items-center">
                            <!-- Color indicator -->
                            <div 
                                class="h-6 w-6 mx-auto sm:mx-0 rounded-full border border-planet-600"
                                style="background: {color.hex}"
                            />
                            <span class="hidden sm:block ml-2">
                                {color.name}
                            </span>
                        </td>
                        <!-- Color Hex Code -->
                        <td class="p-4">
                            <!-- Copy on click -->
                            <button 
                                aria-label="Copy to Clipboard"
                                on:click={() => {
                                    if ('clipboard' in navigator) {
                                        navigator.clipboard.writeText(color.hex);
                                        copiedNotif[i] = 1;
                                        setTimeout(() => {
                                            copiedNotif[i] = 0;
                                        }, 1000)
                                    }
                                }}
                            >
                                {color.hex}
                                <!-- Copied alert text -->
                                {#if copiedNotif[i]}
                                    <span 
                                        class="text-sm block"
                                        transition:fly={{
                                            y: 10,
                                            duration: 250
                                        }}
                                    >
                                        copied!
                                    </span>
                                {/if}
                            </button>
                        </td>
                        <!-- Color HSV values -->
                        <td class="p-4">
                            {color.hsv}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Block>