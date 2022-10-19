<template>
    <div>
      <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div class="el-menu-demo-nav">
        <el-menu
        class="el-menu-demo"
        mode="horizontal"
        menu-trigger="click"
        :ellipsis="false"
        text-color="#111"
        active-text-color="#111">
        <el-menu-item class="navItem"  index="0">会员专区</el-menu-item>
        <el-menu-item class="navItem" index="1">视频课</el-menu-item>
        <el-menu-item class="navItem" index="2">直播课</el-menu-item>
        <el-menu-item class="navItem" index="3">线下课</el-menu-item>
        <el-menu-item class="navItem" index="3">主题</el-menu-item>
      </el-menu>
      </div>
      </el-card>
      
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
>>>.el-menu--horizontal{
   border-bottom: none;
}
.flex-grow {
    flex-grow: 1;
  }
  .el-menu-demo{
    display: flex;
    justify-content: center;
  }
  .navItem{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    border-bottom: 4px solid transparent;
    font-size: 16px;
    text-align: center;
  }
</style>