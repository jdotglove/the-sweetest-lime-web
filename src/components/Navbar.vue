<template>
  <nav class="navbar bg-primary text-secondary shadow-md">
    <div class="container mx-auto flex justify-between items-center px-6 py-4">
      <!-- Logo -->
      <div class="logo text-2xl font-bold">
        <a href="#">The Sweetest Lime</a>
      </div>

      <!-- Hamburger Menu for Mobile -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-secondary focus:outline-none">
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

      <!-- Navigation Links -->
      <ul class="nav-links hidden md:flex gap-6 font-medium"
        :class="{ 'block absolute bg-primary top-16 left-0 w-full px-6 py-4': isMenuOpen }">
        <li><a href="#services" class="hover:text-light-green">Services</a></li>
        <li><a href="#about" class="hover:text-light-green">About</a></li>
        <li><a href="#contact" class="hover:text-light-green">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
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
