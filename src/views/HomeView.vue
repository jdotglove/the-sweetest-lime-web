<template>
  <div id="app" class="bg-background text-primary">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ContactForm />
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import HeroSection from '@/components/HeroSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ContactForm from '@/components/ContactForm.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    HeroSection,
    ServicesSection,
    AboutSection,
    ContactForm,
    Footer,
  },
};
</script>
