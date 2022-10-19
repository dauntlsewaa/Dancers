<template>
  <div>
    <!-- :default-active="activeIndex" -->
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      background-color="#f5f7f9"
      text-color="#b1b5c1"
      active-text-color="#f93684">
      <el-menu-item @click="itemPitchHandler" index="0">综合榜</el-menu-item>
      <el-menu-item index="1">热练榜</el-menu-item>
      <el-menu-item index="2">新锐榜</el-menu-item>
      <el-menu-item index="3">最新</el-menu-item>

      <div class="flex-grow" />
      <el-button
        style="margin: 10px 10px 0 0; background: #e9ecec; color: #7d8090"
        round
        bg
        >筛选<el-icon><ArrowDown /></el-icon></el-button>
    </el-menu>

    <div style="margin: 10px; padding: 20px">
      <el-row :gutter="10">
        <el-col :span="2" style="text-align:center:line-height: 100%; " class="title">兴趣技能:</el-col>
        <el-col :span="22">
          <el-tag
            style="
             margin: 5px 20px;
              border-radius: 4px;
              border: none;
              font-size: 14px;"
            :color="change?'#f93684':'#f5f7f9'"
            :effect="change?'dark':'plain'"
            @click="tagHandle(index)"
            v-for="(item,index) in 16"
            :key="item"
            >爵士舞</el-tag
          >
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2" class="title">兴趣技能:</el-col>
        <el-col :span="22">
          <el-tag
            style="
              margin: 5px 20px;
              border-radius: 4px;
              border: none;
              font-size: 14px;"
              color="#f93684"
              effect="dark"
            v-for="item in 20"
            :key="item"
            >爵士舞</el-tag
          >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let change = ref(false)

const activeIndex = ref("0");
const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};

const itemPitchHandler = ()=>{

}
// tag点击事件(爵士舞)
const tagHandle= (index)=>{
   change.value = !change.value
}
</script>

<style>
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none !important;
  }
.flex-grow {
  flex-grow: 1;
}
.title{
  width: 95px;
  color: #b1b5c1;
  padding: 7px 0;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
}

</style>
