<template>
  <q-layout view="hHh lpR fFf">
    <HeaderComponent />
    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import Footer from '@/components/footer/FooterComponent.vue'
</script>

<style scoped></style>
