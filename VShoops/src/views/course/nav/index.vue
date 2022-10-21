<template>
  <div>
    <div class="el-menu-demo-nav" style="margin-top:20px" >
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          menu-trigger="click"
          default-active="0"
          :ellipsis="false"
          text-color="#111"
          active-text-color="#111"
        >
          <el-menu-item class="navItem" index="0">
            <router-link to="/discovery/vip_zone" >会员专区</router-link>
            </el-menu-item>
          <el-menu-item class="navItem" index="1">
            <router-link to="/discovery/video_courses" >视频课</router-link>
          </el-menu-item>
          <el-menu-item class="navItem" index="2">直播课</el-menu-item>
          <el-menu-item class="navItem" index="3">线下课</el-menu-item>
          <el-menu-item class="navItem" index="4">
            <router-link to="/discovery/zone_list" >主题</router-link>
          </el-menu-item>
        </el-menu>
      </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
>>> .el-menu--horizontal {
  border-bottom: none;
}

>>> .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: #fff;
}
.flex-grow {
  flex-grow: 1;
}
.el-menu-demo {
  display: flex;
  justify-content: center;
}
.navItem {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  border-bottom: 4px solid transparent;
  font-size: 16px;
  text-align: center;
}
</style>
