<template>
  <el-card class="box-card">
    <div class="card-header">
      <span>我的会员</span>
    </div>
  </el-card>
  <el-card class="box-card">
    <div class="head-profile">
      <a class="profile"></a>
      <div class="mi">
        <a href="" class="mi-name">我是用户名</a>
        <span>您还不是会员</span>
      </div>
    </div>
    <div class="hint">开通会员平均每年可省：￥9500</div>
    <ul class="cost">
      <li class="costitem">
        <el-button>
          <div>
            <p>季度会员</p>
            <p class="pic">
              ￥
              <i>98</i>
              /季
            </p>
            <p>合计￥98(青少年专属)</p>
          </div>
        </el-button>
      </li>
      <li class="costitem">
        <el-button
          ><div>
            <p>1年会员</p>
            <p class="pic">
              ￥
              <i>268</i>
              /年
            </p>
            <p>合计￥268</p>
          </div></el-button
        >
      </li>
      <li class="costitem">
        <el-button
          ><div>
            <p>3年会员</p>
            <p class="pic">
              ￥
              <i>196</i>
              /年
            </p>
            <p>合计￥588(省￥216)</p>
            
          </div></el-button
        >
        <div class="rec">推荐</div>
      </li>
    </ul>
  </el-card>
</template>

<script setup lang="ts">
</script>

<style scoped>
li {
  list-style: none;
}
.head-profile {
  height: 100px;
  width: 360px;
  padding-top: 40px;
  margin: auto 36%;
}
.profile {
  cursor: pointer;
  display: inline-block;
  float: left;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: url(https://rs.dance365.com/default_head@3x.png?imageView2%2F0%2Fw%2F200%2Fh%2F1200%2Fformat%2Fwebp%2Fignore-error%2F1=)
    50%;
  background-color: #ccc;
  background-size: cover;
}
.mi {
  padding-top: 30px;
  width: 140px;
  height: 50px;
  float: right;
  margin-right: 100px;
}
.mi .mi-name {
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
  font-size: 20px;
}
.mi span {
  color: #f93684;
}
.hint {
  margin: 19px 0px auto;
  text-align: center;
  font-size: 16px;
}
.cost {
  margin: 0 auto;
  width: 750px;
  height: 124px;
  margin-top: 30px;
}
.cost .costitem {
    position: relative;
  float: left;
  margin-right: 30px;
}
.cost .costitem /deep/.el-button {
  height: 124px;
  width: 220px;
  border-radius: 15px;
  align-items: baseline;
}
.cost .costitem .pic {
  margin-bottom: 20px !important;
}
.cost .costitem p {
  font-size: 16px;
  height: 20px;
  margin: 12px auto;
}

.cost .costitem p i {
  font-size: 30px;
}
.cost .costitem .rec {
    position: absolute;
    top: -13px;
    right: -20px;
    display: block;
    padding: 3px 2px;
    width: 76px;
    height: 32px;
    border-radius: 16px;
    background-color: #f93684;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 32px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 1020px;
  margin: 0 auto;
}
</style>