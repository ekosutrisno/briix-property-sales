<template>
  <Layout>
    <Hero />

    <OurProperties />

    <WhyUseBriix />

    <SiwaCliffSection />

    <KuVillaSection />

    <AraVillaSection />

    <SiwaUluwatuVillaSection />

  </Layout>
</template>

<script>
import Hero from '../components/home/Hero.vue';
import OurProperties from '../components/home/OurProperties.vue';
import WhyUseBriix from '../components/home/WhyUseBriix.vue';
import SiwaCliffSection from '../components/home/SiwaCliffSection.vue';
import Footer from '../components/home/Footer.vue';
import KuVillaSection from '../components/home/KuVillaSection.vue';
import AraVillaSection from '../components/home/AraVillaSection.vue';
import SiwaUluwatuVillaSection from '../components/home/SiwaUluwatuVillaSection.vue';
export default {
  components: { Hero, OurProperties, WhyUseBriix, SiwaCliffSection, Footer, KuVillaSection, AraVillaSection, SiwaUluwatuVillaSection },
  metaInfo:{
    title: "Welcome to Briix Properties Homepage Website",
    meta: [
      {
        name: 'description',
        content: 'Briix provides a wide range of property investments for investors looking to increase their real estate asset portfolio.'
      }
    ],
  }
}
</script>