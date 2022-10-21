<template>
  <!-- 缓存右侧组件 -->
  <div>
    <!-- 上方 -->
    <el-card class="header" shadow="always" :body-style="{ padding: '20px' }">
      <div>
        <span @click="show = true" :class="{ active: show == true }"
          >浏览记录</span
        >
      </div>
    </el-card>
    <!-- 下方 -->
    <el-card
      style="height: 730px"
      class="main"
      shadow="always"
      :body-style="{ padding: '20px' }"
    >
      <!-- 搜索 -->
      <el-row :gutter="10">
        <el-col :span="8">
          <el-input
            :prefix-icon="Search"
            autocomplete="off"
            type="text"
            size="large"
          >
          </el-input>
        </el-col>
        <el-col :span="1"
          ><el-button text bg size="large">搜索</el-button>
        </el-col>
        <el-col :span="15" @click="handler" v-if="!sel">
          <i class="delete">批量删除</i>
        </el-col>
        <el-col :span="15" v-if="sel">
          <div class="checkAll">
            <div @click="handler">取消</div>
            <div>确定({{changeChck? changeChck :'0'}})</div>
            <div @click="changeAll" >{{chAll?'全选':'取消全选' }}</div>
          </div>
        </el-col>
      </el-row>

      <!-- table展示数据 -->
      <el-table ref="reftable" :data="content" stripe>
        <el-table-column width="180">
          <template #="{ row, $index }">
            <img :src="row.momentBackup.cover[0]" width="169" height="101" />
          </template>
        </el-table-column>
        <el-table-column class="description" width="511px" prop="momentTitle">
          <template #="{ row, $index }">
            <div class="theme">{{ row.momentTitle }}</div>
            <div class="type" style="margin: 5px 0">作品</div>
            <div class="author">
              <img
                class="img"
                :src="row.momentBackup.creatorBackup.avatar"
                alt=""
              />
              <div class="authors" prop="name">
                {{ row.momentBackup.creatorBackup.name }}
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column class="time" prop="time" width="220px"
          >1小时前</el-table-column
        >
        <el-table-column class="delete" align="right">
          <template #="{ row, $index }">
            <el-button text size="default" @click="open($index)" v-if="!sel"
              >删除</el-button>
              <el-icon v-else
                size="30px"
                @click="row.change=!row.change  "
                 :class="{iconcolor :row.change }"
                ><CircleCheckFilled /></el-icon>
          </template>
        </el-table-column>
      </el-table>
      <!-- 消息弹框,点击删除按钮弹出 -->
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from "element-plus";
import { Search } from "@element-plus/icons-vue";
import { reqViewrecords } from "@/api/training/index";
import { ref ,computed} from "vue";
import { onMounted } from "vue";
// 定义table实例
let reftable = ref();
let show = ref(false);
// 定义多选框显示隐藏的标识符
let sel = ref(false);
// 设置全选的标识
let chAll = ref(true);
const content = ref([]);
onMounted(() => {
  getContent();
});
// 发请求获取历史数据
const getContent = async () => {
  let result = await reqViewrecords();
  // console.log(result);
  // 存储数据
  content.value = result.content;
  // console.log(content.value[0].momentBackup.cover[0]);
};

const handler = () => {
  sel.value = !sel.value;
  //   console.log(sel.value);
};

// 删除的弹框回调
const open = (index) => {
  ElMessageBox.confirm("此操作将删除该项,是否继续", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      content.value.splice(index, 1);

      ElMessage({
        type: "success",
        message: "删除成功",
      });
    })
    .catch(() => {});
};

// 计算属性
const changeChck = computed(()=>{
  return content.value.filter((row)=>{
     return row.change
  }).length
})

// 全选按钮
const changeAll = ()=>{
   content.value.forEach((item)=>{
    if(item.change){
        item.change = false
        return
    }
    item.change = true
   })
    chAll.value = !chAll.value
}
</script>
<!--  -->
<style scoped>
>>> .el-table .el-table__cell.is-right {
  text-align: center;
}
>>> .el-table th.el-table__cell > .cell.highlight {
  opacity: 0;
}
>>> .el-table-column--selection .cell {
  padding-right: 70px;
  width: 50px;
  height: 50px;
}
.header {
  margin-bottom: 10px;
  height: 80px;
}
span {
  float: left;
  padding-top: 10px;
  padding-bottom: 26px;
  margin-right: 50px;
  color: #111;
  font-size: 14px;
  position: relative;
}
.active,
span:hover {
  text-align: center;
  border-bottom: 4px solid #f93684;
}

.delete {
  float: right;
  width: 70px;
  font-size: 14px;
  margin-right: 20px;
}
i {
  font-style: normal;
}
.description {
  padding-left: 17px;
}
.time {
  padding: 0 8px;
  color: #111;
  font-size: 14px;
}
.theme {
  padding-right: 20px;
  font-size: 16px;
  color: #111;
}
.author {
  display: flex;
}

.img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 11px;
}
.authors {
  font-size: 16px;
  color: #111;
  line-height: 30px;
}
.checkAll {
  display: flex;
  width: 150px;
  float: right;
  color: #f93684;
  font-size: 14px;
  justify-content: space-between;
  margin-right: 50px;
}
.iconcolor {
  color: #f93684;
}
</style>
