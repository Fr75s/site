import { LinkTag } from "../components/LinkList.svelte"

export const linkData = [
    {
        displayName: "Guide: Flash Games on Steam Deck",
        href: "https://lemmy.world/post/918605",
        desc: `
            Self explanatory. Learn how to do some quality gaming on your steam deck.
        `,
        mine: true,
        starred: true,
        tags: [
            LinkTag.GUIDE,
            LinkTag.GAMING
        ]
    },
    {
        displayName: "3DS Theme Plaza",
        href: "https://themeplaza.art/themes",
        desc: `
            Get themes for your hacked 3DS
        `,
        mine: false,
        starred: true,
        tags: [
            LinkTag.GAMING,
            LinkTag.ART
        ]
    },
    {
        displayName: "Tic-80",
        href: "https://tic80.com/",
        desc: `
            Make and play retro-style games (I even made some)
        `,
        mine: false,
        starred: true,
        tags: [
            LinkTag.GAMING,
            LinkTag.CREATIVE
        ]
    },
    {
        displayName: "Sploder Revival",
        href: "https://github.com/Sploder-Saptarshi/Sploder-Launcher",
        desc: `
            A way to play games from the criminally underrated sploder today.
        `,
        mine: false,
        starred: true,
        tags: [
            LinkTag.GAMING,
            LinkTag.CREATIVE
        ]
    },
    {
        displayName: "Kenney Assets",
        href: "https://kenney.nl/assets",
        desc: `
            Free Game assets (I use this for audio)
        `,
        mine: false,
        starred: true,
        tags: [
            LinkTag.GAMING,
            LinkTag.ART
        ]
    },
    {
        displayName: "The Cutting Room Floor",
        href: "https://tcrf.net/The_Cutting_Room_Floor",
        desc: `
            Wiki for unused stuff in games
        `,
        mine: false,
        starred: true,
        tags: [
            LinkTag.GAMING,
        ]
    },
    {
        displayName: "My Itch Page",
        href: "https://fr75s.itch.io/",
        desc: `
            A few games I've made, free to play
        `,
        mine: true,
        starred: false,
        tags: [
            LinkTag.GAMING
        ]
    },
    {
        displayName: "GDBrowser",
        href: "https://gdbrowser.com",
        desc: `
            Browse Geometry Dash online.
        `,
        mine: false,
        starred: false,
        tags: [
            LinkTag.GAMING,
            LinkTag.UTILITY
        ]
    },
    {
        displayName: "nightTab",
        href: "https://github.com/zombieFox/nightTab",
        desc: `
            Clean looking new tab page
        `,
        mine: false,
        starred: false,
        tags: [
            LinkTag.CREATIVE
        ]
    },
    {
        displayName: "LibRedirect",
        href: "https://libredirect.github.io/",
        desc: `
            Redirect to private frontends from data/privacy-unfriendly sites
        `,
        mine: false,
        starred: false,
        tags: [
            LinkTag.UTILITY
        ]
    },
    {
        displayName: "FastForward",
        href: "https://fastforward.team/",
        desc: `
            Skip link shorteners (even ones full of ads)
        `,
        mine: false,
        starred: false,
        tags: [
            LinkTag.UTILITY
        ]
    },
    {
        displayName: "Ice Age 2: The Meltdown for Game Boy Advance dangling from a string",
        href: "https://iceage2themeltdownforgameboyadvancedanglingfromastring.com/",
        desc: `
            It's Ice Age 2: The Meltdown for Game Boy Advance dangling from a string!
        `,
        mine: false,
        starred: false,
        tags: [
            LinkTag.FUNNY
        ]
    },
]