<template>
  <div>
    <header class="header">
      <img alt="Toolbox logo" class="header__logo" src="@/assets/images/toolbox.webp" width="125" height="125"/>
      <div class="header__title">
        <h1>Toolbox</h1>
      </div>
      <div class="header__wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFA500;
  padding: 0 20px;
  height: 125px;

  &__logo {
    flex: 1;
    margin-left: 20px;
  }
  &__title {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__wrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;

    nav {
      display: flex;
      gap: 15px;

      a {
        color: #333;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
