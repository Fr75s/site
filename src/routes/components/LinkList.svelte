<script lang=ts>
    import Link from "../img/links/Link.svelte";
    import Crown from "../img/links/Crown.svelte";
    import Star from "../img/links/Star.svelte";

    interface Link {
        displayName: string;
        href: string;
        desc: string;
        mine: boolean;
        starred: boolean;
        tags: Array<LinkTag>;
    }

    type LinkData = Array<Link>;

    export let linkData: LinkData;
    export let filter: LinkTag = LinkTag.NONE;
</script>

<!-- Tag Data for Links -->
<script context="module" lang=ts>
    export enum LinkTag {
        NONE = "",
        GUIDE = "guide",
        FUNNY = "funny",
        GAMING = "gaming",
        CREATIVE = "creative",
        ART = "art",
        UTILITY = "utility",
        MISC = "misc.",
    }

    const tagAttributes = {
        "": {
            color: "#000000"
        },
        "guide": {
            color: "#74aaff"
        },
        "funny": {
            color: "#ffaa74"
        },
        "gaming": {
            color: "#74ffaf"
        },
        "creative": {
            color: "#aa74ff"
        },
        "art": {
            color: "#f7597b"
        },
        "utility": {
            color: "#7c7f8e"
        },
        "misc.": {
            color: "#aaff74"
        }
    }
</script>

<!-- Link grid container -->
<div 
    class="mx-auto max-w-7xl sm:grid sm:auto-rows-max sm:grid-cols-2 lg:grid-cols-3"
>
    {#each linkData as link}
    <!-- Link container -->
    <div
        class="m-4 p-4 drop-shadow-md rounded-md flex flex-col sm:flex-row justify-between items-center 
        transition-colors bg-planet-300/40 hover:bg-planet-200/40 dark:bg-planet-850/40 
        dark:hover:bg-planet-700/40 border border-planet-600/40"
        class:hidden={(!link.tags.includes(filter) && filter !== LinkTag.NONE)}
    >
        <a
            class="w-full h-full"
            href={link.href}
            target="_blank"
        >
            <!-- Link header -->
            <div class="flex flex-row items-center">
                {#if link.mine}
                    <Crown class="w-4 h-4 mr-2 text-blurple" />
                {/if}
                {#if link.starred}
                    <Star class="w-4 h-4 mr-2 text-blue" />
                {/if}
                <h3 class="font-display font-semibold text-xl text-planet-900 dark:text-planet-100">
                    {link.displayName}
                </h3>
            </div>
            <!-- URL -->
            <div class="flex flex-row items-center mb-2">
                <Link class="w-6 mr-2 text-planet-800 dark:text-planet-200"/>
                <p 
                    class="w-5/6 underline shrink-0 text-ellipsis text-planet-800 dark:text-planet-200"
                    style="overflow-wrap: break-word;"
                >
                    {link.href}
                </p>
            </div>
            <!-- Link Tags -->
            {#each link.tags as tag}
                <span
                    class="inline-block align-middle mr-2 py-1 px-3 rounded-full drop-shadow-md font-bold text-xs text-planet-900"
                    style="background-color: {tagAttributes[tag].color}"
                >
                    {tag}
                </span>
            {/each}
            <!-- Short Description -->
            <p class="mt-2 text-sm text-planet-800 dark:text-planet-200">
                {link.desc}
            </p>
        </a>
    </div>
    {/each}
</div>