<template>
  <!-- 综合 -->
<<<<<<< HEAD

=======
>>>>>>> 3a83efa0d27484caf1eeefeb8a3f21046b5da0ed
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
    </el-menu>
  </div>
</template>

<<<<<<< HEAD
<script lang="ts" setup></script>
=======
<<<<<<< HEAD

>>>>>>> 476ccc391024283a86a2beef2938220449e473e9
<script lang="ts" setup>

=======
<script lang="ts" setup>
>>>>>>> 3a83efa0d27484caf1eeefeb8a3f21046b5da0ed
import { ref } from "vue";
const isActive = ref("2-1");

const handlerMenu = (e: any) => {
  isActive.value = e;
};
</script>
<<<<<<< HEAD

<style scoped>
.el-menu-demo {
  display: flex;
  /* justify-content: center; */
  border-bottom: none;
=======
<<<<<<< HEAD
<style scoped>
.el-menu-demo {
>>>>>>> 476ccc391024283a86a2beef2938220449e473e9
    display: flex;
    /* justify-content: center; */
    border-bottom: none;
    width: 1200px;
    margin: 0 auto !important;
<<<<<<< HEAD
=======

=======

<style scoped>
.el-menu-demo {
  display: flex;
  /* justify-content: center; */
  border-bottom: none;
  width: 1200px;
  margin: 0 auto !important;
>>>>>>> 3a83efa0d27484caf1eeefeb8a3f21046b5da0ed
>>>>>>> 476ccc391024283a86a2beef2938220449e473e9
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
