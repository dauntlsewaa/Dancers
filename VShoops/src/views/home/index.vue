<template>
  <div>
    <!--  头部 -->
    <Header></Header>
    <div style="background-color: #fff">
      <!-- 轮播图 -->
      <div class="slideshow">
        <el-carousel trigger="click" height="536px" :interval="5000" arrow="always">
          <el-carousel-item v-for="item in slideshowList" :key="item.id">
            <a class="small justify-center" :href="item.link">
              <img :src="item.appAdvertiseUrl" />
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 二级菜单栏 -->
      <el-affix>
        <div style="width: 100%; background-color: #fff">
          <div class="nav">
            <el-menu mode="horizontal" :ellipsis="false">
              <el-menu-item index="0"></el-menu-item>
              <div class="flex-grow" />
              <el-menu-item index="1">推荐</el-menu-item>
              <el-menu-item index="2">作品</el-menu-item>
              <el-menu-item index="3">教程</el-menu-item>
              <el-menu-item index="4">专题</el-menu-item>
              <el-menu-item index="5">动态</el-menu-item>
              <el-menu-item index="6">关注</el-menu-item>
              <el-menu-item index="7">古典舞</el-menu-item>
              <el-menu-item index="8">肚皮舞</el-menu-item>
              <el-menu-item index="9">爵士舞</el-menu-item>
            </el-menu>
            <el-button class="navBtn" plain :icon="Grid" @click="handler"
              >选择兴趣技能</el-button
            >
          </div>
        </div>
      </el-affix>

      <div style="background-color: #f5f7f9; width: 1200px; margin: 0 auto">
        <!-- 兴趣选择 -->
        <Dialog ref="dialog"></Dialog>
        <!-- 属性筛选列表 -->
        <!-- <Attrs /> -->

        <!--视频列表 -->
        <VideoList />

        <!-- 视频播放 -->
        <!-- <VideoDetail /> -->
      </div>
    </div>

    <el-backtop :bottom="100" :right="100">
      <img src="https://rs.dance365.com/img/back_top@3x.e71cd044.png" class="AffixImg" />
    </el-backtop>
    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
// 引入视频播放
import VideoDetail from "../../components/video/VideoDetail.vue";

import { ref, computed, onMounted } from "vue";
import Dialog from "@/components/Dialog/index.vue";
import Attrs from "./attr/index.vue";
import VideoList from "./VideoList/index.vue";

import { Grid } from "@element-plus/icons-vue";

import { reqSwiperList } from "@/api/home/index";

// 轮播图列表数据
let slideshowList = ref<any>([]);

// 兴趣选择实例
let dialog = ref()

// 默认页面加载操作
onMounted(() => {
  getslideandnav();
});

// 获取轮播图列表数据
const getslideandnav = async () => {
  let result1 = await reqSwiperList(); //获取轮播图的数据
  slideshowList.value = result1; //更新轮播图的数据
};

// 弹出兴趣选择
let handler = ()=>{
dialog.value.handlerDialog()
}
</script>

<style scoped>
.slideshow {
  width: 1200px;
  margin: 10px auto;
}

.nav {
  width: 680px;
  margin: 0px auto;
  position: relative;
}

/deep/ .el-tabs__nav-wrap::after {
  display: none;
}

.el-tabs__item {
  font-size: 18px;
  width: 40px;
  height: 80px;
  font-weight: 800;
  text-align: center;
}

/deep/.el-tabs__item:hover {
  color: #111;
}

/deep/.el-tabs__item.is-active {
}

.flex-grow {
  flex-grow: 1;
  justify-content: space-between;
}

/deep/.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 3px solid #000;
  color: #475669 !important;
}
/* 菜单背景色 */
/deep/.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: #fff;
  color: #475669;
}

/deep/.el-button {
  border: none;
}
.navBtn {
  position: absolute;
  top: 10px;
  right: -240px;
}

/deep/.el-button:focus,
.el-button:hover {
  color: #475669;
  border-color: #fff;
}

/* 轮播图指示器 */
/deep/ .el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.el-carousel__indicator--horizontal.is-active .el-carousel__button {
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-radius: 50%;
  opacity: 1;
}

.demo-tabs .rerecommed {
  padding-left: 300px;
}
.demo-tabs .demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .demo-tabs > .el-tabs__item {
  font-size: 16px;
}

/* 选择兴趣 */
.my-header {
  float: left;
}
.my-header :nth-child(2) {
  margin-left: 10px;
  color: #b1b5c1;
}

.el-form {
  margin: 15px 0;
}
.title-memo {
  color: #b1b5c1;
  margin: 6px 0 0;
  font-size: 14px;
}

.el-form {
  margin-top: 10px;
}

.tags {
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #eaecf0;
  color: #111;
  background-color: #fff;
  cursor: pointer;
  margin: 0 22px 21px 0;
  display: inline-block;
  font-size: 12px;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.tagIcon {
  position: absolute;
  top: -10px;
  right: -10px;
}

.sub-title {
  margin: 8px 0 10px;
  color: #111;
  font-size: 14px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.tag-group {
  height: 300px;
  overflow: hidden;
}
.dialog-footer {
  margin-top: 20px;
  padding: 10px 75px;
  text-align: right;
}
.el-button-small {
  padding: 9px;
  font-size: 12px;
  border-radius: 3px;
}
.el-button-primary {
  color: #fff;
  background-color: #f93684;
  border-color: #f93684;
}


/* 回到顶部 */
/deep/.el-backtop{
  --el-backtop-bg-color::none;
  box-shadow:none
}
</style>
