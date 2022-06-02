<template>
  <div class="min-h-screen bg-gray-100">
    <!-- <NuxtWelcome /> -->
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
import { useNuxtApp } from '#app'

export default {
  setup() {
    const nuxtApp = useNuxtApp()
    const authContext = nuxtApp.$auth

    let layout = 'default'
    if (!authContext.loggedIn) {
      layout = 'login'
    }
    return {layout, authContext}
  },
  computed: {
    // isLoggedIn() {
    //   return this.authContext.isLoggedIn
    // }
  },
  watch: {
    // isLoggedIn(newValue) {
    //   console.log({newValue})
    // }
  }
}
</script>