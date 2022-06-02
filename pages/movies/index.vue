<template>
  <div class="container mx-auto">
    <BreadcrumbComponent class="mb-8" :pages="breadcrumbData" />
    <div class="flex items-center mb-4">
      <BaseButton link :to="'/movies/add'" class="mr-4">+ Add new Movie</BaseButton>
      <BaseButton class="ml-auto">Export</BaseButton>
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
          sortable="title"
          :sort="sort"
          multiple
          @sorting="sorting">Title</table-head>
        <!-- <table-head>Start From</table-head>
        <table-head>End To</table-head> -->
        <table-head
          sortable="status"
          :sort="sort"
          multiple
          @sorting="sorting">Status</table-head>
        <table-head>Action</table-head>
      </template>

      <template #tbody="{row}">
        <table-body v-text="row.title"/>
        <!-- <table-body v-text="convertDate(row.timestamp.start_date)"/>
        <table-body v-text="convertDate(row.timestamp.end_date)"/> -->
        <table-body>
          <BaseSelect v-model="movieStatus[row.id]" @selected-change="v => handleMovieStatusChanged(row.id, v)" :options="statusOptions" />
        </table-body>

        <table-body>
          <div class="flex items-center space-x-2">
            <!-- <BaseButton size="xs">VFX</BaseButton> -->
            <!-- <BaseButton size="xs">Script</BaseButton> -->
            <BaseButton size="xs" link :to="`/movies/${row.id}/watch-status`">Watch status</BaseButton>
            <BaseButton size="xs" link :to="`/movies/${row.id}`">Edit</BaseButton>
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
          <p class="text-sm text-gray-500">Confirm delete movie <b>{{ modalContext.title }}</b> ? </p>
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
import Movie from '~/assets/models/Movie'
import convertDate from "~/assets/js/convertDate"

const Page = defineComponent({
  components: {
    DataTable,
    TableBody,
    TableHead,
    TableBodyCell,
    CheckIcon
  },
  setup() {
    return {
      convertDate
    }
  },
  data() {
    return {
      breadcrumbData: [
        { name: 'Movies', href: '/movies', current: true },
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
      statusOptions: [
        { text: 'Draft', value: 0 },
        { text: 'Phase 1', value: 1 },
        { text: 'Phase 2', value: 2 },
        { text: 'Phase 3', value: 3 }
      ],
      movieStatus: {},
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
      const movie = new Movie()
      for (let i = 0; i < query.per_page; i++) {
        const item = movie.createDummy(i)
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
      this.tableData.data.forEach(element => {
        this.movieStatus[element.id] = this.statusOptions.find(v => v.value === element.status)
      });
      // this.movieStatus = this.tableData.data.map(item => {
      //   return {
      //     id: item.id,
      //     status: item.status
      //   }
      // })
      // console.log(this.movieStatus)
      this.isLoading = false
    },
    getStatus(status) {
      switch (status) {
        case 0:
          return 'Draft'
        case 1:
          return 'Phase 1'
        case 2:
          return 'Phase 2'
        case 3:
          return 'Phase 3'
      }
    },
    handleMovieStatusChanged(id, value) {
      // console.log({id,value})
    },
    actionConfirmDelete(data) {
      this.modalContext = data
      this.deleteConfirmation = true
    }
  }
})

export default Page
</script>