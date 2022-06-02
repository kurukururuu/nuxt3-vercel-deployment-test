<template>
  <div class="container mx-auto">
    <div class="text-3xl mb-10">Dashboard FFI</div>
    <BaseStats color="green" title="User Login" :stats="loginData" class="mb-12" />
    <BaseStats color="blue" title="User Watch Status" :stats="watchData" class="mb-12" />
    <BaseStats color="yellow" title="User Votes Status on Phase 2" :stats="votesData" class="mb-12" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
  // middleware: ["auth"]
  // or middleware: 'auth'
})
</script>

<script>
export default {
  data() {
    return {
      loginData: [
        { name: 'Total Users Login on phase 1:', stat: '71,897 / 100,000' },
        { name: 'Total Users Login on phase 2:', stat: '53,123 / 100,000' },
        { name: 'Total Users Login on phase 3:', stat: '1,400 / 2,000' }
      ],
      watchData: [
        { name: 'Total Users Finished Watching on phase 1:', stat: '71,897 / 100,000' },
        { name: 'Total Users Finished Watching on phase 2:', stat: '53,123 / 100,000' },
        { name: 'Total Users Finished Watching on phase 3:', stat: '1,400 / 2,000' }
      ],
      votesData: [
        { name: 'Total Votes on phase 2:', stat: '125,466' }
      ]
    }
  }
}
</script>