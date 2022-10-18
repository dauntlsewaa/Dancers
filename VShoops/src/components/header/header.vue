<template>
  <div class="box">
    <div class="header">
      <a class="logo" href=""><img src="./images/logo@3xrenew3.png" alt="" /></a>
    <ul class="navList">
      <li class="navItem" click="handleractive">资源</li>
      <li class="navItem" click="handleractive">课程</li>
      <li class="navItem" click="handleractive">练习室</li>
      <li class="navItem" click="handleractive">交流</li>
      <li class="navItem" click="handleractive">我的</li>
    </ul>
    <div class="core">
      <span class="download">
        <el-icon><Iphone /></el-icon>下载APP</span
      >
      <button class="issue">
        <el-icon><Plus /></el-icon>发布
      </button>
      <span class="person"
        ><el-icon ><User /></el-icon
      ></span>
    </div>
    </div>
   
  </div>
</template>

<script setup lang="ts">

</script>

<style  scoped>
* {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.box {
  width: 100%;
  height: 60px;
  box-shadow: 0px 2px 0px 0px rgb(122, 115, 115,.2);
  
}
 .header{
  width: 1200px;
  height: 60px;
  margin:  0 auto;
}
.logo {
  float: left;
}
.logo img{
  width: 128px;
  margin-top: 15px;
}
 .navList {
  float: left;
}
.navList .navItem {
  float: left;
  margin-left: 40px;
  line-height: 60px;
}
active{
  color: #f93684;
}
 .core {
  float: right;
}
.core .download {
  font-weight: 600;
  line-height: 60px;
  margin-right: 30px;
}
.core .issue{
  text-align: center;
  border: none;
  margin-right: 20px;
  color: #fff;
  line-height: 30px;
  background-color: #f93684;
  width: 75px;
  height: 30px;
  font-size: 16px;
  border-radius: 10px;
}

.core .person{
  display: inline-block;
  width: 30px;
  height: 30px;

  border-radius: 50%;
  color: #fff;
  background-color: #ccc;
  line-height: 30px;
  text-align: center;
}
</style>