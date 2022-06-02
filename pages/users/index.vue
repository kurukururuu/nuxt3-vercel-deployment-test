<template>
  <div>
    <BreadcrumbComponent class="mb-8" :pages="breadcrumbData" />
    <div class="flex items-center mb-4">
      <BaseButton link :to="'/users/add'" class="mr-4">+ Add new User</BaseButton>
      <BaseButton class="ml-auto mr-4">Import</BaseButton>
      <BaseButton>Export</BaseButton>
    </div>
    <DataTable :rows="tableData.data"
      :pagination="pagination"
      :query="query"
      :loading="isLoading"
      striped
      sn
      filter
      @loadData="loadData">
      <template #thead-sn>
        <table-head>No.</table-head>
      </template>
      <template #thead="{sorting, sort}">
        <table-head
          sortable="name"
          :sort="sort"
          multiple
          @sorting="sorting">Name</table-head>
        <table-head
          sortable="email"
          :sort="sort"
          multiple
          @sorting="sorting">Email</table-head>
        <table-head
          sortable="phone"
          :sort="sort"
          multiple
          @sorting="sorting">Phone</table-head>
        <table-head>Roles</table-head>
        <table-head>Action</table-head>
      </template>

      <template #tbody="{row}">
        <table-body v-text="row.name"/>
        <table-body v-text="row.email"/>

        <table-body>
          {{row.phone}}
        </table-body>
        <table-body v-text="row.roles.join(', ')"/>
        <table-body>
          <div class="flex items-center space-x-2">
            <!-- <BaseButton size="xs">VFX</BaseButton> -->
            <!-- <BaseButton size="xs">Script</BaseButton> -->
            <BaseButton size="xs" link :to="`/users/${row.id}/watch-status`">Watch status</BaseButton>
            <BaseButton size="xs" link :to="`/users/${row.id}/vote-status`">Vote status</BaseButton>
            <BaseButton size="xs" link :to="`/users/${row.id}`">Edit</BaseButton>
            <BaseButton size="xs" color="red" @click="actionConfirmDelete(row)">Delete</BaseButton>
          </div>
        </table-body>
      </template>

      <template #empty>
        <TableBodyCell colspan="2">
          No record found.
        </TableBodyCell>
      </template>
      
      <template #loading>
        <div class="">Loading....</div>
      </template>
    </DataTable>
    
    <ModalComponent :opened="deleteConfirmation" @close="deleteConfirmation = false">
      <template v-slot:header-icon>
        <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
      </template>
      <template v-slot:body>
        <div slot="body" class="mt-2">
          <p class="text-sm text-gray-500">Confirm delete user <b>{{ modalContext.name }}</b> ? </p>
        </div>
      </template>
      <template v-slot:footer>
        <div class="sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <BaseButton color="red" @click="deleteConfirmation = false">Delete</BaseButton>
          <BaseButton color="transparent" @click="deleteConfirmation = false">Cancel</BaseButton>
        </div>
      </template>
    </ModalComponent>
  </div>
</template>

<script>
import {
  DataTable,
  TableBody,
  TableHead,
  TableBodyCell
} from "@jobinsjp/vue3-datatable/dist/vue3-datatable.umd"
import "@jobinsjp/vue3-datatable/dist/style.css"
import { CheckIcon } from '@heroicons/vue/outline'
import Profile from '~/assets/models/Profile'
const Page = defineComponent({
  components: {
    DataTable,
    TableBody,
    TableHead,
    TableBodyCell,
    CheckIcon
  },
  data() {
    return {
      breadcrumbData: [
        { name: 'Users', href: '/users', current: true },
      ],
      tableData: {
        data: [],
        pagination: {}
      },
      pagination: {},
      query: {
        search: null,
        sort: 'name:asc'
      },
      isLoading: false,
      deleteConfirmation: false,
      modalContext: {}
    }
  },
  mounted() {
    // this.fetchTableData()
  },
  methods: {
    loadData(query) {
      this.query.sort = query.sort // update sort query
      this.isLoading = true
      // dummy
      const arr = []
      const profile = new Profile()
      for (let i = 0; i < query.per_page; i++) {
        const item = profile.createDummy(i)
        arr.push(item)
      }
      const sortedArr = arr.sort((a,b) => {
        const splittedSortQuery = query.sort.split(',')
        const sortQuery = splittedSortQuery[splittedSortQuery.length-1]
        const sortBy = sortQuery.split(':')[0]
        const direction = sortQuery.split(':')[1]
        switch (direction) {
          case 'asc':
            return a[sortBy] - b[sortBy]
          case 'desc':
            return b[sortBy] - a[sortBy]
        }
      })
      this.tableData = {data: sortedArr, meta: {}}
      this.isLoading = false
    },
    actionConfirmDelete(data) {
      this.modalContext = data
      this.deleteConfirmation = true
    }
  }
})

export default Page
</script>