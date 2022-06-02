<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <div class="text-3xl mb-8">Welcome to <span class="text-yellow-700">FFI</span> dashboard !</div>
    <form @submit.prevent="actionLogin" class="flex flex-col items-center border border-gray-300 rounded-xl p-16 hover:border-yellow-500">
      <label for="email" class="mb-4 w-full">
        <div class="text-yellow-700">Email</div>
        <input type="email" name="email" v-model="form.email" class="w-full px-4 py-2 border border-gray-500 hover:border-yellow-500 rounded-lg">
      </label>
      <label for="password" class="mb-4 w-full">
        <div class="text-yellow-700">Password</div>
        <input type="password" name="password" v-model="form.password" class="w-full px-4 py-2 border border-gray-500 hover:border-yellow-500 rounded-lg" autocomplete="off">
      </label>
      <FormErrorMessage v-if="errorMessage" :data="errorMessage" />
      <button class="bg-blue-400 rounded-lg w-full p-2 text-white">
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { useNuxtApp } from '#app'

export default {
  setup() {
    definePageMeta({
      layout: 'login',
    })
    const routeContext = useRoute()
    const nuxtApp = useNuxtApp()
    const authContext = nuxtApp.$auth
    const axiosContext = nuxtApp.$axios
    return {authContext, axiosContext, routeContext}
  },
  data() {
    return {
      form: {
        email: null,
        password: null
      },
      errorMessage: null
    }
  },
  watch: {
    form: {
      handler() {
        this.errorMessage = null
      },
      deep: true
    }
  },
  methods: {
    async actionLogin() {
      this.$router.push('/')
    }
    // async actionLogin() {
    //   try {
    //     const response = await this.authContext.login({data: this.form})
    //     await this.authContext.setUserToken(response.data.token)
    //     // await this.authContext.fetchUser()
    //     // const nuxtApp = useNuxtApp()
    //     // console.log({ctx: this.axiosContext.defaults})
    //     setTimeout(() => {
    //       // console.log('before', {layout: this.routeContext.meta.layout})
    //       // this.routeContext.meta.layout = "default"
    //       // console.log({layout: this.routeContext.meta.layout})
    //       this.fetchUser(response.data.token)
    //     },500)
    //   } catch (error) {
    //     console.log({error})
    //     if (error.response) {
    //       this.errorMessage = {
    //         title: error.response.data.error
    //       }
    //     }
    //   }
    // },
    // async fetchUser(token) {
    //   try {
    //     const response = await this.axiosContext.post('/api/self', {token})
    //   } catch (error) {
    //     console.log({error})
    //     // if (error.response.data.error === 'token_not_provided') {
    //     //   this.fetchUser()
    //     // }
    //   }
    // }
  }
}
</script>