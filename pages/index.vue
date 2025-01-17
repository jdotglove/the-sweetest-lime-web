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
  <div class="relative min-h-screen bg-background overflow-hidden">

    <!-- Hero Section -->
    <section class="relative h-[70dvh] flex items-center">
      <div class="absolute inset-0 bg-gradient-to-r from-dark-green/95 to-dark-green/50"></div>

      <!-- Hero Content -->
      <div class="relative container mx-auto px-6 py-20 items-center flex flex-col">
        <div class="max-w-3xl flex flex-col items-center">
          <div class="my-4 grid justify-center bg-white w-[50dvw] h-[40dvh] rounded-3xl">
            <img class="self-center aspect-auto lg:w-[50dvw] lg:h-[40dvh] xl:w-[40dvw]"
              alt="the sweetest lime logo with text" src="../assets/sweetest-lime-logo-and-text.png">
          </div>
          <p class="text-xl text-primary/90 mb-8 max-w-2xl text-center">
            Your destination for premium beauty and wellness services. Where nature meets luxury,
            and every visit leaves you refreshed and renewed.
          </p>
          <p class="text-xl text-primary/90 mb-8 max-w-2xl">
            Certified Sustainable Salon with Green Circle Salons
          </p>
          <div class="flex gap-4 flex-wrap justify-center">
            <button
              class="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/80 transition-all duration-300">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- Large Corner Leaves -->
    <div class=" absolute right-0 flex flex-col gap-40 pointer-events-none overflow-hidden">
      <!-- Top Left Leaf -->
      <svg class="w-72 h-72 text-accent/50" viewBox="0 0 100 100">
        <path
          d="M50,5 C75,5 90,20 90,45 L80,35 L90,55 L70,45 L80,65 L60,55 L70,75 L50,65 L60,85 L40,75 L50,95 L30,85 L40,65 L20,75 L30,55 L10,65 L20,45 L10,35 L20,25 C30,10 40,5 50,5"
          fill="currentColor" class="animate-sway-slow" />

      </svg>
    </div>
    <!-- Services Section with Leaf Accents -->
    <section class="py-20 px-6 relative z-10">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-primary text-center mb-16">
          Our Services
          <div class="relative">
            <div class="w-24 h-1 bg-accent mx-auto mt-4"></div>
          </div>
        </h2>

        <!-- Service Cards -->
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="service in mainServices" :key="service.id"
            class="group relative bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">

            <div class="p-8 relative h-full flex flex-col justify-between">
              <section>
                <h3 class="text-2xl font-bold text-primary mb-4">{{ service.name }}</h3>
                <p class="text-primary/70 mb-3">{{ service.description }}</p>
                <ul class="space-y-2 mb-4">
                  <li v-for="(feature, idx) in service.features" :key="idx"
                    class="flex items-center gap-2 text-primary/80">
                    <svg class="w-4 h-4 text-accent" viewBox="0 0 100 100">
                      <path d="M20,40 Q0,60 20,80 Q40,60 20,40 Z" fill="currentColor" />
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </section>
              <router-link :to="service.link"
                class="inline-flex items-center justify-end gap-2 text-accent group-hover:text-dark-green transition-colors">
                Explore Services
                <span class="transform group-hover:translate-x-2 transition-transform">→</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

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
    <!-- Large Corner Leaves -->
    <div class=" absolute right-0 flex flex-col gap-40 pointer-events-none overflow-hidden">
      <!-- Top Left Leaf -->
      <svg class="w-72 h-72 text-accent/50" viewBox="0 0 100 100">
        <path
          d="M50,5 C70,20 90,40 90,70 C90,85 80,95 50,95 C20,95 10,85 10,70 C10,40 30,20 50,5 M30,30 C40,35 50,45 50,60 M70,30 C60,35 50,45 50,60"
          fill="currentColor" class="animate-sway-slow" />

      </svg>
    </div>
    <!-- Why Choose Us -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <div class="flex justify-center gap-16 items-center">
          <section class="py-16">
            <div class="container mx-auto px-4">
              <h2 class="text-4xl font-bold text-primary text-center mb-12">
                The Sweetest Lime Difference
              </h2>

              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="benefit in benefits" :key="benefit.id"
                  class="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 z-10">
                  <div class="flex items-start gap-4">
                    <div
                      class="w-12 h-12 shrink-0 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <component :is="benefit.icon" class="w-6 h-6" />
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-primary mb-2">{{ benefit.title }}</h3>
                      <p class="text-primary/70 leading-relaxed">{{ benefit.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
    <!-- Large Corner Leaves -->
    <div class=" absolute pointer-events-none overflow-hidden">
      <!-- Top Left Leaf -->
      <svg class="-right-0 bottom-48 w-72 h-72 text-accent/50" viewBox="0 0 100 100">
        <path
          d="M10,90 C30,80 40,60 45,40 C60,50 80,45 90,20 C70,40 60,45 50,45 C70,20 75,10 80,5 C60,15 50,25 45,40 C40,20 30,10 20,5 C30,20 35,35 35,45 C20,40 10,20 5,10 C15,35 25,60 10,90"
          fill="currentColor" class="animate-sway-slow" />

      </svg>
    </div>
    <!-- Testimonials -->
    <section class="py-20 px-6 bg-dark-green/20">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-primary text-center mb-16">
          Client Testimonials
          <div class="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.id"
            class="bg-white grid rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-[35dvh] z-10">
            <section>
              <div class="flex gap-4 items-center mb-6">
                <div>
                  <h4 class="font-bold text-primary">{{ testimonial.name }}</h4>
                  <p class="text-primary/60">{{ testimonial.service }}</p>
                </div>
              </div>
              <p class="text-primary/80 mb-4 h-[15dvh]">{{ trimTestimonial(testimonial.content) }}</p>
            </section>
            <div class="flex gap-1 text-accent">
              <span class="self-end" v-for="star in testimonial.stars" :key="star">★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Large Corner Leaves -->
    <div class=" absolute top-[70dvh] pointer-events-none overflow-hidden">
      <!-- Top Left Leaf -->
      <svg class="-right-0 top-48 w-72 h-72 text-accent/50" viewBox="0 0 100 100">
        <path
          d="M50,5 C70,20 90,40 90,70 C90,85 80,95 50,95 C20,95 10,85 10,70 C10,40 30,20 50,5 M30,30 C40,35 50,45 50,60 M70,30 C60,35 50,45 50,60"
          fill="currentColor" class="animate-sway-slow" />

      </svg>
    </div>
    <!-- Book Now CTA -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-4xl text-center text-primary">
        <h2 class="text-4xl font-bold mb-6">Ready for Your Transformation?</h2>
        <p class="text-xl mb-8">
          Experience the luxury and expertise at The Sweetest Lime. Book your appointment today.
        </p>

        <div class="flex gap-4 justify-center">
          <a href="https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services?buttonTextColor=ffffff&color=006aff&locale=en&referrer=so"
            target="_blank"
            class="bg-accent text-white px-8 py-4 rounded-full hover:bg-dark-green transition-all duration-300">
            Book Online
          </a>
          <a href="mailto:makayah1@gmail.com"
            class="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-secondary/10 transition-all duration-300">
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
import { GraduationCap, Gem, Clock, Wand2, HeartHandshake, Sparkles } from 'lucide-vue-next';

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
      ],
      benefits: [
        {
          id: 1,
          icon: GraduationCap,
          title: 'Expert Team',
          description: 'Our certified professionals bring decades of combined experience in hair design, nail artistry, and body wellness.'
        },
        {
          id: 2,
          icon: Gem,
          title: 'Premium Experience',
          description: 'Enjoy a luxurious atmosphere with high-end products and personalized attention to detail.'
        },
        {
          id: 3,
          icon: Clock,
          title: 'Convenient Hours',
          description: 'Early morning and evening appointments available to fit your busy schedule.'
        },
        {
          id: 4,
          icon: Wand2,
          title: 'Custom Solutions',
          description: 'Every service is tailored to your unique style, preferences, and beauty goals.'
        },
        {
          id: 5,
          icon: HeartHandshake,
          title: 'Client-First Focus',
          description: 'Your comfort and satisfaction are our top priorities, ensuring a relaxing and rewarding visit.'
        },
        {
          id: 6,
          icon: Sparkles,
          title: 'Lasting Results',
          description: 'Quality techniques and products that help you maintain your beautiful look long after your visit.'
        }
      ]
    }
  },
  methods: {
    trimTestimonial(testimonialContent: string) {
      if (testimonialContent.length > 300) {
        return `${testimonialContent.slice(0, 300)}...`
      }
      return testimonialContent;
    }
  }
}
</script>

<style scoped>
@keyframes sway-slow {

  0%,
  100% {
    transform: rotate(-2deg);
  }

  50% {
    transform: rotate(2deg);
  }
}

.animate-sway-slow {
  animation: sway-slow 8s ease-in-out infinite;
  transform-origin: center;
}
</style>
