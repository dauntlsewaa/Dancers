<template>
  <!-- 选择兴趣技能 -->
  <el-dialog v-model="dialogVisible" draggable>
    <template #header="{ titleId, titleClass }">
      <div v-if="!keyWordData.length" class="my-header">
        <span :id="titleId" :class="titleClass">选择我的兴趣技能</span>
        <span>3 / 7</span>
      </div>
      <div v-else @click="keyWordData = ''">
        <svg
          t="1666356444061"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6064"
          width="14"
          height="14"
        >
          <path
            d="M421.228666 514.957971L784.268842 151.917795a85.577949 85.577949 0 0 0 0-121.005866 85.532789 85.532789 0 0 0-120.983285 0L239.731158 454.443749a85.577949 85.577949 0 0 0 0 121.005865l423.554399 423.464079a85.532789 85.532789 0 1 0 120.983285-120.983285L421.228666 514.957971z"
            fill="#8a8a8a"
            p-id="6065"
          ></path></svg
        ><el-button plain>返回</el-button>
      </div>
    </template>
    <div style="color: #b1b5c1; margin-bottom: 15px" v-if="!keyWordData.length">
      例如舞蹈就选舞种
    </div>
    <div class="el-from" style="margin-bottom: 15px">
      <el-input
        v-model="input"
        placeholder="搜索兴趣技能"
        style="width: 180px"
        icon="el-icon-zoom-out"
        @input="inputWord"
      ></el-input>
      <el-button plain style="">搜索</el-button>
    </div>
    <!-- 推荐页面 -->
    <div v-if="!keyWordData.length">
      <div>
        <el-tag closable class="tags" v-for="item in tags" :key="item.id">
          {{ item.name }}
        </el-tag>
      </div>
      <p class="sub-title">推荐兴趣技能</p>
      <el-scrollbar height="500px">
        <el-tag
          v-for="(item, index) in items"
          :key="item.id"
          :type="item.type"
          style="margin-top: 20px; width: 80px; height: 40px"
          effect="plain"
          class="tags"
          @click="handlerColor(item, index)"
        >
          {{ item.name }}
          <svg
            t="1666098282249"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2522"
            width="24"
            height="24"
            class="tagIcon"
            v-if="item.isShow"
          >
            <path
              d="M511.978511 61.559031c-247.304456 0-447.785489 200.480011-447.785489 447.785489s200.480011 447.785489 447.785489 447.785489 447.785489-200.480011 447.785489-447.785489S759.283989 61.559031 511.978511 61.559031zM475.04432 734.373647c-7.345292 7.163143-16.946974 10.729365-26.547633 10.729365-9.625218 0-19.225877-3.566222-26.544563-10.729365L201.24442 518.992251c-14.659885-14.322194-14.659885-37.509289 0-51.831482 14.662955-14.322194 38.428218-14.322194 53.091172 0l194.160071 189.467189L827.060629 287.271726c14.662955-14.322194 38.428218-14.322194 53.091172 0 14.663978 14.295588 14.663978 37.482683 0 51.804876L475.04432 734.373647z"
              p-id="2523"
              fill="#d4237a"
            ></path>
          </svg>
        </el-tag>
      </el-scrollbar>
      <div class="dialog-footer">
        <el-button style="width: 130px; height: 40px" @click="dialogVisible = false"
          >取消</el-button
        >
        <el-button
          type="danger"
          style="width: 130px; height: 40px"
          @click="dialogVisible = false"
          color="#f93684"
        >
          确认</el-button
        >
      </div>
    </div>
    <!-- 搜索页面 -->
    <div v-else>
      <!-- 历史搜索记录 -->

      <!-- 搜索结果 -->
      <div class="keyWordBox">
        <div class="keyBox" v-for="(item, index) in keyWordData" :key="index">
          <svg
            t="1666349909381"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2196"
            width="32"
            height="32"
          >
            <path
              d="M512 311.893333c-53.674667-53.674667-140.714667-53.674667-194.474667 0-68.010667 68.010667-68.010667 178.346667 0 246.357334l194.645334 194.218666 194.218666-194.218666c68.010667-68.010667 68.010667-178.346667 0-246.357334-34.816-34.816-83.541333-47.018667-128.170666-36.778666"
              fill="#e6e6e6"
              p-id="2197"
              data-spm-anchor-id="a313x.7781069.0.i0"
              class="selected"
            ></path>
            <path
              d="M825.344 190.293333c-58.538667-58.538667-141.653333-82.432-222.464-63.829333-18.346667 4.266667-29.866667 22.528-25.6 40.96 4.181333 18.346667 22.528 29.781333 40.96 25.6 57.685333-13.312 117.077333 3.754667 158.890667 45.568 87.722667 87.722667 87.722667 230.4 0 318.122667L512.341333 821.333333l-265.386666-264.704c-87.722667-87.722667-87.722667-230.4 0-318.122666 66.389333-66.389333 174.506667-66.389333 240.896 0l58.88 59.221333c6.741333 6.826667 66.048 65.194667 127.146666 65.194667 1.536 0 3.157333 0 4.693334-0.085334 25.770667-1.28 48.384-13.056 65.194666-33.962666a34.056533 34.056533 0 0 0-5.205333-47.957334 34.133333 34.133333 0 0 0-47.957333 5.205334c-5.717333 7.168-10.752 8.362667-15.36 8.533333-25.344 1.450667-64.768-29.696-79.957334-44.970667l-59.050666-59.477333v-0.085333c-93.013333-93.013333-244.394667-93.013333-337.493334 0-114.346667 114.346667-114.346667 300.288 0 414.634666l289.536 288.853334c6.656 6.656 15.36 9.984 24.149334 9.984 8.704 0 17.493333-3.328 24.149333-9.984l288.853333-288.853334c114.176-114.176 114.176-300.202667-0.085333-414.464z"
              fill="#333C4F"
              p-id="2198"
            ></path>
            <path
              d="M273.493333 425.386667c-18.858667 0-34.133333-15.274667-34.133333-34.133334 0-50.090667 14.336-88.661333 42.666667-114.773333 37.888-34.816 84.906667-32 90.112-31.573333 18.773333 1.536 32.768 18.090667 31.232 36.864A34.048 34.048 0 0 1 366.933333 313.002667c-1.109333 0-23.296-0.768-39.168 14.165333-13.397333 12.629333-20.138667 34.218667-20.138666 64.085333 0 18.773333-15.274667 34.133333-34.133334 34.133334z"
              fill="#333C4F"
              p-id="2199"
            ></path>
          </svg>
          <div style="width: 120px; text-align: left">
            <div style="margin-bottom: 10px">{{ item.name }}</div>
            <div>{{ item.description }}</div>
          </div>
          <svg
            t="1666350229873"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4502"
            width="32"
            height="32"
          >
            <path
              d="M925.696 384q19.456 0 37.376 7.68t30.72 20.48 20.48 30.72 7.68 37.376q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68l-287.744 0 0 287.744q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888l0-287.744-287.744 0q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68l287.744 0 0-287.744q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68q39.936 0 68.096 28.16t28.16 68.096l0 287.744 287.744 0z"
              p-id="4503"
              fill="#bfbfbf"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { reqInterest } from "@/api/home/index";
import { ElMessage } from "element-plus";
import request from "@/utils/request";
import _ from "lodash";
// 显示或隐藏弹窗
const dialogVisible = ref(false);

const input = ref("");
const count = ref(0);
const change = ref();
// 勾选的数据
const tags = ref<any>([]);

// 推荐技能列表
const items = ref<any>([]);

// 搜索关键词数据
const keyWordData = ref<any>([]);

onMounted(() => {
  getInterest();
});

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
let handlerDialog = () => {
  dialogVisible.value = !dialogVisible.value;
  getInterest();
};

// 点击添加兴趣
const handlerColor = (row: any, index: any) => {
  console.log(row);
  let result = tags.value.findIndex((item: any) => {
    return item.id === row.id;
  });

  if (tags.value.length < 7) {
    if (result === -1) {
      row.isShow = true;
      tags.value.push(row);
    } else {
      tags.value.splice(result, 1);
      row.isShow = false;
    }
    change.value = row.id;
    return;
  } else {
    ElMessage.error("最多添加7个兴趣技能");
    return;
  }
};

// 搜索关键词
let inputWord = _.debounce(async () => {
  let keyWord = input.value.trim();

  if (keyWord) {
    let result = await request.get(
      "/avocation/avocations/search/findByName?access_token=ab9a2034-fc59-4110-99af-7968a5c4f3d1&name=" +
        keyWord
    );
    keyWordData.value = result;
  }
});

defineExpose({
  handlerDialog,
  tags: tags.value,
});
</script>

<style scoped>
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
  margin-top: 20px;
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

.keyWordBox {
  display: flex;
  flex-wrap: wrap;
}
.keyBox {
  background: #f5f7f9;
  height: 70px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  width: 28%;
  margin: 5px 15px;
  font-size: 12px;
}
</style>
