<template>
  <!-- 第一排 -->
  <div class="notice">
    <div class="titles">
      <span
        class="title"
        @click="red = index"
        v-for="(item, index) in data"
        :key="index"
        :class="{ active: red == index }"
      >
        {{ item.name }}
      </span>
    </div>
    <el-button bg class="filtrate" @click="change = !change"
      >筛选
      <el-icon style="width: 16px" :class="{ icon: change }"
        ><ArrowDown /></el-icon
    ></el-button>
  </div>

  <!-- 下方点击筛选才会展示出来的数据 -->
  <div style="padding: 26px 0; position: relative" v-if="change">
    <!-- 兴趣技能 -->
    <div class="interest" style="display: flex">
      <div class="caption">兴趣技能:</div>
      <div class="dance">
        <div
          class="danceitem"
          @click="btsHandler(int)"
          :class="{ special: int.bt }"
          v-for="(int, index) in interest"
          :key="index"
        >
          {{ int.name }}
        </div>
      </div>
    </div>
    <!-- int.bt=!int.bt -->
    <!-- 兴趣技能 -->
    <div class="interest" style="display: flex">
      <div class="caption" style="width: 62px">内容格式:</div>
      <div class="dance">
        <div
          class="danceitem"
          @click="item.bt = !item.bt"
          :class="{ special: item.bt }"
          v-for="(item, index) in formats"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="reset" @click="resetHandler" v-if="!reset">重置</div>
  </div>

  <VideoList />


</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref, onMounted, computed } from "vue";
import { reqProperties } from "@/api/home/index";

import VideoList from "@/views/home/VideoList/index.vue";

import { forEach } from "lodash";
// 定义综合榜点击变化的标识符
let red = ref(0);
// 定义变化的标识符(箭头显示隐藏,下面数据展示隐藏)
let change = ref(false);

// 综合榜的假数据
const data = ref([
  {
    name: "综合榜",
  },
  {
    name: "热练榜",
  },
  {
    name: "新锐榜",
  },
  {
    name: "最新",
  },
]);
// 存储兴趣技能的数据
let interest = ref([]);
// 存储内容格式的数据
let formats = ref([]);

onMounted(() => {
  // 挂载的时候发一次请求
  getProperties();
});

// 兴趣按钮点击事件回调
const btsHandler = (int) => {
  //  如果按钮数组中带有bt属性已经变色的有三个了个

  if (interests.value.length >= 3) {
    ElMessage("同一筛选条件最多选择3个");

  if (interests.value.length >= 3 && !int.bt) {
    ElMessage("同一筛选条件最多选择3个");
    console.log(interests.value);

  } else {
    int.bt = !int.bt;
  }
};
// 计算属性,计算兴趣按钮数组中带有bt属性已经变色的有几个,存入interests中
const interests = computed(() => {
  return interest.value.filter((item) => {
    return item.bt;
  });
});

// 计算属性,计算内容按钮数组中带有bt属性已经变色的有几个,存入interests中
const formatse = computed(() => {
  return formats.value.filter((item) => {
    return item.bt;
  });
});



// 重置按钮清空选项

const reset = computed(() => {
  return formatse.value.length == 0 && interests.value.length == 0;
});
// const allchange = [...interests.value,...formatse .value]
// 重置按钮的事件回调
const resetHandler = () => {
  // 所有被点击的按钮合并的数组
  const allchange = [...interests.value, ...formatse.value];
  allchange.forEach((item) => {
    item.bt = false;
  });
};

// 发请求获取数据
const getProperties = async () => {
  const result = await reqProperties();
  // console.log(result);
  // 存储数据
  interest.value = result[0].choises;
  // console.log(interest.value);
  formats.value = result[1].choises;
  // console.log(formats.value);
};
</script>

<style>

.notice {
  display: flex;
}
.titles {
  display: flex;
  padding: 25px 30px;
  width: 1057px;
  height: 19px;
}
.title {
  display: inline-block;
  width: 95px;
  height: 5px;
  color: #b1b5c1;
  padding: 7px 0;
  font-size: 14px;
}
.active {
  color: #f93684;
}
.filtrate {
  height: 36px;
  border-radius: 18px;
  line-height: 36px;
  font-size: 16px;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 20px;
  background: #e9ecec;
  color: #7d8090;
  margin-top: 20px;
}
.icon {
  opacity: 0;
}
.interest {
  width: 1140px;
  height: 80px;
  display: flex;
  padding-left: 30px;
}
.dance {
  display: flex;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;

  flex-wrap: wrap;
}
.danceitem {
  margin-left: 3px;
  margin-right: 30px;
  margin-bottom: 10px;
  color: #7d8090;
  text-align: center;
  line-height: 30px;
  width: 68px;
  height: 30px;
}
.caption {
  color: #7d8090;
  font-size: 14px;
  width: 95px;
  line-height: 30px;
  padding-right: 30px;
}
.special {
  width: 68px;
  height: 30px;
  background: #f93684;
  color: #e9ecec;
  border-radius: 4px;
  text-align: center;
}
.reset {
  color: red;
  position: absolute;
  right: 30px;
  top: 33px;
  cursor: pointer;
  font-size: 14px;
  color: #f93684;
}
</style>
