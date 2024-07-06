<template>
  <div id="app">
    <component :is="currentHeaderComponent" />
    <router-view />
    <component :is="currentFooterComponent" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/organisms/Header/Header.vue'
import Footer from '@/components/organisms/Footer/Footer.vue'
import PostItHeader from '@/components/organisms/Header/PostItHeader.vue'
import PostItFooter from '@/components/organisms/Footer/PostItFooter.vue'
import CalculatorHeader from '@/components/organisms/Header/CalculatorHeader.vue'
import CalculatorFooter from '@/components/organisms/Footer/CalculatorFooter.vue'
const route = useRoute();

const currentHeaderComponent = computed(() => {
  switch (route.name) {
    case 'PostIt':
      return PostItHeader;
    case 'Calculator':
      return CalculatorHeader;
    default:
      return Header;
  }
});

const currentFooterComponent = computed(() => {
  switch (route.name) {
    case 'PostIt':
      return PostItFooter;
      case 'Calculator':
      return CalculatorFooter;
    default:
      return Footer;
  }
});
</script>


