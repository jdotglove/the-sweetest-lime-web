<template>
  <div class="min-h-screen bg-background">
    <Navbar />
    <!-- Hero Section -->
    <section class="relative h-[50vh] overflow-hidden">
      <div class="absolute inset-0 bg-primary/80">
        <!-- Background pattern -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
      <div class="relative h-full container mx-auto px-6 flex items-center">
        <div class="text-secondary max-w-2xl">
          <h2 class="text-5xl font-bold mb-4">About The Sweetest Lime</h2>
          <p class="text-xl">Where beauty meets expertise and luxury meets comfort</p>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-primary">Our Story</h2>
            <div class="w-20 h-1 bg-accent"></div>
            <p class="text-lg text-primary/80 leading-relaxed">
              Founded in 2014, The Sweetest Lime began with a simple vision: to create a space where
              beauty services are more than just treatments – they're transformative experiences.
            </p>
            <p class="text-lg text-primary/80 leading-relaxed">
              Our journey started in a small studio with just three passionate stylists. Today,
              we've grown into a full-service salon with a team of over 15 skilled professionals,
              each bringing their unique expertise and creativity to our clients.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div class="bg-secondary rounded-lg p-4 shadow-lg">
                <h3 class="text-3xl font-bold text-accent mb-2">10+</h3>
                <p class="text-primary">Years of Excellence</p>
              </div>
              <div class="bg-secondary rounded-lg p-4 shadow-lg">
                <h3 class="text-3xl font-bold text-accent mb-2">15+</h3>
                <p class="text-primary">Expert Stylists</p>
              </div>
            </div>
            <div class="space-y-4 pt-8">
              <div class="bg-secondary rounded-lg p-4 shadow-lg">
                <h3 class="text-3xl font-bold text-accent mb-2">5k+</h3>
                <p class="text-primary">Happy Clients</p>
              </div>
              <div class="bg-secondary rounded-lg p-4 shadow-lg">
                <h3 class="text-3xl font-bold text-accent mb-2">20+</h3>
                <p class="text-primary">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="bg-light-green/20 py-20 px-6">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-primary text-center mb-16">Our Core Values</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(value, index) in coreValues" :key="index"
            class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">{{ value.icon }}</span>
            </div>
            <h3 class="text-2xl font-bold text-primary mb-4">{{ value.title }}</h3>
            <p class="text-primary/80">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
          <p class="text-lg text-primary/80 max-w-2xl mx-auto">
            Our talented team of professionals brings years of experience and passion to every service.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(member, index) in teamMembers" :key="index" class="group">
            <div class="relative overflow-hidden rounded-xl mb-4">
              <div class="aspect-w-3 aspect-h-4 bg-secondary"></div>
              <div class="absolute inset-0 bg-accent/80 text-white p-6 flex flex-col justify-end
                translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 class="text-xl font-bold">{{ member.name }}</h4>
                <p>{{ member.bio }}</p>
              </div>
            </div>
            <h4 class="text-xl font-bold text-primary">{{ member.name }}</h4>
            <p class="text-primary/80">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="bg-secondary py-20 px-6">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-primary text-center mb-16">Client Testimonials</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white p-6 rounded-xl shadow-lg">
            <div class="flex gap-4 items-center mb-4">
              <div class="w-12 h-12 bg-accent/20 rounded-full"></div>
              <div>
                <h4 class="font-bold text-primary">{{ testimonial.name }}</h4>
                <p class="text-sm text-primary/60">{{ testimonial.date }}</p>
              </div>
            </div>
            <p class="text-primary/80">{{ testimonial.content }}</p>
            <div class="flex gap-1 mt-4">
              <span v-for="star in 5" :key="star" class="text-accent">★</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-bold text-primary mb-6">Ready to Experience the Difference?</h2>
        <p class="text-lg text-primary/80 mb-8">
          Join our community of satisfied clients and let us help you achieve your beauty goals.
        </p>
        <div class="flex gap-4 justify-center">
          <button class="bg-accent text-white px-8 py-4 rounded-full hover:bg-dark-green transition-all duration-300">
            Book Appointment
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
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {
      coreValues: [
        {
          icon: '✨',
          title: 'Excellence',
          description: 'We strive for excellence in every service, ensuring the highest quality and attention to detail.'
        },
        {
          icon: '🤝',
          title: 'Integrity',
          description: 'We maintain honest relationships with our clients, built on trust and transparency.'
        },
        {
          icon: '💫',
          title: 'Innovation',
          description: 'We continuously evolve, embracing new techniques and trends in the beauty industry.'
        }
      ],
      teamMembers: [
        {
          name: 'Sarah Johnson',
          role: 'Master Stylist & Founder',
          bio: '15+ years of experience in luxury salons across the country.'
        },
        {
          name: 'Michael Chen',
          role: 'Color Specialist',
          bio: 'Award-winning colorist with expertise in innovative techniques.'
        },
        {
          name: 'Emily Rodriguez',
          role: 'Nail Art Expert',
          bio: 'Specialized in intricate designs and luxury nail treatments.'
        }
        // Add more team members as needed
      ],
      testimonials: [
        {
          name: 'Jessica Williams',
          date: 'December 2023',
          content: 'The attention to detail and personalized service at The Sweetest Lime is unmatched. I always leave feeling confident and beautiful.'
        },
        {
          name: 'David Thompson',
          date: 'November 2023',
          content: 'Professional, welcoming, and incredibly skilled. The team here really knows how to make you feel your best.'
        },
        {
          name: 'Michelle Lee',
          date: 'October 2023',
          content: 'I&apos;ve been coming here for years and the quality of service has always been exceptional.Truly the best salon in town.'
        }
      ]
    };
  },
  components: {
    Navbar,
    Footer,
  },
}

</script>

<style scoped>
.aspect-w-3 {
  position: relative;
  padding-bottom: calc(4 / 3 * 100%);
}

.aspect-h-4>* {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
