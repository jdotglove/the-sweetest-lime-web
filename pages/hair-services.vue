<script setup lang="ts">
import { useSeo } from '../composables/useSeo.ts'
import { ref, onMounted, onUnmounted } from 'vue'

const braidsContainer = ref<HTMLElement | null>(null);
const currentBraidsIndex = ref<number>(0);
const locsContainer = ref<HTMLElement | null>(null);
const currentLocsIndex = ref<number>(0);
const stylingContainer = ref<HTMLElement | null>(null);
const currentStylingIndex = ref<number>(0);
const treatmentsContainer = ref<HTMLElement | null>(null);
const currentTreatmentIndex = ref<number>(0);
const estheticsContainer = ref<HTMLElement | null>(null);
const currentEstheticsIndex = ref<number>(0);

const scrollToEstheticsIndex = (index: number): void => {
  if (!estheticsContainer.value) return;

  const slideWidth: number = estheticsContainer.value.offsetWidth
  estheticsContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth',
  });
}

const handleEstheticsScroll = (): void => {
  if (!estheticsContainer.value) return;

  const slideWidth: number = estheticsContainer.value.offsetWidth;
  const scrollPosition: number = estheticsContainer.value.scrollLeft;
  currentEstheticsIndex.value = Math.round(scrollPosition / slideWidth);
}

const scrollToTreatmentIndex = (index: number): void => {
  if (!treatmentsContainer.value) return;

  const slideWidth: number = treatmentsContainer.value.offsetWidth;
  treatmentsContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth',
  });
}

const handleTreatmentScroll = (): void => {
  if (!treatmentsContainer.value) return;

  const slideWidth: number = treatmentsContainer.value.offsetWidth;
  const scrollPosition: number = treatmentsContainer.value.scrollLeft;
  currentTreatmentIndex.value = Math.round(scrollPosition / slideWidth);
}

const scrollToStylingIndex = (index: number): void => {
  if (!stylingContainer.value) return;

  const slideWidth: number = stylingContainer.value.offsetWidth
  stylingContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth',
  });
}

const handleStylingScroll = (): void => {
  if (!stylingContainer.value) return;

  const slideWidth: number = stylingContainer.value.offsetWidth;
  const scrollPosition: number = stylingContainer.value.scrollLeft;
  currentStylingIndex.value = Math.round(scrollPosition / slideWidth);
}

const scrollToBraidsIndex = (index: number): void => {
  if (!braidsContainer.value) return;

  const slideWidth: number = braidsContainer.value.offsetWidth;
  braidsContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth',
  });
}

const handleBraidsScroll = (): void => {
  if (!braidsContainer.value) return;

  const slideWidth: number = braidsContainer.value.offsetWidth;
  const scrollPosition: number = braidsContainer.value.scrollLeft;
  currentBraidsIndex.value = Math.round(scrollPosition / slideWidth);
}

const scrollToLocsIndex = (index: number): void => {
  if (!locsContainer.value) return;

  const slideWidth: number = locsContainer.value.offsetWidth;
  locsContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth',
  });
}

const handleLocsScroll = (): void => {
  if (!locsContainer.value) return;

  const slideWidth: number = locsContainer.value.offsetWidth;
  const scrollPosition: number = locsContainer.value.scrollLeft;
  currentLocsIndex.value = Math.round(scrollPosition / slideWidth);
}

onMounted((): void => {
  if (locsContainer.value) {
    locsContainer.value.addEventListener('scroll', handleLocsScroll);
  }
  if (braidsContainer.value) {
    braidsContainer.value.addEventListener('scroll', handleBraidsScroll);
  }
  if (stylingContainer.value) {
    stylingContainer.value.addEventListener('scroll', handleStylingScroll);
  }
  if (treatmentsContainer.value) {
    treatmentsContainer.value.addEventListener('scroll', handleTreatmentScroll);
  }
  if (estheticsContainer.value) {
    estheticsContainer.value.addEventListener('scroll', handleEstheticsScroll);
  }
});

onUnmounted((): void => {
  if (locsContainer.value) {
    locsContainer.value.removeEventListener('scroll', handleLocsScroll);
  }
  if (braidsContainer.value) {
    braidsContainer.value.removeEventListener('scroll', handleBraidsScroll);
  }
  if (stylingContainer.value) {
    stylingContainer.value.removeEventListener('scroll', handleStylingScroll);
  }
  if (treatmentsContainer.value) {
    treatmentsContainer.value.removeEventListener('scroll', handleTreatmentScroll);
  }
  if (estheticsContainer.value) {
    estheticsContainer.value.removeEventListener('scroll', handleEstheticsScroll);
  }
});
const route = useRoute();

// Basic usage for a service page
useSeo({
  title: 'Hair Services',
  description: 'Expert hair styling, braid, cutting, treatment, and coloring services in Winston Salem. Book your appointment today.',
  path: route.path,
  keywords: ['hair salon', 'hair styling', 'hair coloring', 'haircut', 'loc', 'dreadlocs', 'braids', 'treatment'],
});
</script>

<template>
  <MainNavbar />
  <ServicePageSectionNav pageName="hair-services" :sections="hairServiceSections" />
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative h-[70vh] overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-dark-green/95 to-dark-green/50"></div>
      <div class="relative h-full container mx-auto px-6 flex items-center">
        <div class="text-[#522413] bg-white max-w-2xl p-10 rounded-xl">
          <h2 class="text-5xl font-bold mb-4">Hair Services</h2>
          <p class="text-xl text-accent">Transform your style with our expert hair care services</p>
        </div>
      </div>
    </section>

    <!-- Eco-Friendly Practices Section -->
    <section class="py-16 px-6 bg-white">
      <div class="container mx-auto">
        <div class="flex gap-8 justify-center">

          <!-- Right side: Description and commitments -->
          <div class="lg:w-2/3">
            <h2 class="text-3xl font-bold text-[#522413] mb-4">The Sweetest Lime Salon Spa Eco Fee</h2>
            <p class="text-[#522413]/80 mb-6">
              To support sustainability, we charge a $1.50 Eco Fee per service, allowing us to recycle 98%
              of our waste—including hair, foils, color tubes, and more. This helps keep our salon eco-friendly
              and reduces landfill waste.
            </p>
            <p>
              Thank you for supporting a greener beauty industry!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Categories -->
    <div class="bg-dark-green/20 py-16 px-6">
      <div class="container mx-auto">
        <!-- Locs Services -->
        <section id="locs" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-[#522413]">Locs Services</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="relative">
            <div ref="locsContainer"
              class="flex lg:grid lg:grid-cols-2 gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
              <article v-for="service in locsServices" :key="service.id"
                class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between min-w-[85vw] lg:min-w-0 snap-center">
                <div class="justify-between grid grid-cols-[1fr_10dvw] items-start mb-4">
                  <div>
                    <h3 class="text-xl font-bold text-[#522413]">{{ service.name }}</h3>
                    <p class="text-[#522413]/70">{{ service.description }}</p>
                  </div>
                  <span class="text-accent text-right font-bold whitespace-nowrap">{{ service.displayPrice }}</span>
                </div>
                <section class="flex items-center justify-between">
                  <div class="flex gap-2 h-fit flex-wrap">
                    <!-- <span v-for="(detail, idx) in service.details" :key="idx"
                      class="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {{ detail }}
                    </span> -->
                  </div>
                  <div class="flex gap-2 flex-wrap">
                    <a :href="service.link" target="_blank"
                      class="bg-accent text-white px-4 py-2 rounded-full hover:bg-dark-green transition-colors">
                      Book Now
                    </a>
                  </div>
                </section>
              </article>
            </div>

            <!-- Navigation Dots (Mobile Only) -->
            <div class="flex justify-center gap-2 mt-4 lg:hidden">
              <button v-for="(service, index) in locsServices" :key="`dot-${service.id}`"
                @click="scrollToLocsIndex(index)" class="w-2 h-2 rounded-full transition-all duration-300"
                :class="currentLocsIndex === index ? 'bg-accent w-4' : 'bg-accent/30'"
                aria-label="Go to service"></button>
            </div>
          </div>
        </section>

        <!-- Braids Services -->
        <section id="braids" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-[#522413]">Braiding Services</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="relative">
            <div ref="braidsContainer"
              class="flex lg:grid lg:grid-cols-2 gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
              <article v-for="service in braidsServices" :key="service.id"
                class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between min-w-[85vw] lg:min-w-0 snap-center">
                <div class="justify-between grid grid-cols-[1fr_10dvw] items-start mb-4">
                  <div>
                    <h3 class="text-xl font-bold text-[#522413]">{{ service.name }}</h3>
                    <p class="text-[#522413]/70">{{ service.description }}</p>
                  </div>
                  <span class="text-accent text-right font-bold">{{ service.displayPrice }}</span>
                </div>
                <section class="flex items-center justify-between">
                  <div class="flex gap-2 h-fit flex-wrap">
                    <!-- <span v-for="(detail, idx) in service.details" :key="idx"
                      class="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {{ detail }}
                    </span> -->
                  </div>
                  <div class="flex gap-2 flex-wrap">
                    <a :href="service.link" target="_blank"
                      class="bg-accent text-white px-4 py-2 rounded-full hover:bg-dark-green transition-colors">
                      Book Now
                    </a>
                  </div>
                </section>
              </article>
            </div>

            <!-- Navigation Dots (Mobile Only) -->
            <div class="flex justify-center gap-2 mt-4 lg:hidden">
              <button v-for="(service, index) in braidsServices" :key="`dot-${service.id}`"
                @click="scrollToBraidsIndex(index)" class="w-2 h-2 rounded-full transition-all duration-300"
                :class="currentBraidsIndex === index ? 'bg-accent w-4' : 'bg-accent/30'"
                aria-label="Go to service"></button>
            </div>
          </div>
        </section>


        <!-- Styling Services -->
        <section id="styling" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-[#522413]">Styling Services</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="relative">
            <div ref="stylingContainer"
              class="flex lg:grid lg:grid-cols-2 gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
              <article v-for="service in stylingServices" :key="service.id"
                class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between min-w-[85vw] lg:min-w-0 snap-center">
                <div class="grid grid-cols-[1fr_10dvw] justify-between items-start mb-4">
                  <div>
                    <h3 class="text-xl font-bold flex-wrap text-[#522413]">{{ service.name }}</h3>
                    <p class="text-[#522413]/70">{{ service.description }}</p>
                  </div>
                  <span class="text-accent text-right font-bold">{{ service.displayPrice }}</span>
                </div>
                <section class="flex items-center justify-between">
                  <div class="flex gap-2 h-fit flex-wrap">
                    <!-- <span v-for="(detail, idx) in service.details" :key="idx"
                      class="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {{ detail }}
                    </span> -->
                  </div>
                  <div class="flex gap-2 flex-wrap">
                    <a :href="service.link" target="_blank"
                      class="bg-accent text-white px-4 py-2 rounded-full hover:bg-dark-green transition-colors">
                      Book Now
                    </a>
                  </div>
                </section>
              </article>
            </div>

            <!-- Navigation Dots (Mobile Only) -->
            <div class="flex justify-center gap-2 mt-4 lg:hidden">
              <button v-for="(service, index) in stylingServices" :key="`dot-${service.id}`"
                @click="scrollToStylingIndex(index)" class="w-2 h-2 rounded-full transition-all duration-300"
                :class="currentStylingIndex === index ? 'bg-accent w-4' : 'bg-accent/30'"
                aria-label="Go to service"></button>
            </div>
          </div>
        </section>

        <!-- Treatments -->
        <section id="treatments" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-[#522413]">Hair Treatments</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="relative">
            <div ref="treatmentsContainer"
              class="flex lg:grid lg:grid-cols-2 gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
              <article v-for="service in treatmentServices" :key="service.id"
                class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between min-w-[85vw] lg:min-w-0 snap-center">
                <div class="grid grid-cols-[1fr_10dvw] justify-between items-start mb-4">
                  <div>
                    <h3 class="text-xl font-bold text-[#522413]">{{ service.name }}</h3>
                    <p class="text-[#522413]/70">{{ service.description }}</p>
                  </div>
                  <span class="text-accent text-right font-bold whitespace-nowrap">{{ service.displayPrice }}</span>
                </div>
                <section class="flex items-center justify-between">
                  <div class="flex gap-2 h-fit flex-wrap">
                    <!-- <span v-for="(detail, idx) in service.details" :key="idx"
                      class="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {{ detail }}
                    </span> -->
                  </div>
                  <div class="flex gap-2 flex-wrap">
                    <a :href="service.link" target="_blank"
                      class="bg-accent text-white px-4 py-2 rounded-full hover:bg-dark-green transition-colors">
                      Book Now
                    </a>
                  </div>
                </section>
              </article>
            </div>

            <!-- Navigation Dots (Mobile Only) -->
            <div class="flex justify-center gap-2 mt-4 lg:hidden">
              <button v-for="(service, index) in treatmentServices" :key="`dot-${service.id}`"
                @click="scrollToTreatmentIndex(index)" class="w-2 h-2 rounded-full transition-all duration-300"
                :class="currentTreatmentIndex === index ? 'bg-accent w-4' : 'bg-accent/30'"
                aria-label="Go to service"></button>
            </div>
          </div>
        </section>

        <!-- Esthetics -->
        <section id="esthetics">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-[#522413]">Esthetics</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="relative">
            <div ref="estheticsContainer"
              class="flex lg:grid lg:grid-cols-2 gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
              <article v-for="service in estheticsServices" :key="service.id"
                class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between min-w-[85vw] lg:min-w-0 snap-center">
                <div class="lg:flex grid grid-cols-[1fr_10dvw] justify-between items-start mb-4">
                  <div>
                    <h3 class="text-xl font-bold text-[#522413]">{{ service.name }}</h3>
                    <p class="text-[#522413]/70">{{ service.description }}</p>
                  </div>
                  <span class="text-accent font-bold">{{ service.displayPrice }}</span>
                </div>
                <section class="flex items-center justify-between">
                  <div class="flex gap-2 h-fit flex-wrap">
                    <!-- <span v-for="(detail, idx) in service.details" :key="idx"
                      class="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {{ detail }}
                    </span> -->
                  </div>
                  <div class="flex gap-2 flex-wrap">
                    <a :href="service.link" target="_blank"
                      class="bg-accent text-white px-4 py-2 rounded-full hover:bg-dark-green transition-colors">
                      Book Now
                    </a>
                  </div>
                </section>
              </article>
            </div>

            <!-- Navigation Dots (Mobile Only) -->
            <div class="flex justify-center gap-2 mt-4 lg:hidden">
              <button v-for="(service, index) in estheticsServices" :key="`dot-${service.id}`"
                @click="scrollToEstheticsIndex(index)" class="w-2 h-2 rounded-full transition-all duration-300"
                :class="currentEstheticsIndex === index ? 'bg-accent w-4' : 'bg-accent/30'"
                aria-label="Go to service"></button>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Booking CTA with Organic Background -->
    <section class="py-16 px-6 text-[#522413] relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 1000" fill="none" stroke="currentColor">
          <path d="M0,0 C200,100 300,200 400,100 C500,0 600,100 700,200 C800,300 900,200 1000,100" class="text-accent"
            stroke-width="2" />
        </svg>
      </div>

      <div class="container mx-auto text-center relative">
        <h2 class="text-3xl font-bold mb-6">Ready for Your Transformation?</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          Book your appointment today and let our expert stylists help you achieve your dream look.
        </p>
        <div class="flex gap-4 justify-center">
          <a href="https://app.squareup.com/appointments/book/55614969-c9c8-4268-a409-b631cbb6574b/9F5K62XVNWWGR/start"
            target="_blank"
            class="bg-accent text-white px-8 py-4 rounded-full hover:bg-dark-green transition-all duration-300">
            Book Online
          </a>
          <a href="tel:13368292649"
            class="border-2 border-accent text-accent px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
            Call Us
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 px-6 bg-dark-green/20">
      <div class="container mx-auto max-w-3xl">
        <h2 class="text-3xl font-bold text-[#522413] text-center mb-12">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="border border-accent/20 rounded-lg overflow-hidden">
            <button class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent/5"
              @click="faq.isOpen = !faq.isOpen">
              <span class="font-medium text-[#522413]">{{ faq.question }}</span>
              <span class="text-accent">
                {{ faq.isOpen ? '−' : '+' }}
              </span>
            </button>
            <div v-if="faq.isOpen" class="px-6 py-4 bg-secondary/50 text-[#522413]/80">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <MainFooter />
  </div>
</template>

<script lang="ts">
import { inject } from 'vue';
import MainNavbar from '../components/Navigation/MainNavbar.vue'
import ServicePageSectionNav from '../components/Navigation/ServicePageSectionNav.vue'
import MainFooter from '../components/MainFooter.vue'

export default {
  components: {
    MainNavbar,
    ServicePageSectionNav,
    MainFooter,
  },
  data() {
    const catalogItems = inject<SweetestLime.Catalog.Map | null>('catalogItems');
    const locServicesCategory = catalogItems?.category.find(category => category.name === 'Locs');
    const braidCategory = catalogItems?.category.find(category => category.name === 'Braids');
    const stylingCategory = catalogItems?.category.find(category => category.name === 'Styling');
    const treatmentCategory = catalogItems?.category.find(category => category.name === 'Treatments');
    const estheticCategory = catalogItems?.category.find(category => category.name === 'Esthetics');
    const feeCategory = catalogItems?.category.find(category => category.name === 'Fees');

    const locsServices = catalogItems?.item.filter(item => (item.categories?.find((category) => category.id === locServicesCategory?.id) && !item.categories?.find((category) => category.id === feeCategory?.id)) || false);
    const braidsServices = catalogItems?.item.filter(item => item.categories?.find((category) => category.id === braidCategory?.id) || false);
    const stylingServices = catalogItems?.item.filter(item => item.categories?.find((category) => category.id === stylingCategory?.id) || false);
    const treatmentServices = catalogItems?.item.filter(item => item.categories?.find((category) => category.id === treatmentCategory?.id) || false);
    const estheticsServices = catalogItems?.item.filter(item => item.categories?.find((category) => category.id === estheticCategory?.id) || false);

    return {
      hairServiceSections: ['Locs', 'Braids', 'Styling', 'Treatments', 'Esthetics'],
      featuredServices: [
        {
          id: 1,
          name: 'Loc Perimeter Retwist with Basic Style',
          description: 'Cleansing & oiling scalp, and retwisting perimeter locs with a basic style (bun, ponytail, fishtail, etc.)',
          price: '$60+',
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/Z55IJG67LWDGQWW2PQANUTH6',
        },
        {
          id: 2,
          name: 'Color Services',
          desription: 'We use top-quality products to provide your perfect color while maintaining the integrity and health of your hair, Prices may vary depending on desired color and hair length.',
          price: '$85+',
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/EAFXZOUXLJWLSNPOFSXUVWUD',
        },
        {
          id: 3,
          name: 'Freestyle Braids',
          description: 'Natural Hair',
          price: '$180+',
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/22BVE5LNC2T5PUFZYNLJ4ONI',
        },
      ],
      locsServices,
      braidsServices,
      stylingServices,
      treatmentServices,
      estheticsServices,
      faqs: [
        {
          question: 'How often should I get my locs retwisted/maintained?',
          answer: 'We recommend maintenance every 4-6 weeks, though the timeline may vary based on your style and scalp health.',
          isOpen: false
        },
        {
          question: 'Do you require consultations before hair services?',
          answer: 'Consultations are mandatory for all new clients and before any chemical services, including color or relaxers. A nominal fee applies.',
          isOpen: false
        },
        {
          question: 'What should I do to prepare for my hair appointment?',
          answer: 'Ensure your hair is loose and free of any previous style. We will handle shampooing, conditioning, and treatments before styling. If time allows, we can remove your previous style for a $50 Hair Prep fee. If time does not permit, your appointment will need to be rescheduled, and a $35 late cancellation fee will apply.',
          isOpen: false
        },
        // Add more FAQs
      ],
    };
  }
}
</script>

<style lang="css" scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
