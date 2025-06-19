<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { defineComponent, provide } from 'vue'

export default defineComponent({
  name: 'CatalogProvider',
  props: {
    catalogItems: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    provide('catalogItems', props.catalogItems);
    return {};
  },
});
</script>
