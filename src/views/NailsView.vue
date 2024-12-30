<template>
  <div class="min-h-screen bg-background">
    <Navbar />
    <!-- Hero Section -->
    <section class="relative h-[40vh] overflow-hidden">
      <div class="absolute inset-0 bg-primary/90">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
      <div class="relative h-full container mx-auto px-6 flex items-center">
        <div class="text-secondary max-w-2xl">
          <h2 class="text-5xl font-bold mb-4">Nail Services</h2>
          <p class="text-xl">Luxury nail care and artistic designs for every occasion</p>
        </div>
      </div>
    </section>

    <!-- Quick Navigation -->
    <nav class="sticky top-0 z-40 bg-secondary/95 backdrop-blur-md shadow-md">
      <div class="container mx-auto px-6">
        <ul class="flex overflow-x-auto gap-8 py-4 text-primary font-medium">
          <li v-for="section in ['Manicures', 'Pedicures', 'Extensions', 'Art']" :key="section">
            <a :href="`#${section.toLowerCase()}`" class="hover:text-accent transition-colors whitespace-nowrap">
              {{ section }}
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Design Showcase -->
    <section class="py-16 px-6">
      <div class="container mx-auto">
        <h3 class="text-3xl font-bold text-primary mb-8 text-center">Trending Designs</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="i in 8" :key="i"
            class="aspect-square bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer">
            <div class="w-full h-full bg-primary/10"></div>
          </div>
        </div>
        <div class="text-center mt-8">
          <button class="text-accent hover:text-dark-green transition-colors">
            View More Designs →
          </button>
        </div>
      </div>
    </section>

    <!-- Service Categories -->
    <div class="bg-light-green/10 py-16 px-6">
      <div class="container mx-auto">
        <!-- Manicures -->
        <section id="manicures" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h3 class="text-3xl font-bold text-primary">Manicure Services</h3>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="service in manicureServices" :key="service.id"
              class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h4 class="text-xl font-bold text-primary">{{ service.name }}</h4>
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

        <!-- Pedicures -->
        <section id="pedicures" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h3 class="text-3xl font-bold text-primary">Pedicure Services</h3>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="service in pedicureServices" :key="service.id"
              class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h4 class="text-xl font-bold text-primary">{{ service.name }}</h4>
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

        <!-- Extensions -->
        <section id="extensions" class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <h3 class="text-3xl font-bold text-primary">Nail Extensions</h3>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="service in extensionServices" :key="service.id"
              class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h4 class="text-xl font-bold text-primary">{{ service.name }}</h4>
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

        <!-- Nail Art -->
        <section id="art">
          <div class="flex items-center gap-4 mb-8">
            <h3 class="text-3xl font-bold text-primary">Nail Art & Designs</h3>
            <div class="flex-grow h-px bg-accent/20"></div>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="service in artServices" :key="service.id"
              class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h4 class="text-xl font-bold text-primary">{{ service.name }}</h4>
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

    <!-- Add-Ons Section -->
    <section class="py-16 px-6">
      <div class="container mx-auto">
        <h3 class="text-3xl font-bold text-primary text-center mb-12">Service Add-Ons</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="addon in addOns" :key="addon.id" class="bg-secondary rounded-lg p-6 text-center">
            <h4 class="text-xl font-bold text-primary mb-2">{{ addon.name }}</h4>
            <p class="text-primary/70 mb-4">{{ addon.description }}</p>
            <span class="text-accent font-bold">+{{ addon.price }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Care Tips -->
    <section class="bg-primary text-secondary py-16 px-6">
      <div class="container mx-auto">
        <h3 class="text-3xl font-bold mb-12 text-center">Nail Care Tips</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(tip, index) in careTips" :key="index" class="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h4 class="text-xl font-bold mb-3">{{ tip.title }}</h4>
            <p class="text-secondary/80">{{ tip.content }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking CTA -->
    <section class="py-16 px-6">
      <div class="container mx-auto max-w-4xl text-center">
        <h3 class="text-3xl font-bold text-primary mb-6">Ready for Beautiful Nails?</h3>
        <p class="text-lg text-primary/80 mb-8">
          Book your appointment today and let our expert nail technicians create your perfect look.
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
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  data() {
    return {
      manicureServices: [
        {
          id: 1,
          name: 'Classic Manicure',
          description: 'Basic nail care with regular polish',
          price: '$35',
          details: ['30 minutes', 'Includes massage', 'Regular polish']
        },
        {
          id: 2,
          name: 'Gel Manicure',
          description: 'Long-lasting gel polish with nail care',
          price: '$45',
          details: ['45 minutes', 'LED cured', '2-3 weeks lasting']
        },
        {
          id: 3,
          name: 'Luxury Manicure',
          description: 'Premium treatment with extended massage',
          price: '$55',
          details: ['60 minutes', 'Paraffin treatment', 'Premium products']
        }
      ],
      pedicureServices: [
        {
          id: 1,
          name: 'Classic Pedicure',
          description: 'Essential foot care with regular polish',
          price: '$45',
          details: ['45 minutes', 'Foot massage', 'Regular polish']
        },
        {
          id: 2,
          name: 'Gel Pedicure',
          description: 'Long-lasting gel polish with foot care',
          price: '$55',
          details: ['60 minutes', 'LED cured', 'Extended massage']
        },
        {
          id: 3,
          name: 'Luxury Spa Pedicure',
          description: 'Premium foot treatment with extras',
          price: '$75',
          details: ['75 minutes', 'Hot stone massage', 'Paraffin treatment']
        }
      ],
      extensionServices: [
        {
          id: 1,
          name: 'Acrylic Full Set',
          description: 'Full set of acrylic extensions',
          price: '$65+',
          details: ['90 minutes', 'Customizable length', 'Natural look']
        },
        {
          id: 2,
          name: 'Gel-X Extensions',
          description: 'Natural-looking gel extensions',
          price: '$75+',
          details: ['75 minutes', 'Lightweight', 'Less damage']
        }
      ],
      artServices: [
        {
          id: 1,
          name: 'Basic Art',
          description: 'Simple designs on 1-2 nails',
          price: '$5+ per nail',
          details: ['Geometric', 'French tips', 'Simple patterns']
        },
        {
          id: 2,
          name: 'Advanced Art',
          description: 'Complex designs and patterns',
          price: '$10+ per nail',
          details: ['3D effects', 'Hand-painted', 'Crystals']
        }
      ],
      addOns: [
        {
          id: 1,
          name: 'French Tips',
          description: 'Classic white tips design',
          price: '$10'
        },
        {
          id: 2,
          name: 'Paraffin Treatment',
          description: 'Deep moisturizing treatment',
          price: '$15'
        },
        {
          id: 3,
          name: 'Nail Repair',
          description: 'Fix broken or damaged nails',
          price: '$5 per nail'
        }
      ],
      careTips: [
        {
          title: 'Moisturize Daily',
          content: 'Keep your cuticles and hands hydrated with quality moisturizer.'
        },
        {
          title: 'Protect Your Nails',
          content: 'Wear gloves when doing dishes or using cleaning products.'
        },
        {
          title: 'Regular Maintenance',
          content: 'Schedule appointments every 2-3 weeks for gel/acrylics.'
        },
        {
          title: 'Proper Care',
          content: 'Avoid using nails as tools to prevent breakage and damage.'
        }
      ]
    }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>
