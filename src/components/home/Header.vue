<template>
 <header class="pt-8 flex items-center justify-between">
    <a href="/">
        <LogoBriix />
    </a>
    <ul class="md:inline-flex items-center hidden lg:space-x-16">
            <li><a class="text-white transition hover:text-briix-blue-3 text-xl" href="/">Home</a></li>
            <li><a class="text-white transition hover:text-briix-blue-3 text-xl" href="#properties_section">Properties</a></li>
            <li><a class="text-white transition hover:text-briix-blue-3 text-xl" href="#contact_section">Location & Contact</a></li>
    </ul>
</header>
</template>

<script>
import LogoBriix from '../svg/LogoBriix.vue';
export default {
    components: { LogoBriix }
}
</script>