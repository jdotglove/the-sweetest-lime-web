<template>
  <div class="min-h-screen bg-background">
    <Navbar />

    <!-- Hero Section -->
    <section class="relative h-[70vh] overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/90">
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
        <div class="text-secondary max-w-2xl">
          <h2 class="text-5xl font-bold mb-4">Hair Services</h2>
          <p class="text-xl">Transform your style with our expert hair care services</p>
        </div>
      </div>
    </section>

    <!-- Quick Navigation with Leaf Accents -->
    <nav class="sticky top-0 z-40 bg-secondary/95 backdrop-blur-md shadow-md">
      <div class="container mx-auto px-6 relative">
        <div class="absolute right-0 top-0 w-32 h-full opacity-5">
          <svg viewBox="0 0 100 100" class="h-full text-accent">
            <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" fill="currentColor" />
          </svg>
        </div>
        <ul class="flex overflow-x-auto gap-8 py-4 text-primary font-medium relative">
          <li v-for="section in ['Cutting', 'Coloring', 'Styling', 'Treatments']" :key="section">
            <a :href="`#${section.toLowerCase()}`"
              class="hover:text-accent transition-colors whitespace-nowrap relative group">
              {{ section }}
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Featured Services with Organic Design -->
    <section class="py-16 px-6">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-primary mb-12 text-center relative">
          Popular Services
          <div class="relative">
            <div class="w-24 h-1 bg-accent mx-auto mt-4"></div>
            <svg class="absolute -right-4 -top-2 w-8 h-8 text-accent transform rotate-45" viewBox="0 0 100 100">
              <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" fill="currentColor" />
            </svg>
          </div>
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="service in featuredServices" :key="service.id"
            class="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative group">
            <div
              class="absolute top-0 right-0 w-20 h-20 opacity-10 transform rotate-45 group-hover:rotate-90 transition-transform">
              <svg viewBox="0 0 100 100" class="text-accent">
                <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" fill="currentColor" />
              </svg>
            </div>

            <div class="p-6 relative">
              <h3 class="text-xl font-bold text-primary mb-2">{{ service.name }}</h3>
              <p class="text-primary/70 mb-4">{{ service.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-accent font-bold">{{ service.price }}</span>
                <button class="bg-accent text-white px-4 py-2 rounded-full hover:bg-dark-green transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Categories -->
    <div class="bg-light-green/10 py-16 px-6">
      <div class="container mx-auto">
        <!-- Cutting Services -->
        <section id="cutting" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-primary">Cutting Services</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="service in cuttingServices" :key="service.id"
              class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-bold text-primary">{{ service.name }}</h3>
                  <p class="text-primary/70">{{ service.description }}</p>
                </div>
                <span class="text-accent font-bold whitespace-nowrap">{{ service.price }}</span>
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

        <!-- Coloring Services -->
        <section id="coloring" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-primary">Coloring Services</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="service in coloringServices" :key="service.id"
              class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-bold text-primary">{{ service.name }}</h3>
                  <p class="text-primary/70">{{ service.description }}</p>
                </div>
                <span class="text-accent font-bold whitespace-nowrap">from {{ service.price }}</span>
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

        <!-- Styling Services -->
        <section id="styling" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-primary">Styling Services</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="service in stylingServices" :key="service.id"
              class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-bold text-primary">{{ service.name }}</h3>
                  <p class="text-primary/70">{{ service.description }}</p>
                </div>
                <span class="text-accent font-bold whitespace-nowrap">{{ service.price }}</span>
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

        <!-- Treatments -->
        <section id="treatments">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-primary">Hair Treatments</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="service in treatmentServices" :key="service.id"
              class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-bold text-primary">{{ service.name }}</h3>
                  <p class="text-primary/70">{{ service.description }}</p>
                </div>
                <span class="text-accent font-bold whitespace-nowrap">{{ service.price }}</span>
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
      </div>
    </div>

    <!-- Booking CTA with Organic Background -->
    <section class="py-16 px-6 bg-primary text-secondary relative overflow-hidden">
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
          <button class="bg-accent text-white px-8 py-4 rounded-full hover:bg-dark-green transition-all duration-300">
            Book Online
          </button>
          <button
            class="border-2 border-accent text-accent px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
            Call Us
          </button>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 px-6">
      <div class="container mx-auto max-w-3xl">
        <h2 class="text-3xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="border border-accent/20 rounded-lg overflow-hidden">
            <button class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent/5"
              @click="faq.isOpen = !faq.isOpen">
              <span class="font-medium text-primary">{{ faq.question }}</span>
              <span class="text-accent">
                {{ faq.isOpen ? '−' : '+' }}
              </span>
            </button>
            <div v-if="faq.isOpen" class="px-6 py-4 bg-secondary/50 text-primary/80">
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
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'

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
          name: 'Signature Haircut',
          description: 'Expert cutting and styling tailored to your face shape and lifestyle',
          price: '$65+'
        },
        {
          id: 2,
          name: 'Full Color',
          description: 'Complete color transformation with premium products',
          price: '$120+'
        },
        {
          id: 3,
          name: 'Balayage',
          description: 'Hand-painted highlights for a natural, sun-kissed look',
          price: '$175+'
        }
      ],
      cuttingServices: [
        {
          id: 1,
          name: 'Women\'s Haircut',
          description: 'Includes consultation, shampoo, cut, and style',
          price: '$65+',
          details: ['45-60 minutes', 'Styling included', 'Product recommendations']
        },
        {
          id: 2,
          name: 'Men\'s Haircut',
          description: 'Precision cutting with attention to detail',
          price: '$45+',
          details: ['30-45 minutes', 'Styling included']
        },
        // Add more services
      ],
      coloringServices: [
        {
          id: 1,
          name: 'Full Color',
          description: 'Single process color from root to tip',
          price: '$120+',
          details: ['2-3 hours', 'Consultation required', 'Includes toner']
        },
        {
          id: 2,
          name: 'Balayage',
          description: 'Hand-painted highlights for a natural look',
          price: '$175+',
          details: ['3-4 hours', 'Consultation required', 'Includes toner']
        },
        // Add more services
      ],
      stylingServices: [
        {
          id: 1,
          name: 'Blowout',
          description: 'Professional blow dry and style',
          price: '$45+',
          details: ['45 minutes', 'Includes wash']
        },
        {
          id: 2,
          name: 'Special Event Style',
          description: 'Formal styling for any special occasion',
          price: '$85+',
          details: ['60 minutes', 'Consultation required']
        },
        // Add more services
      ],
      treatmentServices: [
        {
          id: 1,
          name: 'Deep Conditioning',
          description: 'Intensive moisture treatment for damaged hair',
          price: '$35+',
          details: ['30 minutes', 'Heat therapy']
        },
        {
          id: 2,
          name: 'Keratin Treatment',
          description: 'Long-lasting smoothing and frizz control',
          price: '$250+',
          details: ['2-3 hours', 'Consultation required', 'Aftercare included']
        },
        // Add more services
      ],
      faqs: [
        {
          question: 'How often should I get a haircut?',
          answer: 'We recommend getting a trim every 6-8 weeks to maintain healthy hair and style. This may vary based on your hair type and style preferences.',
          isOpen: false
        },
        {
          question: 'Do you provide consultations before coloring services?',
          answer: 'Yes, we provide complimentary consultations for all color services. This helps us understand your goals and assess your hair\'s condition.',
          isOpen: false
        },
        {
          question: 'What should I do to prepare for my appointment?',
          answer: 'Come with clean, dry hair unless specified otherwise. Bring reference photos if you have a specific style in mind.',
          isOpen: false
        },
        // Add more FAQs
      ]
    }
  }
}

</script>
