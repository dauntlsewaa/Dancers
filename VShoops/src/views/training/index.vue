<template class="body">
    <div class="common-layout">
      <el-container>
         <!-- 左侧 -->
        <el-aside width="170px" style="margin-right:10px">
            <div class="card left-sidebar">
                <!--左侧上方 -->
                <div class="practice active hover ">练习室<el-icon class="right-icon"><ArrowRight /></el-icon></div>
                 <span class="myPractice">我的练习室</span>
              </div>
            <div  class="card "  >
               <div class="hover active card-item ">缓存</div>
               <div class="hover  card-item ">音频库</div>
               <div class="hover  card-item ">收藏</div>
               <div class="hover  card-item ">历史</div>
            </div>
        </el-aside>
          <!-- 右侧中心展示数据区域 -->
          <el-main style="padding: 0;">
            <!-- 我的练习室组件 -->
        <!-- <Mytraining></Mytraining> -->
           <!-- 缓存组件 -->
           <!-- <Eache></Eache> -->
            <!-- 收藏组件 -->
           <!-- <Collect></Collect> -->
           <History></History>
          </el-main>
    
      </el-container>
    </div>
  </template>

<script setup lang="ts">
import {ArrowDown,ArrowRight} from '@element-plus/icons-vue'
import History from './history/index.vue'
// import Collect from './collect/index.vue'
// import Mytraining from './Mytraining/index.vue';
// import Eache from './cache/index.vue'
</script>

<style scoped>
.common-layout{
    width:1200px;
    margin:0 auto;
    background-color: #f5f7f9;
    height: 100%;
}
.card{
  background-color: #fff;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 10px;
}
.left-sidebar{
    padding:5px 0;
    font-size: 14px;
    color: #111;
    cursor: pointer;
    position: relative;
    display: block;
}

.main{
    overflow: hidden;
    padding: 0 30px 10px;
} 
.practice{
  font-size: 14px;
  color: #111;
  padding: 17px 21px;
  position: relative;

}
.hover.active::before,.hover:hover::before{
  background-color:  #f93684 ;
  display: block;
  content: " ";
  position: absolute;
  width: 4px;
  height: 37px;
  left: 0;
  top:20%;
}
.right-icon{
   color: #333;
    float: right;
    position: absolute;
    right: 20px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 10px;
}
.myPractice{
  color: #f93684;
  font-size: 14px;
  padding: 12px 0 12px 49px;
  cursor: pointer;
  display: block;
  text-decoration: none;
}
.card-item{
  font-size: 14px;
    color: #111;
    padding: 17px 21px;
    cursor: pointer;
    position: relative;
    display: block;
    text-decoration: none;
}

</style>