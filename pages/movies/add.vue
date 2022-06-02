<template>
  <div class="container mx-auto">
    <BreadcrumbComponent class="mb-8" :pages="breadcrumbData" />
    <div class="bg-white rounded-lg p-4">
      <form class="space-y-8 divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">Add new Movie</h3>
              <!-- <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p> -->
            </div>

            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <BaseInput name="title" id="title" autocomplete="given-name" class="sm:col-span-6">
                Title
              </BaseInput>

              <BaseInput textarea id="description" name="description" rows="3" class="sm:col-span-6">
                <div>Description</div>
                <template v-slot:helper><div class="mt-2 text-xs text-gray-500"> Write a few description about this movie. </div></template>
              </BaseInput>
              
              <div class="sm:col-span-6 grid grid-cols-6 md:grid-cols-6 mobile:grid-cols-2 gap-4">
                <!-- <BaseInput name="rating" id="rating" autocomplete="film-rating" class="sm:col-span-1 md:col-span-2">
                  Rating
                </BaseInput> -->
                <BaseInput name="ph" id="ph" autocomplete="film-ph" class="sm:col-span-1 md:col-span-3 col-span-6">
                  Production House
                </BaseInput>
                <BaseInput name="genre" id="genre" autocomplete="film-genre" class="sm:col-span-1 md:col-span-3 col-span-6">
                  Genre
                </BaseInput>
              </div>

              <div class="sm:col-span-6 grid grid-cols-5 md:grid-cols-5 mobile:grid-cols-2 gap-4">
                <div class="sm:col-span-1 col-span-5">
                  <label for="image-thumbnail" class="block text-sm font-medium text-gray-700"> Image Thumbnail </label>
                  <div class="mt-1 flex flex-col items-center">
                    <button type="button" class="mb-2 mr-auto bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Upload</button>
                    <img src="https://via.placeholder.com/150" alt="placeholder">
                  </div>
                </div>
                <div class="sm:col-span-1 col-span-5">
                  <label for="image-portrait" class="block text-sm font-medium text-gray-700"> Image Portrait </label>
                  <div class="mt-1 flex flex-col items-center">
                    <button type="button" class="mb-2 mr-auto bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Upload</button>
                    <img src="https://via.placeholder.com/150" alt="placeholder">
                  </div>
                </div>
                <div class="sm:col-span-1 col-span-5">
                  <label for="image-thumbnail-portrait" class="block text-sm font-medium text-gray-700"> Image Thumbnail Portrait </label>
                  <div class="mt-1 flex flex-col items-center">
                    <button type="button" class="mb-2 mr-auto bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Upload</button>
                    <img src="https://via.placeholder.com/150" alt="placeholder">
                  </div>
                </div>
                <div class="sm:col-span-1 col-span-5">
                  <label for="image-spotlight" class="block text-sm font-medium text-gray-700"> Image Thumbnail Landscape </label>
                  <div class="mt-1 flex flex-col items-center">
                    <button type="button" class="mb-2 mr-auto bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Upload</button>
                    <img src="https://via.placeholder.com/150" alt="placeholder">
                  </div>
                </div>
                <div class="sm:col-span-1 col-span-5">
                  <label for="image-spotlight" class="block text-sm font-medium text-gray-700"> Image Spotlight </label>
                  <div class="mt-1 flex flex-col items-center">
                    <button type="button" class="mb-2 mr-auto bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Upload</button>
                    <img src="https://via.placeholder.com/150" alt="placeholder">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-8">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">Movie Information</h3>
              <p class="mt-1 text-sm text-gray-500">Casts, Director, etc..</p>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <BaseInput type="date" name="release-date" id="release-date" autocomplete="release-date" class="sm:col-span-2">
                Release Date
              </BaseInput>
              <BaseInput type="text" name="movie-url" id="movie-url" autocomplete="movie-url" class="sm:col-span-2 sm:col-end-3">
                Movie URL
              </BaseInput>
              <BaseInput type="text" name="movie-vfx" id="movie-vfx" autocomplete="movie-vfx" class="sm:col-span-2">
                VFX URL
              </BaseInput>
              <BaseInput type="file" name="movie-script" id="movie-script" autocomplete="movie-script" class="sm:col-span-2">
                Script
              </BaseInput>
            </div>
            
            <div class="mt-6 grid grid-cols-1 gap-x-4 sm:grid-cols-6">
              <BaseInput type="text" name="cast-name" id="cast-name" autocomplete="cast-name" class="sm:col-span-2">
                Cast Name
              </BaseInput>
              <BaseSelect v-model="selectedCast" :options="castTypes" class="sm:col-span-2" type="select">
                Cast Type
              </BaseSelect>

              <div class="sm:col-span-1 col-span-1 self-end p-2">
                <BaseButton class="sm:w-fit w-full">+</BaseButton>
              </div>

              <div class="sm:col-span-4 p-2">
                <div class="text-sm">Order</div>
                <draggable 
                  v-model="draggableCasts"
                  group="people"
                  @start="drag=true"
                  @end="drag=false"
                  item-key="id"
                  class="p-2">
                  <template #item="{element} ">
                    <div class="flex items-center mb-1">
                      <DotsVerticalIcon class="h-5 w-5 cursor-grab text-gray-400"  />
                      <div class="cursor-grab text-xs border rounded-lg hover:bg-gray-100 p-2 w-1/2">{{element.name}} - {{element.type}}</div>
                      <BaseButton class="ml-4 bg-red-400 hover:bg-red-500">-</BaseButton>
                    </div>
                  </template>
                </draggable>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-5">
          <div class="flex justify-end">
            <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
            <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
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
        { name: 'Movies', href: '/movies', current: false },
        { name: 'Add Movie', href: '/movies/add', current: true }
      ],
      draggableCasts: [
        {
          name: "John Doe",
          type: 'Writer',
          id: 0
        },
        {
          name: "Maria",
          type: 'Producer',
          id: 1
        },
        {
          name: "Elizabeth",
          type: 'Writer',
          id: 2
        }
      ],
      drag: false,
      selectedCast: null,
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
        'Aktor',
        'Aktris',
      ],
      // castTypes: [
      //   { value: 'director', text: 'Sutradara' },
      //   { value: 'writer', text: 'Penulis Skenario Asli' },
      //   { value: 'producer', text: 'Producer' },
      // ]
    }
  },
  computed: {
    castTypes() {
      const arr = []
      arr.push({
        text: 'Non-Nominee',
        value: 'non-nominee'
      })
      this.listRoles.forEach(role => {
        arr.push({
          text: role,
          value: role.toLowerCase().split(' ').join('-')
        })
      })
      return arr
    }
  }
}
</script>