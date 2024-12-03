<template>
  <section id="about" class="m-20 bg-light-green text-primary relative">
    <div class="absolute top-0 left-0 w-20 h-20 bg-accent rounded-full -translate-x-10 -translate-y-10"></div>
    <div class="absolute bottom-0 right-0 w-32 h-32 bg-accent rounded-full translate-x-10 translate-y-10"></div>

    <div class="max-w-6xl mx-auto p-6">
      <h2 class="text-4xl font-bold mb-8 text-center inline-block px-6">
        About Us
      </h2>
      <p class="text-lg leading-relaxed text-center">
        Welcome to The Sweetest Lime, your destination for exceptional hair care and styling.
        Our mission is to help you express your individuality and feel confident
        through expertly crafted hairstyles.
      </p>

      <!-- Highlights Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <!-- Highlight 1 -->
        <div class="highlight bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-bold mb-4">Expert Stylists</h3>
          <p class="text-base leading-relaxed">
            Our experienced team specializes in the latest trends and timeless styles,
            ensuring every visit leaves you feeling your best.
          </p>
        </div>
        <!-- Highlight 2 -->
        <div class="highlight bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-bold mb-4">Luxurious Experience</h3>
          <p class="text-base leading-relaxed">
            Relax in our welcoming environment while we pamper your hair with premium
            care products and treatments.
          </p>
        </div>
        <!-- Highlight 3 -->
        <div class="highlight bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-bold mb-4">Tailored Services</h3>
          <p class="text-base leading-relaxed">
            From everyday haircuts to event styling, we tailor every service to meet
            your unique needs and vision.
          </p>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <button class=" bg-primary text-white py-3 px-6 rounded-lg hover:bg-dark-green transition-colors duration-300">
          Book an Appointment
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Custom Scoped Styles for Extra Individuality */
.highlight {
  border-left: 5px solid var(--accent);
}

.highlight:hover {
  border-left: 8px solid var(--dark-green);
}
</style>
