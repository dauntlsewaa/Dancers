<template>
  <div>
    <div style="background-color: #fff">
      <!--  头部 -->
      <Header></Header>
      <!-- 轮播图 -->
      <div class="slideshow">
        <div class="block text-center" m="t-4">
          <el-carousel trigger="click" height="536px">
            <el-carousel-item
              v-for="item in slideshowList.value"
              :key="item.id"
            >
              <a class="small justify-center" :href="item.link">
                <img :src="item.appAdvertiseUrl" />
              </a>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <div class="nav">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="推荐" name="1" class="recommed">
            <!-- 选择兴趣技能 -->
            <Interest />
            <div
              style="background-color: #f5f7f9; width: 1200px; margin: 0 auto"
            >
              <!-- 属性筛选列表 -->
              <Attrs />
              <!--视频列表 -->
              <VideoList />
            </div>
          </el-tab-pane>
          <el-tab-pane label="作品" name="2" 
            >Config</el-tab-pane
          >
          <el-tab-pane label="教程" name="3">Role</el-tab-pane>
          <el-tab-pane label="专题" name="4" >Task</el-tab-pane>
          <el-tab-pane label="动态" name="5" 
            >Config</el-tab-pane
          >
          <el-tab-pane label="关注" name="6">Role</el-tab-pane>
        </el-tabs>
      </div>
    </div>


    <div style="background-color: #f5f7f9; width: 1200px; margin: 0 auto">
      <!-- 属性筛选列表 -->
      <Attrs />
      <Attr />
      <!--视频列表 -->
      <VideoList />
    </div>

    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import type { TabsPaneContext } from "element-plus";
import { ref, reactive, onMounted } from "vue";
import Header from "../../components/header/header.vue";
import Interest from "./interest/index.vue";
import Attrs from "./attr/index.vue";
import Attr from "./attr/attr.vue";
import VideoList from "./VideoList/index.vue";
import Footer from "../../components/footer/footer.vue";
import { reqScreen } from "../../api/home/index";

import { reqSwiperList, reqVideoList, reqScreen } from "../../api/home/index";
const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
let slideshowList = reactive([]);
let navList = reactive([]);
// 默认页面加载操作
onMounted(() => {
  getslideandnav();
});
// 获取首页部分数据
const getslideandnav = async () => {
  let result1 = await reqSwiperList(); //获取轮播图的数据
  // console.log(result1);//输出轮播图的数据
  slideshowList.value = result1; //更新轮播图的数据
  // let result2 = await reqVideoList();//获取视频列表
  // console.log(result2)
  // navList.value = result2;
  // let result3 = await reqScreen();//获取筛选信息
  // console.log(result3)
};

</script>

<style scoped>
box-home {
  width: 100%;
}
.slideshow,
.nav {
  width: 1200px;
  margin: 0 auto;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel__indicator--horizontal .el-carousel__button {
  width: 10px;
  height: 10px;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 50%;
  opacity: 0.5;
}
.el-carousel__indicator--horizontal.is-active .el-carousel__button {
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-radius: 50%;
  opacity: 1;
}

.demo-tabs .rerecommed{
padding-left: 300px;
}
.demo-tabs .demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .demo-tabs > .el-tabs__item{
  font-size: 16px;
}
</style>
