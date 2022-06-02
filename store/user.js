import { defineStore } from 'pinia'

const INITIAL_STATE = {
  list: [],
  item: {},
  loading: false
}

export const useMemberStore = defineStore({
  id: 'user',
  state() {
    return {
      list: [],
      item: {},
      loading: false
    }
  },
  actions: {
    async fetchList(ctx, payload={}) {
      this.loading = true
      try {
        const query = payload.query ? `?${payload.query.name ? `name=$${payload.query.name}` : ''}` : ''
        const response = await ctx.$axios.$get(`/api/users${query}`)
        this.list = response.data
      } catch (err) {
        console.error({ err })
      } finally {
        this.loading = false
      }
    },
    async fetchItem(ctx, payload={query: {}}) {
      if (!payload.query.id) return
      this.loading = true
      try {
        const response = await ctx.$axios.$get(`/api/users/${payload.query.id}`)
        this.item = response.data
        return {success: true, data: response.data}
      } catch (error) {
        console.error({ error })
      } finally {
        this.loading = false
      }
    }
  },
  getters: {
    computedList: (state) => {
      return state.list.map(v => {
        return {
          name: v.name,
          email: v.email,
          type: v.organization_type.name,
          tags: v.tag.map(t => t.name).join(',')
        }
      })
    }
  },
})