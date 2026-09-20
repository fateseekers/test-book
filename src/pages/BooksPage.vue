<template>
  <div class="books column">
    <h4>Книги</h4>
    <q-input v-model="search" @blur="fetchBooks" outlined />
    <div class="books-list">
      <q-card v-for="(book, i) in books" :key="i" class="books-list-item inline-flex">
        <q-card-section class="column">
          <p>Название: {{ book.title }}</p>
          <p>Описание: {{ book.description }}</p>
          <p>Год: {{ book.year }}</p>
          <p class="q-mb-none">{{ book.isbn }}</p>
        </q-card-section>
        <q-card-section class="flex">
          <q-chip v-for="(author, j) in book.authors" :key="j">{{ author.full_name }}</q-chip>
        </q-card-section>
      </q-card>
    </div>
    <q-pagination class="q-mx-auto" v-model="pagination.page" :max="5" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import client from '@/utils/client.ts'

const search = ref('')
const books = ref(null)
const pagination = ref({
  page: 1,
  perPage: 10,
})

const fetchBooks = async () => {
  try {
    const { data } = await client.GET('/books', {
      params: {
        query: {
          page: pagination.value.page,
          perPage: pagination.value.perPage,
          ...(search.value && { search: search.value })
        },
      },
    })
    books.value = data?.data?.items ?? []
    // pagination.value = data?.pagination ?? {}
  } catch (error) {
    console.error(error)
  }
}

watch(
  () => pagination.value.page,
  async () => {
    await fetchBooks()
  },
  { immediate: true },
)
</script>

<style scoped>
.books {
  gap: 12px;
}

.books-list {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.books-list-item {
  width: 300px;
}
</style>
