<template>
  <div>
    <el-card shadow="always" style="height: 60px">
      <div class="header">
        <div class="header_left">
          <img width="128" height="30" src="./images/logo@3xrenew3.png" />

          <ul class="navList">
            <li class="navItem">
              <router-link to="/index" active-class="active">资源</router-link>
            </li>
            <li class="navItem">
              <router-link to="/discovery" active-class="active">课程</router-link>
            </li>
            <li class="navItem">
              <router-link to="/training" active-class="active">练习室</router-link>
            </li>
            <li class="navItem">
              <router-link to="/" active-class="active">交流</router-link>
            </li>
            <li class="navItem">
              <router-link to="/center" active-class="active">我的</router-link>
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

          <el-button style="border: none" @click="dialogVisible = true"> 登陆 </el-button>
        </div>
      </div>
    </el-card>

    <!-- 二维码 -->
    <el-dialog
      v-model="dialogVisible"
      draggable
      modal="false"
      destroy-on-close="true"
      class="el-ewm"
      style="width: 400px"
    >
      <span class="ewm">扫码登录</span>
      <div class="qr-box">
        <img src="./images/1.png" alt="" />
      </div>
      <div class="dialog">
        <p class="tips">打开“中舞网APP”，扫描二维码登录</p>
      </div>
      <p>如未安装APP,扫描此二维码同样可以下载“中舞网APP”</p>
      <template #footer>
        <span class="dialog-footer">
          <el-button>确定登陆</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { Plus, Iphone } from "@element-plus/icons-vue";
import { ref } from "vue";
const dialogVisible = ref(false);
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

/* 二维码 */
.el-ewm {
  width: 100px;
}
.ewm {
  font-size: 18px;
  font-weight: bold;
  color: #f93684;
  text-align: top;
}
.qr-box {
  width: 360px;
  height: 220px;
  margin: auto;
  position: relative;
}
.qr-box > img {
  /* display: none; */
  width: 180px;
  /* margin-top: -20px; */
  position: absolute;
  left: 100px;
  top: 40px;
}
.dialog {
  width: 360px;
  /* position: fixed; */
  /* top: 0;
    right: 0;
    bottom: 0;
    left:0;
    overflow: auto; */
}
.dialog .tips {
  color: #111;
  text-align: center;
  padding: 20px 0 0 0;
  font-size: 14px;
}

.dialog-footer button:first-child {
  margin-right: 120px;
  width: 120px;
  height: 40px;
}
</style>
