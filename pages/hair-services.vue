<script setup lang="ts">
import { useSeo } from '../composables/useSeo';

const route = useRoute()

// Basic usage for a service page
useSeo({
  title: 'Hair Services',
  description: 'Expert hair styling, braid, cutting, treatment, and coloring services in Winston Salem. Book your appointment today.',
  image: '/images/hair-services-share.jpg',
  path: route.path,
  keywords: ['hair salon', 'hair styling', 'hair coloring', 'haircut', 'loc', 'dreadlocs', 'braids', 'treatment']
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
        <div class="text-primary bg-white/65 max-w-2xl p-10 rounded-xl">
          <h2 class="text-5xl font-bold mb-4">Hair Services</h2>
          <p class="text-xl text-accent">Transform your style with our expert hair care services</p>
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
          <li v-for="section in ['Locs', 'Braids', 'Styling', 'Treatments']" :key="section">
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
    <div class="bg-dark-green/20 py-16 px-6">
      <div class="container mx-auto">
        <!-- Locs Services -->
        <section id="locs" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-primary">Locs Services</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="service in locsServices" :key="service.id"
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

        <!-- Braids Services -->
        <section id="braids" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bold text-primary">Braids Services</h2>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="service in braidsServices" :key="service.id"
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
    <section class="py-16 px-6 text-primary relative overflow-hidden">
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
    <section class="py-16 px-6 bg-dark-green/20">
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
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


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
      locsServices: [
        {
          id: 1,
          name: 'Stater Loc Maintenance (locs less than 12 months old)',
          description: 'Shampoo, reparting (if necessary) and retwist of starter locs',
          price: '$100+',
          details: ['2hrs+']
        },
        {
          id: 2,
          name: 'Starter Locs (with Starter Locs Care Kit)',
          description: 'Includes shampoo, protein treatment, and appropriate starter twists (comb or two-strand twists) as determined by hair type. Price may vary depending on the thickness and density of hair.',
          price: '$190+',
          details: ['2hrs 30mins+']
        },
        {
          id: 3,
          name: 'Starter Micro-Loc Maintenance (micro-locs less than 12 months old)',
          description: 'Shampoo, reparting (if necessary), and retwisting of starter micro-locs',
          price: '$160+',
          details: ['2hrs 30mins+']
        },
        {
          id: 4,
          name: 'Starter Micro-Locs (with Starter Loc Kit)',
          description: 'Includes shampoo, protein treatment, and appropriate starter twists (comb or two-strand twists) as determined by hair type. Price may vary depending on the thickness and density of hair.',
          price: '$215+',
          details: ['3hrs 30mins+']
        },
        {
          id: 5,
          name: 'Microloc Maintenance',
          description: '',
          price: '$155+',
          details: ['2hrs 30mins+']
        },
        {
          id: 6,
          name: 'Loc Reattachment/Repair',
          description: 'Reattachment of YOUR OWN broken or previously cut locs. For mass reattachments (more than 15 locs) schedule a free consultation.',
          price: '$10+',
          details: ['15mins']
        },
        {
          id: 7,
          name: 'Loc Perimeter Retwist with Basic Style',
          description: 'Cleansing & oiling scalp, and retwisting perimeter locs with a basic style (bun, ponytail, fishtail, etc.)',
          price: '$60+',
          details: ['30mins+']
        }
        // Add more services
      ],
      braidsServices: [
        {
          id: 1,
          name: 'Freestyle Braids',
          description: 'Natural Hair',
          price: '$180+',
          details: ['30mins']
        },
        {
          id: 2,
          name: 'Stitch Braids',
          description: 'Natural Hair/Feed In',
          price: '$100',
          details: ['30mins']
        },
        {
          id: 3,
          name: 'Knotless Braids',
          description: 'Hair Included',
          price: '$210+',
          details: ['4hrs 30mins+']
        },
        {
          id: 4,
          name: 'Box Braids',
          description: 'Hair Included',
          price: '$250+',
          details: ['4hrs 30mins+']
        },
        {
          id: 5,
          name: 'Fulani Braids - Waist Length',
          description: '',
          price: '$265',
          details: ['6hrs']
        },
        {
          id: 6,
          name: 'Two Braids w/ Design',
          description: '',
          price: '$85',
          details: ['30mins']
        },
        {
          id: 7,
          name: 'Two Braids (no hair added)',
          description: '',
          price: '$65',
          details: ['30mins']
        },
        {
          id: 8,
          name: 'Two Braids',
          description: '',
          price: '$75',
          details: ['30mins']
        }
        // Add more services
      ],
      stylingServices: [
        {
          id: 1,
          name: 'Loc Styling - Basic',
          description: 'Basic styles include bun, ponytail, up to two fishtails or two cornrows',
          price: '$25+',
          details: ['30mins',]
        },
        {
          id: 2,
          name: 'Loc Styling - Standard',
          description: 'Intermediate styles include two or more ponytails or buns and three or more fishtails or cornrows. ',
          price: '$35+',
          details: ['45mins']
        },
        {
          id: 3,
          name: 'Loc Styling - Intricate',
          description: 'Complex styles include: individual plaits, two-strand twists, petals, pipecleaner styles, flexi- or rod-sets or styles including any of the above; and creative hair designs for special occasions.',
          price: '$45+',
          details: ['1hr']
        }
        // Add more services
      ],
      treatmentServices: [
        {
          id: 1,
          name: 'Keratin Treatment',
          description: 'Injects porous areas or hair strand with keratin, an essential hair protein to smooth and shine hair. Allows you to alternate between naturally curly and straight hair. Results can last up to six months.',
          price: '$210+',
          details: ['2hrs 30mins']
        },
        {
          id: 2,
          name: 'Relaxer with Trim',
          description: 'A chemical treatment that straightens curly hair by breaking down the bonds in the hair shaft and lasts from 6 - 12 weeks depending on hair texture and growth Consultation REQUIRED for a corrective relaxer.',
          price: '$125+',
          details: ['1hr+']
        },
        {
          id: 3,
          name: 'Permanent Wave with Trim',
          description: 'Hair is set in loose to tight curls or waves, then treated with a chemical solution allowing curls to last for several months',
          price: '$95+',
          details: ['1hr 40mins+']
        },
        {
          id: 4,
          name: 'Texturizer',
          description: 'A mild version of a chemical hair relaxer to loosen the natural curl pattern without completely straightening it.',
          price: '$85+',
          details: ['45mins+']
        },
        {
          id: 5,
          name: 'Detoxifying Treatment',
          description: 'Helps absorb excess oil and product build-up, and pulls out toxins (including environmental, medicinal, chemo and radiation) to purify and restore proper balance to hair.',
          price: '$60+',
          details: ['45mins']
        },
        {
          id: 6,
          name: 'Scalp Exfoliation',
          description: 'Soothing and stress-relieving treatment used to invigorate the scalp and create healthier, shinier hair from root to tip. Application of our signature stimulating sugar scrub is also beneficial and recommended every six weeks for dry or oily scalp, dandruff, seborrhea dermatitis and psoriasis.',
          price: '$75+',
          details: ['1hr']
        }
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
