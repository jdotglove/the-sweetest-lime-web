<script setup lang="ts">
import { useSeo } from '../composables/useSeo';
import { ref, onMounted, onUnmounted } from 'vue'

const addonsContainer = ref<HTMLElement | null>(null)
const currentAddonIndex = ref<number>(0)
const massageContainer = ref<HTMLElement | null>(null)
const currentMassageIndex = ref<number>(0)

const scrollToMassageIndex = (index: number): void => {
  if (!massageContainer.value) return

  const slideWidth: number = massageContainer.value.offsetWidth
  massageContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  })
}

const handleMassageScroll = (): void => {
  if (!massageContainer.value) return

  const slideWidth: number = massageContainer.value.offsetWidth
  const scrollPosition: number = massageContainer.value.scrollLeft
  currentMassageIndex.value = Math.round(scrollPosition / slideWidth)
}

const scrollToAddonIndex = (index: number): void => {
  if (!addonsContainer.value) return

  const slideWidth: number = addonsContainer.value.offsetWidth
  addonsContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  })
}

const handleAddonScroll = (): void => {
  if (!addonsContainer.value) return

  const slideWidth: number = addonsContainer.value.offsetWidth
  const scrollPosition: number = addonsContainer.value.scrollLeft
  currentAddonIndex.value = Math.round(scrollPosition / slideWidth)
}

onMounted((): void => {
  if (addonsContainer.value) {
    addonsContainer.value.addEventListener('scroll', handleAddonScroll)
  }
  if (massageContainer.value) {
    massageContainer.value.addEventListener('scroll', handleMassageScroll)
  }
})

onUnmounted((): void => {
  if (addonsContainer.value) {
    addonsContainer.value.removeEventListener('scroll', handleAddonScroll)
  }
  if (massageContainer.value) {
    massageContainer.value.removeEventListener('scroll', handleMassageScroll)
  }
})
const route = useRoute()

// Basic usage for a service page
useSeo({
  title: 'Body Work Services',
  description: 'Experience relaxation and healing with our professional massage and bodywork services in Winston Salem. Offering Swedish massage, deep tissue, and therapeutic bodywork treatments.',
  path: route.path,
  keywords: ['massage therapy', 'body work', 'swedish massage', 'deep tissue massage', 'relaxation massage', 'therapeutic massage']
})
</script>

<template>
  <Navbar />
  <!-- Quick Navigation -->
  <nav
    class="fixed w-full top-[4.5rem] lg:top-24 lg:right-0 lg:h-[10dvh] lg:w-[16dvw] lg:rounded-s-xl z-40 bg-white/95 backdrop-blur-md shadow-md">
    <div class="flex lg:flex-col h-full justify-center mx-auto px-6 relative">
      <ul class="flex lg:flex-col overflow-x-auto gap-2 py-3 text-[#522413] font-medium relative">
        <li class="" v-for="section in ['Massage', 'Add-ons']" :key="section">
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
        <div class="text-[#522413] rounded-xl max-w-2xl bg-white p-10">
          <h2 class="text-5xl font-bold mb-4">Body Work & Spa</h2>
          <p class="text-xl text-accent">Rejuvenate your body and calm your mind with our therapeutic treatments</p>
        </div>
      </div>
    </section>



    <!-- Service Categories -->
    <div class="bg-dark-green/20 py-16 px-6">
      <div class="container mx-auto">
        <!-- Massage Services -->
        <section id="massage" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-[#522413]">Massage Therapy</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="relative">
            <div ref="massageContainer"
              class="flex lg:grid lg:grid-cols-2 gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
              <div v-for="service in massageServices" :key="service.id"
                class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow min-w-[85vw] lg:min-w-0 snap-center">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h3 class="text-xl font-bold text-[#522413]">{{ service.name }}</h3>
                    <p class="text-[#522413]/70">{{ service.description }}</p>
                  </div>
                  <div class="text-right">
                    <div class="text-accent font-bold">{{ service.price }}</div>
                    <div class="text-sm text-[#522413]/60">{{ service.duration }}</div>
                  </div>
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
              </div>
            </div>

            <!-- Navigation Dots (Mobile Only) -->
            <div class="flex justify-center gap-2 mt-4 lg:hidden">
              <button v-for="(service, index) in massageServices" :key="`dot-${service.id}`"
                @click="scrollToMassageIndex(index)" class="w-2 h-2 rounded-full transition-all duration-300"
                :class="currentMassageIndex === index ? 'bg-accent w-4' : 'bg-accent/30'"
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

    <!-- Benefits Section -->
    <section class="py-16 px-6 text-[#522413]">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Benefits of Regular Body Work</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(benefit, index) in benefits" :key="index" class="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h3 class="text-xl font-bold mb-3">{{ benefit.title }}</h3>
            <p class="text-[#522413]/80">{{ benefit.description }}</p>
          </div>
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
              <span class="text-accent">{{ faq.isOpen ? '−' : '+' }}</span>
            </button>
            <div v-if="faq.isOpen" class="px-6 py-4 bg-secondary/50 text-[#522413]/80">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking CTA -->
    <section class="py-16 px-6">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-bold text-[#522413] mb-6">Ready to Relax?</h2>
        <p class="text-lg text-[#522413]/80 mb-8">
          Book your spa experience today and let our expert therapists help you unwind.
        </p>
        <div class="flex gap-4 justify-center">
          <a href="https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services?buttonTextColor=ffffff&color=006aff&locale=en&referrer=so"
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
      featuredPackages: [
        {
          id: 1,
          name: 'Ultimate Relaxation',
          description: 'Complete relaxation package with multiple treatments',
          includes: [
            '90-min Swedish Massage',
            'Aromatherapy',
            'Hot Stone Treatment',
            'Foot Reflexology'
          ],
          price: '$199',
          duration: '2.5 hours'
        },
        {
          id: 2,
          name: 'Stress Relief',
          description: 'Perfect combination for stress relief and relaxation',
          includes: [
            '60-min Deep Tissue Massage',
            'Aromatherapy',
            'Scalp Massage'
          ],
          price: '$149',
          duration: '1.5 hours'
        },
        {
          id: 3,
          name: 'Quick Refresh',
          description: 'Quick but effective relaxation treatment',
          includes: [
            '30-min Back Massage',
            'Express Facial',
            'Foot Massage'
          ],
          price: '$99',
          duration: '1 hour'
        }
      ],
      massageServices: [
        {
          id: 1,
          name: 'Swedish Massage',
          description: 'A massage therapy technique focused on relaxation and improving circulation. Typically performed on the whole body, but can also be focused on specific areas such as the back, shoulders, or neck.',
          price: '$60/$145/$180',
          duration: '30mins/90mins/2hrs',
          details: ['Stress relief', 'Improved circulation', 'Relaxation'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/AXOJBWUROTKLU6GHV3CQSVFP',
        },
        {
          id: 2,
          name: 'Deep Tissue Massage',
          description: 'A massage technique using slow, deep strokes and pressure to target chronic muscle tension and pain. It\'s often used to treat injuries and chronic pain, improve range of motion, increase blood flow, and reduce inflammation.',
          price: '$150+',
          duration: '90mins',
          details: ['Pain relief', 'Muscle recovery', 'Tension release'],
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/RIIQIN2NCJL2ZYCXVZ5N7RXW',
        },
      ],
      addOns: [
        {
          id: 1,
          name: 'Aromatherapy',
          description: '5-minute add-on',
          price: '$10',
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/CLQAZS35W4HQ3HMSZGL4XESV'
        },
        {
          id: 2,
          name: 'Hot Stones',
          description: '30-minute add-on',
          price: '$25',
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/CLQAZS35W4HQ3HMSZGL4XESV'
        },
        {
          id: 3,
          name: 'Scalp Massage',
          description: '15-minute add-on',
          price: '$20',
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/CLQAZS35W4HQ3HMSZGL4XESV'
        },
        {
          id: 4,
          name: 'Collagen Eye Treatment',
          description: '10-minute add-on',
          price: '$15',
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/CLQAZS35W4HQ3HMSZGL4XESV'
        },
        {
          id: 5,
          name: 'Peppermint Foot & Hand Scrub',
          description: '20-minute add-on',
          price: '$30',
          link: 'https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/CLQAZS35W4HQ3HMSZGL4XESV'
        }
      ],
      benefits: [
        {
          title: 'Stress Relief',
          description: 'Regular massage therapy helps reduce stress and anxiety levels.'
        },
        {
          title: 'Pain Management',
          description: 'Effective treatment for chronic pain and muscle tension.'
        },
        {
          title: 'Better Sleep',
          description: 'Improved sleep quality and relaxation.'
        }
      ],
      faqs: [
        {
          question: 'What should I expect during my first massage?',
          answer: 'Your therapist will discuss your needs and preferences before the session. You\'ll be given privacy to undress to your comfort level and lie on the massage table under a sheet.',
          isOpen: false
        },
        {
          question: 'How often should I get a massage?',
          answer: 'For optimal results, we recommend regular sessions every 4-6 weeks, but this can vary based on your individual needs and goals.',
          isOpen: false
        },
        {
          question: 'What are the contraindications for massage?',
          answer: 'Certain conditions may require medical clearance. Please inform us of any medical conditions, injuries, or pregnancies before booking.',
          isOpen: false
        }
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
