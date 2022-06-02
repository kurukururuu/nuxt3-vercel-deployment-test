<template>
  <div class="container mx-auto">
    <BreadcrumbComponent class="mb-8" :pages="breadcrumbData" />
    <div class="flex items-center">
      <BaseSelect v-model="selectedCategory" :options="categories" preselect-first class="mb-4 w-1/3 md:w-1/3 sm:w-full mr-4">
        Category
      </BaseSelect>
      <BaseButton class="ml-auto">Export</BaseButton>
    </div>
    <DataTable :rows="tableData.data"
      :pagination="tableData.meta"
      :query="query"
      :loading="isLoading"
      striped
      sn
      filter
      @loadData="loadData"
      class="px-2">
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
        sortable="totalVotes"
        :sort="sort"
        multiple
        @sorting="sorting">Total votes</table-head>
      <table-head
        sortable="totalScores"
        :sort="sort"
        multiple
        @sorting="sorting">Total score</table-head>
      <!-- <table-head>Action</table-head> -->
    </template>

    <template #tbody="{row}">
      <table-body v-text="row.title"/>
      <table-body v-text="row.totalVotes"/>
      <table-body v-text="row.totalScores"/>

      <!-- <table-body>
        <div class="flex items-center space-x-2">
          <BaseButton size="xs" link :to="`/movies/${row.id}/watch-status`">See more</BaseButton>
          <BaseButton size="xs">Edit</BaseButton>
          <BaseButton size="xs" color="red">Delete</BaseButton>
        </div>
      </table-body> -->
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
import convertDate from "~/assets/js/convertDate"
const Page = defineComponent({
  components: {
    DataTable,
    TableBody,
    TableHead,
    TableBodyCell
  },
  setup() {
    return {
      convertDate
    }
  },
  data() {
    return {
      breadcrumbData: [
        { name: 'Votes', href: '/votes', current: true },
      ],
      tableData: {
        data: [],
        meta: {}
      },
      query: {
        search: null,
        sort: 'name:asc',
        page: 1,
        per_page: 10
      },
      isLoading: false,
      selectedCategory: null,
      categories: [
        {text: 'Film Cerita Panjang Terbaik', value: 0},
        {text: 'Sutradara Terbaik', value: 1},
        {text: 'Penulis Skenario Asli Terbaik', value: 2},
        {text: 'Penulis Skenario Adaptasi Terbaik', value: 3},
        {text: 'Pengarah Sinematografi Terbaik', value: 4},
        {text: 'Pengarah Artistik Terbaik', value: 5},
        {text: 'Penata Efek Visual Terbaik', value: 6},
        {text: 'Penyunting Gambar Terbaik', value: 7},
        {text: 'Penata Suara Terbaik', value: 8},
        {text: 'Penata Musik Terbaik', value: 9},
        {text: 'Pencipta Lagu Tema Terbaik', value: 10},
        {text: 'Penata Busana Terbaik', value: 11},
        {text: 'Penata Rias Terbaik', value: 12},
        {text: 'Pemeran Utama Pria Terbaik', value: 13},
        {text: 'Pemeran Utama Perempuan Terbaik', value: 14},
        {text: 'Pemeran Pendukung Pria Terbaik', value: 15},
        {text: 'Pemeran Pendukung Perempuan Terbaik', value: 16},
        {text: 'Film Cerita Pendek Terbaik', value: 17},
        {text: 'Film Dokumenter Pendek Terbaik', value: 18},
        {text: 'Film Dokumenter Panjang Terbaik', value: 19},
        {text: 'Film Animasi Panjang Terbaik', value: 20},
        {text: 'Film Animasi Pendek Terbaik', value: 21},
      ]
    }
  },
  watch: {
    selectedCategory(newValue, oldValue) {
      if (!newValue) return
      this.loadData({category: newValue, ...this.query, ...this.tableData.meta})
    }
  },
  mounted() {
    window.test = this
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
    },
  }
})

export default Page
</script>