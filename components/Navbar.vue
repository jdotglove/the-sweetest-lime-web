<template>
  <nav class="sticky hidden md:flex top-0 z-50 backdrop-blur-md bg-white/85 text-secondary">
    <div class="w-[100%] self-stretch flex justify-between items-center px-6 py-4">
      <div class="flex text-2xl items-center">
        <img src="../assets/sweetest-lime-logo.png"
          class="w-[10dvw] h-[5dvh] sm:w-[6dvw] lg:w-[4dvw] lg:h-[5dvh] xl:w-[3.5dvw]" alt="sweetest lime logo" />
        <div>The Sweetest <span class="">Lime</span></div>
      </div>

      <ul class="nav-links hidden md:flex gap-8 font-medium text-[#522413]"
        :class="{ 'block absolute bg-primary/95 backdrop-blur-md top-16 left-0 w-full px-6 py-4 shadow-lg': isMenuOpen }">
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.href"
            :class="`${currentPath === link.href ? 'text-secondary' : 'hover:text-secondary'} transition-colors relative group`">
            {{ link.name }}
            <span
              :class="`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${currentPath === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`"></span>
          </a>
        </li>
      </ul>
    </div>

  </nav>

  <nav class="h-[75px] fixed w-full md:hidden top-0 z-50 backdrop-blur-md bg-white/95 text-secondary">
    <div class="w-[100%] flex justify-between items-center px-6 py-4">
      <div>
        <img src="../assets/sweetest-lime-logo.png" class="w-[10dvw] h-[5dvh] sm:w-[6dvw] lg:w-[4dvw] lg:h-[5dvh]"
          alt="sweetest lime logo" />
      </div>

      <div class="md:hidden flex">
        <button @click="toggleMenu" class="text-secondary focus:outline-none hover:text-secondarye transition-colors">
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
    </div>

    <div v-if="isMenuOpen" class="z-10 md:hidden h-[100dvh] w-[100dvw] fixed inset-x-0 bg-white backdrop-blur-md">
      <div class="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
        <a v-for="item in links" :key="item.name" :href="item.href"
          class="block px-4 py-3 text-[#522413] hover:bg-accent/10 hover:text-accent rounded-lg transition-colors"
          @click="closeMenu">
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
  <div class="h-[75px] lg:hidden bg-white"></div>
</template>

<script lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const currentPath = ref<string>(route.path);
    const isMenuOpen = ref(false);
    let originalOverflow = '';

    // Watch for menu state changes
    watch(isMenuOpen, (newValue) => {
      if (newValue) {
        // Store current overflow and prevent scrolling
        originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      } else {
        // Just restore the overflow property
        document.body.style.overflow = originalOverflow;
      }
    });

    // Handle escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen.value) {
        isMenuOpen.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener('keydown', handleEscape);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('keydown', handleEscape);
      // Restore original overflow state if component is unmounted while menu is open
      if (isMenuOpen.value) {
        document.body.style.overflow = originalOverflow;
      }
    });

    return {
      currentPath: currentPath.value,
      isMenuOpen
    };
  },
  data() {
    return {
      links: [
        { name: 'Home', href: '/' },
        { name: 'Hair Services', href: '/hair-services' },
        { name: 'Nail Care', href: '/nail-care' },
        { name: 'Body Work', href: '/body-work' },
        { name: 'About Us', href: '/about-us' },
      ],
      navHeight: '0%'
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
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
