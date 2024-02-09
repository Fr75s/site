<script lang=ts>
    interface Project {
        name: string;
        desc: string;
        image: string;
        link: string;
        tags: Array<string>;
    }

    type ProjectData = Array<Project>;

    export let projectData: ProjectData;
    export let filter: string;
</script>

<!-- Types and tag data for projects -->
<script context="module" lang=ts>
    interface Tag {
        color: string;
    }

    type TagData = {[index: string]: Tag}

    export const tagData: TagData = {
        "software": {
            color: "#74ff74"
        },
        "game": {
            color: "#74aaff"
        },
        "other": {
            color: "#f7597b"
        }
    }
</script>

<!-- Project List container -->
<div 
    class="mx-auto max-w-7xl lg:grid lg:grid-cols-2"
>
    {#each projectData as project (project.name)}
    <!-- Project display, hides if filter isn't in list of tags -->
    <div
        class:hidden={(!project.tags.includes(filter) && filter !== "")}
    >
        <!-- Image background -->
        <div
            class="m-4 min-h-72 drop-shadow-md rounded-md border border-planet-600 bg-cover overflow-hidden"
            style="background-image: url({project.image})"
        >
            <!-- Background gradient and link -->
            <a 
                class="block p-6 min-h-72 bg-gradient-to-b md:bg-gradient-to-r 
                from-planet-200/95 dark:from-planet-850/95 hover:from-planet-100/95 dark:hover:from-planet-700/95 from-60% 
                to-planet-200/70 dark:to-planet-800/70 hover:to-planet-100/70 dark:hover:to-planet-700/70"
                href={project.link}
            >
                <!-- Text container -->
                <div class="text-md max-w-prose lg:w-3/4">
                    <!-- Name -->
                    <h1 class="mb-2 font-bold text-2xl text-planet-900 dark:text-planet-100">
                        {project.name}
                    </h1>
                    <!-- Tags -->
                    {#each project.tags as tag}
                        <span
                            class="inline-block align-middle mb-2 mr-2 py-1 px-3 rounded-full drop-shadow-md font-bold text-xs text-planet-900"
                            style="background-color: {tagData[tag].color}"
                        >
                            {tag}
                        </span>
                    {/each}
                    <!-- Description -->
                    <p class="text-planet-800 dark:text-planet-200">
                        {project.desc}
                    </p>
                </div>
            </a>
        </div>
    </div>
    {/each}
</div>

