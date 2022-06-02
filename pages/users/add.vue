<template>
  <div class="container mx-auto">
    <BreadcrumbComponent class="mb-8" :pages="breadcrumbData" />
    <div class="bg-white rounded-lg p-4">
      <form class="space-y-8 divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">Add new User</h3>
              <!-- <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p> -->
            </div>

            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <BaseInput name="name" id="name" autocomplete="given-name" class="sm:col-span-6">
                Name
              </BaseInput>
              
              <div class="sm:col-span-6 grid grid-cols-2 md:grid-cols-2 mobile:grid-cols-2 gap-4">
                <BaseInput name="rating" id="rating" autocomplete="film-rating" class="sm:col-span-1 md:col-span-1">
                  Email
                </BaseInput>
                <BaseInput name="ph" id="ph" autocomplete="film-ph" class="sm:col-span-1">
                  Phone
                </BaseInput>
              </div>
            </div>
          </div>

          <div class="pt-8">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">User Roles</h3>
              <p class="mt-1 text-sm text-gray-500">Assign user roles here. User can have multiple roles</p>
            </div>
            
            <div class="mt-6 grid grid-cols-1 gap-x-4 sm:grid-cols-6">
              <BaseSelect v-model="selectedRole" :options="roleOptions" class="sm:col-span-2 p-2" type="select">
                Roles
              </BaseSelect>

              <div class="sm:col-span-1 self-end p-2" @click="actionAssignRole">
                <BaseButton class="w-full sm:w-fit">+</BaseButton>
              </div>

              <div class="sm:col-span-4 p-2">
                <div class="flex flex-wrap items-center max-w-md">
                  <template v-if="userRoles.length > 0" v-for="item,i in userRoles" :key="i">
                    <div class="flex items-center mb-1">
                      <BaseBadge small deletable :label="item.text" @delete="handleDeleteRole(i)" />
                    </div>
                  </template>
                  <template v-else>
                    <div class="opacity-50 text-xs mt-2">User currently have no roles...</div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-5">
          <div class="flex justify-end">
            <BaseButton link to="/users" type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</BaseButton>
            <BaseButton @click="actionCreateUser" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</BaseButton>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
  components: {
    draggable, DotsVerticalIcon
  },
  data() {
    return {
      breadcrumbData: [
        { name: 'Users', href: '/users', current: false },
        { name: 'Create User', href: '/users/add', current: true }
      ],
      userRoles: [
        {
          text: 'Sutradara',
          value: 'sutradara'
        },
        {
          text: 'Penyunting Gambar',
          value: 'penyunting-gambar'
        }
      ],
      drag: false,
      selectedRole: null,
      listRoles: [
        'Sutradara',
        'Penulis Skenario Asli',
        'Penulis Skenario Adaptasi',
        'Pengarah Sinematografi',
        'Pengarah Artistik',
        'Penata Efek Visual',
        'Penyunting Gambar',
        'Penata Suara',
        'Penata Musik',
        'Pencipta Lagu Tema',
        'Penata Busana',
        'Penata Rias',
        'Pemeran Utama Pria',
        'Pemeran Utama Perempuan',
        'Aktor',
        'Aktris',
      ]
    }
  },
  computed: {
    roleOptions() {
      const arr = []
      return this.listRoles.map(role => {
        return {
          text: role,
          value: role.toLowerCase().split(' ').join('-')
        }
      })
    }
  },
  methods: {
    actionAssignRole() {
      if (this.userRoles.map(v => v.value).includes(this.selectedRole.value)) return
      this.userRoles.push(this.selectedRole)
    },
    handleDeleteRole(idx) {
      this.userRoles.splice(idx,1)
    },
    actionCreateUser() {

    }
  }
}
</script>