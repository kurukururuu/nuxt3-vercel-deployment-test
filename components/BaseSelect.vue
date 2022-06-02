<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Listbox as="div" v-model="selected" type="select" class="flex flex-col">
    <ListboxLabel class="block text-sm font-medium text-gray-700"> <slot /> </ListboxLabel>
    <div class="mt-1 relative flex flex-1">
      <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span class="block truncate">{{ selected.text }}</span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>
      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="item,i in options" :key="i" :value="item" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                {{ item.text }}
              </span>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
export default {
  components: {
    Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions, CheckIcon, SelectorIcon
  },
  props: {
    label: {
      type: String,
      default() {
        return 'Title'
      }
    },
    helperText: {
      type: String,
      default() {
        return null
      }
    },
    options: {
      type: Array,
      default() {
        return []
      }
    },
    preselectFirst: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      selected: {}
    }
  },
  watch: {
    selected(newValue) {
      this.$emit('selected-change', newValue.value)
    }
  },
  mounted() {
    if (this.$attrs.modelValue !== null) {
      const foundIndex = this.options.findIndex(v => v == this.$attrs.modelValue)
      if (foundIndex !== -1) {
        this.selected = this.options[foundIndex]
      }
    } else if (this.preselectFirst) {
      this.selected = this.options[0]
    }
  }
}
</script>