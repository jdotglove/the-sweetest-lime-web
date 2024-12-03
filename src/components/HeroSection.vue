<template>
  <section class="hero relative bg-cover bg-center py-20 px-6">
    <div class="relative max-w-3xl mx-auto bg-[#F8F0DE]/85 text-primary p-8 rounded-lg shadow-xl">
      <h1 class="text-5xl font-bold mb-4 text-center">Welcome to The Sweetest <span class="text-accent">Lime</span></h1>
      <p class="text-lg text-center mb-6">
        Your trusted salon for the perfect look!
      </p>
      <div class="text-center">
        <button class="bg-accent text-white py-3 px-6 rounded-lg shadow-md hover:bg-dark-green transition duration-300">
          Book Now
        </button>
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
