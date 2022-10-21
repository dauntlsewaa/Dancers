<template>
  <div>
    <el-card shadow="always" style="height: 60px">
      <div class="header">
        <div class="header_left">
          <img width="128" height="30" src="./images/logo@3xrenew3.png" @click="toRec" />

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

        <div class="right">
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

          <el-button style="border: none" v-if="!token">
            <router-link to="/login">登陆 </router-link>
          </el-button>

          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp5.itc.cn%2Fq_70%2Fimages03%2F20221019%2Fd238380148944608933e1accadc089ce.png&refer=http%3A%2F%2Fp5.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668923859&t=4a19766364020992c1241da32271e418"
            v-else
            width="30"
            height="30"
            style="border-radius: 50%; margin-left: 10px"
            @click="toLoginOut"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Plus, Iphone } from "@element-plus/icons-vue";
import { ref, onMounted } from "vue";

//引入路由
import { useRouter } from "vue-router";
//获取路由对象
const router = useRouter();

//点击图标跳转回推荐首页

let token = ref<any>("");
let isShow = ref(false);
onMounted(() => {
  token.value = localStorage.getItem("token");
  console.log(token.value);
});
let toLoginOut = () => {
  isShow.value = !isShow;
};

const dialogVisible = ref(false);
</script>

<style scoped>
* {
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
.right {
  display: flex;
  justify-content: space-between;
  text-align: center;
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
