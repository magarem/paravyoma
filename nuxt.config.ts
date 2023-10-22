export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@formkit/nuxt', '@nuxtjs/tailwindcss', '@nuxt/content'],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  }
})