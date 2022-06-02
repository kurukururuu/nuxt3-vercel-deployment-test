<template>
  <div>
    <label for="description" class="block text-sm font-medium text-gray-700"> <slot /> </label>
    <div class="mt-1">
      <template v-if="textarea">
        <textarea v-bind="$attrs" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md" :class="$props.inputClass" />
      </template>
      <template v-else>
        <input type="text" v-bind="$attrs" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md" :class="$props.inputClass" />
      </template>
    </div>
    <slot name="helper"></slot>
  </div>
</template>

<script>
export default {
  props: {
    inputClass: {
      type: String,
      default() {
        return ''
      }
    },
    textarea: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>