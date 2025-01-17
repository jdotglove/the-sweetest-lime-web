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
      <div class="absolute inset-0 bg-gradient-to-r from-dark-green/95 to-dark-green/50"></div>
      <div class="relative h-full container mx-auto px-6 flex items-center">
        <div class="text-primary rounded-xl max-w-2xl bg-white p-10">
          <h2 class="text-5xl font-bold mb-4">Body Work & Spa</h2>
          <p class="text-xl text-accent">Rejuvenate your body and calm your mind with our therapeutic treatments</p>
        </div>
      </div>
    </section>

    <!-- Quick Navigation -->
    <nav class="sticky top-0 z-40 bg-secondary/95 backdrop-blur-md shadow-md">
      <div class="container mx-auto px-6">
        <ul class="flex overflow-x-auto gap-8 py-4 text-primary font-medium">
          <li v-for="section in ['Massage', 'Add-ons']" :key="section">
            <a :href="`#${section.toLowerCase().replace(' ', '-')}`"
              class="hover:text-accent transition-colors whitespace-nowrap">
              {{ section }}
            </a>
          </li>
        </ul>
      </div>
    </nav>

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
              <section class="flex items-center justify-between">
                <div class="flex gap-2 h-fit  flex-wrap">
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
