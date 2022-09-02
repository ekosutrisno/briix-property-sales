<template>
  <div class="max-w-hd mx-auto">
    <slot/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/home/Footer.vue';
export default {
    components: { Footer }
}
</script>