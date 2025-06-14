<template>
  <nav :class="[navigationClassName, { 'nav-visible': !isAnySectionInView }]">
    <div class="flex  lg:flex-col h-full justify-center mx-auto px-6 relative">
      <span class="absolute bg-accent transition-all left-2 w-0.5 h-[25%] rounded-full"></span>
      <ul class="flex lg:flex-col overflow-x-auto gap-4 lg:gap-3 py-3 text-[#522413] font-medium relative">
        <li class="" v-for="section in sections" :key="section">
          <a :href="`#${section.toLowerCase()}`"
            class="lg:hover:text-accent transition-colors whitespace-nowrap relative group">
            {{ section }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 lg:bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'ServicePageSectionNav',
  props: {
    sections: {
      type: Array,
      of: String,
    },
    pageName: {
      type: String,
    },
  },
  setup(props) {
    const isAnySectionInView = ref(false);
    let navigationClassName = '';
    let observer = null;

    const checkSectionVisibility = (entries) => {
      console.log(entries)
      isAnySectionInView.value = entries.some(entry => entry.isIntersecting);
    };

    onMounted(() => {
      // Set up intersection observer
      observer = new IntersectionObserver(checkSectionVisibility, {
        root: null,
        rootMargin: '-20% 0px',
        threshold: 0.2
      });

      // Observe all sections
      props.sections.forEach(section => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          observer.observe(element);
        }
      });
    });

    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
      }
    });

    switch (props.pageName) {
      case 'body-work':
        navigationClassName = 'nav-translation w-full top-[4.5rem] lg:top-24 lg:right-0 lg:h-[10dvh] lg:w-[16dvw] lg:rounded-s-xl z-40 bg-white/95 backdrop-blur-md shadow-md';
        break;
      case 'nail-care':
        navigationClassName = 'nav-translation w-full top-[4.5rem] lg:top-24 lg:right-0 lg:h-[10dvh] lg:w-[16dvw] lg:rounded-s-xl z-40 bg-white/95 backdrop-blur-md shadow-md'
        break;
      case 'hair-services':
        navigationClassName = 'nav-translation w-full top-[4.5rem] lg:top-24 lg:right-0 lg:h-[20dvh] lg:w-[16dvw] lg:rounded-s-xl z-40 bg-white/95 backdrop-blur-md shadow-md'
        break;
      default:
        break;
    }

    return {
      navigationClassName,
      isAnySectionInView,
    };
  },
});
</script>
<style scoped lang="css">
@media (min-width: 1120px) {
  .nav-translation {
    position: fixed;
    --tw-translate-x: 14dvw;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transition-duration: 300ms;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .nav-translation.nav-visible {
    --tw-translate-x: 0;
  }

  .nav-translation:hover {
    --tw-translate-x: 0;
  }
}

@media (min-width: 1200px) {
  .nav-translation {
    --tw-translate-x: 14.5dvw;
  }
}

@media (min-width: 1650px) {
  .nav-translation {
    --tw-translate-x: 14.75dvw;
  }
}
</style>