<template>
  <div class="authors column">
    <h4>Авторы</h4>
    <q-input v-model="search" @blur="fetchAuthors" outlined />
    <div class="authors-list">
      <q-card v-for="(author, i) in authors" :key="i" class="authors-list-item">
        <q-card-section class="column">
          <p class="q-mb-none">Имя: {{ author.full_name }}</p>
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
const authors = ref(null)
const pagination = ref({
  page: 1,
  perPage: 10,
})

const fetchAuthors = async () => {
  try {
    const { data } = await client.GET('/authors', {
      params: {
        query: {
          page: pagination.value.page,
          perPage: pagination.value.perPage,
          ...(search.value && { search: search.value }),
        },
      },
    })
    authors.value = data?.data?.items ?? []
    // pagination.value = data?.pagination ?? {}
  } catch (error) {
    console.error(error)
  }
}

watch(
  () => pagination.value.page,
  async () => {
    await fetchAuthors()
  },
  { immediate: true },
)
</script>

<style scoped>
.authors {
  gap: 12px;
}

.authors-list {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.authors-list-item {
  width: 300px;
}
</style>
