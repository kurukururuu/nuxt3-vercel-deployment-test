<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <h3 class="text-lg leading-6 font-medium ">{{ title }}</h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div v-for="item,i in stats" :key="i" class="px-4 py-5 shadow rounded-lg overflow-hidden sm:p-6"
        :class="colorCSS">
        <dt class="text-sm font-medium opacity-75 truncate">
          {{ item.name }}
        </dt>
        <dd class="mt-1 text-3xl font-semibold ">
          {{ item.stat }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    stats: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default() {
        return ''
      }
    },
    color: {
      type: String,
      default() {
        return 'default'
      }
    }
  },
  computed: {
    colorCSS() {
      switch (this.color) {
        case 'green':
          return 'text-white bg-green-stats'
        case 'blue':
          return 'text-white bg-blue-stats'
        case 'yellow':
          return 'text-white bg-yellow-stats'
        default:
          return 'text-gray-900'
      }
    }
  }
}
</script>