<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__top">
        <div class="footer__top__left">
          <h2 class="footer__title">ToolBox</h2>
          <p class="footer__description">ToolBox is a collection of tools to help  with the daily tasks.</p>
        </div>
        <div class="footer__top__right"></div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copy">© 2024 ToolBox. All rights reserved.</p>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped >
@import '@/assets/styles/variables.scss';
.footer {
  background-color: $footer-color;
  padding: 20px;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>