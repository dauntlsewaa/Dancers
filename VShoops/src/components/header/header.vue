<template>
  <div class="box">
    <div class="header">
      <a class="logo" href=""><img src="./images/logo@3xrenew3.png" alt="" /></a>
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
      <div class="core">
        <span class="download">
          <el-icon><Iphone /></el-icon>下载APP</span
        >
        <button class="issue">
          <el-icon><Plus /></el-icon>发布
        </button>
        <span>登陆</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
.box {
  width: 100%;
  height: 60px;
  box-shadow: 0px 2px 0px 0px rgb(122, 115, 115, 0.2);
}
.header {
  width: 1200px;
  height: 60px;
  margin: 0 auto;
}
.logo {
  float: left;
}
.logo img {
  width: 128px;
  margin-top: 15px;
}
.navList {
  float: left;
}
.navList .navItem {
  float: left;
  margin-left: 40px;
  line-height: 60px;
}
.active {
  color: #f93684;
}
.core {
  float: right;
}
.core .download {
  font-weight: 600;
  line-height: 60px;
  margin-right: 30px;
}
.core .issue {
  text-align: center;
  border: none;
  margin-right: 20px;
  color: #fff;
  line-height: 30px;
  background-color: #f93684;
  width: 75px;
  height: 30px;
  font-size: 16px;
  border-radius: 10px;
}

.core .person {
  display: inline-block;
  width: 30px;
  height: 30px;

  border-radius: 50%;
  color: #fff;
  background-color: #ccc;
  line-height: 30px;
  text-align: center;
}
</style>
