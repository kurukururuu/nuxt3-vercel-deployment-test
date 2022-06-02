<template>
  <div v-if="!!data" class="error-wrapper">
    <InformationCircleIcon class="w-6 mr-4" />
    <div class="w-11/12"
      style="max-width: fit-content">
      <div class="text-sm font-bold">{{ title }}</div>
      <div class="text-xs text-gray-400">{{ data.subtitle }}</div>
    </div>
  </div>
</template>

<script>
import { InformationCircleIcon } from '@heroicons/vue/solid'
export default {
  components: {
    InformationCircleIcon
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    title () {
      if (this.data.title === 'Internal server error' || this.data.title === 'Internal Server Error') {
        return 'Mohon maaf, silahkan coba beberapa saat lagi.'
      }
      return this.data.title
    }
  }
}
</script>

<style lang="scss" scoped>
.error-wrapper {
  @apply flex items-center p-2 bg-red-500 text-white border-opacity-50 rounded-lg mb-4;
  width: -webkit-fill-available;
}
</style>