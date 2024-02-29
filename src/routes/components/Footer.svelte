<script>
    import Git from "../img/footer/Git.svelte";
    import Mastodon from "../img/footer/Mastodon.svelte";
    import Itch from "../img/footer/Itch.svelte";

    import { navinfo } from "./Navigation.svelte";

    // Define the icons for external links
    // The actual icons are stored in svelte components (for easy styling)
    const icons = [
        { 
            component: Git, 
            link: "https://github.com/fr75s" 
        },
        { 
            component: Mastodon, 
            link: "https://wetdry.world/@pquirrel",
            rel: "me"
        },
        { 
            component: Itch, 
            link: "https://fr75s.itch.io" 
        }
    ];
</script>

<!-- Footer container -->
<div class="p-4 mt-10 backdrop-blur bg-planet-400/40 dark:bg-planet-850/40 border-t border-planet-600/40">
    <div class="flex justify-between items-center mx-auto max-w-7xl min-h-16">
        <!-- Footer left side -->
        <div class="flex flex-col sm:flex-row sm:items-center">
            <!-- Copyright Text -->
            <p class="text-md text-planet-900 dark:text-planet-100 sm:ml-2">
                © 2024 pquirrel
                <br>
                <a class="underline" href="https://github.com/Fr75s/site">
                    Source Code
                </a>
            </p>
            <!-- Footer navigation -->
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
        
        <!-- Footer right side -->
        <div class="flex flex-wrap sm:mr-2">
            <!-- External link icons -->
            {#each icons as icon}
                <a
                    class="p-1 sm:p-2 ml-2 rounded-full transition-colors hover:bg-planet-800/10 dark:hover:bg-planet-800"
                    href={icon.link}
                    rel={icon?.rel}
                >
                    <svelte:component this={icon.component}
                        class="h-6 sm:h-8 text-planet-900 dark:text-planet-100"
                    />
                </a>
            {/each}
        </div>
    </div>
</div>