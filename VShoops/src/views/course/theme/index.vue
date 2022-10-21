<template>
  <div class="Container">
    <div class="themeList">
      <div class="themeItem" v-for="(item, index) in themeList" :key="index">
        <img class="themeImg" :src="item.cover" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

//引入请求函数
import { reqCourseTheme } from "../../../api/course/index";

//存储主题数据
let themeList = ref<any>([]);

onMounted(() => {
  //页面加载获取数据
  getCourseTheme();
});
//获取主题数据的回调
const getCourseTheme = async () => {
  let result = await reqCourseTheme();
  // console.log(result);
  themeList.value = result.content;
  // console.log(themeList);
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.Container {
  width: 1200px;
  /* height: 900px; */
  margin: 0 auto;
  /* border: 1px solid red; */
  background-color: #f5f7f9;
}
.themeList {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}
.themeItem {
  width: 260px;
  height: 200px;
  /* border:  1px solid green; */
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
}
.themeImg {
  width: 100%;
  height: 100%;
}
</style>
