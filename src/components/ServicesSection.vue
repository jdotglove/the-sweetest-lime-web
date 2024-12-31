<template>
  <!-- Services Section with Cards -->
  <section class="py-20 px-6">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold mb-16 text-center">
        Our Premium Services
        <div class="w-24 h-1 bg-accent mx-auto mt-4"></div>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="index"
          class="group relative overflow-hidden rounded-2xl bg-secondary p-6 hover:shadow-2xl transition-all duration-300">
          <div
            class="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full transform translate-x-16 -translate-y-16">
          </div>

          <a :href="service.href" class="relative z-10 grid h-full">
            <span class="text-accent text-5xl font-light">0{{ index + 1 }}</span>
            <h3 class="text-2xl font-bold mt-4 mb-3">{{ service.title }}</h3>
            <p class="text-primary/80 mb-6">{{ service.description }}</p>
            <span
              class="text-accent self-end group-hover:text-dark-green transition-colors inline-flex items-center gap-2">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'Hair Services',
          description: 'Expert cuts, coloring, and styling services tailored to your unique personality.',
          href: '/hair-services'
        },
        {
          title: 'Nail Care',
          description: 'Luxurious manicures and pedicures using premium products and techniques.',
          href: '/nails'
        },
        {
          title: 'Body Work',
          description: 'Rejuvenating spa treatments to help you relax and refresh.',
          href: '/body-work'
        },
      ]
    };
  },
};
</script>

<style>
.services {
  padding: 40px 20px;
  background-color: var(--background);
}

.service-list {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

@media (max-width: 700px) {
  .service-list {
    flex-direction: column;
  }
}

.service {
  background-color: var(--light-green);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
</style>
