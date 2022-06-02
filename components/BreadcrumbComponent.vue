<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li>
        <div>
          <NuxtLink href="/" class="text-gray-400 hover:text-gray-500">
            <HomeIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </NuxtLink>
        </div>
      </li>
      <li v-for="page in pages" :key="page.name">
        <div class="flex items-center">
          <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
          <NuxtLink v-if="!page.current" :to="page.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:underline" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</NuxtLink>
          <div v-else class="ml-4 text-sm font-medium text-blue-primary hover:text-opacity-75">{{ page.name }}</div>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/solid'

export default {
  components: {
    ChevronRightIcon, HomeIcon
  },
  props: {
    pages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  // setup() {
  //   const pages = [
  //     { name: 'Events', href: '/events', current: false },
  //     { name: 'slug', href: '/events/slug', current: true },
  //   ]

  //   return { pages }
  // }
}
</script>