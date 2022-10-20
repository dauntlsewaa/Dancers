<template>
  <div :class="'filter-order-container'">
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

      <div class="demo-collapse">
        <el-collapse v-model="activeNames" @change="handleChange" class="el-collapse">
          <el-collapse-item :title="flag === 0 ? '展开全部' : '收起'" name="1">
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
            </div>
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
            </div>
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
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeNames = ref(["0"]);
const flag = ref(0);
// 折叠面板变化操作
// const handleChange = (val: string[]) => {
//   console.log(val);
// };
// 折叠面板的切换
const handleclick = () => {
  flag.value = flag.value === 1 ? 0 : 1;
  console.log(flag.value);
};
</script>

<style scoped>
/*折叠页面非触发样式*/

.el-collapse {
  border: none;
}
/* .el-collapse /deep/.el-collapse-item__header {
  font-size: 14px;
  text-align: center;
  display: block;
  border-bottom: none;
  color: #7d8090;
} */
/*折叠样式触发样式 */

.el-collapse-item {
  position: relative;
}
::v-deep .el-icon svg {
  display: none;
}
::v-deep .el-collapse-item__wrap {
  border: 0px;
}
::v-deep .el-collapse-item__header {
  color: #f93684;
  font-size: 14px;
  margin-left: 50%;
  display: block;
  border-bottom: none;
  padding: 20px;
  position: absolute;
  bottom: -40px;
}
::v-deep .el-collapse-item__content {
  padding-bottom: 0;
}
.collapse-title {
  flex: 0 1 54%;
  order: 1;
}
::v-deep .el-collapse {
  border: none;
}

/** */
.filter-container {
  margin-top: 100px;
  margin-bottom: 100px;
}
.filter-order-container {
  width: 1200px;
  /* border: 1px solid #333; */
  margin: 0 auto;
}
.order-container {
  display: flex;
  width: 1117px;
  padding-left: 0;
}
.filter-order {
  display: flex;
  padding: 25px 30px;
}
.order-item {
  list-style: none;
  font-size: 14px;
  width: 42px;
  margin-right: 60px;
}

.active {
  color: red;
}
.filter-btn {
  display: flex;
  padding-left: 20px;
  padding-right: 10px;
}
button {
  border-radius: 50px;
  width: 83px;
  margin-top: 8px;
  background-color: #e9ecec;
  font-size: 16px;
  background: #e9ecec;
  line-height: 36px;
  color: #7d8090;
}
i {
  margin-left: 3px;
  margin-top: 3px;
}

/*下方*/
.filter-container {
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
  margin-right: 30px;
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
