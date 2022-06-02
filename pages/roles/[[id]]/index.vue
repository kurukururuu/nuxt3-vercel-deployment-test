<template>
  <div class="container mx-auto">
    <BreadcrumbComponent class="mb-8" :pages="breadcrumbData" />
    <div class="bg-white rounded-lg p-4">
      <form class="space-y-8 divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">Edit Role</h3>
              <!-- <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p> -->
            </div>

            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <BaseInput name="name" id="name" autocomplete="given-name" class="sm:col-span-6">
                Name
              </BaseInput>
            </div>
          </div>
        </div>

        <div class="pt-5">
          <div class="flex justify-end">
            <BaseButton link to="/roles" type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</BaseButton>
            <BaseButton @click="actionCreateRole" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</BaseButton>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      breadcrumbData: [
        { name: 'Roles', href: '/roles', current: false },
        { name: 'Create Role', href: '/roles/add', current: false },
        { name: this.$route.params.id, href: `/roles/${this.$route.params.id}`, current: true }
      ]
    }
  },
  methods: {
    actionCreateRole() {

    }
  }
}
</script>