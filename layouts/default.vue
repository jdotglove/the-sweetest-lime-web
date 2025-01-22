<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
</script>
<template>
  <main>
    <slot />
  </main>
  <Analytics />
</template>

<style scoped></style>
