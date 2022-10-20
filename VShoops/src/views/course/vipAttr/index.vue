<template>
  <div class="filter-order-container">
    <!-- 点击筛选弹出部分下方 -->
    <div class="filter-container">
      <div class="filter-content-container">
        <!-- 兴趣技能 -->
        <div class="interest">
          <span>兴趣技能:</span>
          <div class="dance">
            <div class="checkbox-button isChecked">爵士舞</div>
            <div class="checkbox-button">爵士舞</div>
            <div class="checkbox-button">爵士舞</div>
            <div class="checkbox-button isChecked">爵士舞</div>
            <div class="checkbox-button isChecked">爵士舞</div>
            <div class="checkbox-button">爵士舞</div>
            <div class="checkbox-button">爵士舞</div>
            <div class="checkbox-button isChecked">爵士舞</div>
            <div class="checkbox-button isChecked">爵士舞</div>
            <div class="checkbox-button isChecked">爵士舞</div>
            <div class="checkbox-button">爵士舞</div>
            <div class="checkbox-button">爵士舞</div>
            <div class="checkbox-button isChecked">爵士舞</div>
          </div>
          <div class="reset">重置</div>
        </div>
        <!-- 内容样式 -->
        <div class="interest">
          <span>兴趣技能:</span>
          <div class="dance">
            <div class="checkbox-button isChecked">视频</div>
            <div class="checkbox-button">图片</div>
            <div class="checkbox-button">文章</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/*下方*/
.filter-container {
  width: 1200px;
  margin: 0 auto;
  padding: 27px 30px;
}
.interest {
  display: flex;
  margin-bottom: 8px;
}
span {
  width: 95px;
  color: #b1b5c1;
  padding: 7px 0;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
}
.dance {
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
}
.checkbox-button {
  font-size: 14px;
  border-radius: 4px;
  margin-right: 50px;
  margin-top: 10px;
  border-radius: 10px;
  color: #606266;
  width: 66px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.isChecked {
  background-color: #f93684;
  color: white;
}
.reset {
  margin-top: 15px;
  right: 30px;
  top: 33px;
  font-size: 14px;
  color: #f93684;
}
</style>
