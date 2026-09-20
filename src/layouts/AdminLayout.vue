<template>
  <q-layout>
    <HeaderComponent />
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterComponent />
  </q-layout>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'

defineComponent({
  name: 'AdminLayout',
})
</script>

<style scoped></style>
