<template>
  <div class="content">
    <img src="@/assets/404.webp" />

    <router-link to="/index">
      <el-button type="danger" size="default" class="fanhui">点击这里返回首页</el-button>
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.content {
  margin: 0 auto;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
}
.fanhui {
  font-size: 24px;
  position: absolute;
  top: 200px;
  right: 700px;
}
</style>
