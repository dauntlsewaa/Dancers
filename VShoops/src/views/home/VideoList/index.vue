<template>
  <div class="videoContainer">
    <div class="videoList">

      <div class="videoItem" v-for="item in video" :key="item.id" @click="playerVideo">
        <div class="videoImg" v-lazy-container="{selector:'img'}" >
          <img class="videoImg" :data-src="item.cover[0]" />

        </div>
        <div class="videoTitle">
          <div class="titleTag">作品</div>
          <div class="titleName">
            {{ item.momentClassificationBackup.workTitle }}
          </div>
        </div>

        <div class="videoSee">
          <span class="videoSeeItem">{{ item.algorithmSortValue }}浏览</span>
        </div>

        <div class="videoToal">
          <div class="videoToalItem">
            <div class="videoToal-left">
              <div>
                <svg
                  t="1666094811342"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3412"
                  width="16"
                  height="16"
                >
                  <path
                    d="M710.549333 384.810667a12409.045333 12409.045333 0 0 0 47.466667-0.32l8.746667-0.085334c83.989333-0.618667 141.44 67.584 126.72 150.229334L847.296 794.026667c-10.026667 56.448-63.914667 101.546667-121.130667 101.589333L298.624 896a42.730667 42.730667 0 0 1-42.666667-42.410667l-0.810666-383.978666a42.666667 42.666667 0 0 1 42.026666-42.666667l3.157334-0.064c5.226667-0.042667 11.797333-0.042667 19.626666 0 91.946667 0.768 170.88-86.698667 170.709334-170.944-0.149333-86.741333 39.786667-126.762667 106.453333-127.573333 62.250667-0.746667 106.602667 59.605333 107.349333 149.12 0.213333 26.602667-6.293333 73.237333-14.506666 107.434666 6.186667 0 13.077333-0.042667 20.586666-0.085333z m-497.706666 63.232L213.333333 874.624A21.312 21.312 0 0 1 191.786667 896H149.525333A21.333333 21.333333 0 0 1 128 874.624l0.042667-426.581333A21.269333 21.269333 0 0 1 149.44 426.666667h41.984c11.669333 0 21.418667 9.578667 21.418667 21.376z"
                    fill="#cdcdcd"
                    p-id="3413"
                  ></path>
                </svg>
              </div>
              <span class="jionPerson">{{
                item.statisticsBackup.favoriteCount
              }}</span>
            </div>
            <div class="videoToal-mid">
              <div>
                <svg
                  t="1666094760350"
                  viewBox="0 0 1026 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2555"
                  width="12"
                  height="12"
                >
                  <path
                    d="M935 809C994.6 724 1026 624.4 1026 520 1026 242 800 16 522 16S18 242 18 520s226 504 504 504c79.8 0 158.8-19 229.4-55.2l209.8 54.2c2.6 0.6 5.4 1 8 1 9 0 17.8-3.8 24-10.6 8-9 10.4-21.6 6.2-32.8l-64.4-171.6z m-563.6-238c-18.2 10.6-40.8 10.6-59 0-18.2-10.6-29.4-30-29.4-51s11.2-40.6 29.4-51c18.2-10.6 40.8-10.6 59 0 18.2 10.6 29.4 30 29.4 51 0.2 21-11.2 40.6-29.4 51z m180 0c-18.2 10.6-40.8 10.6-59 0-18.2-10.6-29.4-30-29.4-51s11.2-40.6 29.4-51c18.2-10.6 40.8-10.6 59 0 18.2 10.6 29.4 30 29.4 51 0.2 21-11 40.6-29.4 51z m180.2 0c-18.2 10.6-40.8 10.6-59 0-18.2-10.6-29.4-30-29.4-51s11.2-40.6 29.4-51c18.2-10.6 40.8-10.6 59 0 18.2 10.6 29.4 30 29.4 51s-11.2 40.6-29.4 51z"
                    fill="#cdcdcd"
                    p-id="2556"
                  ></path>
                </svg>
              </div>
              <span class="jionPerson">{{
                item.statisticsBackup.requireMajorCourseCount
              }}</span>
            </div>
            <div class="videoToal-right">
              <div>
                <svg
                  t="1666094553579"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="7732"
                  width="12"
                  height="12"
                >
                  <path
                    d="M781.186088 616.031873q17.338645 80.573705 30.59761 145.848606 6.119522 27.537849 11.219124 55.075697t9.689243 49.976096 7.649402 38.247012 4.079681 19.888446q3.059761 20.398406-9.179283 27.027888t-27.537849 6.629482q-5.099602 0-14.788845-3.569721t-14.788845-5.609562l-266.199203-155.027888q-72.414343 42.836653-131.569721 76.494024-25.498008 14.278884-50.486056 28.557769t-45.386454 26.517928-35.187251 20.398406-19.888446 10.199203q-10.199203 5.099602-20.908367 3.569721t-19.378486-7.649402-12.749004-14.788845-2.039841-17.848606q1.01992-4.079681 5.099602-19.888446t9.179283-37.737052 11.729084-48.446215 13.768924-54.055777q15.298805-63.23506 34.677291-142.788845-60.175299-52.015936-108.111554-92.812749-20.398406-17.338645-40.286853-34.167331t-35.697211-30.59761-26.007968-22.438247-11.219124-9.689243q-12.239044-11.219124-20.908367-24.988048t-6.629482-28.047809 11.219124-22.438247 20.398406-10.199203l315.155378-28.557769 117.290837-273.338645q6.119522-16.318725 17.338645-28.047809t30.59761-11.729084q10.199203 0 17.848606 4.589641t12.749004 10.709163 8.669323 12.239044 5.609562 10.199203l114.231076 273.338645 315.155378 29.577689q20.398406 5.099602 28.557769 12.239044t8.159363 22.438247q0 14.278884-8.669323 24.988048t-21.928287 26.007968z"
                    p-id="7733"
                    fill="#cdcdcd"
                  ></path>
                </svg>
              </div>
              <span class="jionPerson">{{
                item.statisticsBackup.praiseCount
              }}</span>
            </div>
          </div>
        </div>

        <div class="userInfo">
          <div class="userTou">
            <img
              :src="item.creatorBackup.avatar"
              style="width: 24px; height: 24px; border-radius: 50%"
            />
          </div>
          <div class="userName">
            <span>{{ item.creatorBackup.name }}</span>
          </div>
          <div class="userTime">
            <span>2小时前</span>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="loading"
      v-loading="loading"
      element-loading-text="加载中....."
      style="color: #f93684; height: 100px"
      background="#f93684"
    ></div>
    <el-button
      @click="isLoading"
      plain
      style="margin: 20px 770px; width: 140px; height: 40px"
      v-else
      >加载更多</el-button
    >
  </div>
</template>

<script setup lang="ts">

// 测试git提交流程
import { ref, onMounted, watch } from "vue";
import { reqVideoList } from "../../../api/home/index";
import request from "@/utils/request";

//引入路由
import { useRouter, useRoute } from "vue-router";
import { emit } from "process";
//获取路由对象
const router = useRouter();
const routes = useRoute();

// 视频数据
let video = ref<any>([]);
let url = ref<any>([])
const loading = ref(false);

onMounted(() => {
  getVideoList();
});

watch(
  () => routes.path,
  () => {
    // getVideoList();
    video.value = video.value.reverse();
  }
);

// 暴露方法方便排序页面获取视频列表数据
const ExportHandler = async () => {
  let result = await request.get(
    "/moment/moments/rec/default?access_token=0c1166e8-c539-4341-a8ac-c4324d0707e7&column=recommend&pageSize=20&pageNum=1&localCache=20"
  );
  video.value = result.content;
  console.log(result);
};
defineExpose({
  ExportHandler,
});
// 请求视频数据
let getVideoList = async () => {
  loading.value = true;
  let result = await reqVideoList();

 
  
  video.value.push(...result.content)
 

  
  

  loading.value = false;
   console.log(url);
};

// 加载
let isLoading = () => {
  getVideoList();
};

// 点击视频播放的回调函数
const playerVideo = () => {
  // alert(123)
  router.push({ path: "/player" });
};






</script>

<style scoped>
/deep/.el-button:focus,
.el-button:hover {
  color: #82858e;
  background-color: #fff;
}
.videoList {
  width: 1200px;
  /* border: 1px solid red; */
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #f5f7f9;
}
.videoItem {
  width: 17%;
  height: 300px;
  /* border: 1px solid green; */
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
}
.videoImg {
  width: 224px;
  height: 126px;
}
.videoTitle {
  width: 224px;
  height: 45px;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
}
.titleTag {
  margin-left: 10px;
  width: 30px;
  height: 20px;
  border: 1px solid black;
  font-size: 12px;
  border-radius: 6px;
  line-height: 20px;
  text-align: center;
}
.titleName {
  margin-left: 10px;
  width: 160px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /** 多行文本溢出...*/
  overflow: hidden;
  font-size: 12px;
}
.videoSee {
  margin-top: 20px;
  width: 224px;
  height: 20px;
  /* border: 1px solid skyblue; */
}
.videoSeeItem {
  margin-left: 10px;
  font-size: 12px;
  color: #d8dbe6;
}
.videoToal {
  margin-left: 10px;
  width: 224px;
  height: 30px;
  /* border: 1px solid greenyellow; */
}
.videoToalItem {
  display: flex;
  margin: 10px 0px;
}
.videoToal-left {
  display: flex;
}
.videoToal-mid {
  display: flex;
  margin-left: 10px;
}
.videoToal-right {
  display: flex;
  margin-left: 10px;
}
.jionPerson {
  font-size: 10px;
  margin-left: 3px;
  margin-top: 3px;
}
.userInfo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
}
.userTime {
  color: #d8dbe6;
  font-size: 12px;
}
.userTou {
  border-radius: 50%;
}
</style>
