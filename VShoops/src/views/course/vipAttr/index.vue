<template>
  <el-card style="width: 1200px; margin: 0 auto">
    <div :class="'filter-order-container'">
      <!-- 点击筛选弹出部分下方 -->
      <div class="filter-container">
        <div class="filter-content-container">
          <!-- 兴趣技能 -->
          <div class="interest">
            <span>兴趣技能:</span>
            <div class="dance">
              <div @click="btsHandler(item)"
              :class="{ isChecked: item.bt }" style="width: 100px;" :key="index" class="checkbox-button " v-for="(item,index) in avocation">{{item.name}}</div>
            </div>
          </div>
          <!-- 价格区间 -->
          <div class="interest">
            <span>价格区间:</span>
            <div class="dance" style="height:30px;">
              <div style="width: 100px;" @click="item.bt=!item.bt"  :class="{ isChecked: item.bt }" :key="index" class="checkbox-button " v-for="(item,index) in priceRange">{{item.name}}</div>
           
            </div>
          </div>
        </div>
        <!-- 展开数据 -->
        <div class="demo-collapse">
          <el-collapse v-model="activeNames" @click="handleChange" class="el-collapse">
            <el-collapse-item :title="flag === 0 ? '展开全部' : '收起'" name="1">
              <div class="interest">
                <span>课程类型:</span>
                <div class="dance">
                  <div @click="btsHandler1(item)" style="width: 100px;"
                  :class="{ isChecked: item.bt }"   :key="index"  v-for="(item,index) in coureType" class="checkbox-button">{{item.name}}</div>
                </div>
              </div>
              <div class="interest">
                <span>学习目标:</span>
                <div class="dance">
                  <div @click="btsHandler2(item)" :class="{ isChecked: item.bt }"  style="width: 100px;" :key="index"  v-for="(item,index) in learningGoals" class="checkbox-button ">{{item.name}}</div>
                </div>
              </div>
              <div class="interest">
                <span>难易度:</span>
                <div class="dance" style="height:50px;">
                  <div  style="width: 100px;" @click="btsHandler3(item)" :class="{ isChecked: item.bt }" :key="index"  v-for="(item,index) in difficultDegree" class="checkbox-button">{{item.name}}</div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import { ref,onMounted , computed} from "vue";
import { ElMessage } from "element-plus";
import {reqProperties}  from '@/api/course/index'
// 存储兴趣技能的数据
let avocation= ref([]);
// 存储价格区间的数据
let priceRange = ref([]);
// 存储课程类型的数据
let coureType = ref([]);
// 存储学习目标的数据
let learningGoals = ref([]);
// 存储难易度的数据
let difficultDegree = ref([]);

const activeNames = ref(["0"]);
const flag = ref(0);

// 折叠面板的切换
const handleChange = () => {
  flag.value = flag.value === 1 ? 0 : 1;
  console.log(flag.value);
};
onMounted(() => {
  // 挂载的时候发一次请求
  getProperties();
});

// 发请求获取数据
const getProperties = async () => {
  const result = await request.get('/moment/properties/filter/vip_zone?access_token=0c1166e8-c539-4341-a8ac-c4324d0707e7')
  console.log(result);
  // 存储数据
  avocation.value=result[0].choises
  // console.log(avocation.value);
  priceRange.value=result[1].choises
  coureType.value=result[2].choises
  learningGoals.value=result[3].choises
  difficultDegree.value=result[4].choises

};

// 兴趣按钮点击事件回调
const btsHandler = (item) =>{
    //  如果按钮数组中带有bt属性已经变色的有三个了个
console.log(123);
  if (interests.value.length >= 3 && !item.bt ) {
    ElMessage("同一筛选条件最多选择3个");
    console.log(interests.value);
  } else {
    item.bt = !item.bt;
  }

 }
 // 课程类型按钮点击事件回调
const btsHandler1 = (item) =>{
    //  如果按钮数组中带有bt属性已经变色的有三个了个

  if (coureTypes.value.length >= 3 && !item.bt ) {
    ElMessage("同一筛选条件最多选择3个");
  } else {
    item.bt = !item.bt;
  }

 }
  //学习目标按钮点击事件回调
const btsHandler2 = (item) =>{
    //  如果按钮数组中带有bt属性已经变色的有三个了个
  if (learningGoalss.value.length >= 3 && !item.bt ) {
    ElMessage("同一筛选条件最多选择3个");
 
  } else {
    item.bt = !item.bt;
  }

 }
   // 难易度按钮点击事件回调
const btsHandler3 = (item) =>{
    //  如果按钮数组中带有bt属性已经变色的有三个了个
  if (difficultDegrees.value.length >= 3 && !item.bt ) {
    ElMessage("同一筛选条件最多选择3个");
 
  } else {
    item.bt = !item.bt;
  }

 }


// 计算属性,计算兴趣按钮数组中带有bt属性已经变色的有几个
const interests = computed(() => {
  return avocation.value.filter((item) => {
    return item.bt;
  });
});
// 计算属性,计算课程类型按钮数组中带有bt属性已经变色的有几个
const coureTypes = computed(() => {
  return coureType.value.filter((item) => {
    return item.bt;
  });
});
// 计算属性,计算学习目标按钮数组中带有bt属性已经变色的有几个
const learningGoalss = computed(() => {
  return learningGoals.value.filter((item) => {
    return item.bt;
  });
});
// 计算属性,计算难易度钮数组中带有bt属性已经变色的有几个
const difficultDegrees = computed(() => {
  return difficultDegree.value.filter((item) => {
    return item.bt;
  });
});
</script>

<style scoped>
/*折叠页面非触发样式*/

.el-collapse {
  border: none;
}
/* .el-collapse /deep/.el-collapse-item__header {
  font-size: 14px;
  text-align: center;
  display: block;
  border-bottom: none;
  color: #7d8090;
} */
/*折叠样式触发样式 */

.el-collapse-item {
  position: relative;
}
::v-deep .el-icon svg {
  display: none;
}
::v-deep .el-collapse-item__wrap {
  border: 0px;
}
::v-deep .el-collapse-item__header {
  color: #f93684;
  font-size: 14px;
  margin-left: 50%;
  display: block;
  border-bottom: none;
  padding: 10px;
  position: absolute;
  bottom: -70px;
}
::v-deep .el-collapse-item__content {
  padding-bottom: 0;
}
.collapse-title {
  flex: 0 1 54%;
  order: 1;
}
::v-deep .el-collapse {
  border: none;
}

/** */
.filter-container {
  margin-top: 10px;
  margin-bottom: 10px;
}
.filter-order-container {
  width: 1200px;
  /* border: 1px solid #333; */
  margin: 0 auto;
}
.order-container {
  display: flex;
  width: 1117px;
  padding-left: 0;
}
.filter-order {
  display: flex;
  padding: 25px 30px;
}
.order-item {
  list-style: none;
  font-size: 14px;
  width: 42px;
  margin-right: 60px;
}

.active {
  color: red;
}
.filter-btn {
  display: flex;
  padding-left: 20px;
  padding-right: 10px;
}
button {
  border-radius: 50px;
  width: 83px;
  margin-top: 8px;
  background-color: #e9ecec;
  font-size: 16px;
  background: #e9ecec;
  line-height: 36px;
  color: #7d8090;
}
i {
  margin-left: 3px;
  margin-top: 3px;
}

/*下方*/
.filter-container {
  padding: 27px 30px;
}
.interest {
  display: flex;
  margin-bottom: 8px;
}
span {
  width: 95px;
  color: #b1b5c1;
  padding: 7px 0;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
}
.dance {
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  height:110px ;
}
.checkbox-button {
  font-size: 14px;
  border-radius: 4px;
  margin-right: 30px;
  margin-top: 10px;
  border-radius: 10px;
  color: #606266;

  height: 30px;
  line-height: 30px;
  text-align: center;
}
.isChecked {
  background-color: #f93684;
  color: white;
  border-radius: 4px;
}
.reset {
  margin-top: 15px;
  right: 30px;
  top: 33px;
  font-size: 14px;
  color: #f93684;
}
</style>
