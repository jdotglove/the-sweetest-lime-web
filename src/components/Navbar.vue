<template>
  <nav class="sticky top-0 z-50 backdrop-blur-md bg-primary/95 text-secondary">
    <div class="container mx-auto flex justify-between items-center px-6 py-4">
      <h1 class="logo text-4xl font-bold flex items-center gap-2">
        The Sweetest <span href="#" class="text-accent transition-colors">Lime</span>
      </h1>

      <div class="md:hidden">
        <button @click="toggleMenu" class="text-secondary focus:outline-none hover:text-accent transition-colors">
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <ul class="nav-links hidden md:flex gap-8 font-medium"
        :class="{ 'block absolute bg-primary/95 backdrop-blur-md top-16 left-0 w-full px-6 py-4 shadow-lg': isMenuOpen }">
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.href"
            :class="`${link.current ? 'text-accent' : 'hover:text-accent'} transition-colors relative group`">
            {{ link.name }}
            <span
              :class="`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${link.current ? 'w-full' : 'w-0 group-hover:w-full'}`"></span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup(): {
    currentPath: string
  } {
    const route = useRoute();
    const currentPath = ref<string>(route.path);
    return { currentPath: currentPath.value };
  },
  data() {
    const currentPath = this.currentPath as unknown as string;

    return {
      links: [
        { name: 'Home', href: '/', current: currentPath === '/' },
        { name: 'Hair Services', href: '/hair-services', current: currentPath === '/hair-services' },
        { name: 'Nails', href: '/nails', current: currentPath === '/nails' },
        { name: 'Body Work', href: '/body-work', current: currentPath === '/body-work' },
        { name: 'About Us', href: '/about-us', current: currentPath === '/about-us' },
      ],
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--primary);
  color: var(--light-green);
}

.nav-links a {
  text-decoration: none;
  transition: color 0.3s ease;
}
</style>
