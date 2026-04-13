<script setup lang="ts">
import { useSeo } from '../composables/useSeo.ts'
import { ref, onMounted, onUnmounted } from 'vue'

const servicesContainer = ref<HTMLElement | null>(null);
const currentServiceIndex = ref<number>(0);
const addonsContainer = ref<HTMLElement | null>(null);
const currentAddonIndex = ref<number>(0);

const scrollToServiceIndex = (index: number): void => {
  if (!servicesContainer.value) return;

  const slideWidth: number = servicesContainer.value.offsetWidth;
  servicesContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth',
  });
}

const handleServiceScroll = (): void => {
  if (!servicesContainer.value) return;

  const slideWidth: number = servicesContainer.value.offsetWidth;
  const scrollPosition: number = servicesContainer.value.scrollLeft;
  currentServiceIndex.value = Math.round(scrollPosition / slideWidth);
}

const scrollToAddonIndex = (index: number): void => {
  if (!addonsContainer.value) return;

  const slideWidth: number = addonsContainer.value.offsetWidth;
  addonsContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth',
  });
}

const handleAddonScroll = (): void => {
  if (!addonsContainer.value) return;

  const slideWidth: number = addonsContainer.value.offsetWidth;
  const scrollPosition: number = addonsContainer.value.scrollLeft;
  currentAddonIndex.value = Math.round(scrollPosition / slideWidth);
}

onMounted((): void => {
  if (servicesContainer.value) {
    servicesContainer.value.addEventListener('scroll', handleServiceScroll);
  }
  if (addonsContainer.value) {
    addonsContainer.value.addEventListener('scroll', handleAddonScroll);
  }
});

onUnmounted((): void => {
  if (servicesContainer.value) {
    servicesContainer.value.removeEventListener('scroll', handleServiceScroll);
  }
  if (addonsContainer.value) {
    addonsContainer.value.addEventListener('scroll', handleAddonScroll);
  }
});

const route = useRoute();

// Basic usage for a service page
useSeo({
  title: 'Nail Services',
  description: 'Luxurious nail care services including manicures, pedicures, gel extensions, and custom nail art in Winston Salem. Professional nail technicians dedicated to quality and creativity.',
  path: route.path,
  keywords: ['nail salon', 'manicure', 'pedicure', 'gel nails', 'nail extensions', 'nail art', 'nail design', 'gel polish', 'acrylic nails'],
});
</script>

<template>
  <MainNavbar />
  <ServicePageSectionNav pageName="nail-care" :sections="nailCareSections" />
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative h-[70vh] overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-dark-green/95 to-dark-green/50"></div>
      <div class="relative h-full container mx-auto px-6 flex items-center">
        <div class="text-[#522413] max-w-2xl bg-white p-10 rounded-xl">
          <h2 class="text-5xl font-bold mb-4">Nail Services</h2>
          <p class="text-xl text-accent">Luxury nail care and artistic designs for every occasion</p>
        </div>
      </div>
    </section>



    <!-- Service Categories -->
    <div class="bg-dark-green/20 py-16 px-6">
      <div class="container mx-auto">
        <!-- General Services -->
        <section id="services" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h3 class="text-3xl font-bold text-[#522413]">Services</h3>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="relative">
            <div ref="servicesContainer"
              class="flex lg:grid lg:grid-cols-2 gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
              <article v-for="service in nailServices" :key="service.id"
                class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between min-w-[85vw] lg:min-w-0 snap-center">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h4 class="text-xl font-bold text-[#522413]">{{ service.name }}</h4>
                    <p class="text-[#522413]/70">{{ service.description }}</p>
                  </div>
                  <span class="text-accent font-bold whitespace-nowrap">{{ service.displayPrice }}</span>
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
              <button v-for="(service, index) in nailServices" :key="`dot-${service.id}`"
                @click="scrollToServiceIndex(index)" class="w-2 h-2 rounded-full transition-all duration-300"
                :class="currentServiceIndex === index ? 'bg-accent w-4' : 'bg-accent/30'"
                aria-label="Go to service"></button>
            </div>
          </div>
        </section>

        <!-- Add-ons -->
        <section id="add-ons">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-[#522413]">Service Add-ons</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="relative">
            <div ref="addonsContainer"
              class="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
              <div v-for="addon in addOns" :key="addon.id"
                class="bg-white p-6 rounded-lg shadow-md text-center min-w-[85vw] md:min-w-0 snap-center">
                <h3 class="text-xl font-bold text-[#522413] mb-2">{{ addon.name }}</h3>
                <p class="text-[#522413]/70 mb-4">{{ addon.description }}</p>
                <section class="flex justify-between items-center">
                  <span class="text-accent font-bold">+{{ addon.price }}</span>
                  <div class="flex gap-2 flex-wrap">
                    <a :href="addon.link" target="_blank"
                      class="bg-accent text-white px-4 py-2 rounded-full hover:bg-dark-green transition-colors">
                      Book Now
                    </a>
                  </div>
                </section>
              </div>
            </div>

            <!-- Navigation Dots (Mobile Only) -->
            <div class="flex justify-center gap-2 mt-4 md:hidden">
              <button v-for="(addon, index) in addOns" :key="`dot-${addon.id}`" @click="scrollToAddonIndex(index)"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="currentAddonIndex === index ? 'bg-accent w-4' : 'bg-accent/30'"
                aria-label="Go to add-on"></button>
            </div>
          </div>
        </section>
      </div>
    </div>



    <!-- Care Tips -->
    <section class="bg-dark-green/20 text-[#522413] py-16 px-6">
      <div class="container mx-auto">
        <h3 class="text-3xl font-bold mb-12 text-center">Nail Care Tips</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(tip, index) in careTips" :key="index" class="bg-white rounded-lg p-6 backdrop-blur-sm">
            <h4 class="text-xl font-bold mb-3">{{ tip.title }}</h4>
            <p class="text-[#522413]/80">{{ tip.content }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking CTA -->
    <section class="py-16 px-6">
      <div class="container mx-auto max-w-4xl text-center">
        <h3 class="text-3xl font-bold text-[#522413] mb-6">Ready for Beautiful Nails?</h3>
        <p class="text-lg text-[#522413]/80 mb-8">
          Book your appointment today and let our expert nail technicians create your perfect look.
        </p>
        <div class="flex gap-4 justify-center">
          <a href="https://app.squareup.com/appointments/book/55614969-c9c8-4268-a409-b631cbb6574b/9F5K62XVNWWGR/start"
            target="_blank"
            class="bg-accent text-white px-8 py-4 rounded-full hover:bg-dark-green transition-all duration-300">
            Book Online
          </a>
          <a href="mailto:makayah1@gmail.com"
            class="border-2 border-accent text-accent px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </section>
    <MainFooter />
  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
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
    const nailSpaCategory = catalogItems?.category.find(category => category.name === 'Nail Spa');
    const feeCategory = catalogItems?.category.find(category => category.name === 'Fees');
    const nailSpaServices = catalogItems?.item.filter(item => (item.categories?.find((category) => category.id === nailSpaCategory?.id) && !item.categories?.find((category) => category.id === feeCategory?.id)) || false);

    return {
      nailCareSections: ['Services', 'Add-Ons'],
      nailServices: nailSpaServices,
      addOns: [{
        id: 1,
        name: 'Frenchie Design Add-On',
        description: 'this service is a add on design to your full set of nails in any color of your choice (commonly done in white). ',
        price: '$20',
        details: ['30mins+'],
        link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/ZX5JU3F6YROHYIYEAU5EL3HS',
      }, {
        id: 2,
        name: 'Airbrush Add-On',
        description: 'This service is intended to be an add-on airbrush nail aura design to your fullset of nails. ',
        price: '$10',
        details: ['15mins'],
        link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/ZRIK5EFZB2T5QFWTG6SKTFZZ',
      }, {
        id: 3,
        name: 'Freehand Nail Design Add-On',
        description: '',
        price: '$20',
        details: ['30mins'],
        link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/O2V64P2JPJPF6BH5TFA4N5DO',
      }, {
        id: 4,
        name: 'Manicure Add-On',
        description: '',
        price: '$30',
        details: ['30mins'],
        link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/XIYALMZ2L2EPLL75IVQ33U6S',
      }, {
        id: 5,
        name: 'Paraffin Wax Add-On',
        description: '',
        price: '$10',
        details: ['30mins'],
        link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/7JCMIO66NWRJV4U6QMCIHCWW',
      }, {
        id: 6,
        name: 'Cut Down On Toes Add-On',
        description: '',
        price: '$15',
        details: ['10mins'],
        link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/6OAKCTAROS5KHLW3ALUNOULX',
      }, {
        id: 7,
        name: 'Cut Down On Nails Add-On',
        description: '',
        price: '$3',
        details: ['5mins'],
        link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/6EHSQG2LJAIC55WFWNLNBVVM',
      }],
      careTips: [{
        title: 'Moisturize Daily',
        content: 'Keep your cuticles and hands hydrated with quality moisturizer.',
      }, {
        title: 'Protect Your Nails',
        content: 'Wear gloves when doing dishes or using cleaning products.',
      }, {
        title: 'Regular Maintenance',
        content: 'Schedule appointments every 2-3 weeks for gel/acrylics.',
      }, {
        title: 'Proper Care',
        content: 'Avoid using nails as tools to prevent breakage and damage.',
      }],
    }
  },
}
</script>
<style scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
