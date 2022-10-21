<template>
  <!-- 综合 -->
  <el-menu class="el-menu-demo" active-text-color="#f93684" style="margin-left:150px" @select="handlerOver">
    <el-menu-item index="2-1" :class="{ active :isActive == '2-1'}">{{isActive == '2-1' ? '综合排名':'综合'}}</el-menu-item>
    <el-menu-item index="2-2">{{ isActive == '2-2' ? '销量由高到低' : '销量' }}</el-menu-item>
    <el-menu-item index="2-3">{{ isActive == '2-3' ? '浏览量由高到低' : '浏览量'}}</el-menu-item>
    <el-sub-menu index="2-4">
      <template #title>价格</template>
      <el-menu-item index="2-6">价格由高到低</el-menu-item>
      <el-menu-item index="2-7">价格由低到高</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2-5">{{ isActive == '2-5' ? '发布时间由近及远' : '发布时间' }}</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
const isActive = ref('2-1')

const handlerOver = (e: any) => {
  isActive.value = e
}
</script>
<style scoped>
.el-menu-demo {
  border-bottom: none;
  display: flex;
  /* justify-content: center; */
  width: 1200px;
  margin: 0 auto !important;
}

/deep/.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #f93684;
  border-bottom: none;
}

.active {
  color: #f93684;
}
</style>
