<template class="body">
  <!--  头部 -->
  <Header></Header>
 <div class="training">
  <div class="common-layout">
    <el-container>
      <!-- 左侧 -->
      <el-aside width="170px" style="margin-right: 10px">
        <div class="card left-sidebar">
          <!--左侧上方 -->
          <div class="practice active hover" @click="show=!show">
            练习室<el-icon v-if="!show" class="right-icon"><ArrowRight /></el-icon>
                  <el-icon v-else class="right-icon"><ArrowDown /></el-icon>
          </div>
          <span v-if="show" class="myPractice"
            ><router-link to="/training/dynamics">我的练习室</router-link></span
          >
        </div>
        <div class="card">
          <div class="hover  card-item" @click="clickHandler(item,index)" :class="{active:num==index}" v-for="(item,index) in data" :key="index">
            <router-link :to="item.router" >{{item.name}}</router-link>
          </div>
       
        </div>
      </el-aside>
      <!-- 右侧中心展示数据区域 -->
      <el-main style="padding: 0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
 </div>
  <!-- 底部 -->
<Footer></Footer>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
import Header from "@/components/header/header.vue";
import Footer from '@/components/footer/footer.vue'
import { ArrowDown, ArrowRight } from "@element-plus/icons-vue";
import {ref} from 'vue'
// 定义缓存等数组
 const data = ref(
 [
  {name:'缓存',
  router:'/training/mediaCache'},
  {name:'音频库',
  router:''},
  {name:'收藏',
  router:'/training/collections'},
  {name:'历史',
  router:'/training/view_records'},
 ]
  )
  // 定义标识符切换红色条
  let num = ref(0)
  // 定义我的练习室是否显示的标识符
  let show = ref(false)

    // 点击音频库的弹框js
  const open = () => {
  ElMessageBox.alert('请打开中舞网APP，点击"练习室"-"音频库"中查看。', '', {
    confirmButtonText: '确定',
  })
}
// 缓存及其他按钮的点击事件
 const  clickHandler= (item,index)=>{
      num.value=index
      if(item.name=='音频库'){
          open()
      }
 }
  


</script>

<style scoped>
.training{
  background-color:rgb(245,247,249);
}
.common-layout {
  width: 1200px;
  margin: 0px auto;
  background-color: #f5f7f9;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 100px;
}
.card {
  background-color: #fff;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 10px;
}
.left-sidebar {
  padding: 5px 0;
  font-size: 14px;
  color: #111;
  cursor: pointer;
  position: relative;
  display: block;
}

.main {
  overflow: hidden;
  padding: 0 30px 10px;
}
.practice {
  font-size: 14px;
  color: #111;
  padding: 17px 21px;
  position: relative;
}
.hover.active::before,
.hover:hover::before {
  background-color: #f93684;
  display: block;
  content: " ";
  position: absolute;
  width: 4px;
  height: 37px;
  left: 0;
  top: 20%;
}
.right-icon {
  color: #333;
  float: right;
  position: absolute;
  right: 20px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 10px;
}
.myPractice {
  color: #f93684;
  font-size: 14px;
  padding: 12px 0 12px 49px;
  cursor: pointer;
  display: block;
  text-decoration: none;
}
.card-item {
  font-size: 14px;
  color: #111;
  padding: 17px 21px;
  cursor: pointer;
  position: relative;
  display: block;
  text-decoration: none;
}
</style>
