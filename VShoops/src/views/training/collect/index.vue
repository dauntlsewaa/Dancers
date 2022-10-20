<template>
    <!-- 缓存右侧组件 -->
    <div>
<el-card class="header" shadow="always" :body-style="{ padding: '20px' }">
    <div>
        <span class="active">资源</span>
        <span>视频课</span>
        <span>线下课</span>
        <span>直播课</span>
    </div>
</el-card>
<el-card style="height: 730px;"  class="main" shadow="always" :body-style="{ padding: '20px' }">
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

 

 <el-table empty-text="无更多内容" stripe> 
 </el-table>
</el-card>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
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
    width: 42px;
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
</style>