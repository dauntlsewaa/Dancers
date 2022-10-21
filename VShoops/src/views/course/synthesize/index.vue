<template>
  <!-- 综合 -->
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 575cda281937a3bcad3daa7319aebb7a463ff317
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      menu-trigger="hover"
      active-text-color="#f93684"
      style="margin: 10px 0 10px 160px; width: 1200px"
      @select="handlerMenu"
    >
      <el-menu-item index="2-1" :class="{ active: isActive == '2-1' }"
        ><router-link to="/discovery/x">{{
          isActive == "2-1" ? "综合排名" : "综合"
        }}</router-link></el-menu-item
      >
      <el-menu-item index="2-2"
        ><router-link to="/discovery/w">{{
          isActive == "2-2" ? "销量由高到低" : "销量"
        }}</router-link></el-menu-item
      >
      <el-menu-item index="2-3"
        ><router-link to="/discovery/e">{{
          isActive == "2-3" ? "浏览量由高到低" : "浏览量"
        }}</router-link></el-menu-item
      >
      <el-sub-menu index="2-4">
        <template #title>
          <router-link to="/discovery/q">价格</router-link>
        </template>
        <el-menu-item index="2-6">价格由高到低</el-menu-item>
        <el-menu-item index="2-7">价格由低到高</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2-5">
        <router-link to="/discovery/a">发布时间</router-link>
      </el-menu-item>
<<<<<<< HEAD
=======
=======
  <el-menu
    active-text-color="#f93684"
    mode="horizontal"
    menu-trigger="hover"
    style="margin: 10px 0 10px 160px; width: 1200px"
  >
    <el-menu-item index="2-1" class="active">综合</el-menu-item>
    <el-menu-item index="2-2">销量由高到低</el-menu-item>
    <el-menu-item index="2-3">浏览量</el-menu-item>
=======
  <el-menu class="el-menu-demo" active-text-color="#f93684" style="margin-left:150px" @select="handlerOver">
    <el-menu-item index="2-1" :class="{ active :isActive == '2-1'}">{{isActive == '2-1' ? '综合排名':'综合'}}</el-menu-item>
    <el-menu-item index="2-2">{{ isActive == '2-2' ? '销量由高到低' : '销量' }}</el-menu-item>
    <el-menu-item index="2-3">{{ isActive == '2-3' ? '浏览量由高到低' : '浏览量'}}</el-menu-item>
>>>>>>> liuyajing
    <el-sub-menu index="2-4">
      <template #title>价格</template>
      <el-menu-item index="2-6">价格由高到低</el-menu-item>
      <el-menu-item index="2-7">价格由低到高</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2-5">{{ isActive == '2-5' ? '发布时间由近及远' : '发布时间' }}</el-menu-item>
  </el-menu>
</template>

<<<<<<< HEAD
<script lang="ts" setup></script>
=======
    <!-- 综合 -->
    <el-menu class="el-menu-demo"  active-text-color="#f93684" style="margin-left:150px" @select="handlerOver">
        <el-menu-item index="2-1" :class="{ active :isActive == '2-1'}">{{isActive == '2-1' ? '综合排名':'综合'}}</el-menu-item>
        <el-menu-item index="2-2">{{ isActive == '2-2' ? '销量由高到低' : '销量' }}</el-menu-item>
        <el-menu-item index="2-3">{{ isActive == '2-3' ? '浏览量由高到低' : '浏览量'}}</el-menu-item>
        <el-sub-menu index="2-4">
            <template #title>价格</template>
            <el-menu-item index="2-6">价格由高到低</el-menu-item>
            <el-menu-item index="2-7">价格由低到高</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2-5">{{ isActive == '2-5' ? '发布时间由近及远' : '发布时间' }}</el-menu-item>
>>>>>>> 7aa09d04cbbecdc021d2a9dfaf2b0c3bcc87f31d
>>>>>>> 575cda281937a3bcad3daa7319aebb7a463ff317
    </el-menu>
    <router-view></router-view>
  </div>
</template>

=======
>>>>>>> liuyajing
<script lang="ts" setup>
import { ref } from "vue";
const isActive = ref("2-1");

const handlerMenu = (e: any) => {
  isActive.value = e;
};
<<<<<<< HEAD
=======
=======

import { ref } from 'vue';
const isActive = ref('2-1')

const handlerOver = (e: any) => {
  isActive.value = e
}
>>>>>>> 7aa09d04cbbecdc021d2a9dfaf2b0c3bcc87f31d
>>>>>>> 575cda281937a3bcad3daa7319aebb7a463ff317
</script>
<<<<<<< HEAD

=======
>>>>>>> liuyajing
<style scoped>
.el-menu-demo {
<<<<<<< HEAD
  display: flex;
  /* justify-content: center; */
  border-bottom: none;
  width: 1200px;
  margin: 0 auto !important;
=======
  border-bottom: none;
  display: flex;
<<<<<<< HEAD
  border-bottom: none;
=======
    display: flex;
    /* justify-content: center; */
    border-bottom: none;
    width: 1200px;
    margin: 0 auto !important;
>>>>>>> liuyajing
=======
  /* justify-content: center; */
  width: 1200px;
  margin: 0 auto !important;
>>>>>>> liuyajing
>>>>>>> 575cda281937a3bcad3daa7319aebb7a463ff317
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
