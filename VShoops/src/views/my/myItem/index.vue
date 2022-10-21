<template>
  <div class="myItem">
    <div class="my">
      <div class="left">
        <!-- 登陆数据 -->
        <el-card>
          <div class="Personal">
            <div class="PersonalDetails">
              <img
                class="imgone"
                src="https://rs.dance365.com/default_head@3x.png?imageView2/0/w/200/h/1200/format/webp/ignore-error/1"
                alt=""
              />
              <div>登录以后显示用户</div>
              <img class="imgtwo" src="../../assets/111.png" alt="" />
            </div>
          </div>
          <div class="PersonalPosition">
            <div class="PersonalLeft">
              <div>0</div>
              <div class="string">关注</div>
            </div>
            <div class="PersonalPosition">
              <div class="PersonalLeft">
                <div>0</div>
                <div class="string">关注</div>
              </div>
              <div class="PersonalPosition">
                <div class="PersonalLeft">
                  <div>0</div>
                  <div class="string">关注</div>
                </div>
                <div class="PersonalLeft">
                  <div>0</div>
                  <div class="string">粉丝</div>
                </div>
              </div>
            </div>
          </div>
        </el-card>
        <!-- 资源动态 -->
        <el-card shadow="never" style="padding: 0px 0">
          <div class="ResourceDynamic">
            <div
              class="ResourceDynamicItem"
              :class="numOne === -1 ? 'ResourceDynamicAcvtive' : ''"
              @click="toziyuan"
            >
              <router-link to="/center/dynamics">资源动态</router-link>
            </div>
          </div>
        </el-card>
        <!-- 二级菜单 -->
        <el-card shadow="never" :body-style="{ padding: '20px' }">
          <div class="ResourceDynamic">
            <div
              class="ResourceDynamicItem"
              :class="numOne === index ? 'ResourceDynamicAcvtive' : ''"
              v-for="(item, index) in obj"
              :key="index"
              @click="toMyItem(index)"
            >
              {{ item }}
            </div>
            <el-menu>
              <el-sub-menu>
                <template #title>
                  <div class="ResourceDynamicItem">
                    <span>我卖的</span>
                  </div>
                </template>
                <el-menu-item>订单管理</el-menu-item>
                <el-menu-item>商品管理</el-menu-item>
                <el-menu-item>客户管理</el-menu-item>
                <el-menu-item>代收款</el-menu-item>
                <el-menu-item>优惠管理</el-menu-item>
                <el-menu-item>评论管理</el-menu-item>
                <el-menu-item>保证金</el-menu-item>
              </el-sub-menu>
            </el-menu>
          </div>
        </el-card>
        <!-- 我的资料 -->
        <el-card shadow="never" :body-style="{ padding: '20px' }">
          <div class="ResourceDynamic">
            <div
              class="ResourceDynamicItem"
              v-for="(item, index) in 1"
              :key="item"
              @click="toDatum(index)"
              :class="{ ResourceDynamicAcvtive: numOne === -2 }"
            >
              <router-link to="/center/edit_info">我的资料</router-link>
            </div>
          </div>
        </el-card>
      </div>

      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
let numOne = ref(-1);
let obj = ref(["我的会员", "我的钱包", "我的优惠卷", "我买的订单"]);

const toziyuan = (index: any) => {
  numOne.value = -1;
};

const toMyItem = (index: any) => {
  numOne.value = index;
  if (index === 0) {
    router.push("/center/my_member");
  } else if (index === 1) {
  } else if (index === 2) {
  } else if (index === 3) {
  }
};
const toDatum = (index: any) => {
  numOne.value = -2;
};
</script>

<style scoped>
.myItem {
  background-color: rgb(245, 247, 249);
  padding-top: 20px;
  padding-bottom: 120px;
}
/* 左上个人信息 */
.my {
  width: 1200px;
  margin: 0 auto;
}

.left {
  width: 170px;
  float: left;
  margin-right: 10px;
}

.Personal {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.PersonalDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.PersonalDetails .imgtwo {
  margin-top: 5px;
  margin-bottom: 15px;
}

.PersonalDetails .imgone {
  width: 100px;
  margin-bottom: 10px;
  background-color: #ddd;
  border-radius: 50%;
}

.PersonalPosition {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.PersonalLeft {
  text-align: center;
}

.PersonalLeft .string {
  font-size: 14px;
  color: #888;
}

/* 左边资源动态 */
.ResourceDynamic {
  margin: -15px 0;
}

.ResourceDynamicItem {
  margin-left: -20px;
  padding-left: 23px;
  font-size: 14px;
  line-height: 40px;
  box-sizing: border-box;
  border-left: 4px solid transparent;
  margin-bottom: 5px;
  margin-top: 5px;
  transition: all 0.5s;
  cursor: pointer;
}

.ResourceDynamicAcvtive {
  border-left: 4px palevioletred solid;
}

.ResourceDynamicItem:hover {
  border-left: 4px palevioletred solid;
}

/* el样式 */
.el-card {
  margin-bottom: 10px !important;
}
.el-menu {
  border-right: none !important;
  margin-left: -20px !important;
}

.el-menu span {
  margin-left: 3px !important;
}

.el-menu-item {
  margin-left: 15px !important;
  box-sizing: border-box !important;
}

.el-menu-item.is-active {
  color: black !important;
}

li:hover {
  background-color: white !important;
  color: red !important;
}

.el-sub-menu__title {
  height: 42px !important;
}

/* 右边样式 */
.ResourceDynamicRight {
  font-size: 14px;
  line-height: 40px;
  margin-left: 10px;
}
</style>
