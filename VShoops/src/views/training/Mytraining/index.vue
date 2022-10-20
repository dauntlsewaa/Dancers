<template>
  <!-- 我的练习室组件 -->
  <div>
    <el-card class="header" shadow="always" :body-style="{ padding: '20px' }">
      <el-button text class="active">全部</el-button>
      <el-button text>我创建的</el-button>
      <el-button text>我加入的</el-button>
      <el-button text>我课程的</el-button>
      <el-button class="establish" size="default">创建</el-button>
    </el-card>
    <el-card
      shadow="always"
      style="height: 730px"
      :body-style="{ padding: '20px' }"
    >
      <!-- table展示数据 -->
      <el-table :data="data" show-header="false">
        <el-table-column width="180">
          <template #="{ row, $index }">
            <img src="../../../assets/2.dance.jpg" alt="" />
          </template>
        </el-table-column>
        <el-table-column class="description" width="511px">
          <div style="height: 101px; width: 192">
            <div class="theme">中国舞协中国舞蹈考级九级</div>
            <div class="type">已练习0次0分钟</div>
          </div>
        </el-table-column>
        <el-table-column class="delete" align="right">
          <div>
            <svg
              style="padding-right: 10px"
              t="1666247941729"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4093"
              width="22"
              height="22"
            >
              <path
                d="M511.913993 63.989249c-247.012263 0-447.924744 200.912481-447.924744 447.924744s200.912481 447.924744 447.924744 447.924744 447.924744-200.912481 447.924744-447.924744S758.926256 63.989249 511.913993 63.989249zM511.913993 895.677474c-211.577356 0-383.763481-172.186125-383.763481-383.763481 0-211.577356 172.014111-383.763481 383.763481-383.763481s383.763481 172.014111 383.763481 383.763481S723.491349 895.677474 511.913993 895.677474z"
                p-id="4094"
                fill="#f93684"
              ></path>
              <path
                d="M672.05913 511.913993l-159.973123 0L512.086007 288.123635c0-17.717453-14.277171-32.166639-31.994625-32.166639-17.717453 0-31.994625 14.449185-31.994625 32.166639l0 255.956996c0 17.717453 14.277171 31.994625 31.994625 31.994625l191.967747 0c17.717453 0 32.166639-14.277171 32.166639-31.994625C704.053754 526.191164 689.604569 511.913993 672.05913 511.913993z"
                p-id="4095"
                fill="#f93684"
              ></path>
            </svg>
            <div>未开始</div>
          </div>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import {reqPlans} from '@/api/training/index'

const data= ref([
    {imgUrl:"../../../assets/2.dance.jpg",
    description:'中国舞协中国舞蹈考级九级',
    time:'昨天 11:30',
     }
    ])
    
const content = ref([])
onMounted(() => {
    getPlans()
})
// 发请求获取历史数据
const  getPlans =async ()=>{
    let result = await reqPlans();
    console.log(result);
    // 存储数据

    // console.log(content.value[0].momentBackup.cover[0]);  
}

</script>

<style scoped>
.header {
  margin-bottom: 10px;
  height: 80px;
}
.el-button.active {
  background-color: #f93684;
  color: #fff;
}
.establish {
  float: right;
  background-color: #f93684;
  color: #fff;
  border-radius: 30px;
  width: 84px;
  height: 32px;
}

.description{
    padding-left: 17px;
}
.theme{
    font-weight: 700;
    font-size: 16px;
    color: #111;
    
}
.type{
    margin-top: 25px;
    font-size: 14px;
    color: #7d8090;
}

</style>
