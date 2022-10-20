<template>
    <div class="body">
        <div class="orgerDetail">
            <!-- 确认订单 -->
         <div >
            <span class="affirm">确认订单</span>
            <el-card shadow="always" :body-style="{ padding: '20px' }">
              <div class="content">
                     <!-- 左侧 -->
             <div>
                <img class="img" src="../../assets/2.dance.jpg" alt="">
                <div class="test">视频课</div>
             </div>
                <!-- 右侧 -->
                <div class="right_content">
                    <div class="title">零基础古典身韵元素组合</div>
                     <div class="money">
                        <span style="color: #fd5911;font-size: 24px;">￥48.00</span>
                        <span style="margin-top:3px;">x1</span>
                     </div>
                </div>
              </div>
            </el-card>
            
         </div>
         <!-- 保障 -->
         <el-card style="margin:10px 0;" shadow="always" :body-style="{ padding: '20px' }">
            <div class="safeguard">
                <span class="safeguard-left">保障：</span>
                <div style="height:22px ;">
                    <span style="width: 127px;" ><svg style="margin-right:10px;" t="1666182809037"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3491" width="16" height="16"><path d="M512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64zM776 400.576l-316.8 316.8c-9.728 9.728-25.472 9.728-35.2 0l-176-176c-9.728-9.728-9.728-25.472 0-35.2l35.2-35.2c9.728-9.728 25.472-9.728 35.2 0L441.6 594.176l264-264c9.728-9.728 25.472-9.728 35.2 0l35.2 35.2C785.728 375.104 785.728 390.848 776 400.576z" p-id="3492" fill="#d4237a"></path></svg>允许音频提取</span>
                </div>
            </div>
         </el-card>
         <!-- 开通会员 -->
         <el-card shadow="always" :body-style="{ padding: '20px',background:'#fef5f8'}">
       
           <div class="open">
            <div> 
                <svg style="margin-right: 10px;" t="1666183447559" viewBox="0 0 1138 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4769" width="16" height="16"><path d="M186.997713 866.592817L96.433117 325.992722l245.184301 204.225439 224.932418-358.162496 200.641538 358.219383 275.334574-204.282326-83.965668 540.600095H186.997713zM60.821662 269.503625a59.902336 59.902336 0 1 1 0-119.747785 59.902336 59.902336 0 0 1 0 119.747785zM569.8493 119.776228A59.902336 59.902336 0 1 1 569.8493 0.028444a59.902336 59.902336 0 0 1 0 119.747784z m508.970751 149.727397a59.902336 59.902336 0 1 1 0-119.747785 59.902336 59.902336 0 0 1 0 119.747785zM213.279649 1001.984612a28.443654 28.443654 0 1 1 0-56.887309h720.193328a28.443654 28.443654 0 0 1 0 56.887309H213.222762z" fill="#BD983D" p-id="4770"></path></svg>
                <a href=""><span class="title">开通会员，本课程免费学</span></a>
                <el-button style="background-color: #f93684; color:aliceblue;margin-left:10px" size="default" round @click="toMy" >立即开通</el-button>
            </div>
            <div @click="toMy"   style="margin-top:5px ;"><svg t="1666184328960" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5872" width="16" height="16"><path d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z" p-id="5873" fill="#8a8a8a"></path></svg></div>
           </div>
         </el-card>
    
         <!-- 选择支付方式 -->
         <div>
            <span class="affirm">选择支付方式</span>
            <el-card shadow="always" :body-style="{ padding: '20px' }">
             <div>
                <span class="span-buy">购买数量：</span>
                <span class="number">X 1</span>
            </div>
            <div style="padding-top: 20px;">
                <span class="span-buy">合计金额：</span>
                <span style="color: #fd5911;
                font-size: 24px;">48.00</span>
            </div>
            <!-- 支付方式 -->
           <div class="pay">
            <div style="margin-right: 40px;"><img src="../../assets/2.zhifubao.png" alt=""></div>
            <div @click="Payment">
                <img v-if="!imgshow" src="@/assets/3.weixin.png" alt="">
                <img v-else src="@/assets/4.weixin.png" alt="">
            </div>
           </div>
            </el-card>
            
         </div>
         <!-- 底 -->
         <div style="padding-bottom: 60px;">
            <ul>
                <li class="li">本商品为虚拟商品，购买后，不支持退款、换货、转让，不提供原文件、不支持下载。</li>
                <li class="li">本商品为虚拟商品，购买后，不支持退款、换货、转让，不提供原文件、不支持下载。</li>
                <li class="li">本商品为虚拟商品，购买后，不支持退款、换货、转让，不提供原文件、不支持下载。</li>
                <li class="li active">本商品为虚拟商品，购买后，不支持退款、换货、转让，不提供原文件、不支持下载。</li>
    
            </ul>
            <!-- 支付按钮 -->
            <el-button class="payNow" style=""  size="large" @click="centerDialogVisible = true">立即支付</el-button>
            <!-- 微信支付弹框 -->
            <el-dialog
            v-model="centerDialogVisible"
            title="请使用微信扫码支付"
            width="30%"
            align-center
          >
            <div class="sialogImg"><img class="QRcode" src="@/assets/paysuccess.png" alt=""></div>
            <template #footer>
              <div class="dialog-footer">
                <el-button style="width: 200px;height:34px" @click="centerDialogVisible = false">取消支付</el-button>
                <el-button class="check"  @click="centerDialogVisible = false"
                  >查看支付结果</el-button
                >
              </div>
            </template>
          </el-dialog>
  
         </div>
         
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref,reactive } from 'vue'

const centerDialogVisible = ref(false)
const imgshow = ref(false)
// 立即开通事件回调
const toMy = ()=>{
 router.push('/center/dynamics')
}
// 选择支付方式  微信支付事件回调(支付宝不支持)
const Payment = ()=>{
    imgshow.value = !imgshow.value
}
</script>

<style scoped>
.body{
    width: 100%;
    height: 100%;
    background-color:#f5f7f9;
}
.orgerDetail{
    margin: 0 auto;
    width: 1200px;
}
.affirm{
    display: inline-block;
    color: #333;
    font-size: 22px;
    padding: 20px 0;
}
.img{
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    width: 169px;
    height: 101px;
    border-radius: 4px;
    background-size: cover;
    background-position: 50%;
}
.test{
    position: absolute;
    left: 85px;
    top:110px;
    background: #f93684;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 7px 12px 7px 9px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    min-width: 60px;
    z-index: 9;
}
.content{
    display: flex;
    height: 101px;
}
.right_content{
    display: flex;
    padding-left: 20px;
    flex-direction: column;
    flex:1
}

.title{
    color: #111;
    font-size: 16px;  
}
.money{
display: flex;
justify-content: space-between;
padding-top: 50px;
}
.safeguard{
    display: flex;
}
.safeguard-left{
    font-size: 16px;
    margin-right: 40px;
    color: #7d8090;
}
a{
    text-decoration: none;
}
.open{
    display: flex;
    justify-content: space-between;
}
.span-buy{
    color: #7d8090;
    font-size: 16px;
}
.number{
    color: #231815;
    font-size: 24px;
}
.pay{
    display: flex;
    margin-top: 33px;
}
.li{
    color: rgb(127, 128, 144);
    font-size: 14px;
    line-height: 30px;
}
.active{
    color:red;
}
.payNow{
    background-color: #f93684;
    height:60px;
    width:180px;
    font-size: 20px;
    color:aliceblue;
    margin-left:10px ;
    float:right
}
.dialog-footer button:first-child {
    margin-right: 10px;
  }
  .sialogImg{
     
  }
  .QRcode{
    display: block;
    width: 180px;
    height: 180px;
    margin: 0 auto;
  }
  .dialog-footer{
    display: flex;
    justify-content: space-between;
  }
  .check{
    width: 200px;
    height: 34px;
    background-color: #f93684;
    color:aliceblue;
  }
</style>