<template>
    <div style="background-color:#f5f7f9">
     
          <div style=" margin: 0 auto;width: 1200px;">
             <div style="text-align:center ;">
                <div>
                    <img src="https://rs.dance365.com/payment_fails.png" alt="">
                    <span class="payRin">支付失败</span>
                  </div>
                  <div style="margin-top: 15px;">
                    <el-button class="again">重新支付</el-button>
                    <el-button class="return">返回首页</el-button>
                </div>
                   <div class="phones">
                    <svg  t="1666236456799" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2565" width="16" height="16"><path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m123.946667 609.706667c-91.093333 122.453333-179.413333 135.68-213.333334 135.68h-13.44a99.84 99.84 0 0 1-71.68-168.106667 97.706667 97.706667 0 0 1 68.693334-31.36h2.986666a96.213333 96.213333 0 0 1 57.386667 18.773333c23.893333 8.533333 48-3.413333 71.466667-34.986666s28.373333-56.32 14.72-74.24a96 96 0 0 1-14.293334-12.586667l-2.346666-2.56A100.48 100.48 0 0 1 512 379.306667 98.986667 98.986667 0 0 1 606.933333 277.333333h2.986667a98.773333 98.773333 0 0 1 95.786667 77.226667c8.106667 24.746667 28.586667 123.093333-69.76 255.146667z" fill="#bfbfbf" p-id="2566"></path></svg>
                    <span class="number">联系客服:188-4411-9650</span>
                </div>
             </div>
          </div>
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
.again{
   
    background-color: #f93684;
    width: 140px;
    height: 40px;
    font-size: 16px;
    font-weight: 400;
    color:aliceblue;
    margin-right: 20px;
}
.return{
    width: 140px;
    height: 40px;
    font-size: 16px;
    font-weight: 400;
    border-color: #f93684;
    color:#f93684 ;
}
.phones{
    padding:36px 0;
}
.number{
    margin-left:5px;
    color: #7d8090;
    font-size: 14px;
    vertical-align: top;
}
.payRin{
    display: block;
    color: #111;
    font-size: 18px;
    padding-bottom: 20px;
    
}
</style>