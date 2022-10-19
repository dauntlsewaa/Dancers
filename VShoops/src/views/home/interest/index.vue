<template>
  <el-dialog v-model="dialogVisible" draggable>
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <span :id="titleId" :class="titleClass">选择我的兴趣技能</span>
        <span>3 / 7</span>
      </div>
    </template>
    <div style="color: #b1b5c1">例如舞蹈就选舞种</div>
    <div class="el-from" style="margin: 15px 0">
      <el-input
        v-model="input"
        placeholder="搜索兴趣技能"
        style="width: 180px"
        icon="el-icon-zoom-out"
      ></el-input>
      <el-button plain disabled style="">搜索</el-button>
    </div>
    <div>
      <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type" class="tags">
        {{ tag.name }}
      </el-tag>
    </div>
    <p class="sub-title">推荐兴趣技能</p>
    <el-scrollbar height="400px">
      <el-badge
        v-for="(item,index) in items"
        :key="item.label"
        :type="item.type"
        effect="plain"
        class="tags"
        @click="handlerColor(index)"
        
      >
        {{ item.label }}
        <svg
          t="1666098282249"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2522"
          width="16"
          height="16"
          v-if="change === index"
        >
          <path
            d="M511.978511 61.559031c-247.304456 0-447.785489 200.480011-447.785489 447.785489s200.480011 447.785489 447.785489 447.785489 447.785489-200.480011 447.785489-447.785489S759.283989 61.559031 511.978511 61.559031zM475.04432 734.373647c-7.345292 7.163143-16.946974 10.729365-26.547633 10.729365-9.625218 0-19.225877-3.566222-26.544563-10.729365L201.24442 518.992251c-14.659885-14.322194-14.659885-37.509289 0-51.831482 14.662955-14.322194 38.428218-14.322194 53.091172 0l194.160071 189.467189L827.060629 287.271726c14.662955-14.322194 38.428218-14.322194 53.091172 0 14.663978 14.295588 14.663978 37.482683 0 51.804876L475.04432 734.373647z"
            p-id="2523"
            fill="#d4237a"
          ></path>
        </svg>
      </el-badge>
    </el-scrollbar>
    <!-- card body -->
    <div class="dialog-footer">
      <el-button style="width: 130px; height: 40px">取消</el-button>
      <el-button type="danger" style="width: 130px; height: 40px" color="#f93684">
        确认</el-button
      >
    </div>
  </el-dialog>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
const dialogVisible = ref(true);
const input = ref("");
const count = ref(0);
const change = ref();
const tags = reactive([
  { name: "现代舞", type: "info" },
  { name: "爵士舞", type: "info" },
  { name: "民族舞", type: "info" },
]);

const items = reactive([
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
  { type: "info", label: "手势舞蹈" },
]);
const handlerColor = (index)=>{
  change.value = index
  console.log(change.value)
 
}
</script>

<style scoped>
.my-header {
  float: left;
}
.my-header :nth-child(2) {
  margin-left: 10px;
  color: #b1b5c1;
}

.el-form {
  margin: 15px 0;
}
.title-memo {
  color: #b1b5c1;
  margin: 6px 0 0;
  font-size: 14px;
}

.el-form {
  margin-top: 10px;
}

.tags {
  min-width: 100px;
  height: 40px;
  line-height: 38px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #eaecf0;
  color: #111;
  background-color: #fff;
  cursor: pointer;
  margin: 0 22px 21px 0;
  display: inline-block;
  font-size: 12px;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.icon {
  position: absolute;
  right: 300px;
  top: -35px;
}
.sub-title {
  margin: 8px 0 10px;
  color: #111;
  font-size: 14px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.tag-group {
  height: 300px;
  overflow: hidden;
}
.dialog-footer {
  padding: 10px 75px;
  text-align: right;
}
.el-button-small {
  padding: 9px;
  font-size: 12px;
  border-radius: 3px;
}
.el-button-primary {
  color: #fff;
  background-color: #f93684;
  border-color: #f93684;
}

</style>
