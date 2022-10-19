<template>
  <el-card shadow="always" style="height: 60px">
    <div class="header">
      <div class="header_left">
        <img width="128" height="30" src="./images/logo@3xrenew3.png" />

        <ul class="navList">
          <li
            class="navItem"
            :class="{ active: isShow === index }"
            @click="handlerActive(index)"
            v-for="(item, index) in titleList"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div>
        <el-button
          style="border: none; font-size: 16px; color: #101010"
          size="default"
          icon="Iphone"
          >下载APP</el-button
        >

        <el-button
          type="primary"
          size="default"
          :icon="Plus"
          round
          style="background-color: #f93684; margin-left: 10px; border: none"
          >发布</el-button
        >

        <el-button style="border: none">登陆</el-button>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { Plus, Iphone } from "@element-plus/icons-vue";
import { ref } from "vue";
let isShow = ref(0);
let titleList = ref(["资源", "课程", "练习室", "交流", "我的"]);

let handlerActive = (index: number) => {
  isShow.value = index;
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.header {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.header_left {
  display: flex;
}

.navList {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
}
.navItem {
  width: 55px;
  height: 50px;
  text-align: center;
  font-size: 18px;
  margin: 0 20px;
}

.active {
  color: #f93684;
}

</style>
