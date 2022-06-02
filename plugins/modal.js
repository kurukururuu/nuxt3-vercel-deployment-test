export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      modal: () => {
        // const modals = Array.from(nuxtApp.vueApp._container.querySelectorAll('.modal-component'))
        
        // console.log({comp: modals})
        // const open = (id) => {
        //   const found = modals.find(v => v.id === id)
        //   console.log({found})
        //   if (!found) return
        //   console.log(found.__vueParentComponent.ctx.open)
        //   found.__vueParentComponent.ctx.open = true
        //   console.log(found.__vueParentComponent.ctx.open)
        // }

        // return { open }
      }
    }
  }
})