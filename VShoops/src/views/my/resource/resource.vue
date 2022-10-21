<template>
 <div class="Resource">
  <el-card shadow="never">
    <div class="ResourceDynamicRight">资源动态</div>
  </el-card>
  <el-card shadow="never" style="height: 770px">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input size="large" style="width: 270px" :prefix-icon="Search" />
      </el-form-item>
      <el-form-item>
        <el-button style="height: 40px; margin-left: -20px" type="info" plain
          >搜索</el-button
        >
      </el-form-item>
      <el-form-item>
        <div style="font-size: 16px; margin-right: 15px">资源类型:</div>
        <el-select placeholder="全部资源" style="width: 195px">
          <el-option label="作品" />
          <el-option label="教程" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <div style="font-size: 16px; margin-right: 15px">状态:</div>
        <el-select placeholder="全部" style="width: 195px">
          <el-option label="已上架" />
          <el-option label="未上架" />
        </el-select>
      </el-form-item>
      <el-table stripe empty-text="无更多内容">
        <el-table-column label="内容" prop="name" width="400px" align="center">
        </el-table-column>
        <el-table-column label="发布时间"> </el-table-column>
        <el-table-column label="数据"> </el-table-column>
        <el-table-column label="状态"> </el-table-column>
        <el-table-column label="操作"> </el-table-column>
      </el-table>
    </el-form>
  </el-card>
 </div>
</template>

<script setup lang="ts">

import { Search } from "@element-plus/icons-vue";
</script>

<style scoped>
.Resource{
  width: 1020px;
  margin-left:420px;
  margin-bottom: 100px;
}
/deep/.el-input--large .el-input__wrapper {
  background-color: #f5f7f9 !important;
}
.el-card {
  margin-bottom: 10px !important;
}
.ResourceDynamicRight {
  font-size: 14px;
  line-height: 40px;
  margin-left: 10px;
}
.cell {
  background-color: #f5f7f9;
  padding: 10px 0 !important;
  margin-bottom: -8px !important;
  color: black;
  font-weight: normal;
}
/deep/.el-table__cell {
  background-color: #f5f7f9 !important;
}
</style>
