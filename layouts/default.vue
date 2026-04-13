<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
import CatalogProvider from '../providers/CatalogProvider.vue';

const config = useRuntimeConfig();
const response = await fetch(`${config.public.siteUrl}/api/service`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
});

const { catalogItems }: { catalogItems: SweetestLime.Catalog.Map } = await response.json();
</script>
<template>
  <main>
    <CatalogProvider :catalogItems="catalogItems">
      <slot />
    </CatalogProvider>
  </main>
  <Analytics />
</template>

<style scoped></style>
