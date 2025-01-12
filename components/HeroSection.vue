<template>
  <!-- Hero Section with Modern Design -->
  <section class="hero relative min-h-[80vh] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-[url('/path-to-your-image.jpg')] bg-cover bg-center"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-6 py-20">
      <div class="glassmorphism p-12 rounded-2xl">
        <h1 class="text-6xl font-bold mb-6 leading-tight">
          Transform Your Look at
          <span class="text-accent block">The Sweetest Lime</span>
        </h1>
        <p class="text-xl mb-8 max-w-2xl">
          Experience the perfect blend of luxury and creativity in our modern salon.
          Where every visit transforms you into the best version of yourself.
        </p>
        <div class="flex gap-4 flex-wrap">
          <button
            class="bg-accent text-white px-8 py-4 rounded-full hover:bg-dark-green transition-all duration-300 transform hover:scale-105">
            Book Appointment
          </button>
          <button
            class="border-2 border-accent text-accent px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
            View Services
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  /* Replace with your actual image path */
  background-image: url('../assets/sweetest-lime-logo.png');
  height: 60vh;
  background-position: center;
  background-size: contain;
}
</style>
