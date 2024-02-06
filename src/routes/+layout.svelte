<script lang=ts>
	import Navigation from "./components/Navigation.svelte";
	import Footer from "./components/Footer.svelte";
	import "../app.css";
</script>

<Navigation />

<!-- Ugly! I need a better way to align the footer correctly -->
<div style="min-height: calc(100vh - 8.5rem - 1px);">
	<slot />
</div>

<Footer />