<template>
  <!-- About Section with Modern Layout -->
  <section class="bg-light-green/20 py-20 px-6 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

    <div class="container mx-auto relative">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold mb-6">About Our Salon</h2>
          <p class="text-lg mb-8 leading-relaxed">
            Welcome to The Sweetest Lime, where luxury meets creativity. Our team of expert stylists
            is dedicated to helping you discover and enhance your unique beauty.
          </p>
          <div class="grid grid-cols-2 gap-6">
            <div v-for="(stat, index) in stats" :key="index" class="p-4 bg-white/50 rounded-lg backdrop-blur-sm">
              <div class="text-3xl font-bold text-accent mb-1">{{ stat.value }}</div>
              <div class="text-sm text-primary/80">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <div v-for="(feature, index) in features" :key="index"
            class="bg-white/80 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-all duration-300">
            <h3 class="text-xl font-semibold mb-2 flex items-center gap-3">
              <span class="text-accent">{{ feature.icon }}</span>
              {{ feature.title }}
            </h3>
            <p class="text-primary/80">{{ feature.description }}</p>
          </div>
        </div>
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
