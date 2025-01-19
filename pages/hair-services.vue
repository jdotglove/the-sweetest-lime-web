<script setup lang="ts">
import { useSeo } from '../composables/useSeo';
import { ref, onMounted, onUnmounted } from 'vue'

const braidsContainer = ref<HTMLElement | null>(null)
const currentBraidsIndex = ref<number>(0)
const locsContainer = ref<HTMLElement | null>(null)
const currentLocsIndex = ref<number>(0)
const stylingContainer = ref<HTMLElement | null>(null)
const currentStylingIndex = ref<number>(0)
const treatmentsContainer = ref<HTMLElement | null>(null)
const currentTreatmentIndex = ref<number>(0)
const estheticsContainer = ref<HTMLElement | null>(null)
const currentEstheticsIndex = ref<number>(0)

const scrollToEstheticsIndex = (index: number): void => {
  if (!estheticsContainer.value) return

  const slideWidth: number = estheticsContainer.value.offsetWidth
  estheticsContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  })
}

const handleEstheticsScroll = (): void => {
  if (!estheticsContainer.value) return

  const slideWidth: number = estheticsContainer.value.offsetWidth
  const scrollPosition: number = estheticsContainer.value.scrollLeft
  currentEstheticsIndex.value = Math.round(scrollPosition / slideWidth)
}

const scrollToTreatmentIndex = (index: number): void => {
  if (!treatmentsContainer.value) return

  const slideWidth: number = treatmentsContainer.value.offsetWidth
  treatmentsContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  })
}

const handleTreatmentScroll = (): void => {
  if (!treatmentsContainer.value) return

  const slideWidth: number = treatmentsContainer.value.offsetWidth
  const scrollPosition: number = treatmentsContainer.value.scrollLeft
  currentTreatmentIndex.value = Math.round(scrollPosition / slideWidth)
}

const scrollToStylingIndex = (index: number): void => {
  if (!stylingContainer.value) return

  const slideWidth: number = stylingContainer.value.offsetWidth
  stylingContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  })
}

const handleStylingScroll = (): void => {
  if (!stylingContainer.value) return

  const slideWidth: number = stylingContainer.value.offsetWidth
  const scrollPosition: number = stylingContainer.value.scrollLeft
  currentStylingIndex.value = Math.round(scrollPosition / slideWidth)
}

const scrollToBraidsIndex = (index: number): void => {
  if (!braidsContainer.value) return

  const slideWidth: number = braidsContainer.value.offsetWidth
  braidsContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  })
}

const handleBraidsScroll = (): void => {
  if (!braidsContainer.value) return

  const slideWidth: number = braidsContainer.value.offsetWidth
  const scrollPosition: number = braidsContainer.value.scrollLeft
  currentBraidsIndex.value = Math.round(scrollPosition / slideWidth)
}

const scrollToLocsIndex = (index: number): void => {
  if (!locsContainer.value) return

  const slideWidth: number = locsContainer.value.offsetWidth
  locsContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  })
}

const handleLocsScroll = (): void => {
  if (!locsContainer.value) return

  const slideWidth: number = locsContainer.value.offsetWidth
  const scrollPosition: number = locsContainer.value.scrollLeft
  currentLocsIndex.value = Math.round(scrollPosition / slideWidth)
}

onMounted((): void => {
  if (locsContainer.value) {
    locsContainer.value.addEventListener('scroll', handleLocsScroll)
  }
  if (braidsContainer.value) {
    braidsContainer.value.addEventListener('scroll', handleBraidsScroll)
  }
  if (stylingContainer.value) {
    stylingContainer.value.addEventListener('scroll', handleStylingScroll)
  }
  if (treatmentsContainer.value) {
    treatmentsContainer.value.addEventListener('scroll', handleTreatmentScroll)
  }
  if (estheticsContainer.value) {
    estheticsContainer.value.addEventListener('scroll', handleEstheticsScroll)
  }
})

onUnmounted((): void => {
  if (locsContainer.value) {
    locsContainer.value.removeEventListener('scroll', handleLocsScroll)
  }
  if (braidsContainer.value) {
    braidsContainer.value.removeEventListener('scroll', handleBraidsScroll)
  }
  if (stylingContainer.value) {
    stylingContainer.value.removeEventListener('scroll', handleStylingScroll)
  }
  if (treatmentsContainer.value) {
    treatmentsContainer.value.removeEventListener('scroll', handleTreatmentScroll)
  }
  if (estheticsContainer.value) {
    estheticsContainer.value.removeEventListener('scroll', handleEstheticsScroll)
  }
})
const route = useRoute()

// Basic usage for a service page
useSeo({
  title: 'Hair Services',
  description: 'Expert hair styling, braid, cutting, treatment, and coloring services in Winston Salem. Book your appointment today.',
  path: route.path,
  keywords: ['hair salon', 'hair styling', 'hair coloring', 'haircut', 'loc', 'dreadlocs', 'braids', 'treatment']
})
</script>

<template>
  <Navbar />
  <!-- Quick Navigation with Leaf Accents -->
  <nav
    class="fixed w-full top-[4.5rem] lg:top-24 lg:right-0 lg:h-[20dvh] lg:w-[16dvw] lg:rounded-s-xl z-40 bg-white/95 backdrop-blur-md shadow-md">
    <div class="flex lg:flex-col h-full justify-center mx-auto px-6 relative">
      <ul class="flex lg:flex-col overflow-x-auto gap-4 lg:gap-3 py-3 text-[#522413] font-medium relative">
        <li class="" v-for="section in ['Locs', 'Braids', 'Styling', 'Treatments', 'Esthetics']" :key="section">
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
                  <span class="text-accent text-right font-bold whitespace-nowrap">{{ service.price }}</span>
                </div>
                <section class="flex items-center justify-between">
                  <div class="flex gap-2 h-fit flex-wrap">
                    <span v-for="(detail, idx) in service.details" :key="idx"
                      class="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {{ detail }}
                    </span>
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
                  <span class="text-accent text-right font-bold">{{ service.price }}</span>
                </div>
                <section class="flex items-center justify-between">
                  <div class="flex gap-2 h-fit flex-wrap">
                    <span v-for="(detail, idx) in service.details" :key="idx"
                      class="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {{ detail }}
                    </span>
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
                  <span class="text-accent text-right font-bold">{{ service.price }}</span>
                </div>
                <section class="flex items-center justify-between">
                  <div class="flex gap-2 h-fit flex-wrap">
                    <span v-for="(detail, idx) in service.details" :key="idx"
                      class="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {{ detail }}
                    </span>
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
                  <span class="text-accent text-right font-bold whitespace-nowrap">{{ service.price }}</span>
                </div>
                <section class="flex items-center justify-between">
                  <div class="flex gap-2 h-fit flex-wrap">
                    <span v-for="(detail, idx) in service.details" :key="idx"
                      class="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {{ detail }}
                    </span>
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
                  <span class="text-accent font-bold">{{ service.price }}</span>
                </div>
                <section class="flex items-center justify-between">
                  <div class="flex gap-2 h-fit flex-wrap">
                    <span v-for="(detail, idx) in service.details" :key="idx"
                      class="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {{ detail }}
                    </span>
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
          <a href="https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services?buttonTextColor=ffffff&color=006aff&locale=en&referrer=so"
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
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
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
      locsServices: [
        {
          id: 1,
          name: 'Stater Loc Maintenance (locs less than 12 months old)',
          description: 'Shampoo, reparting (if necessary) and retwist of starter locs',
          price: '$100+',
          details: ['2hrs+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/AS6KU5GIQVRNVTQWB5IGWDIE',
        },
        {
          id: 2,
          name: 'Starter Locs (with Starter Locs Care Kit)',
          description: 'Includes shampoo, protein treatment, and appropriate starter twists (comb or two-strand twists) as determined by hair type. Price may vary depending on the thickness and density of hair.',
          price: '$190+',
          details: ['2hrs 30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/FCVT5IEG2DGSBKDQB373BRFV',
        },
        {
          id: 3,
          name: 'Starter Micro-Loc Maintenance (micro-locs less than 12 months old)',
          description: 'Shampoo, reparting (if necessary), and retwisting of starter micro-locs',
          price: '$160+',
          details: ['2hrs 30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/G6AKKG25RSFH36H75NIV7D44',
        },
        {
          id: 4,
          name: 'Starter Micro-Locs (with Starter Loc Kit)',
          description: 'Includes shampoo, protein treatment, and appropriate starter twists (comb or two-strand twists) as determined by hair type. Price may vary depending on the thickness and density of hair.',
          price: '$215+',
          details: ['3hrs 30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/OVPSDJOIJCZCXYTFBGEEMD4A',
        },
        {
          id: 5,
          name: 'Loc Maintenance',
          description: '',
          price: '$115+',
          details: ['1hr 30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/7C3MPLC3FRTGDFQLJK2SNK5P',
        },
        {
          id: 6,
          name: 'Microloc Maintenance',
          description: '',
          price: '$155+',
          details: ['2hrs 30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/XPEFNMUHDI2CKTZV6QBKXHMM',
        },
        {
          id: 7,
          name: 'Loc Reattachment/Repair',
          description: 'Reattachment of YOUR OWN broken or previously cut locs. For mass reattachments (more than 15 locs) schedule a free consultation.',
          price: '$10+',
          details: ['15mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/WS6TUA5AGWVFJZYKZOFVV5UY',
        },
        {
          id: 8,
          name: 'Loc Perimeter Retwist with Basic Style',
          description: 'Cleansing & oiling scalp, and retwisting perimeter locs with a basic style (bun, ponytail, fishtail, etc.)',
          price: '$60+',
          details: ['30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/Z55IJG67LWDGQWW2PQANUTH6',
        },
        {
          id: 9,
          name: 'Loc Styling - Basic',
          description: 'Basic styles include bun, ponytail, up to two fishtails or two cornrows',
          price: '$25+',
          details: ['30mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/45S6DUDG5MNEDTAA7TZ3GHZT',
        },
        {
          id: 10,
          name: 'Loc Styling - Standard',
          description: 'Intermediate styles include two or more ponytails or buns and three or more fishtails or cornrows. ',
          price: '$35+',
          details: ['45mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/FJCWRNARIEAQMABRJU2EY4YK',
        },
        {
          id: 11,
          name: 'Loc Styling - Intricate',
          description: 'Complex styles include: individual plaits, two-strand twists, petals, pipecleaner styles, flexi- or rod-sets or styles including any of the above; and creative hair designs for special occasions.',
          price: '$45+',
          details: ['1hr'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/MVYMY7J5VW6X3ZFPMWOJTY7L',
        },
        {
          id: 12,
          name: 'Hair Jewelry/Adornments - Client supplied',
          description: 'Attachment of client supplied hair jewelry/adornments',
          price: '$2+',
          details: ['10mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/KSFAEG3DYNOAN7KEVRMRRWRI',
        }
        // Add more services
      ],
      braidsServices: [
        {
          id: 1,
          name: 'Freestyle Braids',
          description: 'Natural Hair',
          price: '$180+',
          details: ['30mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/22BVE5LNC2T5PUFZYNLJ4ONI',
        },
        {
          id: 2,
          name: 'Stitch Braids',
          description: 'Natural Hair/Feed In',
          price: '$100',
          details: ['30mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/ZJQOW2IAHWFCSQNLZKBLCOPL',
        },
        {
          id: 3,
          name: 'Knotless Braids',
          description: 'Hair Included',
          price: '$210+',
          details: ['4hrs 30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/HW4VLTWNVXIW5FSXP3Y4L62P',
        },
        {
          id: 4,
          name: 'Box Braids',
          description: 'Hair Included',
          price: '$250+',
          details: ['4hrs 30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/U54MDAJKR7JX57VQBL6UTK3M',
        },
        {
          id: 5,
          name: 'Fulani Braids - Waist Length',
          description: '',
          price: '$265',
          details: ['6hrs'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/YGFDJX4B7HIGMCKX25ZFIMYU',
        },
        {
          id: 6,
          name: 'Two Braids',
          description: '',
          price: '$75',
          details: ['30mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/3L72JJHPERB7PCYQVP3KWOIR',
        },
        {
          id: 7,
          name: 'Two Braids w/ Design',
          description: '',
          price: '$85',
          details: ['30mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/RS4DRR66ULKJSMKF34VE5FE2',
        },
        {
          id: 8,
          name: 'Two Braids (no hair added)',
          description: '',
          price: '$65',
          details: ['30mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/6NBWOAXHYBUBSVBXJBKU7245',
        },
        {
          id: 9,
          name: 'Twist Out',
          description: 'Natural hairstyle using Bantu knots, two-strand twists, flat twists, braids or cornrows to create large curls, tight ringlets, waves or crinkles.',
          price: '$75+',
          details: ['1hr 30mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/LPWZPGG5NNBHREY4IAFK6IYE',
        },
        {
          id: 10,
          name: 'Braid Style (No hair added)',
          description: '"Straight-backs" to intricate designs, includes shampoo and blow dry.',
          price: '$50+',
          details: ['2hrs'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/HAXR7DVIBY4GCUOL362PGDMM',
        },
        {
          id: 11,
          name: 'Twist/Plaits',
          description: 'Comb-twists/coils, individual two-strand twists or plaits',
          price: '$95+',
          details: ['2hrs+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/WNWHU3BP3EZFI5XFFS4RCGUT',
        },
        {
          id: 12,
          name: 'Cornrows',
          description: 'Natural Hair',
          price: '$90',
          details: ['30mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/MO76L2GDRUUCBFXHVA546LKY',
        },
        {
          id: 13,
          name: 'Add on Boho',
          price: '$55',
          details: ['30mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/B76GOPZYQGLG5ZDLUN3NZHV4',
        },
        {
          id: 14,
          name: 'Hair Jewelry/Adornments - Client supplied',
          description: 'Attachment of client supplied hair jewelry/adornments',
          price: '$2+',
          details: ['10mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/KSFAEG3DYNOAN7KEVRMRRWRI',
        },
        {
          id: 15,
          name: 'Add-on Beads/Hair Adornments',
          description: 'Adding beads to braids or hair adornments to locs. Bring your own or choose from salon selection. Offered in conjunction with additional hair services only.',
          price: 'price varies',
          details: ['30mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/FABM74JL24ZRK5BMXOC6LS3B',
        }
      ],
      stylingServices: [
        {
          id: 1,
          name: 'Crochet - Salon supplies hair',
          description: '',
          price: '$185+',
          details: ['2hrs 30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/552OG7Z66YS3ZL3ZI54GBILW',
        },
        {
          id: 2,
          name: 'Crochet - Client supplies hair',
          description: '',
          price: '$150+',
          details: ['2hrs 30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/OKSRPSYSJ6RL6IQMREB37YO4',
        },
        {
          id: 3,
          name: 'Curl Only',
          description: 'Client arrives with hair shampooed & blow dried or wrapped.',
          price: '$35+',
          details: ['30min+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/QFZ3RDZH5ZBXN35SJFJEOL2Y',
        },
        {
          id: 4,
          name: 'Roller/Rod Set',
          description: '',
          price: '$50+',
          details: ['1hr 30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/HS35PGRZG3CWROQ2KLSN3FDH',
        },
        {
          id: 5,
          name: 'Haircut',
          description: '',
          price: '$35',
          details: ['45mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/NNU3QFJRUQ6A7LCFSGD4CA5J',
        },
        {
          id: 6,
          name: 'Haircut & Face',
          description: '',
          price: '$40+',
          details: ['50mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/5VG63ODORMOZYKXF24VMVOAO',
        },
        {
          id: 7,
          name: 'Trim',
          description: '',
          price: '$25',
          details: ['20mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/WAUZ3SOT2ILGCKRILFUYTFEV',
        },
        {
          id: 8,
          name: 'Shape-Up',
          description: 'Clean-up of hairline (full perimeter of hair).',
          price: '$20+',
          details: ['15mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/SQPAEG7Q7BNMV6SEODNRFSEL',
        },
        {
          id: 9,
          name: 'Shape-Up & Shampoo',
          description: '',
          price: '$30+',
          details: ['30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/OGYZ22YDSWSPSSRIABI6L3Q5',
        },
        {
          id: 10,
          name: 'Shape-Up & Face',
          description: 'Clean-up of hairline (full perimeter of hair), and face (beard, mustache & neck).',
          price: '$20+',
          details: ['30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/IQET73NCJ2ERARTICB223ACR',
        },
        {
          id: 11,
          name: 'Shape-Up - Face Only',
          description: 'Clean-up face (beard, mustache & neck)',
          price: '$10+',
          details: ['15mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/VAA6XQWRKKMUC3TADVQMU6HR',
        },
        {
          id: 12,
          name: 'Silk Wrap (Blow out) With Trim',
          description: 'A silkening serum is used to create a bone-straight style with extra volume and minimal heat.',
          price: '$75',
          details: ['45mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/OJKYQSCGMB3YIKU6KC6O6DZQ',
        },
        {
          id: 13,
          name: 'Blow Dry Only',
          description: 'Blow-dry hair with add-on service',
          price: '$25+',
          details: ['25mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/X67N6KKU2JCUK6U7FWTRUOQM',
        },
        {
          id: 14,
          name: 'Shampoo and Blow-Dry',
          description: '',
          price: '$45',
          details: ['40mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/RR7ZCSKWKUEFHSLJFD6GWZLB',
        },
        {
          id: 15,
          name: 'Add-on Hair Prep',
          description: 'Taking out braids or extensions and/or removal of crochet or weave in preparation and in conjunction with additional hair services.',
          price: '$50+',
          details: ['1hr'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/Z4JGT4YW2WS65BO53VD5QI77',
        },
        {
          id: 16,
          name: 'Special Events',
          description: 'Wedding, prom, anniversary, photo shoot or class reunion... if you want to look extra special we provide convenient on-site hair and/or make-up services or you can reserve the salon for parties of three or more.',
          price: 'Call for pricing.',
          details: ['15mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/G42VA5MQTGKXY7EXP47ZB5RA'
        }
      ],
      treatmentServices: [
        {
          id: 1,
          name: 'Keratin Treatment',
          description: 'Injects porous areas or hair strand with keratin, an essential hair protein to smooth and shine hair. Allows you to alternate between naturally curly and straight hair. Results can last up to six months.',
          price: '$210+',
          details: ['2hrs 30mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/DVBSUADTIODXG6HA6IYKKRW5',
        },
        {
          id: 2,
          name: 'Relaxer with Trim',
          description: 'A chemical treatment that straightens curly hair by breaking down the bonds in the hair shaft and lasts from 6 - 12 weeks depending on hair texture and growth Consultation REQUIRED for a corrective relaxer.',
          price: '$125+',
          details: ['1hr+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/4DXC4KHD5PDOTY6FIDDV6SXD',
        },
        {
          id: 3,
          name: 'Permanent Wave with Trim',
          description: 'Hair is set in loose to tight curls or waves, then treated with a chemical solution allowing curls to last for several months',
          price: '$95+',
          details: ['1hr 40mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/H7ITFJIZ6YNX46ZSEW2LKOTN',
        },
        {
          id: 4,
          name: 'Texturizer',
          description: 'A mild version of a chemical hair relaxer to loosen the natural curl pattern without completely straightening it.',
          price: '$85+',
          details: ['45mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/F4R3N4QIHISGNYUYOFZW25MR',
        },
        {
          id: 5,
          name: 'Detoxifying Treatment',
          description: 'Helps absorb excess oil and product build-up, and pulls out toxins (including environmental, medicinal, chemo and radiation) to purify and restore proper balance to hair.',
          price: '$60+',
          details: ['45mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/D4AMJ5SYKVVCY36MKXWBS4SM',
        },
        {
          id: 6,
          name: 'Scalp Exfoliation',
          description: 'Soothing and stress-relieving treatment used to invigorate the scalp and create healthier, shinier hair from root to tip. Application of our signature stimulating sugar scrub is also beneficial and recommended every six weeks for dry or oily scalp, dandruff, seborrhea dermatitis and psoriasis.',
          price: '$75+',
          details: ['1hr'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/AQWK3S2KVDJL4XDAVOOM2PGE',
        },
        {
          id: 7,
          name: 'Scalp Treatment with Partial Loc Retwist',
          description: 'Application of mild scalp antiseptic, and oil scalp massage with a partial loc retwist (perimeter, half head or less), and basic style. Great for saving curls, waves or crinkles from previous style. (Stylist reserves the right to determine if scalp treatment is feasible.)',
          price: '$70+',
          details: ['45mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/TTA5IRGU5S5TAPO4F2EPGICU',
        },
        {
          id: 8,
          name: 'Scalp Treatment with Full Loc Retwist',
          description: 'Application of mild stimulating scalp antiseptic, oil, and scalp massage with a full head loc retwist (more than half head), and basic style. Great for saving curls, waves or crinkles from previous style. (Stylist reserves the right to determine if scalp treatment is feasible.)',
          price: '$75+',
          details: ['1hr 30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/2BDBP3FUG7NWB5HD5ON65HAI',
        },
        {
          id: 9,
          name: 'Add-on Protein Treatment',
          description: 'Strengthens hair, helps prevent breakage, repairs damage, and restores elasticity. Offered in conjunction with additional hair services only.',
          price: '$35',
          details: ['20mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/JEKJXFWGXPUWJ6XZIPL3BDZN',
        },
        {
          id: 10,
          name: 'Add-on Deep Conditioning Treatment',
          description: 'Restores shine and luster, moisturizes scalp to reduce itching and flaking. Penetrates hair shaft to impart moisture, improve texture, help reduce breakage and split ends. Especially recommended for color- or chemically-treated hair. Offered in conjunction with additional hair services only.',
          price: '$30',
          details: ['20mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/XUIYAUAMORI7HYAY5WC7EHYT',
        },
        {
          id: 11,
          name: 'Add-on Hot Oil Treatment',
          description: 'Moisturizes and strengthens hair and scalp tp eliminate dry scalp, dandruff, breakage and frizz. Helps stimulate blood flow to scalp to produce more healthy growing hair. Offered in conjunction with additional hair services only.',
          price: '$30',
          details: ['25mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/U6YJBD6X25XUVFBOQZDLPOUL',
        },
        {
          id: 12,
          name: 'Add-on Anti-Itch Treatment',
          description: 'Detoxifying scalp treatment, followed by anti-itch dandruff shampoo, scalp solution application and stimulating oil scalp massage',
          price: '$21',
          details: ['15mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/FW65VU6NWQULE6QNTCUSVKHA'
        },
        {
          id: 13,
          name: 'Add-on Deep Protein Cocktail',
          description: '',
          price: '$60',
          details: ['35mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/HWFUEBDD6YU3ZIFKUJFDCSA4',
        },
        {
          id: 14,
          name: 'Color Services',
          desription: 'We use top-quality products to provide your perfect color while maintaining the integrity and health of your hair, Prices may vary depending on desired color and hair length.',
          price: '$85+',
          details: ['45mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/EAFXZOUXLJWLSNPOFSXUVWUD',
        }
        // Add more services
      ],
      estheticsServices: [
        {
          id: 1,
          name: 'Beard Maintenance',
          description: 'Trimming and blade edging with beard cleansing and hot towel deep conditioning service',
          price: '$20',
          details: ['30mins'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/5WYS4XFVOWRZ3KV2QE24P3HX',
        },
        {
          id: 2,
          name: 'Lash Application',
          description: 'Application of false lashes',
          price: '$20+',
          details: ['30mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/GKZFTDZM56XXPA3D4PO3XETB',
        },
        {
          id: 3,
          name: 'Facial Waxing',
          description: 'Removal of hair from the follicle using wax.',
          price: '$10+',
          details: ['10mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/FVIJHYZVTOKR2DJQL56KOBFI',
        },
        {
          id: 4,
          name: 'Make-Up',
          description: 'Make-up application for photoshoots, special occasions, or simply a night on the town',
          price: '$35',
          details: ['15mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/7APGSVTB325DCD6FB6KYDTWA',
        },
        {
          id: 5,
          name: 'Brow Shaping',
          description: 'Shaping of brows including gel or pencil fill-in',
          price: '$15+',
          details: ['20mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/4TUTRAPH4QLHMDTDTV5GDGA7',
        },
        {
          id: 6,
          name: 'Special Events',
          description: 'Wedding, prom, anniversary, photo shoot or class reunion... if you want to look extra special we provide convenient on-site hair and/or make-up services or you can reserve the salon for parties of three or more.',
          price: 'Call for pricing.',
          details: ['15mins+'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/G42VA5MQTGKXY7EXP47ZB5RA'
        }
      ],
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
      ]
    }
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
