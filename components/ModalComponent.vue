<template>
  <TransitionRoot as="template" v-bind="$attrs" class="modal-component" :show="open">
    <Dialog as="div" class="relative z-10" @close="actionCloseModal">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <slot name="header-icon"></slot>
                  <!-- <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" /> -->
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <!-- <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900"> Payment successful </DialogTitle> -->
                  <slot name="body"></slot>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <slot name="footer"></slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
  components: {
    Dialog,DialogPanel,DialogTitle,TransitionChild,TransitionRoot
  },
  props: {
    opened: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      open: false
    }
  },
  watch: {
    opened(newValue) {
      this.open = newValue
    }
  },
  methods: {
    actionCloseModal() {
      this.open = false
      this.$emit('close-modal')
    }
  }
}
</script>