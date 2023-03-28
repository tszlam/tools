<template>
  <div class="common-layout">
    <el-container class="layout-container">
      <el-aside class="layout-aside">
        <ElMenu class="nav-menu" router :default-active="route.path">
          <ElMenuItem v-for="{ path, name } in routes" :key="path" :index="path" >{{ name }}</ElMenuItem>
        </ElMenu>
      </el-aside>
      <el-main class="layout-main">
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { RouterView, useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const routes = router.getRoutes().map(({ path, name }) => ({ path, name: (name as string) }))
// TODO: 初次加载时route.path 会从/ 变成某一个，导致menu的选中项会有闪烁切换。需要看下为什么
</script>

<style scoped>
.common-layout {
  height: 100%;
  width: 100%;
}
.common-layout .layout-container {
  height: 100%;
  width: 100%;
}
.common-layout .layout-container .layout-main {
  background-color: var(--el-color-success-light-9);
}
.nav-menu {
  height: 100%;
}
</style>
