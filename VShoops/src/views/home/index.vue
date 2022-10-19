<template>
  <div>
    <div style="background-color: #fff">
      <!--  头部 -->
      <Header></Header>
      <!-- 轮播图 -->
      <div class="slideshow">
        <div class="block text-center" m="t-4">
          <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small justify-center" text="2xl">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <!-- 选择兴趣技能 -->
      <Interest />
    </div>

    <div style="background-color: #f5f7f9;width: 1200px; margin:0 auto">
      <!-- 属性筛选列表 -->
      <Attrs />
      <!--视频列表 -->
      <VideoList />

     
    </div>
 <!-- 底部 -->
 <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "../../components/header/header.vue";

import Interest from "./interest/index.vue";

import Attrs from "./attr/index.vue";
import VideoList from "./VideoList/index.vue";
import Footer from '../../components/footer/footer.vue'
</script>

<style scoped>
box-home {
  width: 100%;
}
.slideshow {
  width: 1200px;
  margin: 0 auto;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
