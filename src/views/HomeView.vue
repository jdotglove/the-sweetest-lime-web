<template>
  <div class="min-h-screen bg-background relative overflow-hidden">
    <Navbar />
    <!-- Decorative Leaves SVG Components -->
    <div class="inset-0 pointer-events-none overflow-hidden opacity-10">

      <!-- Scattered Small Leaves -->
      <svg class="absolute top-1/4 right-1/4 w-32 h-32 text-accent transform rotate-45" viewBox="0 0 100 100"
        fill="currentColor">
        <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" />
      </svg>
      <svg class="absolute bottom-1/3 left-1/3 w-24 h-24 text-accent transform -rotate-45" viewBox="0 0 100 100"
        fill="currentColor">
        <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" />
      </svg>

    </div>

    <!-- Hero Section -->
    <section class="relative h-[80dvh] flex items-center">
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

      <!-- Hero Content -->
      <div class="relative container mx-auto px-6 py-20">
        <div class="max-w-3xl">
          <h1 class="text-6xl font-bold text-secondary mb-6">
            Experience Luxury at
            <span class="text-accent block mt-2">The Sweetest Lime</span>
          </h1>
          <p class="text-xl text-secondary/90 mb-8 max-w-2xl">
            Your destination for premium beauty and wellness services. Where nature meets luxury,
            and every visit leaves you refreshed and renewed.
          </p>
          <div class="flex gap-4 flex-wrap">
            <button class="bg-accent text-white px-8 py-4 rounded-full hover:bg-dark-green transition-all duration-300">
              Book Appointment
            </button>
            <button
              class="border-2 border-secondary text-secondary px-8 py-4 rounded-full hover:bg-secondary/10 transition-all duration-300">
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
    <div class=" inset-0 pointer-events-none overflow-hidden opacity-10">

      <!-- Scattered Small Leaves -->
      <svg class="absolute top-1/4 right-1/4 w-32 h-32 text-accent transform rotate-45" viewBox="0 0 100 100"
        fill="currentColor">
        <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" />
      </svg>
      <svg class="absolute bottom-1/3 left-1/3 w-24 h-24 text-accent transform -rotate-45" viewBox="0 0 100 100"
        fill="currentColor">
        <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" />
      </svg>
    </div>
    <!-- Services Section with Leaf Accents -->
    <section class="py-20 px-6 relative">
      <div class="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 100 100" class="text-accent">
          <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" fill="currentColor" />
        </svg>
      </div>

      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-primary text-center mb-16">
          Our Services
          <div class="relative">
            <div class="w-24 h-1 bg-accent mx-auto mt-4"></div>
            <svg class="absolute -right-4 -top-2 w-8 h-8 text-accent transform rotate-45" viewBox="0 0 100 100">
              <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" fill="currentColor" />
            </svg>
          </div>
        </h2>

        <!-- Service Cards -->
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="service in mainServices" :key="service.id"
            class="group relative bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="absolute top-0 right-0 w-20 h-20 opacity-10 transform rotate-45">
              <svg viewBox="0 0 100 100" class="text-accent">
                <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" fill="currentColor" />
              </svg>
            </div>
            <div class="inset-0 pointer-events-none overflow-hidden opacity-10">

              <!-- Scattered Small Leaves -->
              <svg class="absolute top-1/4 right-1/4 w-32 h-32 text-accent transform rotate-45" viewBox="0 0 100 100"
                fill="currentColor">
                <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" />
              </svg>
              <svg class="absolute bottom-1/3 left-1/3 w-24 h-24 text-accent transform -rotate-45" viewBox="0 0 100 100"
                fill="currentColor">
                <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" />
              </svg>
            </div>
            <div class="p-8 relative">
              <h3 class="text-2xl font-bold text-primary mb-4">{{ service.name }}</h3>
              <p class="text-primary/70 mb-6">{{ service.description }}</p>
              <ul class="space-y-2 mb-6">
                <li v-for="(feature, idx) in service.features" :key="idx"
                  class="flex items-center gap-2 text-primary/80">
                  <svg class="w-4 h-4 text-accent" viewBox="0 0 100 100">
                    <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" fill="currentColor" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>
              <router-link :to="service.link"
                class="inline-flex items-center gap-2 text-accent group-hover:text-dark-green transition-colors">
                Explore Services
                <span class="transform group-hover:translate-x-2 transition-transform">→</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="inset-0 pointer-events-none overflow-hidden opacity-10">

      <!-- Scattered Small Leaves -->
      <svg class="absolute top-2/5 right-2/4 w-32 h-32 text-accent transform rotate-45" viewBox="0 0 100 100"
        fill="currentColor">
        <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" />
      </svg>
      <svg class="absolute top-3/5 right-3/6 w-24 h-24 text-accent transform -rotate-45" viewBox="0 0 100 100"
        fill="currentColor">
        <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" />
      </svg>
    </div>
    <!-- Special Offers Section -->
    <section class="py-20 px-6 bg-primary text-secondary">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16">
          Special Offers
          <div class="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="offer in specialOffers" :key="offer.id" class="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div class="text-accent text-xl font-bold mb-2">{{ offer.discount }}</div>
            <h3 class="text-2xl font-bold mb-4">{{ offer.name }}</h3>
            <p class="mb-6 text-secondary/80">{{ offer.description }}</p>
            <button class="w-full bg-accent text-white py-3 px-6 rounded-lg hover:bg-dark-green transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-bold text-primary mb-6">Why Choose The Sweetest Lime?</h2>
            <div class="space-y-6">
              <div v-for="reason in reasons" :key="reason.id" class="flex gap-4">
                <div class="w-12 h-12 shrink-0 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  {{ reason.icon }}
                </div>
                <div>
                  <h3 class="text-xl font-bold text-primary mb-2">{{ reason.title }}</h3>
                  <p class="text-primary/70">{{ reason.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div class="bg-secondary rounded-lg p-6 shadow-lg">
                <h3 class="text-3xl font-bold text-accent mb-2">15+</h3>
                <p class="text-primary">Expert Stylists</p>
              </div>
              <div class="bg-secondary rounded-lg p-6 shadow-lg">
                <h3 class="text-3xl font-bold text-accent mb-2">5k+</h3>
                <p class="text-primary">Happy Clients</p>
              </div>
            </div>
            <div class="space-y-4 pt-8">
              <div class="bg-secondary rounded-lg p-6 shadow-lg">
                <h3 class="text-3xl font-bold text-accent mb-2">10+</h3>
                <p class="text-primary">Years Experience</p>
              </div>
              <div class="bg-secondary rounded-lg p-6 shadow-lg">
                <h3 class="text-3xl font-bold text-accent mb-2">20+</h3>
                <p class="text-primary">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 px-6 bg-light-green/10">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-primary text-center mb-16">
          Client Testimonials
          <div class="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.id"
            class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex gap-4 items-center mb-6">
              <div class="w-16 h-16 bg-accent/20 rounded-full"></div>
              <div>
                <h4 class="font-bold text-primary">{{ testimonial.name }}</h4>
                <p class="text-primary/60">{{ testimonial.service }}</p>
              </div>
            </div>
            <p class="text-primary/80 mb-4">{{ testimonial.content }}</p>
            <div class="flex gap-1 text-accent">
              <span v-for="star in 5" :key="star">★</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Book Now CTA -->
    <section class="py-20 px-6 bg-primary">
      <div class="container mx-auto max-w-4xl text-center text-secondary">
        <h2 class="text-4xl font-bold mb-6">Ready for Your Transformation?</h2>
        <p class="text-xl mb-8">
          Experience the luxury and expertise at The Sweetest Lime. Book your appointment today.
        </p>

        <div class="flex gap-4 justify-center">
          <button class="bg-accent text-white px-8 py-4 rounded-full hover:bg-dark-green transition-all duration-300">
            Book Online
          </button>
          <button
            class="border-2 border-secondary text-secondary px-8 py-4 rounded-full hover:bg-secondary/10 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      mainServices: [
        {
          id: 1,
          name: 'Hair Services',
          description: 'Expert styling, cutting, and coloring services for all hair types.',
          features: [
            'Professional Hair Styling',
            'Custom Color Services',
            'Treatment Options',
            'Style Consultation'
          ],
          link: '/hair-services'
        },
        {
          id: 2,
          name: 'Nail Care',
          description: 'Luxury nail services from basic care to artistic designs.',
          features: [
            'Manicures & Pedicures',
            'Gel & Acrylic Options',
            'Custom Nail Art',
            'Premium Products'
          ],
          link: '/nails'
        },
        {
          id: 3,
          name: 'Body Work',
          description: 'Rejuvenating spa treatments for total relaxation.',
          features: [
            'Massage Therapy',
            'Body Treatments',
            'Spa Packages',
            'Wellness Services'
          ],
          link: '/body-work'
        }
      ],
      specialOffers: [
        {
          id: 1,
          discount: '20% OFF',
          name: 'First Time Clients',
          description: 'Special discount for your first visit to any of our services.'
        },
        {
          id: 2,
          discount: 'SAVE $50',
          name: 'Spa Package',
          description: 'Complete relaxation package including massage and body treatment.'
        },
        {
          id: 3,
          discount: 'FREE',
          name: 'Consultation',
          description: 'Professional consultation for hair coloring and styling services.'
        }
      ],
      reasons: [
        {
          id: 1,
          icon: '✨',
          title: 'Expert Team',
          description: 'Our skilled professionals bring years of experience and continuous training.'
        },
        {
          id: 2,
          icon: '🌿',
          title: 'Premium Products',
          description: 'We use only the highest quality, sustainable products for all services.'
        },
        {
          id: 3,
          icon: '💝',
          title: 'Personal Attention',
          description: 'Customized services tailored to your unique needs and preferences.'
        },
        {
          id: 4,
          icon: '🎨',
          title: 'Creative Excellence',
          description: 'Innovative techniques and artistic approaches to beauty services.'
        }
      ],
      testimonials: [
        {
          id: 1,
          name: 'Sarah Johnson',
          service: 'Hair Styling',
          content: 'Absolutely love how my hair turned out! The stylist really listened to what I wanted and delivered beyond my expectations.'
        },
        {
          id: 2,
          name: 'Michael Chen',
          service: 'Massage Therapy',
          content: 'The massage was incredible. Perfect pressure and very attentive to problem areas. I left feeling completely refreshed.'
        },
        {
          id: 3,
          name: 'Emily Rodriguez',
          service: 'Nail Services',
          content: 'Best nail salon in town! The attention to detail and artistic designs are amazing. Always leave feeling pampered.'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
