<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- 通過"完整路徑"作為key值，確保路由發生變化時，RouterView會重新創建和渲染 -->
  <body>
    <RouterView :key="$route.fullPath" />
  </body>
</template>

<style lang="scss">
body {
  width: 1200px;
  margin: 0 auto;
}
</style>
