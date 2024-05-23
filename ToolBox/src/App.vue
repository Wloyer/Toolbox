<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from '@/components/organisms/Header/Header.vue'
import TheFooter from '@/components/organisms/Footer/Footer.vue'
</script>

<template>
  <The-header/>
    <RouterView />
  <The-footer/>
</template>

<style scoped>

</style>
