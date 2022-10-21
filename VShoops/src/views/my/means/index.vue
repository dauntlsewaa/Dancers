<template>
  <!-- 我的资料 -->
  <div style="width:1020px" class="box">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>编辑资料</span>
      </div>
    </el-card>
    <el-card style="min-height: 650px">
      <el-form :model="userForm" ref="userFormRef" class="block ">
        <div style="margin-bottom: 30px;margin-left: 400px">
          <el-avatar class="blockImg" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">
          </el-avatar>
        </div>
      </el-form>
      <el-form inline label-width="120px">
        <el-form-item style="margin-left: 150px;" label="用户名：">
          <el-input v-model="userForm.username" placeholder="admin" :input-style="{width:'150px',height:'40px'}" />
        </el-form-item>
        <el-form-item label="生日：">
          <div class="demo-date-picker">
            <el-input :input-style="{width:'150px',height:'40px'}" placeholder="1997-07-20">
            </el-input>
          </div>
        </el-form-item>
        <el-form-item label="性别：" style="margin-left: 130px">
          <el-button style="width:70px;height:30px; margin-left:20px;">男</el-button>
          <el-button style="width:70px;height:30px; margin-left:10px;">女</el-button>
        </el-form-item>
        <el-form-item style="margin-left:5px" label="城市：">
          <el-select placeholder="请选择" style="width:150px;height:30px">
            <el-option label="上海" value="1" />
            <el-option label="山西" value="2" />
            <el-option label="北京" value="3" />
          </el-select>
        </el-form-item>
        <el-form-item style="margin-left: 150px" label="成长等级:">
          <el-tag class="ml-2" type="danger" style="color:#fff;background-color:#ff31ac;" size="small">Lv.1
          </el-tag>
        </el-form-item>
        <el-form-item style="margin-left: 120px" label="技能水平:">
          <el-select placeholder="零基础" style="width:150px;height:30px">
            <el-option label="业余初级" value="1" />
            <el-option label="业余中级" value="2" />
            <el-option label="业余高级" value="3" />
          </el-select>
        </el-form-item>
        <el-form-item style="margin-left: 160px" label="兴趣技能：">
          <el-tag class="tags" v-for="item in tags" :key="item.id" style="width:100px;"
            @click="handlerColor(item,tags)">
            {{ item.name }}
            <svg class="icon1" t="1666226412231" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="2553" width="16" height="16">
              <path
                d="M827.392 195.584q65.536 65.536 97.792 147.456t32.256 167.936-32.256 167.936-97.792 147.456-147.456 98.304-167.936 32.768-168.448-32.768-147.968-98.304-98.304-147.456-32.768-167.936 32.768-167.936 98.304-147.456 147.968-97.792 168.448-32.256 167.936 32.256 147.456 97.792zM720.896 715.776q21.504-21.504 18.944-49.152t-24.064-49.152l-107.52-107.52 107.52-107.52q21.504-21.504 24.064-49.152t-18.944-49.152-51.712-21.504-51.712 21.504l-107.52 106.496-104.448-104.448q-21.504-20.48-49.152-23.04t-49.152 17.92q-21.504 21.504-21.504 52.224t21.504 52.224l104.448 104.448-104.448 104.448q-21.504 21.504-21.504 51.712t21.504 51.712 49.152 18.944 49.152-24.064l104.448-104.448 107.52 107.52q21.504 21.504 51.712 21.504t51.712-21.504z"
                p-id="2554" fill="#d81e06"></path>
            </svg>
          </el-tag>

          <el-button plain style="width: 80px;" class="button-new-tag ml-1" @click="handler">
            请选择
          </el-button>
        </el-form-item>
      </el-form>
      <div style="background-color: #f5f7f9; width: 1200px; margin: 0 auto">
        <!-- 选择兴趣技能 -->
        <el-dialog v-model="dialogVisible" draggable>
          <template #header="{ titleId, titleClass }">
            <div class="my-header">
              <span :id="titleId" :class="titleClass">选择我的兴趣技能</span>
              <span>3 / 7</span>
            </div>
          </template>
          <div style="color: #b1b5c1">例如舞蹈就选舞种</div>
          <div class="el-from" style="margin: 15px 0">
            <el-input v-model="input" placeholder="搜索兴趣技能" style="width: 180px" icon="el-icon-zoom-out"></el-input>
            <el-button plain disabled style="">搜索</el-button>
          </div>
          <div>
            <el-tag closable class="tags" v-for="item in tags" :key="item.id">
              {{ item.name }}
            </el-tag>
          </div>
          <p class="sub-title">推荐兴趣技能</p>
          <el-scrollbar height="500px">
            <el-tag v-for="(item, index) in items" :key="item.id" :type="item.type"
              style="margin-top: 20px;width:80px;height:40px" effect="plain" class="tags"
              @click="handlerColor(item,index)">
              {{ item.name }}
              <svg t="1666098282249" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2522" width="24" height="24" class="tagIcon" v-if="item.isShow">
                <path
                  d="M511.978511 61.559031c-247.304456 0-447.785489 200.480011-447.785489 447.785489s200.480011 447.785489 447.785489 447.785489 447.785489-200.480011 447.785489-447.785489S759.283989 61.559031 511.978511 61.559031zM475.04432 734.373647c-7.345292 7.163143-16.946974 10.729365-26.547633 10.729365-9.625218 0-19.225877-3.566222-26.544563-10.729365L201.24442 518.992251c-14.659885-14.322194-14.659885-37.509289 0-51.831482 14.662955-14.322194 38.428218-14.322194 53.091172 0l194.160071 189.467189L827.060629 287.271726c14.662955-14.322194 38.428218-14.322194 53.091172 0 14.663978 14.295588 14.663978 37.482683 0 51.804876L475.04432 734.373647z"
                  p-id="2523" fill="#d4237a"></path>
              </svg>
            </el-tag>
          </el-scrollbar>
          <div class="dialog-footer" style="text-align:right" >
            <el-button style="width: 130px; height: 40px" @click="dialogVisible = false">取消</el-button>
            <el-button type="danger" style="width: 130px; height: 40px" @click="dialogVisible = false" color="#f93684">
              确认</el-button>
          </div>
        </el-dialog>
      </div>
      <el-form label-width="100px">
        <div class="demo-button">
          <el-button type="danger"
            style="width:150px; height:40px; background-color:#f93684; margin-left: 450px;margin-top: 100px;">
            登录</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { reqInterest } from '@/api/home/index'
// 叉的定义
// 勾选的数据
const tags = ref<any>([])
// 推荐技能列表
const items = ref<any>([])
const change = ref()
// 显示或隐藏弹窗
const dialogVisible = ref(false);
// 默认页面加载操作
onMounted(() => {
  getInterest();
})

// 获取推荐技能列表
const getInterest = async () => {
  let result = await reqInterest();
  items.value.push(...result.content);
  items.value[0].isShow = true;
  items.value[1].isShow = true;
  items.value[2].isShow = true;
  if (items.value.length === result.content.length) {
    tags.value.push(items.value[0]);
    tags.value.push(items.value[1]);
    tags.value.push(items.value[2]);
  }
};
// 点击显示选择兴趣
const handler = () => {
  console.log(handler)
  dialogVisible.value = !dialogVisible.value;
  getInterest();
};
const handlerColor = (row: any, index: any) => {
  let result = tags.value.findIndex((item: any) => {
    return item.id === row.id;
  });

  if (result === -1) {
    row.isShow = true;
    tags.value.push(row);
    return;
  } else {
    tags.value.splice(result, 1);
    row.isShow = false;
  }
  change.value = row.id
};
const input = ref("");
//收集表单数据
const userForm = reactive({
  username: "admin",//用户名
  birthDate: "1997-07-20",
  address: "上海/上海",
})
//可关闭的tab页start
const inputValue = ref('')
const inputVisible = ref(false)
</script>

<style scoped>
/* 我的资料 */
.box {
  width: 1200px;
  margin-top:-140px;
  width: 1020px;
  margin-left:420px;
  margin-bottom: 100px;
}

.box-card {
  margin: 20px 0;
}

.block {
  height: 140px;
  width: 120px;

}

.block>p {
  text-align: center;
}

.blockImg {
  width: 120px;
  height: 120px;

}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

.demo-lv {
  width: 50px;
  height: 30px;
  background-color: #f93684;
  /* font-size: 6px; */
  color: #fff;
  text-align: center;

}

.mx-1 {
  /* width: 100px;
    line-height:height; */
  position: relative;
  margin: 0 15px;
}

.icon1 {
  position: absolute;
  left: 90px;
  top: -10px;
}

/deep/.el-input__wrapper {
   background-color: #f5f7f9 !important;
  }


.el-button:hover {
  color: #fff;
  background-color: #f93684;

}

/* 选择兴趣 */
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
  height: 40px;
  line-height: 40px;
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

.tagIcon {
  position: absolute;
  top: -10px;
  right: -10px;
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
  height: 40px;
  line-height: 40px;
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

.tagIcon {
  position: absolute;
  top: -10px;
  right: -10px;
}
</style>