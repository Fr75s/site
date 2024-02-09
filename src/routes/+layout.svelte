<script lang=ts>
	import Navigation from "./components/Navigation.svelte";
	import Footer from "./components/Footer.svelte";
	import "../app.css";
</script>

<svelte:head>
	<meta name="application-name" content="Planet pquirrel" />
</svelte:head>

<!-- Upper navigation header -->
<Navigation />

<!-- Ugly! I need a better way to align the footer correctly -->
<!-- Fill screen container -->
<div style="min-height: calc(100vh - 8.5rem - 1px);">
	<slot />
</div>

<Footer />