<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- 通過"完整路徑"作為key值，確保路由發生變化時，RouterView會重新創建和渲染 -->
  <RouterView :key="$route.fullPath" />
</template>

<style lang="scss">

</style>
