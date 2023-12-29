// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    // Optional: If you want to use the @formkit/nuxt module
    // '@formkit/nuxt',
  ],

  colorMode: {
    classSuffix: '',
  },

  vue: {
    defineModel: true,
  },

  image: {
    domains: ['github.com'],
  },
})
