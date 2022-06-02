<template>
  <div class="container mx-auto">
    <BreadcrumbComponent class="mb-8" :pages="breadcrumbData" />
    <div class="flex items-center mb-4">
      <BaseButton link :to="'/roles/add'" class="mr-4">+ Add new Role</BaseButton>
      <!-- <BaseButton class="ml-auto">Export</BaseButton> -->
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
        <table-head>Action</table-head>
      </template>

      <template #tbody="{row}">
        <table-body v-text="row.name"/>
        <table-body>
          <div class="flex items-center space-x-2">
            <!-- <BaseButton size="xs">VFX</BaseButton> -->
            <!-- <BaseButton size="xs">Script</BaseButton> -->
            <BaseButton size="xs" link :to="`/roles/${row.id}`">Edit</BaseButton>
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
          <p class="text-sm text-gray-500">Confirm delete role <b>{{ modalContext.name }}</b> ? </p>
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
import Role from '~/assets/models/Role'
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
        { name: 'Roles', href: '/roles', current: true },
      ],
      tableData: {
        data: [],
        pagination: {}
      },
      pagination: {},
      query: {
        search: null,
        sort: ''
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
      const role = new Role()
      const arr = role.createDummies()

      const sortedArr = arr.sort((a,b) => {
        const splittedSortQuery = query.sort.split(',')
        const sortQuery = splittedSortQuery[splittedSortQuery.length-1]
        const sortBy = sortQuery.split(':')[0]
        const direction = sortQuery.split(':')[1]
        switch (direction) {
          case 'asc':
            if (typeof a[sortBy] === 'number') return a[sortBy] - b[sortBy]
            else return a[sortBy].localeCompare(b[sortBy])
          case 'desc':
            if (typeof a[sortBy] === 'number') return b[sortBy] - a[sortBy]
            else return b[sortBy].localeCompare(a[sortBy])
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