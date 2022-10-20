<style scoped>
.borders{
  margin-right: 0 !important;
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
  cursor: pointer;
}

.cost .costitem .pic {
  margin-bottom: 20px !important;
}
.cost .costitem p {
  font-size: 16px;
  height: 20px;
  margin: 12px auto;
}

.cost .costitem p span {
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
 .cost div{
  text-align: center;
  border: 1px solid rgb(220, 223, 230);
  height: 124px;
  width: 215px;
  border-radius: 15px;
 }
 .bacc{
  background-color: rgb(249, 235, 241);
  border:1px solid #f93684 !important;

 }
</style>
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
        <div  :class="but[0]===1?'bacc':''" @click="handlerbacc1">
            <p>季度会员</p>
            <p class="pic">
              ￥
              <span>98</span>
              /季
            </p>
            <p>合计￥98(青少年专属)</p>
        </div>
      </li>
      <li class="costitem">
      
          <div  @click="handlerbacc2" :class="  but[1]===1?'bacc':''">
            <p>1年会员</p>
            <p class="pic">
              ￥
              <span>268</span>
              /年
            </p>
            <p>合计￥268</p>
          </div>
      </li>
      <li class="costitem">
        <div  @click="handlerbacc3" :class="but[2]===1?'bacc':''">
            <p>3年会员</p>
            <p class="pic">
              ￥
              <span>196</span>
              /年
            </p>
            <p>合计￥588(省￥216)</p>
          </div>
        <p class="rec">推荐</p>
      </li>
    </ul>
    <button class="open">立即以588元开通</button>

    <div class="letter">
      开通即视为同意
      <a href=""> 《会员服务协议》 </a>
    </div>
    <hr />
    <div class="rights">会员专属权益</div>
    <ul class="privileged">
      <li class="priviitem" @mouseover="handlerOver" @mouseleave="handlerOut">
        <div v-show="flag">
          <div class="tool1">
            <div class="tisi">
              <!-- <img src="./image/10001.course_equity.png" alt=""> -->
              <div class="img"></div>
              <p>12412412421</p>
              <a href="">立即前往会员专区</a>
            </div>
          </div>
          <div class="triangle"></div>
        </div>
        <div class="tool">
          <img src="./image/10001.course_equity.png" alt="" />
          <p>724个会员专区课程免费学习</p>
        </div>
      </li>
      <li class="priviitem" @mouseover="handlerOver" @mouseleave="handlerOut">
        <div v-show="flag">
          <div class="tool1">
            <div class="tisi">
              <!-- <img src="./image/10001.course_equity.png" alt=""> -->
              <div class="img"></div>
              <p>12412412421</p>
              <a href="">立即前往会员专区</a>
            </div>
          </div>
          <div class="triangle"></div>
        </div>
        <div class="tool">
          <img src="./image/10001.course_equity.png" alt="" />
          <p>724个会员专区课程免费学习</p>
        </div>
      </li>
      <li class="priviitem" @mouseover="handlerOver" @mouseleave="handlerOut">
        <div v-show="flag">
          <div class="tool1">
            <div class="tisi">
              <!-- <img src="./image/10001.course_equity.png" alt=""> -->
              <div class="img"></div>
              <p>12412412421</p>
              <a href="">立即前往会员专区</a>
            </div>
          </div>
          <div class="triangle"></div>
        </div>
        <div class="tool">
          <img src="./image/10001.course_equity.png" alt="" />
          <p>724个会员专区课程免费学习</p>
        </div>
      </li>
      <li class="priviitem" @mouseover="handlerOver" @mouseleave="handlerOut">
        <div v-show="flag">
          <div class="tool1">
            <div class="tisi">
              <!-- <img src="./image/10001.course_equity.png" alt=""> -->
              <div class="img"></div>
              <p>12412412421</p>
              <a href="">立即前往会员专区</a>
            </div>
          </div>
          <div class="triangle"></div>
        </div>
        <div class="tool">
          <img src="./image/10001.course_equity.png" alt="" />
          <p>724个会员专区课程免费学习</p>
        </div>
      </li>
      <li class="priviitem" @mouseover="handlerOver" @mouseleave="handlerOut">
        <div v-show="flag">
          <div class="tool1">
            <div class="tisi">
              <!-- <img src="./image/10001.course_equity.png" alt=""> -->
              <div class="img"></div>
              <p>12412412421</p>
              <a href="">立即前往会员专区</a>
            </div>
          </div>
          <div class="triangle"></div>
        </div>
        <div class="tool">
          <img src="./image/10001.course_equity.png" alt="" />
          <p>724个会员专区课程免费学习</p>
        </div>
      </li>
      <li class="priviitem borders" @mouseover="handlerOver" @mouseleave="handlerOut">
        <div v-show="flag">
          <div class="tool1">
            <div class="tisi">
              <!-- <img src="./image/10001.course_equity.png" alt=""> -->
              <div class="img"></div>
              <p>12412412421</p>
              <a href="">立即前往会员专区</a>
            </div>
          </div>
          <div class="triangle"></div>
        </div>
        <div class="tool">
          <img src="./image/10001.course_equity.png" alt="" />
          <p>724个会员专区课程免费学习</p>
        </div>
      </li>
      <li class="priviitem" @mouseover="handlerOver" @mouseleave="handlerOut">
        <div v-show="flag">
          <div class="tool1">
            <div class="tisi">
              <!-- <img src="./image/10001.course_equity.png" alt=""> -->
              <div class="img"></div>
              <p>12412412421</p>
              <a href="">立即前往会员专区</a>
            </div>
          </div>
          <div class="triangle"></div>
        </div>
        <div class="tool">
          <img src="./image/10001.course_equity.png" alt="" />
          <p>724个会员专区课程免费学习</p>
        </div>
      </li>
      <li class="priviitem" @mouseover="handlerOver" @mouseleave="handlerOut">
        <div v-show="flag">
          <div class="tool1">
            <div class="tisi">
              <!-- <img src="./image/10001.course_equity.png" alt=""> -->
              <div class="img"></div>
              <p>12412412421</p>
              <a href="">立即前往会员专区</a>
            </div>
          </div>
          <div class="triangle"></div>
        </div>
        <div class="tool">
          <img src="./image/10001.course_equity.png" alt="" />
          <p>724个会员专区课程免费学习</p>
        </div>
      </li>
      <li class="priviitem" @mouseover="handlerOver" @mouseleave="handlerOut">
        <div v-show="flag">
          <div class="tool1">
            <div class="tisi">
              <!-- <img src="./image/10001.course_equity.png" alt=""> -->
              <div class="img"></div>
              <p>12412412421</p>
              <a href="">立即前往会员专区</a>
            </div>
          </div>
          <div class="triangle"></div>
        </div>
        <div class="tool">
          <img src="./image/10001.course_equity.png" alt="" />
          <p>724个会员专区课程免费学习</p>
        </div>
      </li>
      <li class="priviitem" @mouseover="handlerOver" @mouseleave="handlerOut">
        <div v-show="flag">
          <div class="tool1">
            <div class="tisi">
              <!-- <img src="./image/10001.course_equity.png" alt=""> -->
              <div class="img"></div>
              <p>12412412421</p>
              <a href="">立即前往会员专区</a>
            </div>
          </div>
          <div class="triangle"></div>
        </div>
        <div class="tool">
          <img src="./image/10001.course_equity.png" alt="" />
          <p>724个会员专区课程免费学习</p>
        </div>
      </li>
      <li class="priviitem " @mouseover="handlerOver" @mouseleave="handlerOut">
        <div v-show="flag">
          <div class="tool1">
            <div class="tisi">
              <!-- <img src="./image/10001.course_equity.png" alt=""> -->
              <div class="img"></div>
              <p>12412412421</p>
              <a href="">立即前往会员专区</a>
            </div>
          </div>
          <div class="triangle"></div>
        </div>
        <div class="tool">
          <img src="./image/10001.course_equity.png" alt="" />
          <p>724个会员专区课程免费学习</p>
        </div>
      </li>
      <li class="priviitem borders" @mouseover="handlerOver" @mouseleave="handlerOut">
        <div v-show="flag">
          <div class="tool1">
            <div class="tisi">
              <!-- <img src="./image/10001.course_equity.png" alt=""> -->
              <div class="img"></div>
              <p>12412412421</p>
              <a href="">立即前往会员专区</a>
            </div>
          </div>
          <div class="triangle"></div>
        </div>
        <div class="tool">
          <img src="./image/10001.course_equity.png" alt="" />
          <p>724个会员专区课程免费学习</p>
        </div>
      </li>
    </ul>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
const flag = ref(0);//判断会员专属权益的提示框显示和隐藏
const but = ref([0,0,1]);//判断按钮颜色
const handlerOver = () => {
  flag.value = 1;
};
const handlerOut = () => {
  flag.value = 0;
};
const handlerbacc1=()=>{
  but.value=[0,0,0,]
  if(but.value[0] ==1){
    but.value[0]=0
  }
  else{
    but.value[0]=1
  }
  
}
const handlerbacc2=()=>{
  but.value=[0,0,0,]
  if(but.value[1] ==1){
    but.value[1]=0
  }
  else{
    but.value[1]=1
  }
  
}
const handlerbacc3=()=>{
  but.value=[0,0,0,]
  if(but.value[2] ==1){
    but.value[2]=0
  }
  else{
    but.value[2]=1
  }
}
</script>

<style scoped>
* {
  font-weight: 700;
  font-family: PingFang SC, Lantinghei SC, Microsoft YaHei, HanHei SC,
    Helvetica Neue, Open Sans, Arial, Hiragino Sans GB, "\5FAE\8F6F\96C5\9ED1",
    STHeiti, WenQuanYi Micro Hei, SimSun, sans-serif;
}
text {
  color: #626aef;
}
.privileged li .triangle {
  width: 30px;
  height: 30px;
  position: absolute;
  transform: rotateZ(45deg);
  top: -34px;
  left: 45px;
  border-right: 1px solid #f93684;
  border-bottom: 1px solid #f93684;
  background-color: #fff;
}
.privileged li {
  position: relative;
  width: 110px;
  height: 110px;
  padding: 14px;
  margin: 0 15px 15px 0 ;
  float: left;
  border: 1px solid rgb(222, 220, 220);
  border-radius: 5px;
  font-size: 14px;
}
.privileged li .tool1 {
  position: absolute;
  top: -220px;
  left: -30px;
  height: 200px;
  width: 200px;
  border: 1px solid #f93684;
  border-radius: 10px;
}
.privileged li .tisi .img {
  width: 45px;
  height: 45px;
  margin: 0 auto;
  background: url(./image/10001.course_equity.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  border-radius: 50%;
  border: 1px solid #eab7cc;
}
.privileged li .tisi p {
  text-align: center;
  width: 190px;
}
.privileged li .tisi a {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: block;
  width: 150px;
  height: 40px;
  background-color: #f93684;
  text-align: center;
  line-height: 40px;
  color: #fff;
  border-radius: 5px;
}

.privileged img {
  width: 46px;
}
.privileged p {
  font-size: 14px;
  color: #111;
}
.privileged .tool {
  text-align: center;
}

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


.open {
  display: block;
  padding: 9px 15px;
  margin: 30px auto 12px;
  width: 330px;
  height: 56px;
  color: #fff;
  border-radius: 10px;
  background-color: #f93684;
  border: none;
  font-size: 16px;
}
.letter {
  font-size: 14px;
  text-align: center;
}
.letter a {
  color: #f93684 !important;
}
hr {
  height: 1px;
  background-color: #ddd;
  border: none;
}
.rights {
  margin: 32px 0px 0px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-card {
  width: 1020px;
  margin: 0 auto;
}

.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>