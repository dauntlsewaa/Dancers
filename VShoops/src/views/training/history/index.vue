<template>
    <!-- 缓存右侧组件 -->
    <div>
        <!-- 上方 -->
<el-card class="header" shadow="always" :body-style="{ padding: '20px' }">
    <div>
        <span >浏览记录</span>
    </div>
</el-card>
<!-- 下方 -->
<el-card style="height: 730px;"  class="main" shadow="always" :body-style="{ padding: '20px' }">
    <!-- 搜索 -->
    <el-row :gutter="10">
        <el-col :span="8">
            <el-input :prefix-icon="Search" autocomplete="off" type="text" size="large">
            </el-input>
          </el-col>
          <el-col :span="1" ><el-button text bg size="large">搜索</el-button> </el-col>
        <el-col :span="15">
            <i class="delete">批量删除</i>
        </el-col>
      </el-row>

<!-- table展示数据 -->
 <el-table :data="content"  stripe show-header="false"> 
    
    <el-table-column width="180">
       <template #="{row,$index}">
        <img :src="row.momentBackup.cover[0]" width="169" height="101" >
       </template>
    </el-table-column>
    <el-table-column class="description"  width='511px' prop="momentTitle" >
     <template #="{row,$index}">
        <div class="theme">{{row.momentTitle}}</div>
        <div class="type" style="margin:5px 0;">作品</div>
        <div class="author">
            <img class="img" :src="row.momentBackup.creatorBackup.avatar" alt=""/>
            <div class="authors" prop="name">{{row.momentBackup.creatorBackup.name}}</div>      
        </div>
     </template>
     
    </el-table-column>
    <el-table-column class="time" prop="time"  align="right" ></el-table-column>
    <el-table-column  class="delete" align="right"  >
   <template #="{row,$index}">
     <el-button text size="default">删除</el-button>
   </template>
    </el-table-column>
  
 </el-table>

 
</el-card>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import {reqViewrecords} from '@/api/training/index'
import {ref} from 'vue'
import {onMounted} from 'vue'

const content = ref([])
onMounted(() => {
    getContent()
})
// 发请求获取历史数据
const  getContent =async ()=>{
    let result = await reqViewrecords();
    // console.log(result);
    // 存储数据
    content.value = result.content;
    // console.log(content.value[0].momentBackup.cover[0]);  
}
</script>
<!--  -->
<style scoped>
>>>.el-input__wrapper{
    background-color: #f5f7f9;
}
.header{
    margin-bottom: 10px;
    height:80px;
    
}
span{
    float: left;
    padding-top:10px;
    padding-bottom:26px;
    margin-right: 50px;
    color: #111;
    font-size: 14px;
    position: relative;

}
.active,span:hover{
    text-align:center;
    border-bottom:4px solid  #f93684;
}

.delete{
    float: right;
    width: 70px;
    font-size: 14px;
}
i{
    font-style: normal;
}
.description{

    padding-left: 17px;
}
.time{
    width: 153px;
    padding:0 8px;
    color: #111;
    font-size: 14px; 
}
.theme{
    padding-right: 20px;
    font-size: 16px;
    color: #111;
}
.author{
    display: flex;
}

.img{
    width: 30px;
    height: 30px;
    border-radius:50%;
    margin-right: 11px;
}
.authors{
    font-size: 16px;
    color: #111;
    line-height: 30px;
}
</style>