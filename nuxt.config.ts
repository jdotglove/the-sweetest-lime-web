import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
  runtimeConfig: {

    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      siteName: 'The Sweetest Lime',
      SQUARE_ACCESS_TOKEN: process.env.SQUARE_ACCESS_TOKEN,
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: '%s - The Sweetest Lime',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'description',
          content: 'Your default site description'
        },
        // Open Graph
        { property: 'og:site_name', content: 'The Sweetest Lime' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://the-sweetest-lime-web.vercel.app/' }
      ]
    }
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    gzip: true,
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    },
    exclude: [],
  },
  compatibilityDate: '2025-01-12',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  css: ['~/styles/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
});
