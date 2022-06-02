<template>
  <template v-if="link">
    <NuxtLink
      tag="button"
      class="cursor-pointer inline-flex justify-center items-center border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
      :class="[getSizeCss(), getColorCss(), disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''].join(' ')"
      :disabled="$props.disabled">
      <slot />
    </NuxtLink>
  </template>
  <button
    v-else
    type="button"
    class="cursor-pointer inline-flex justify-center items-center border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="[getSizeCss(), getColorCss(), disabled ? 'opacity-50 cursor-not-allowed' : ''].join(' ')"
    :disabled="$props.disabled">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default() {
        return 'base'
      }
    },
    color: {
      type: String,
      default() {
        return 'default'
      }
    },
    link: {
      type: Boolean,
      default() {
        return false
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  methods: {
    getSizeCss() {
      switch (this.size) {
        case 'base':
        default:
          return 'px-4 py-2 text-sm rounded-md'
        case 'sm':
          return 'px-3 py-2 text-sm leading-4 rounded-md'
        case 'xs':
          return 'px-2.5 py-1.5 text-xs rounded'
        case 'lg':
          return 'px-4 py-2 text-base rounded-md'
        case 'xl':
          return 'px-6 py-3 text-base rounded-md'
      }
    },
    getColorCss() {
      switch (this.color) {
        case 'red':
          return 'bg-red-500 hover:bg-red-600 focus:ring-red-500 active:bg-opacity-75'
        case 'transparent':
          return 'bg-transparent text-blue-primary hover:bg-gray-200 border border-blue-primary focus:ring-blue-primary active:bg-opacity-75'
        case 'default':
        default:
          return 'bg-blue-primary hover:bg-opacity-90 focus:ring-blue-primary active:bg-opacity-75'
      }
    }
  }
}
</script>