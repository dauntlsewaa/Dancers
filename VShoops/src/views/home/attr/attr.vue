<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      background-color="#f5f7f9"
    >
      <el-menu-item index="0">综合榜</el-menu-item>
      <el-menu-item index="1">热练榜</el-menu-item>
      <el-menu-item index="2">新锐榜</el-menu-item>
      <el-menu-item index="3">最新</el-menu-item>

      <div class="flex-grow" />
      <el-button
        style="margin: 10px 10px 0 0; background: #e9ecec; color: #7d8090"
        round
        bg
        >筛选<svg
          t="1666092085140"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3120"
          width="16"
          height="16"
        >
          <path
            d="M830.24 340.688l11.328 11.312a16 16 0 0 1 0 22.624L530.448 685.76a16 16 0 0 1-22.64 0L196.688 374.624a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l288.496 288.496 288.512-288.496a16 16 0 0 1 22.624 0z"
            p-id="3121"
            fill="#bfbfbf"
          ></path></svg
      ></el-button>
    </el-menu>

    <div style="margin: 10px; padding: 20px">
      <el-row :gutter="10">
        <el-col :span="2" style="text-align:center:line-height: 100%; ">兴趣技能:</el-col>
        <el-col :span="22">
          <el-tag
            style="
              margin: 5px 20px;
              border-radius: 4px;
              color: #7d8090;
              border: none;
              font-size: 14px;
            "
            @click="handler"
            v-for="item in 16"
            :key="item"
            >爵士舞</el-tag
          >
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2">兴趣技能:</el-col>
        <el-col :span="22">
          <el-tag
            style="
              margin: 5px 20px;
              border-radius: 4px;
              color: #7d8090;
              background-color: #f5f7f9;
              border: none;
              font-size: 14px;
            "
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

const activeIndex = ref("0");
const handlers = ref(false);
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

let handler = () => {
  handlers.value = !handlers.value;
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none !important;
  
}
</style>
