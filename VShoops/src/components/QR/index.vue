<template>
  <el-dialog v-model="dialogVisible" draggable class="el-ewm" style="width: 400px">
    <span class="ewm">扫码登录</span>
    <div class="qr-box">
      <img src="./images/1.png" alt="" />
    </div>
    <div class="dialog">
      <p class="tips">打开“中舞网APP”，扫描二维码登录</p>
    </div>
    <p>如未安装APP,扫描此二维码同样可以下载“中舞网APP”</p>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const dialogVisible = ref(true);
</script>

<style>
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
</style>
