<template>
  <div class="card" @click="navigateTo">
    <div class="card__header">
      <img class="card__image" :src="image" alt="Card Image"/>
    </div>
    <div class="card__body">
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__description">{{ description }}</p>
    </div>
    <div class="card__footer">
      <button class="card__button">Learn More</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
  title: string
  description: string
  route: string
  image: string
}>()

const router = useRouter();

const navigateTo = () => {
  router.push({ name: props.route });
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 10px;
  color: $text-color;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 0;
  width: 320px;
  overflow: hidden;
  background-color: #fff;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &__header {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__body {
    padding: 20px;
    flex-grow: 1;
  }

  &__title {
    margin: 0 0 10px;
    font-size: 1.5em;
    color: $primary-color;
  }

  &__description {
    margin: 0;
    color: #666;
    font-size: 1em;
  }

  &__footer {
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: $secondary-color;
    border-top: 1px solid #eee;
  }

  &__button {
    background-color: $primary-color;
    border: none;
    padding: 10px 20px;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
}
</style>
