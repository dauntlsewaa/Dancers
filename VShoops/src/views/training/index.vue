<template>
    <div class="common-layout">
         <!-- 左侧 -->
      <el-container>
        <el-aside width="170px">
            <el-card class="left-sidebar" shadow="always"  >
                <!-- 菜单 -->
                <el-menu >
                <el-sub-menu >
                  <template class="training" #title>练习室</template>
                  <el-menu-item style="color:red;">我的练习室</el-menu-item>
                </el-sub-menu>
              </el-menu>   
            </el-card>
            <el-card class="left-sidebar" shadow="always"  >
               <div>缓存</div>
               <div>缓存</div>
               <div>缓存</div>
               <div>缓存</div>
            </el-card>
        </el-aside>
        <!--右侧 -->
        <el-container>
        <!-- 右侧头部 -->
          <el-header>
            <el-card class="header" shadow="always" :body-style="{ padding: '20px' }">
                头部
            </el-card>
          </el-header>
          <!-- 右侧中心展示数据区域 -->
          <el-main>
            <el-card class="main" shadow="always" :body-style="{ padding: '20px' }">
            </el-card>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>

<script setup lang="ts">
</script>

<style scoped>
.common-layout{
    width:1200px;
}
.left-sidebar{
    padding:5px 0;
    margin-bottom: 10px;
}
.header{
    margin-bottom: 10px;
}
.main{
    overflow: hidden;
    padding: 0 30px 10px;
    background-color: #fff;
    margin-bottom: 20px;
} 
.training{
    border-left: 2px solid red;

}
</style>