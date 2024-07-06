<template>
  <main class="home">
    <TheCard
      v-for="(tool, index) in tools"
      :key="index"
      :title="tool.title"
      :description="tool.description"
      :route="tool.route"
      :image="tool.image"
    />

  </main>
</template>

<script setup lang="ts">
import TheCard from '@/components/molecules/Card.vue'
import {ref} from 'vue'

const tools = ref([
  {
    title: 'Bloc note',
    description: 'Outil pour prendre des notes',
    route: 'PostIt',
    image: '@/assets/images/PostIt.webp'
  },
  {
    title: 'Calcul de compte',
    description: 'Outil pour faire des calculs financiers',
    route: 'Calculator',
    image: '@/assets/images/PostIt.webp'
  }
])
</script>


<style lang="scss" scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  &__card {
    flex: 1;
    color: black;
  }
}

</style>