<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from '@/components/organisms/Header/Header.vue'
import TheFooter from '@/components/organisms/Footer/Footer.vue'
</script>

<template>
  <div id="app">
    <component :is="$route.matched[0]?.components?.header || 'The-Header'" />
    <router-view />
    <component :is="$route.matched[0]?.components?.footer || 'The-Footer'" />
  </div>
</template>

<style scoped>

</style>
