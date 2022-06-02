<template>
  <div>
    <BreadcrumbComponent class="mb-8" :pages="breadcrumbData" />
    <div class="flex items-center mb-8">
      <div class="mr-4 text-lg">Movie watched status of user : {{ $route.params.id }}</div>
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
        @sorting="sorting">Movie Title</table-head>
      <table-head
        sortable="watchStatus"
        :sort="sort"
        multiple
        @sorting="sorting">Status</table-head>
    </template>

    <template #tbody="{row}">
      <table-body v-text="row.title"/>
      <table-body v-text="row.watchStatus"/>
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
import Movie from '~/assets/models/Movie'
const Page = defineComponent({
  components: {
    DataTable,
    TableBody,
    TableHead,
    TableBodyCell
  },
  data() {
    return {
      breadcrumbData: [
        { name: 'Users', href: '/users', current: false },
        { name: this.$route.params.id, href: `/users/${this.$route.params.id}`, current: false },
        { name: 'User Votes', href: `/users/${this.$route.params.id}/watch-status`, current: true },
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
      this.isLoading = false
    }
  }
})

export default Page
</script>