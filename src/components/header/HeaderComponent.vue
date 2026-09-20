<template>
  <q-header>
    <q-tabs v-model="tab">
      <q-route-tab name="main" to="/" icon="home" label="Главная" />
      <q-route-tab name="books" to="/books" icon="book" label="Книги" />
      <q-route-tab name="authors" to="/authors" icon="person" label="Авторы" />
      <q-route-tab name="login" to="/login" icon="login" label="Войти" />
    </q-tabs>
  </q-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tab = ref('main')
</script>

<style scoped></style>
