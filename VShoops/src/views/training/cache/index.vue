<template>
    <!-- 缓存右侧组件 -->
    <div>
<el-card class="header" shadow="always" :body-style="{ padding: '20px' }">
    <div>
        <span class="active">资源</span>
        <span>视频课</span>
        <span>直播课</span>
    </div>
</el-card>
<el-card style="height: 730px;"  class="main" shadow="always" :body-style="{ padding: '20px' }">
  <div class="search">
    <el-input :prefix-icon="Search" autocomplete="off" type="text" size="large">
    </el-input>
    <el-button style="margin-left: 10px;" text bg size="large">搜索</el-button>
  </div>
 <el-table empty-text="无更多内容" stripe> 
 </el-table>
</el-card>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>

<style scoped>
>>>.el-input__wrapper{
    background-color: #f5f7f9;
}
.header{
    margin-bottom: 10px;
    height:80px;
    padding:10px ;
}
span{
    float: left;
    padding-top:10px;
    padding-bottom:30px;
    margin-right: 50px;
    color: #111;
    font-size: 14px;
    position: relative;
    width: 42px;
}
.active,span:hover{
    text-align:center;
    border-bottom:4px solid  #f93684;
}
.search{
    display: flex;
    width: 372px;
    height: 45x;
    flex-wrap: nowrap;

}
</style>