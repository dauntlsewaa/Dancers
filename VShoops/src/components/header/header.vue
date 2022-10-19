<template>
  <el-card shadow="always" style="height: 60px">
    <div class="header">
      <div class="header_left">
        <img width="128" height="30" src="./images/logo@3xrenew3.png" />

        <ul class="navList">
          <li class="navItem" :class="{ active: isShow === 1 }" @click="handlerActive(1)">
            <router-link to="/index">资源</router-link>
          </li>
          <li class="navItem" :class="{ active: isShow === 2 }" @click="handlerActive(2)">
            <router-link to="/discovery">课程</router-link>
          </li>
          <li class="navItem" :class="{ active: isShow === 3 }" @click="handlerActive(3)">
            <router-link to="/training">练习室</router-link>
          </li>
          <li class="navItem" :class="{ active: isShow === 4 }" @click="handlerActive(4)">
            <router-link to="/index">交流</router-link>
          </li>
          <li class="navItem" :class="{ active: isShow === 5 }" @click="handlerActive(5)">
            <router-link to="/center">我的</router-link>
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
let isShow = ref(1);

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
