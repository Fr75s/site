<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    let mobileMenuOpen = false;
    let jsEnabled = false;

    onMount(() => {
        jsEnabled = true;
    })
</script>

<script context="module">
    export const navinfo = [
        {
            name: "home",
            href: "/"
        },
        {
            name: "projects",
            href: "/projects"
        },
        {
            name: "links",
            href: "/links"
        },
        {
            name: "colorscheme",
            href: "/planet"
        }
    ];
</script>

<div class="fixed top-0 left-0 right-0 z-20 p-4 drop-shadow-md backdrop-blur bg-planet-400/40 dark:bg-planet-850/40 border-b border-planet-600/40">
    <!-- Main Navigation Menu -->
    <nav class="flex justify-between mx-auto max-w-7xl">
        <!-- Logo -->
        <div class="flex items-center ml-4">
            <picture>
                <source srcset="/img/planet_icon.svg" media="(prefers-color-scheme: dark)">
                <img
                    class="w-16"
                    src="/img/planet_icon_dark.svg"
                    alt="Planet pquirrel Logo"
                />
            </picture>
            <h1 
                class="sm:block text-3xl font-display text-planet-900 dark:text-planet-100 ml-2 font-bold"
                class:hidden={jsEnabled}
            >
                planet
                <span class="font-light">
                    pquirrel
                </span>
            </h1>
        </div>
        <!-- >=md: Show each option in header bar -->
        <div 
            class="hidden md:flex items-center space-x-4 mr-4"
        >
            {#each navinfo as opts}
                <a 
                    class="text-xl font-medium text-planet-800 dark:text-planet-300 hover:text-planet-500 dark:hover:text-planet-100"
                    href={opts.href}
                >
                    {opts.name}
                </a>
            {/each}
        </div>
        <!-- <md: Show menu button -->
        {#if jsEnabled}
        <div class="flex md:hidden items-center">
            <button
                aria-label="Open navigation menu"
                class="mr-2 rounded p-1 hover:bg-planet-800/20 dark:hover:bg-planet-800"
                on:click={() => mobileMenuOpen = true}
            >
                <img 
                    class="h-10 brightness-0 dark:brightness-100"
                    src="/img/menu.svg"
                    alt="Menu button icon"
                />
            </button>
        </div>
        {/if}
    </nav>

    <!-- Mobile Navigation Menu -->
    {#if mobileMenuOpen}
        <div 
            class="fixed inset-y-0 right-0 z-30 w-full max-w-xl h-dvh drop-shadow-md backdrop-blur-md bg-planet-300/60 dark:bg-planet-850/60 border-l border-planet-600/40" 
            role="dialog"
            aria-modal="true"
            id="mobileNav"
            transition:fly={{
                duration: 400,
                x: 40
            }}
        >
            <div class="flex flex-col justify-between w-full h-full">
                
                <div class="flex items-center justify-end ml-4 p-4">
                    <button
                        aria-label="Exit navigation menu"
                        class="mr-2 mt-2 rounded p-1 hover:bg-planet-800/20 dark:hover:bg-planet-800"
                        on:click={() => mobileMenuOpen = false}
                    >
                        <img 
                            class="h-10 brightness-0 dark:brightness-100"
                            src="/img/exit.svg"
                            alt="Exit icon"
                        />
                    </button>
                </div>

                <div class="flex flex-col-reverse items-center mb-4 p-4">
                    {#each navinfo as opts}
                        <a 
                            class="w-full text-right text-lg p-3 mt-2 text-planet-800 dark:text-planet-200 hover:bg-planet-800/10 dark:hover:bg-planet-800/30 rounded"
                            href={opts.href}
                            on:click={() => mobileMenuOpen = false}
                        >
                            {opts.name}
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    {/if}
</div>