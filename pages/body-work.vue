<script setup lang="ts">
import { useSeo } from '../composables/useSeo';

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
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative h-[70vh] overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-dark-green/95 to-dark-green/50">
        <!-- Hero Leaf Pattern Overlay -->
        <div class="inset-0 pointer-events-none overflow-hidden opacity-10">

          <!-- Scattered Small Leaves -->
          <svg class="absolute top-1/4 right-3/5 w-32 h-32 text-accent transform rotate-45" viewBox="0 0 100 100"
            fill="currentColor">
            <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" />
          </svg>
          <svg class="absolute top-1/3 right-2/3 w-32 h-32 text-accent transform rotate-45" viewBox="0 0 100 100"
            fill="currentColor">
            <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" />
          </svg>
          <svg class="absolute bottom-2/3 left-2/3 w-24 h-24 text-accent transform -rotate-45" viewBox="0 0 100 100"
            fill="currentColor">
            <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" />
          </svg>
          <svg class="absolute bottom-1/3 left-1/3 w-24 h-24 text-accent transform -rotate-45" viewBox="0 0 100 100"
            fill="currentColor">
            <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" />
          </svg>
          <svg class="absolute top-2/4 right-2/4 w-32 h-32 text-accent transform rotate-45" viewBox="0 0 100 100"
            fill="currentColor">
            <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" />
          </svg>
          <svg class="absolute bottom-1/3 left-1/3 w-24 h-24 text-accent transform -rotate-45" viewBox="0 0 100 100"
            fill="currentColor">
            <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" />
          </svg>
        </div>
      </div>
      <div class="relative h-full container mx-auto px-6 flex items-center">
        <div class="text-primary rounded-xl max-w-2xl bg-white/65 p-10">
          <h2 class="text-5xl font-bold mb-4">Body Work & Spa</h2>
          <p class="text-xl text-accent">Rejuvenate your body and calm your mind with our therapeutic treatments</p>
        </div>
      </div>
    </section>

    <!-- Quick Navigation -->
    <nav class="sticky top-0 z-40 bg-secondary/95 backdrop-blur-md shadow-md">
      <div class="container mx-auto px-6">
        <ul class="flex overflow-x-auto gap-8 py-4 text-primary font-medium">
          <li v-for="section in ['Massage', 'Body Treatments', 'Packages', 'Add-ons']" :key="section">
            <a :href="`#${section.toLowerCase().replace(' ', '-')}`"
              class="hover:text-accent transition-colors whitespace-nowrap">
              {{ section }}
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Featured Packages -->
    <section class="py-16 px-6">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-primary mb-12 text-center">Popular Packages</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="featuredPackage in featuredPackages" :key="featuredPackage.id"
            class="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="p-6">
              <h3 class="text-xl font-bold text-primary mb-2">{{ featuredPackage.name }}</h3>
              <p class="text-primary/70 mb-4">{{ featuredPackage.description }}</p>
              <ul class="space-y-2 mb-6">
                <li v-for="(item, index) in featuredPackage.includes" :key="index"
                  class="flex items-center gap-2 text-primary/80">
                  <span class="text-accent">✓</span>
                  {{ item }}
                </li>
              </ul>
              <div class="flex justify-between items-center">
                <span class="text-accent font-bold text-xl">{{ featuredPackage.price }}</span>
                <span class="text-primary/60">{{ featuredPackage.duration }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Categories -->
    <div class="bg-dark-green/20 py-16 px-6">
      <div class="container mx-auto">
        <!-- Massage Services -->
        <section id="massage" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-primary">Massage Therapy</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="service in massageServices" :key="service.id"
              class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-bold text-primary">{{ service.name }}</h3>
                  <p class="text-primary/70">{{ service.description }}</p>
                </div>
                <div class="text-right">
                  <div class="text-accent font-bold">{{ service.price }}</div>
                  <div class="text-sm text-primary/60">{{ service.duration }}</div>
                </div>
              </div>
              <div class="flex gap-2 flex-wrap">
                <span v-for="(detail, idx) in service.details" :key="idx"
                  class="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                  {{ detail }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- Body Treatments -->
        <section id="body-treatments" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-primary">Body Treatments</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="treatment in bodyTreatments" :key="treatment.id"
              class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-bold text-primary">{{ treatment.name }}</h3>
                  <p class="text-primary/70">{{ treatment.description }}</p>
                </div>
                <div class="text-right">
                  <div class="text-accent font-bold">{{ treatment.price }}</div>
                  <div class="text-sm text-primary/60">{{ treatment.duration }}</div>
                </div>
              </div>
              <div class="flex gap-2 flex-wrap">
                <span v-for="(benefit, idx) in treatment.benefits" :key="idx"
                  class="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                  {{ benefit }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- Add-ons -->
        <section id="add-ons">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-primary">Service Add-ons</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div v-for="addon in addOns" :key="addon.id" class="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 class="text-xl font-bold text-primary mb-2">{{ addon.name }}</h3>
              <p class="text-primary/70 mb-4">{{ addon.description }}</p>
              <span class="text-accent font-bold">+{{ addon.price }}</span>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Benefits Section -->
    <section class="py-16 px-6 text-primary">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Benefits of Regular Body Work</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(benefit, index) in benefits" :key="index" class="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h3 class="text-xl font-bold mb-3">{{ benefit.title }}</h3>
            <p class="text-primary/80">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 px-6 bg-dark-green/20">
      <div class="container mx-auto max-w-3xl">
        <h2 class="text-3xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="border border-accent/20 rounded-lg overflow-hidden">
            <button class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent/5"
              @click="faq.isOpen = !faq.isOpen">
              <span class="font-medium text-primary">{{ faq.question }}</span>
              <span class="text-accent">{{ faq.isOpen ? '−' : '+' }}</span>
            </button>
            <div v-if="faq.isOpen" class="px-6 py-4 bg-secondary/50 text-primary/80">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking CTA -->
    <section class="py-16 px-6">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-bold text-primary mb-6">Ready to Relax?</h2>
        <p class="text-lg text-primary/80 mb-8">
          Book your spa experience today and let our expert therapists help you unwind.
        </p>
        <div class="flex gap-4 justify-center">
          <button class="bg-accent text-white px-8 py-4 rounded-full hover:bg-dark-green transition-all duration-300">
            Book Online
          </button>
          <button
            class="border-2 border-accent text-accent px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
            Contact Us
          </button>
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
          details: ['Stress relief', 'Improved circulation', 'Relaxation']
        },
        {
          id: 2,
          name: 'Deep Tissue Massage',
          description: 'A massage technique using slow, deep strokes and pressure to target chronic muscle tension and pain. It\'s often used to treat injuries and chronic pain, improve range of motion, increase blood flow, and reduce inflammation.',
          price: '$150+',
          duration: '90mins',
          details: ['Pain relief', 'Muscle recovery', 'Tension release']
        },
      ],
      bodyTreatments: [
        {
          id: 1,
          name: 'Body Scrub',
          description: 'Full body exfoliation treatment',
          price: '$75',
          duration: '45 min',
          benefits: ['Exfoliation', 'Skin renewal', 'Hydration']
        },
        {
          id: 2,
          name: 'Aromatherapy Wrap',
          description: 'Nourishing body wrap with essential oils',
          price: '$95',
          duration: '60 min',
          benefits: ['Detoxification', 'Moisturizing', 'Relaxation']
        }
      ], addOns: [
        {
          id: 1,
          name: 'Aromatherapy',
          description: 'Essential oil therapy',
          price: '$15'
        },
        {
          id: 2,
          name: 'Hot Stones',
          description: 'Added to any massage',
          price: '$20'
        },
        {
          id: 3,
          name: 'Scalp Massage',
          description: '15-minute add-on',
          price: '$25'
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
