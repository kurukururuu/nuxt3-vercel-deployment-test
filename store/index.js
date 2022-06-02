import { defineStore } from 'pinia'

const INITIAL_STATE = {
  searchKeyword: ''
}

export const useIndexStore = defineStore({
  id: 'index',
  state() {
    return {
      ...INITIAL_STATE
    }
  },
  actions: {
    fillSearchKeyword(payload) {
      this.searchKeyword = payload
    }
  },
  getters: {
    keyword:(state) => {
      return state.searchKeyword
    }
  },
})