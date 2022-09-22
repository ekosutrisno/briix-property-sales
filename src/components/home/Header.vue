<template>
 <header class="pt-8 flex items-center">
    <a href="/" class="lg:mr-[50px]">
        <LogoBriix />
    </a>
    <ul class="md:inline-flex items-center font-medium hidden lg:space-x-16">
        <li><a class="text-white transition hover:text-briix-blue-3 tracking-[0.1px]" href="/">Home</a></li>
        <li><a class="text-white transition hover:text-briix-blue-3 tracking-[0.1px]" href="#properties_section">Properties</a></li>
        <li><a class="text-white transition hover:text-briix-blue-3 tracking-[0.1px]" href="#contact_section">Location & Contact</a></li>
    </ul>
</header>
</template>

<script>
import LogoBriix from '../svg/LogoBriix.vue';
export default {
    components: { LogoBriix }
}
</script>