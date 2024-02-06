<script>
    import { page } from '$app/stores';
</script>

<div class="h-24" />

<h1
    class="mt-6 mb-4 text-center font-display font-bold text-4xl text-planet-900 dark:text-planet-100"
>
    {$page.status}
</h1>

<h2 class="mx-auto text-center max-w-prose text-2xl text-planet-900 dark:text-planet-100">
    {$page.error?.message}
</h2>

<div class="h-10" />

<a 
    class="block mx-auto text-center underline max-w-prose text-planet-900 dark:text-planet-100"
    href="/"
>
    Return Home
</a>

