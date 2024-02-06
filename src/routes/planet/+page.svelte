<script>
    import { fly } from 'svelte/transition';

    import Block from '../components/Block.svelte';

    const colorData = [
        {
            name: "Mid Blue",
            hex: "#404970",
            hsv: "229, 43, 44"
        },
        {
            name: "Dark Blue-Gray",
            hex: "#191c29",
            hsv: "226, 39, 16"
        },
        {
            name: "Deep Blue-Gray",
            hex: "#080c19",
            hsv: "226, 68, 10"
        },
        {
            name: "Deep Gray",
            hex: "#16171a",
            hsv: "225, 15, 10"
        },
        {
            name: "Dark Gray",
            hex: "#26282d",
            hsv: "223, 16, 18"
        },
        {
            name: "Rock Gray",
            hex: "#31333a",
            hsv: "227, 16, 23"
        },
        {
            name: "Mid Gray",
            hex: "#474954",
            hsv: "231, 15, 33"
        },
        {
            name: "Mid Light Gray",
            hex: "#595c69",
            hsv: "229, 15, 41"
        },
        {
            name: "Mid Bright Gray",
            hex: "#696d7c",
            hsv: "227, 15, 49"
        },
        {
            name: "Silver",
            hex: "#7c7f8e",
            hsv: "230, 13, 56"
        },
        {
            name: "Light Gray",
            hex: "#9a9ba1",
            hsv: "231, 4, 63"
        },
        {
            name: "Bright Gray",
            hex: "#bdc0c7",
            hsv: "222, 5, 78"
        },
        {
            name: "Blue White",
            hex: "#f2f6ff",
            hsv: "222, 5, 100"
        },
        {
            name: "Bright Blue",
            hex: "#deeaff",
            hsv: "222, 13, 100"
        },
        {
            name: "Light Blue",
            hex: "#bdd5ff",
            hsv: "222, 26, 100"
        },
        {
            name: "Blue",
            hex: "#74aaff",
            hsv: "222, 55, 100"
        },
        {
            name: "Deep Blue",
            hex: "#5a8eff",
            hsv: "221, 65, 100"
        },
        {
            name: "Blurple",
            hex: "#7474ff",
            hsv: "240, 55, 100"
        },
        {
            name: "Purple",
            hex: "#aa74ff",
            hsv: "263, 55, 100"
        },
        {
            name: "Pink",
            hex: "#ff74aa",
            hsv: "337, 55, 100"
        },
        {
            name: "Rose",
            hex: "#f7597b",
            hsv: "347, 64, 97"
        },
        {
            name: "Red",
            hex: "#ff7474",
            hsv: "0, 55, 100"
        },
        {
            name: "Orange",
            hex: "#ffaa74",
            hsv: "23, 55, 100"
        },
        {
            name: "Yellow",
            hex: "#ffe878",
            hsv: "50, 53, 100"
        },
        {
            name: "Lime",
            hex: "#aaff74",
            hsv: "97, 55, 100"
        },
        {
            name: "Green",
            hex: "#74ff74",
            hsv: "120, 55, 100"
        },
        {
            name: "Neon Green",
            hex: "#74ffaf",
            hsv: "145, 55, 100"
        },
    ];

    const copiedNotif = new Array(colorData.length);
</script>

<svelte:head>
	<title>Planet Colorscheme</title>
</svelte:head>

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

<p class="mx-auto p-4 text-justify max-w-prose text-planet-900 dark:text-planet-100">
Planet is a colorscheme which I personally use for most of my projects.
It is a colorscheme that has proven to work well for the creative projects I've done in the past few years.
It intends to be a set of colors which can be used on their own, but also modified to create something unique.
</p>

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
                {#each colorData as color, i}
                    <tr
                        class="border-b border-planet-400 dark:border-planet-700 {i % 2 == 0 ? 'bg-planet-300/35' : ''}"
                        class:dark:bg-planet-850={i % 2 == 0}
                    >
                        <td class="p-4 flex flex-row items-center">
                            <div 
                                class="h-6 w-6 mx-auto sm:mx-0 rounded-full border border-planet-600"
                                style="background: {color.hex}"
                            />
                            <span class="hidden sm:block ml-2">
                                {color.name}
                            </span>
                        </td>
                        <td class="p-4">
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
                        <td class="p-4">
                            {color.hsv}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Block>