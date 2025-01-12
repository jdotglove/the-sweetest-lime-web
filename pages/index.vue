<script setup lang="ts">
import { useSeo } from '../composables/useSeo';

const route = useRoute()

// Basic usage for a service page
useSeo({
  title: 'Home Page',
  description: 'Experience luxury beauty services at The Sweetest Lime in Winston Salem. Professional hair styling, nail care, massages, and body work in a serene environment. Your destination for complete beauty and wellness.',
  path: route.path,
  keywords: ['beauty salon', 'hair salon', 'nail salon', 'massage', 'body work', 'beauty services', 'hair styling', 'nail care']
})
</script>

<template>
  <Navbar />
  <div class="min-h-screen bg-background overflow-hidden">
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
    <section class="relative h-[70dvh] flex items-center">
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

      <!-- Hero Content -->
      <div class="relative container mx-auto px-6 py-20">
        <div class="max-w-3xl">
          <div class="my-4 grid justify-center bg-white/65 w-[50dvw] h-[40dvh] rounded-3xl">
            <img class="self-center aspect-auto lg:w-[50dvw] lg:h-[40dvh] xl:w-[40dvw]"
              alt="the sweetest lime logo with text" src="../assets/sweetest-lime-logo-and-text.png">
          </div>
          <p class="text-xl text-primary/90 mb-8 max-w-2xl">
            Your destination for premium beauty and wellness services. Where nature meets luxury,
            and every visit leaves you refreshed and renewed.
          </p>
          <div class="flex gap-4 flex-wrap">
            <button
              class="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/80 transition-all duration-300">
              Book Appointment
            </button>
            <button
              class="border-2 bg-secondary border-secondary text-primary px-8 py-4 rounded-full hover:bg-secondary/70 transition-all duration-300">
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
    <section class="py-20 px-6 bg-dark-green/20 text-primary">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16">
          Special Offers
          <div class="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="offer in specialOffers" :key="offer.id" class="bg-[#F8F0D3] backdrop-blur-sm rounded-xl p-8">
            <div class="text-accent text-xl font-bold mb-2">{{ offer.discount }}</div>
            <h3 class="text-2xl font-bold mb-4">{{ offer.name }}</h3>
            <p class="mb-6 text-dark-green text-lg">{{ offer.description }}</p>
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
    <section class="py-20 px-6 bg-dark-green/20">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-primary text-center mb-16">
          Client Testimonials
          <div class="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.id"
            class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-[35dvh]">
            <div class="flex gap-4 items-center mb-6">
              <div class="w-16 h-16 bg-accent/20 rounded-full"></div>
              <div>
                <h4 class="font-bold text-primary">{{ testimonial.name }}</h4>
                <p class="text-primary/60">{{ testimonial.service }}</p>
              </div>
            </div>
            <p class="text-primary/80 mb-4 h-[15dvh] overflow-clip">{{ testimonial.content }}</p>
            <div class="flex gap-1 text-accent">
              <span v-for="star in testimonial.stars" :key="star">★</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Book Now CTA -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-4xl text-center text-primary">
        <h2 class="text-4xl font-bold mb-6">Ready for Your Transformation?</h2>
        <p class="text-xl mb-8">
          Experience the luxury and expertise at The Sweetest Lime. Book your appointment today.
        </p>

        <div class="flex gap-4 justify-center">
          <button class="bg-accent text-white px-8 py-4 rounded-full hover:bg-dark-green transition-all duration-300">
            Book Online
          </button>
          <button
            class="border-2 border-secondary text-primary px-8 py-4 rounded-full hover:bg-secondary/10 transition-all duration-300">
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
          ],
          link: '/nail-care'
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
          name: 'Ellen Forbes',
          service: 'Hair Services',
          content: 'I enjoyed my experience. I am appreciative the education provided about my hair and how to truly care for my locs. Before my service; I considered cutting my locs. I purchased many of her products because I want to continue my loc journey after seeing how beautiful my locs really are.',
          stars: 5,
          link: 'https://g.co/kgs/JWFFeHP',
        },
        {
          id: 2,
          name: 'Táshana W',
          service: 'Hair Services',
          content: `
            Makayah is very knowledgeable and professional cosmetologist. Booking her time is easy through Square. She does not overbook her time and moves efficiently. She is an excellent colorist and master stylist. She uses and sells Ashtae products,  along with her own oil blends, curl & loc refresher sprays, bonnets, and caps. Your hair will be well cared for with her or at home. She provides complementary care kits for starter loc appointments so you will leave with everything you need to get started.
            She is the only person who I will allow to do my color or loc retwist while I am in Winston Salem. I love her Stimulation Oil blend. The peppermint and rosemary oils are great for my dry scalp.
            I recommend her for any and all genders, hair types or hair care services. I especially recommend her to those interested in services for their loose natural hair or locs/dreadlocks.
          `,
          stars: 5,
          link: 'https://g.co/kgs/8ZiRpPY',
        },
        {
          id: 3,
          name: 'Tracy Powers',
          service: 'Hair Services',
          content: 'I love my hair!! Makayah is amazingly blessed and talented. She always no what I want even when I don\'t know what I want 🥰',
          stars: 5,
          link: 'https://g.co/kgs/oeWvU8R',
        }
      ]
    }
  }
}
</script>

<style scoped></style>
