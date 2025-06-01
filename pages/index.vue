<script setup lang="ts">
import { useSeo } from '../composables/useSeo';
import { ref, onMounted, onUnmounted, watch } from 'vue'
import locClientImage from '~/assets/Loc Trio.jpg';
const offersContainer = ref<HTMLElement | null>(null)
const currentOfferIndex = ref(0)
const clientsContainer = ref<HTMLElement | null>(null)
const currentClientIndex = ref<number>(0)

const happyClients: any[] = [
  {
    src: locClientImage,
    alt: 'Happy client showing off their new hairstyle'
  },
  // Add more images as needed
]

const scrollToClientIndex = (index: number): void => {
  if (!clientsContainer.value) return

  const slideWidth: number = clientsContainer.value.offsetWidth
  clientsContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  })
}

const handleClientScroll = (): void => {
  if (!clientsContainer.value) return

  const slideWidth: number = clientsContainer.value.offsetWidth
  const scrollPosition: number = clientsContainer.value.scrollLeft
  currentClientIndex.value = Math.round(scrollPosition / slideWidth)
}

const scrollToOfferIndex = (index: number) => {
  if (!offersContainer.value) return

  const slideWidth = offersContainer.value.offsetWidth
  offersContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  })
}

const handleOfferScroll = () => {
  if (!offersContainer.value) return

  const slideWidth = offersContainer.value.offsetWidth
  const scrollPosition = offersContainer.value.scrollLeft
  currentOfferIndex.value = Math.round(scrollPosition / slideWidth)
}

const showModal = ref(false)
const formData = ref({
  name: '',
  email: '',
  phone: ''
})
let originalOverflow = '';

// Watch for menu state changes
watch(showModal, (newValue) => {
  if (newValue) {
    // Store current overflow and prevent scrolling
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  } else {
    // Just restore the overflow property
    document.body.style.overflow = originalOverflow;
  }
});

const isSubmitting = ref(false)
const error = ref('')


const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    error.value = ''

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value)
    })

    if (!response.ok) {
      throw new Error('Failed to subscribe')
    }

    const data = await response.json()

    // Show success message
    alert('Thank you for subscribing!')

    // Reset form and close modal
    formData.value = {
      name: '',
      email: '',
      phone: ''
    }
    showModal.value = false

  } catch (err) {
    error.value = 'Failed to subscribe. Please try again.'
    console.error('Error:', err)
  } finally {
    isSubmitting.value = false
  }
}

const scrollContainer = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
const expandedReviews = ref<Record<number, boolean>>({})

// Check if content is long enough to need truncation
const isContentLong = (content: string) => {
  return content.length > 150 // Adjust this number based on your needs
}

// Toggle expanded state for a review
const toggleReview = (id: number) => {
  expandedReviews.value[id] = !expandedReviews.value[id]
}

const scrollToIndex = (index: number) => {
  if (!scrollContainer.value) return

  const slideWidth = scrollContainer.value.offsetWidth
  scrollContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  if (!scrollContainer.value) return

  const slideWidth = scrollContainer.value.offsetWidth
  const scrollPosition = scrollContainer.value.scrollLeft
  currentIndex.value = Math.round(scrollPosition / slideWidth)
}

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', handleScroll)
  }
  if (offersContainer.value) {
    offersContainer.value.addEventListener('scroll', handleOfferScroll)
  }
  if (clientsContainer.value) {
    clientsContainer.value.addEventListener('scroll', handleClientScroll)
  }
})

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', handleScroll)
  }
  if (offersContainer.value) {
    offersContainer.value.removeEventListener('scroll', handleOfferScroll)
  }
  if (clientsContainer.value) {
    clientsContainer.value.removeEventListener('scroll', handleClientScroll)
  }
})
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

    <!-- Hero Section -->
    <section class="relative h-[70dvh] flex items-center">
      <!-- Background with gradient -->
      <div class="absolute inset-0 bg-gradient-to-r from-dark-green/95 to-dark-green/50"></div>

      <!-- Hero Content -->
      <div class="relative container mx-auto px-6 py-20 items-center flex flex-col">
        <div class="max-w-3xl flex flex-col items-center gap-3">
          <!-- Logo Container -->
          <div class="lg:my-4 grid justify-center bg-white lg:w-[50dvw] lg:h-[40dvh] rounded-3xl">
            <img class="self-center aspect-auto lg:w-[50dvw] lg:h-[40dvh] xl:w-[40dvw]"
              alt="the sweetest lime logo with text" src="../assets/sweetest-lime-logo-and-text.png">
          </div>

          <!-- Description -->
          <p class="text-xl text-[#522413]/90 max-w-2xl text-center">
            Your destination for premium beauty and wellness services. Where self-care meets luxury,
            and every visit leaves you refreshed and renewed.
          </p>

          <!-- CTA Buttons -->
          <div class="flex gap-4 flex-wrap justify-center">
            <a href="https://sweet-lime-salon.square.site/" target="_blank"
              class="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/80 transition-all duration-300">
              Book Appointment
            </a>
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
        <h2 class="text-4xl font-bold text-[#522413] text-center mb-16">
          Our Services
          <div class="relative">
            <div class="w-24 h-1 bg-accent mx-auto mt-4"></div>
          </div>
        </h2>

        <!-- Service Cards -->
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="service in mainServices" :key="service.id"
            class="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">

            <div class="p-8 relative h-full flex flex-col justify-between">
              <section>
                <h3 class="text-2xl font-bold text-[#522413] mb-4">{{ service.name }}</h3>
                <p class="text-[#522413]/70 mb-3">{{ service.description }}</p>
                <ul class="space-y-2 mb-4">
                  <li v-for="(feature, idx) in service.features" :key="idx"
                    class="flex items-center gap-2 text-[#522413]/80">
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
    <section class="py-20 px-6 bg-dark-green/20 text-[#522413]">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16">
          Special Offers
          <div class="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </h2>

        <div class="relative">
          <div ref="offersContainer"
            class="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
            <div v-for="offer in specialOffers" :key="offer.id"
              class="bg-background backdrop-blur-sm rounded-xl grid p-8 min-w-[85vw] md:min-w-0 snap-center">
              <section>
                <div class="text-accent text-xl font-bold mb-2">{{ offer.discount }}</div>
                <h3 class="text-2xl font-bold mb-4">{{ offer.name }}</h3>
                <p class="mb-6 text-dark-green text-lg">{{ offer.description }}</p>
              </section>
              <a v-if="offer.name !== 'Sign up for Notifications'" href="https://sweet-lime-salon.square.site/"
                target="_blank"
                class="w-full h-[50px] text-center self-end bg-accent text-white py-3 px-6 rounded-lg hover:bg-dark-green transition-colors">
                Book Now
              </a>
              <button v-else @click="showModal = true"
                class="w-full h-[50px] text-center self-end bg-accent text-white py-3 px-6 rounded-lg hover:bg-dark-green transition-colors">
                Sign Up
              </button>
            </div>
          </div>

          <!-- Navigation Dots (Mobile Only) -->
          <div class="flex justify-center gap-2 mt-4 md:hidden">
            <button v-for="(offer, index) in specialOffers" :key="`dot-${offer.id}`" @click="scrollToOfferIndex(index)"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="currentOfferIndex === index ? 'bg-accent w-4' : 'bg-accent/30'" aria-label="Go to offer"></button>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center">
          <!-- Backdrop -->
          <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" @click="showModal = false"></div>

          <!-- Modal Content -->
          <div class="relative bg-white rounded-2xl p-8 w-full max-w-md mx-4">
            <!-- Close Button -->
            <button @click="showModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Form Content -->
            <div class="text-center mb-6">
              <h3 class="text-2xl font-bold text-[#522413] mb-2">Stay Connected with The Sweetest Lime Salon Spa!</h3>
              <p class="text-[#522413]/70">
                Enter your phone number to receive exclusive updates, special offers, and VIP
                discounts straight to your phone and/or email!
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-[#522413] mb-1">Name</label>
                <input v-model="formData.name" type="text"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent"
                  required>
              </div>

              <div>
                <label class="block text-sm font-medium text-[#522413] mb-1">Email</label>
                <input v-model="formData.email" type="email"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent"
                  required>
              </div>

              <div>
                <label class="block text-sm font-medium text-[#522413] mb-1">Phone (optional)</label>
                <p class="text-xs">
                  By providing your phone number, you agree to receive automated promotional and informational messages
                  from The Sweetest Lime Salon Spa. Standard messaging and data rates may apply. Reply &quot;STOP&quot;
                  to
                  unsubscribe at any time.
                </p>
                <input v-model="formData.phone" type="tel"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent">
              </div>

              <button type="submit"
                class="w-full bg-accent text-white py-3 px-6 rounded-lg hover:bg-dark-green transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Transition>
    </section>
    <!-- Large Corner Leaves -->
    <div class="hidden absolute right-0 lg:flex flex-col gap-40 pointer-events-none overflow-hidden">
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
              <h2 class="text-4xl font-bold text-[#522413] text-center mb-12">
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
                      <h3 class="text-xl font-bold text-[#522413] mb-2">{{ benefit.title }}</h3>
                      <p class="text-[#522413]/70 leading-relaxed">{{ benefit.description }}</p>
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
    <div class="hidden lg:absolute pointer-events-none overflow-hidden">
      <!-- Top Left Leaf -->
      <svg class="-right-0 bottom-48 w-72 h-72 text-accent/50" viewBox="0 0 100 100">
        <path
          d="M10,90 C30,80 40,60 45,40 C60,50 80,45 90,20 C70,40 60,45 50,45 C70,20 75,10 80,5 C60,15 50,25 45,40 C40,20 30,10 20,5 C30,20 35,35 35,45 C20,40 10,20 5,10 C15,35 25,60 10,90"
          fill="currentColor" class="animate-sway-slow" />

      </svg>
    </div>
    <!-- Testimonials -->
    <section class="py-20 px-6 z-10 bg-dark-green/20">
      <div class="container z-10 mx-auto">
        <h2 class="text-4xl z-10 font-bold text-[#522413] text-center z- mb-16">
          Client Testimonials
          <div class="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </h2>

        <div class="relative">
          <div ref="scrollContainer"
            class="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
            <div v-for="testimonial in testimonials" :key="testimonial.id"
              class="bg-white grid rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow min-w-[85vw] md:min-w-0 h-[40dvh] snap-center">
              <section>
                <div class="flex gap-4 items-center mb-6">
                  <div>
                    <h4 class="font-bold text-[#522413]">{{ testimonial.name }}</h4>
                    <p class="text-[#522413]/60">{{ testimonial.service }}</p>
                  </div>
                </div>

                <!-- Review Content with Expand/Collapse -->
                <div class="relative">
                  <p class="text-[#522413]/80 mb-4" :class="{
                    'line-clamp-4': !expandedReviews[testimonial.id],
                    'h-[15dvh] overflow-y-auto': expandedReviews[testimonial.id]
                  }">
                    {{ testimonial.content }}
                  </p>

                  <!-- Show "Read More" button if content is long -->
                  <button v-if="isContentLong(testimonial.content)" @click="toggleReview(testimonial.id)"
                    class="text-accent text-sm hover:text-accent/80 transition-colors">
                    {{ expandedReviews[testimonial.id] ? 'Read Less' : 'Read More' }}
                  </button>
                </div>
              </section>
              <div class="flex gap-1 text-accent mt-auto">
                <span class="self-end" v-for="star in testimonial.stars" :key="star">★</span>
              </div>
            </div>
          </div>

          <div class="flex justify-center gap-2 mt-4 md:hidden">
            <button v-for="(testimonial, index) in testimonials" :key="`dot-${testimonial.id}`"
              @click="scrollToIndex(index)" class="w-2 h-2 rounded-full transition-all duration-300"
              :class="currentIndex === index ? 'bg-accent w-4' : 'bg-accent/30'" aria-label="Go to slide"></button>
          </div>
        </div>
      </div>
    </section>
    <!-- Large Corner Leaves -->
    <div class=" absolute top-[70dvh] pointer-events-none overflow-hidden">
      <!-- Top Left Leaf -->
      <svg class="-right-0 top-24 w-72 h-72 text-accent/50" viewBox="0 0 100 100">
        <path
          d="M50,5 C70,20 90,40 90,70 C90,85 80,95 50,95 C20,95 10,85 10,70 C10,40 30,20 50,5 M30,30 C40,35 50,45 50,60 M70,30 C60,35 50,45 50,60"
          fill="currentColor" class="animate-sway-slow" />

      </svg>
    </div>
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-[#522413] text-center mb-16">
          Our Partners
          <div class="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </h2>

        <div class="flex flex-col items-center">
          <!-- Partnership Description -->
          <div class="max-w-2xl text-center mb-12">
            <p class="text-lg text-[#522413]/80 mb-6">
              We are proud to partner with organizations that share our commitment to sustainability,
              excellence, and community empowerment.
            </p>
          </div>

          <!-- Partners Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            <a href="https://greencirclesalons.com/" target="_blank"
              class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex flex-col items-center text-center">
                <img src="../assets/Green Circle Salons Logo.png" alt="Green Circle Salons Logo"
                  class="w-32 h-32 object-contain mb-4" />
                <h3 class="text-xl font-bold text-[#522413] mb-2">Green Circle Salons</h3>
                <p class="text-[#522413]/70">
                  Certified sustainable salon partner, committed to environmental responsibility
                  and eco-friendly practices in the beauty industry.
                </p>
              </div>
            </a>

            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex flex-col items-center text-center">
                <img src="../assets/images.jpeg" alt="Green Circle Salons Logo" class="w-32 h-32 object-contain mb-4" />
                <h3 class="text-xl font-bold text-[#522413] mb-2">Ashtae Products</h3>
              </div>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex flex-col items-center text-center">
                <img src="../assets/Logo_W_Link_2x-8.webp" alt="Green Circle Salons Logo"
                  class="w-32 h-32 object-contain mb-4" />
                <h3 class="text-xl font-bold text-[#522413] mb-2">Smiles by Wrapstar</h3>
              </div>
            </div>


            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex flex-col items-center text-center">
                <div class="w-32 h-32 flex items-center justify-center mb-4">
                  <svg class="w-16 h-16 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-[#522413] mb-2">Partner With Us</h3>
                <p class="text-[#522413]/70 mb-4">
                  Join our network of partners and collaborate with The Sweetest Lime to create
                  exceptional experiences for our clients.
                </p>
                <a href="mailto:makayah1@gmail.com" class="text-accent hover:text-dark-green transition-colors">
                  Contact us to learn more →
                </a>
              </div>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex flex-col items-center text-center">
                <div class="w-32 h-32 flex items-center justify-center mb-4">
                  <svg class="w-16 h-16 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-[#522413] mb-2">Community Partners</h3>
                <p class="text-[#522413]/70">
                  We believe in building strong relationships with local organizations and
                  businesses to better serve our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Happy Clients Section -->
    <section class="py-20 px-6 bg-dark-green/20">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-[#522413] text-center mb-16">
          Transformations
          <div class="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </h2>
        <div class="relative">
          <div ref="clientsContainer"
            class="flex md:grid md:grid-cols-3 lg:flex lg:justify-center gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
            <div v-for="(image, index) in happyClients" :key="index" class="min-w-[85vw] md:min-w-0 snap-center">
              <div class="aspect-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img :src="image.src" :alt="image.alt" class="w-full h-full lg:w-[30dvw] object-cover" />
              </div>
            </div>
          </div>

          <!-- Navigation Dots (Mobile Only) -->
          <div class="flex justify-center gap-2 mt-4 md:hidden">
            <button v-for="(_, index) in happyClients" :key="`dot-${index}`" @click="scrollToClientIndex(index)"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="currentClientIndex === index ? 'bg-accent w-4' : 'bg-accent/30'"
              aria-label="Go to image"></button>
          </div>
        </div>
      </div>
    </section>
    <!-- Book Now CTA -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-4xl text-center text-[#522413]">
        <h2 class="text-4xl font-bold mb-6">Ready for Your Transformation?</h2>
        <p class="text-xl mb-8">
          Experience the luxury and expertise at The Sweetest Lime. Book your appointment today.
        </p>

        <div class="flex gap-4 justify-center">
          <a href="https://sweet-lime-salon.square.site/" target="_blank"
            class="bg-accent text-white content-center px-8 py-4 rounded-full hover:bg-dark-green transition-all duration-300">
            Book Online
          </a>
          <a href="mailto:makayah1@gmail.com"
            class="border-2 border-primary text-[#522413] px-8 py-4 rounded-full hover:bg-secondary/10 transition-all duration-300">
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
import { GraduationCap, Gem, Users, Wand2, HeartHandshake, Sparkles } from 'lucide-vue-next';

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
          name: 'First Visit to New Location',
          description: 'Special discount for your first visit to our new location for any of our services.'
        },
        {
          id: 2,
          discount: 'SAVE 20%',
          name: 'Bundle Package',
          description: 'Bundle any 3 services and receive 20% off your vist.'
        },
        {
          id: 3,
          discount: '10% OFF',
          name: 'Sign up for Notifications',
          description: 'Sign up for text or email notifications and receive 10% off your next visit. Standard messaging and data rates may apply.'
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
          icon: Users,  // Changed to Users icon
          title: 'Inclusivity & Community',
          description: 'Creating a welcoming space where all guests feel valued, respected, and part of our beauty community.'
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
      if (testimonialContent.length > 200) {
        return `${testimonialContent.slice(0, 200)}...`
      }
      return testimonialContent;
    }
  }
}
</script>

<style scoped>
/* Prevent body scroll when modal is open */
:deep(body.modal-open) {
  overflow: hidden;
}

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

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Customize scrollbar for expanded reviews */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
