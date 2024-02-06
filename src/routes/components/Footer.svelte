<script>
    import Github from "../img/Github.svelte";
    import Discord from "../img/Discord.svelte";

    import { navinfo } from "./Navigation.svelte";

    const icons = [
        { component: Github, link: "https://github.com/fr75s" },
        { component: Discord, link: "https://discord.gg/DUAFMgrhAY" }
    ];
</script>

<div class="p-4 mt-10 backdrop-blur bg-planet-400/40 dark:bg-planet-850/40 border-t border-planet-600/40">
    <div class="flex justify-between items-center mx-auto max-w-7xl min-h-16">
        <!-- Copyright Text -->
        <div class="flex flex-col sm:flex-row sm:items-center">
            <p class="text-md text-planet-900 dark:text-planet-100 sm:ml-2">
                © 2024 pquirrel
                <br>
                <a href="#">
                    Source Code
                </a>
            </p>
            <div class="flex flex-col flex-wrap max-h-12 mt-2 sm:mt-0">
                {#each navinfo as n}
                    <a
                        class="text-sm text-planet-800 dark:text-planet-200 mr-3 sm:mr-0 sm:ml-3 underline"
                        href={n.href}
                    >
                        {n.name}
                    </a>
                {/each}
            </div>
        </div>
        
        <div class="flex sm:mr-2">
            {#each icons as icon}
                <a
                    class="p-1 sm:p-2 ml-2 rounded-full hover:bg-planet-800/10 dark:hover:bg-planet-800"
                    href={icon.link}
                >
                    <svelte:component this={icon.component}
                        class="h-6 sm:h-8 text-planet-900 dark:text-planet-100"
                    />
                </a>
            {/each}
        </div>
    </div>
</div>