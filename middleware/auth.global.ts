export default defineNuxtRouteMiddleware(async (to, from) => {
  // const ctx = useNuxtApp()
  // console.log(ctx.$auth)
  // setTimeout(async () => {
  //   const authContext = await nuxtContext.$auth
  //   console.log({authContext: nuxtContext.$auth})
  //   console.log('delayed', {authContext: nuxtContext.$auth})
  //   console.log('delayed', {authContext: authContext})
  // },500)
  // console.log('running global middleware', to, from, nuxtContext)
  // if (!authContext.loggedIn) {
  //   if (to.name !== 'auth-login') {
  //     return navigateTo('/auth/login')
  //   }
  // } else if (to.name === 'auth-login') {
  //   return abortNavigation()
  // }
})