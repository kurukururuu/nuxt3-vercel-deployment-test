import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['@headlessui/vue']
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
    // '@pinia/nuxt'
    '@nuxtjs-alt/auth',
    '@nuxtjs-alt/axios',
    '@nuxtjs-alt/pinia',
  ],
  // middleware: 'auth',
  modules: [
    // '@nuxtjs-alt/auth',
    // '@nuxtjs-alt/axios',
    // '@nuxtjs-alt/pinia',
  ],
  css: ['~/assets/sass/global.scss'],
  plugins: [
    '~/plugins/axios'
  ],
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  },
  auth: {
    strategies: {
      local: {
        cookie: {
          server: true,
          name: 'token',
        },
        endpoints: {
          csrf: false,
          login: { url: '/api/login', method: 'post' },
          user: false, // { url: '/api/self', method: 'post' },
          logout: false
        },
        user: {
          property: 'false',
          autoFetch: false
        }
      },
    },
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      home: '/',
      callback: null
    },
  }
})
