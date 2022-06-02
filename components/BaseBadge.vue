<template>
  <div @click="deletable ? $emit('delete') : ''"
    class="bg-indigo-100 text-indigo-800 py-0.5 rounded-full font-medium mr-2"
    :class="[deletable ? 'cursor-pointer' : '', small ? 'px-2.5 text-xs' : 'px-3 text-sm'].join(' ')">
    <span v-if="small" class="inline-flex items-center">
      <svg v-if="dots" class="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3" />
      </svg>
      <div>{{ label }}</div>
      <div v-if="deletable" class="text-xxs font-medium ml-2">&#9587;</div>
    </span>
    <span v-else class="inline-flex items-center">
      <svg v-if="dots" class="-ml-1 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3" />
      </svg>
      <div>{{ label }}</div>
      <div v-if="deletable" class="text-xs font-medium ml-2">&#9587;</div>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default() {
        return false
      }
    },
    dots: {
      type: Boolean,
      default() {
        return false
      }
    },
    deletable: {
      type: Boolean,
      default() {
        return false
      }
    },
    label: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>