// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/lib/colors.scss" as *; @use "~/assets/styles/lib/mixins.scss" as *; @use "~/assets/styles/_reset.scss" as *;'
        }
      }
    }
  },
  // modules: [
  //   '@splidejs/vue-splide'
  // ],
})
