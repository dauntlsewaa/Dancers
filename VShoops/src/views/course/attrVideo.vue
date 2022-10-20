<template>
  <div>
    <!-- 课程属性 -->
    <vipAttr />
    <!-- 排序 -->
    <Synthesize />
    <!-- 视频列表 -->
    <Video />
  </div>
</template>

<script setup lang="ts">
import vipAttr from "@/views/course/vipAttr/index.vue";
import Synthesize from "@/views/course/synthesize/index.vue";
import Video from "@/views/home/VideoList/index.vue";
</script>

<style scoped></style>
