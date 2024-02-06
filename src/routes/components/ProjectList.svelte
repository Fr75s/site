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

<div 
    class="mx-auto max-w-7xl lg:grid lg:grid-cols-2"
>
    {#each projectData as project (project.name)}
    <div
        class:hidden={(!project.tags.includes(filter) && filter !== "")}
    >
        <div
            class="m-4 min-h-72 drop-shadow-md rounded-md border border-planet-600 bg-cover overflow-hidden"
            style="background-image: url({project.image})"
        >
            <a 
                class="block p-6 min-h-72 bg-gradient-to-b md:bg-gradient-to-r from-planet-200/95 dark:from-planet-850/95 from-60% to-planet-200/70 dark:to-planet-800/70"
                href={project.link}
            >
                <div class="text-md max-w-prose lg:w-3/4">
                    <h1 class="mb-2 font-bold text-2xl text-planet-900 dark:text-planet-100">
                        {project.name}
                    </h1>
                    {#each project.tags as tag}
                        <span
                            class="inline-block align-middle mb-2 mr-2 py-1 px-3 rounded-full drop-shadow-md font-bold text-xs text-planet-900"
                            style="background-color: {tagData[tag].color}"
                        >
                            {tag}
                        </span>
                    {/each}
                    <p class="text-planet-800 dark:text-planet-200">
                        {@html project.desc}
                    </p>
                </div>
            </a>
        </div>
    </div>
    {/each}
</div>

