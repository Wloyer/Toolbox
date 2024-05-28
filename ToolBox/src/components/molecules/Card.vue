<template>
  <div class="card">
    <div class="card__header">
      <h2 class="card__title">{{ title }}</h2>
    </div>
    <div class="card__content">
      <p class="card__description">{{ description }}</p>
    </div>
    <div class="card__footer"></div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

const props = defineProps({
  title: String,
  description: String
})
</script>

<style lang="scss" scoped>
.card {
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  margin: 20px;
  padding: 20px;
  width: 300px;
  height: 300px;

  &__header {
    margin-bottom: 20px;
  }

  &__title {
    margin: 0;
    color: black;
  }

  &__content {
    margin-bottom: 20px;
  }

  &__description {
    margin: 0;
  }

  &__footer {
    border-top: 1px solid #ccc;
    margin-top: 20px;
  }
}
</style>