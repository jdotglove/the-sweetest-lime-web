<script setup lang="ts">
import { useSeo } from '../composables/useSeo';
import makayahProfilePic from '~/assets/makayah_mitchell_profile_pic.jpeg';

const route = useRoute()

// Basic usage for a service page
useSeo({
  title: 'About Us',
  description: 'Meet the skilled team behind The Sweetest Lime in Winston Salem. Our experienced beauty professionals are dedicated to providing exceptional hair, nail, and body work services in a welcoming environment.',
  path: route.path,
  keywords: ['beauty salon team', 'professional stylists', 'nail technicians', 'massage therapists', 'beauty experts', 'salon staff', 'about us', 'salon history']
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
        <div class="text-primary rounded-xl max-w-2xl bg-white p-10">
          <h2 class="text-5xl font-bold mb-4">About The Sweetest Lime</h2>
          <p class="text-xl text-accent">Providing a luxurious and inclusive space where wellness and community
            converge.</p>
        </div>
      </div>
    </section>
    <!-- About Us Section -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <div class="grid items-center gap-5">
          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-primary">About Us</h2>
            <div class="w-[50dvw] h-1 bg-accent"></div>
            <p class="text-lg text-primary/80 leading-relaxed">
              Welcome to <span class="italic">The Sweetest Lime Salon Spa</span>, where self-care meets luxury, and
              luxury
              means exceptional service. Located in the heart of the community, we offer a premier
              beauty and wellness experience designed to refresh, rejuvenate, and inspire. Our salon
              features two hairstyling suites, a nail spa suite with spa pedicure chairs and manicure
              stations, and a dedicated body work suite offering massage therapy and body sculpting.
            </p>
            <p class="text-lg text-primary/80 leading-relaxed">
              We are proud to partner with <span class=" font-bold">Green Circle Salons</span>, enabling us to recycle
              and
              responsibly dispose of all our salon waste, including hair, foils, and color tubes. This
              commitment to our core value of sustainability reflects our dedication to beauty that
              cares for both our clients and the planet.
            </p>
            <p class="text-lg text-primary/80 leading-relaxed">
              We are passionate about empowering Black and Brown beauty professionals, providing
              them with a space to grow their careers and deliver top-tier customer care. At <span class="italic">The
                Sweetest Lime</span>, professionalism and personalized service are at the heart of everything
              we do.
            </p>
            <p class="text-lg text-primary/80 leading-relaxed">
              Indulge in a moment of self-care and let us help you look and feel your best while
              enjoying the sweetest lime.
            </p>
          </div>
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Vision</h3>
            <p class="text-lg text-primary/80 leading-relaxed">
              To empower Black and Brown beauty and wellness professionals by fostering their
              talent and nurturing their careers, while delivering exceptional personalized service to
              every guest. Through intentional care, innovation, and cultural celebration, we aim to
              create a sanctuary where self-expression thrives, and every professional and guest
              feels seen, pampered and inspired.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-20 px-6 bg-dark-green/20">
      <div class="container mx-auto">
        <div class="grid items-center">
          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-primary">What Does The Sweetest Lime Mean?</h2>
            <div class="w-[50dvw] h-1 bg-accent"></div>
            <p class="text-lg text-primary/80 leading-relaxed">
              The question we&apos;re most often asked is “Why does The Sweetest Lime” mean?
            </p>
            <p class="text-lg text-primary/80 leading-relaxed">
              In 2005, The Sweetest Lime founder, Makayah was doing hair part time at her home
              and serving one of her favorite guests; her best friend&apos;s mother, the late Sue Simms
              Davidson. Makayah had just cooked, and offered Ma Sue, as she was affectionately
              called, some food. As Ma Sue nibbled on the dish du jour, she suddenly pulled away
              and said, “You need to figure out how to put ALLLL of this together in one location.”
              Noting Makayah&apos;s confusion, she continued, “All of this! This vibe… the peace in your
              home, the food, the hair, all the cute stuff you have around the house. Just bottle it up
              and make it a business!”
              As they sat discussing the idea, Ma Sue suggested a salon, boutique and café (due to
              Makayah&apos;s background is in culinary arts and food service). After a few not-so-good
              name suggestions, Ma Sue said it had to be something cultural. Makayah blurted out
              her first thought- “Sweet Lime!”, and Ma Sue LOVED it! In 2022, Sweet Lime was
              rebranded as “The Sweetest Lime”.
            </p>
            <p class="text-lg text-primary/80 leading-relaxed">
              We all know a lime as a small, green citrus fruit, but in the twin island Republic of
              Trinidad and Tobago where Makayah spent her formative years, the word has a totally
              different meaning. &quot;Lime&quot; is a term that originated in Trinidad and Tobago but is
              commonly recognized and used throughout the Caribbean.
            </p>
            <div class="text-sm text-primary/80 leading-relaxed">
              <p>
                lime /lime/
              </p>
              <p class="italic">
                noun
              </p>

              <p class="pl-4">
                an informal gathering where people enjoy good music, food, drinks and each other&apos;s company.
              </p>
              <p class="pl-4">
                “They&apos;re having a lime on Friday evening”
              </p>
              <p class="italic">
                verb
              </p>
              <ol class="list-inside ml-4">
                <li class=" list-decimal">
                  To socialize, chill, relax or hang out with friends in a casual setting, usually in a public place.
                </li>
                <li class="list-decimal">
                  <span>The act of being at a lime.</span>
                </li>
                <p>“We are going to lime at Joe&apos;s house&quot;</p>
              </ol>
            </div>
            <p class="text-lg text-primary/80 leading-relaxed">
              The goal of The Sweetest Lime Salon Spa is to create an environment and become a
              destination where you <span class="font-bold">want</span> to spend your time. Our aim is for you to leave
              feeling that
              you just had “the sweetest lime!”
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-primary text-center mb-16">Our Core Values</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(value, index) in coreValues" :key="index"
            class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <div
                class="w-12 h-12 shrink-0 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <component :is="value.icon" class="w-6 h-6" />
              </div>
            </div>
            <h3 class="text-2xl font-bold text-primary mb-4">{{ value.title }}</h3>
            <p class="text-primary/80">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 px-6 bg-dark-green/20">
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
              <img v-if="!!member.imageSrc" :src="member.imageSrc" class="w-[30dvw] h-[45dvh]" />
              <div v-else class="w-[30dvw] h-[45dvh] bg-secondary"></div>
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

    <!-- Contact CTA -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-bold text-primary mb-6">Ready to Experience the Difference?</h2>
        <p class="text-lg text-primary/80 mb-8">
          Join our community of satisfied clients and let us help you achieve your beauty goals.
        </p>
        <div class="flex gap-4 justify-center">
          <a href="https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services?buttonTextColor=ffffff&color=006aff&locale=en&referrer=so"
            target="_blank"
            class="bg-accent text-white px-8 py-4 rounded-full hover:bg-dark-green transition-all duration-300">
            Book Appointment
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
import { Star, Users, HandshakeIcon, Lightbulb, Heart, Flower2 } from 'lucide-vue-next';

export default {
  data() {
    return {
      coreValues: [
        {
          icon: Star,  // Professional excellence and service quality
          title: 'Excellence',
          description: 'We are committed to delivering exceptional service, with attention to detail, cleanliness and dedication to ensuring every guest experiences luxury care with every visit.'
        },
        {
          icon: Users,  // Community, people, support
          title: 'Empowerment',
          description: 'We uplift and support the growth of young Black and Brown beauty professionals, helping them cultivate their careers and build their clientele.'
        },
        {
          icon: HandshakeIcon,  // Trust, partnership, agreements
          title: 'Integrity & Trust',
          description: 'We build lasting relationships with our guests and professionals through honesty, transparency, and consistent delivery on our promises.'
        },
        {
          icon: Lightbulb,  // Ideas, creativity, innovation
          title: 'Innovation & Creativity',
          description: 'We encourage continuous learning, creativity, and the use of modern techniques to stay at the forefront of beauty and wellness trends.'
        },
        {
          icon: Heart,  // Love, inclusivity, caring
          title: 'Inclusivity & Community',
          description: 'We celebrate diversity and foster a welcoming space where all guests and professionals feel valued, respected, and embraced.'
        },
        {
          icon: Flower2,  // Growth, wellness, nature
          title: 'Holistic Wellness',
          description: 'We believe in nurturing the mind, body, and spirit, offering services that promote relaxation, rejuvenation, and self-care.'
        }
        // {
        //   icon: '💫',
        //   title: 'Cultural Celebration',
        //   description: 'We honor the beauty of diverse cultures, recognizing incorporating traditions that reflect the heritage of the community we serve.'
        // },
        // {
        //   icon: '💫',
        //   title: 'Sustainability & Responsibility',
        //   description: 'We are committed to minimizing our carbon footprint by adopting eco-friendly practices, from sourcing sustainable products to reducing and recycling salon and spa waste. The Sweetest Lime Salon Spa, is a Certified Sustainable Salon partnering with Green Circle Salons to recycle all our waste, including hair, excess hair color, nail files and used metals. We strive to make a positive environmental impact, ensuring beauty and wellness go hand-in-hand with care for the planet.'
        // }
      ],
      teamMembers: [
        {
          name: 'Makayah Mitchell',
          role: 'Founder, Master Loctician, Stylist & Make-Up Artist',
          bio: `
            Makayah brings over 30 years of expertise as a master Loctician, stylist, and makeup
            artist. Her passion for beauty and wellness is rooted in a commitment to artistry,
            professionalism, and uplifting others. With decades of experience nurturing natural hair,
            creating stunning styles, and enhancing her clients' confidence, Makayah is dedicated
            to healthy hair and providing exemplary services to each of her guests.
            Makayah relocated from Boston, MA to Winston-Salem, NC over 20 years ago, but will
            always consider Trinidad and Tobago “home”. She is the proud mom of two brilliant
            young kings, Akheal &;Samir, and Nona (grandma) to the magnificent young prince,
            Kareem.
          `,
          imageSrc: makayahProfilePic
        },
        {
          name: 'Alley Shay',
          role: 'Master Braider & Stylist',
          bio: `
            A native New Yorker, Alley Shay has been perfecting her craft as a braider since the
            age of 12. Her passion shines through in the intricate and creative styles she creates.
            With a heart for children of all ages, Alley takes pride in nurturing their hair, but more
            importantly, their confidence. She is thrilled to share her talent and over 20 years of
            experience with the community.
          `,
          imageSrc: '',
        },
        {
          name: 'Apryl Gonzalez',
          role: 'Licensed Massage Therapist',
          bio: '',
          imageSrc: '',
        },
        {
          name: 'Karen Nguyen',
          role: 'Nail Artist &amp; Technician',
          bio: '',
          imageSrc: '',
        },
        {
          name: 'Latarsa Thames',
          role: 'Licensed Massage Therapist',
          bio: '',
          imageSrc: '',
        },
        {
          name: 'Noelle Mills-Tarmey',
          role: 'Social Media',
          bio: '',
          imageSrc: '',
        },
        {
          name: 'Phany Chhorn',
          role: 'Nail Artist & Technician',
          bio: '',
          imageSrc: '',
        },
        {
          name: 'Typhani Richmond',
          role: 'Guest Services',
          bio: `
            Typhani, a recent Reagan High School graduate, is pursuing her passion for beauty and
            business. She plans to attend Guilford Technical Community College to earn an
            associate degree in Business Administration alongside her cosmetology certification. As
            the eldest of three sisters, Typhani has had a lifetime of hands-on experience, honing
            her skills and nurturing her passion for beauty and care.
          `,
          imageSrc: '',
        }
      ],
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
