<template>
    <div class="classContainer">
        <div class="classContent">
            <div class="classTitle">  
        </div>
           <div class="vip">
            <div class="vipContent">
                <span class="vipTitle">会员专区</span>
                <div class="vipMain">
                    <a href="https://www.dance365.com/home?userId=ff80808183d5a6490183e938ec076f73" target="_blank"><div class="vipheader"></div></a>
                    <div class="vipMainrigth" style="border-right:1px solid #ccc;">
                        <div class="vipMainright-top" >
                            <p>登录</p>
                            <button class="vipMainright-button"><a href="https://www.dance365.com/level-instruction">LV.1</a></button>
                        </div>
                        <p class="vipMainright-bottom">开通会员尊享10大特权</p>
                    </div>
                </div>
            </div>

        <a href="https://www.dance365.com/my_member">    
            <div class="vipContent" style="margin:0 130px 0 70px">
            <span class="vipTitle">&nbsp;</span>
            <div class="vipMain">
                <div class="FPEEtitle"></div>
                <div class="vipMainrigth">
                    <div class="FPEE">以下 <i class="FPEEname"><a href="https://www.dance365.com/my_member">723</a></i> 个会员专区课程<br>全部免费学习</div>
                </div>
            </div>
        </div>
        </a>

        <a href="https://www.dance365.com/my_member">    
            <div class="vipContent" >
            <span class="vipTitle">&nbsp;</span>
            <div class="vipMain">
                <div class="NEXT"></div>
                <div class="vipMainrigth">
                    <div class="FPEE">购买非会员专区课程<br>可获会员立减优惠</div>
                </div>
            </div>
        </div>
    </a>
            <div class="vipright">
                <button>
                    <span><a href="https://www.dance365.com/my_member">立即开通</a></span>
                </button>
                <p><a href="https://www.dance365.com/my_member">查看/开通 > </a></p>
            </div>
           </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.classContent{
    width: 1200px;
    margin: 0 auto;
}
.vip{
    display: flex;
    width: 1138px;
    height: 108px;
    padding: 20px 30px 16px;
    margin: 10px 0 5px 0;
}
.vipContent{
    background-color: #fff;
}
.vipTitle{
    font-size: 16px;
    margin: 0 0 26px;
    font-weight: 400;
}
.vipMain{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 20px;
}
.vipheader{
    background-image:url('../../assets/1.png');
    width: 50px;
    height: 50px;
    background-size:100% 100%;
    border-radius: 50%;
    margin-right: 10px;
}
.vipMainrigth{
    height: 44px;
}
.vipMainright-top{
    padding-top: 4px;
    font-size: 16px;
    width: 220px;
}
.vipMainright-top p{
    padding-top: 4px;
    flex-wrap: nowrap;
    font-size: 16px;
    display: inline;
    margin-right: 10px;
}
.vipMainright-button{
    background: -webkit-gradient(linear,left top,left bottom,from(#ff289b),to(#ff43d0));
    background: linear-gradient(#ff289b,#ff43d0);
    border: 1px solid #fff;
    border-radius: 4px;
    cursor: pointer;
    width: 40px;
    height: 20px;
    color: #fff;
}
.vipMainright-bottom{
    margin-top: 4px;
    font-size: 12px;
    color: #f93684;
}
.FPEE{
    margin-left: 20px;
    text-align: center;
}
.FPEEname{
    color:#ff289b;
    font-style: normal;
}
.FPEEtitle{
    background:url('../../assets/2.png');
    width: 58px;
    height: 58px;
    background-size:100% 100%;
    margin-right: 10px;
}
.NEXT{
    background:url('../../assets/3.png');
    width: 58px;
    height: 58px;
    background-size:100% 100%;
    margin-right: 10px;
}
.vipright{
    display: flex;
    float: right;
    flex-direction: column;
}
.vipright button{
    width: 80px;
    height: 30px;
    border-radius:20px;
    background-color: #f93684;
    margin: 35px 10px -10px 65px;
    border-style: inherit;
}
.vipright span{
    font-size: 12px;
    color: #fff;
}
.vipright p{
    font-size: 12px;
    color: #ccc;
    margin: 18px 0px 0px 65px;
}
</style>