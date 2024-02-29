<script>
	import Block from './components/Block.svelte';
	import Icon from './img/home/Icon.svelte';
	import DownArrow from './img/home/DownArrow.svelte';
</script>

<svelte:head>
	<title>Planet pquirrel</title>
</svelte:head>

<!-- Cover section -->
<div class="mx-auto max-w-7xl flex h-dvh items-center">
	<Icon 
		class="ml-6 sm:mb-2 h-24 w-24 sm:h-32 sm:w-32 text-planet-900 dark:text-planet-100"
	/>
	<div class="w-full ml-4">
		<h1 class="max-w-60 font-display font-bold pb-2 text-4xl sm:text-6xl bg-gradient-to-r from-blue to-blurple text-transparent bg-clip-text drop-shadow-md dark:drop-shadow-none">
			pquirrel
		</h1>
		<h2 class="sm:mb-2 font-display font-regular text-lg sm:text-2xl text-planet-900 dark:text-planet-100">
			creating random stuff
		</h2>
	</div>
</div>

<!-- Scroll to about (in cover section) -->
<button
	class="absolute block left-0 right-0 mx-auto p-2 bottom-4 w-12 rounded-full text-planet-600 dark:text-planet-400 hover:bg-planet-200 dark:hover:bg-planet-800"
	aria-label="Scroll to about"
	on:click={() => {
		window.scrollTo({
			top: document.getElementById("about")?.offsetTop,
			behavior: 'smooth'
		})
	}}
>
	<DownArrow/>
</button>

<!-- About section -->
<Block id="about">
	<!-- Writing -->
	<div class="text-sm sm:text-md max-w-prose">
		<h1 class="mb-2 font-bold text-xl text-planet-900 dark:text-planet-100">
			About me
		</h1>
		<p class="text-planet-900 dark:text-planet-100">
			I'm pquirrel (formerly Fr75s) and I'm a software developer, but I also happen to be able to do a whole lot more.
			I create software, games, art, and more; if it is created on a computer, I've probably dabbled or considered dabbling in it.
			<br class="mb-2">
			I am a chronic Geometry Dash player, though I also like to play Levelhead, Hollow Knight and Celeste.
			<br class="mb-2">
			By the way, I am a big Quirrel fan.
		</p>
	</div>
	<!-- Image with sound on click -->
	<button
		aria-label="Play Quirrel Soundbite"
		class="mt-4 ml-4 sm:mt-0"
		on:click={() => {
			const audio = new Audio("/audio/quirrel.wav");
			audio.volume = 0.5;
			audio.play();
		}}
	>
		<img 
			class="max-h-36 rounded-md drop-shadow-md border border-planet-600/40"
			src="/img/content/quirrel_icon.png"
			alt="QUIRREL!"
		/>
	</button>
</Block>

<!-- About website section -->
<Block id="about-website">
	<div class="text-sm sm:text-md max-w-prose">
		<h1 class="mb-2 font-bold text-xl text-planet-900 dark:text-planet-100">
			About this website
		</h1>
		<p class="text-planet-900 dark:text-planet-100">
			This website is made with Svelte and TailwindCSS. It happens to be my first project using either of those.
			I have dealt with web development before, but this is my first time using a framework to create a website.
		</p>
	</div>
</Block>