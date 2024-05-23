<template>
  <div>
    <header class="header">
      <img alt="Vue logo" class="header__logo" src="" width="125" height="125"/>
      <div class="header__title">
        <h1>Toolbox</h1>
      </div>
      <div class="header__wrapper">
        <nav class="header__wrapper__nav">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: orange;
  height: 125px;
  &__logo {
    flex: 1;
    margin-left: 20px;
  }

  &__title {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__wrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
  &__nav{
    display: flex;
    gap: 20px;
  }
  }
}


</style>