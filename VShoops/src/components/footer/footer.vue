<template>
    <div class="footer">
      <div class="footerContent">
        <ul class="footerTop">
            <li><a href="https://www.dance365.com/aboutUs" target="_blank">关于我们</a></li>|
            <li><a href="https://www.dance365.com/privacyStatement" target="_blank">用户隐私权政策</a></li>|
            <li><a href="https://www.dance365.com/userAgreement" target="_blank">用户服务协议</a></li>| 
            <li><a href="https://www.dance365.com/contactUs" target="_blank">联系我们</a></li>
        </ul>
        <div class="footerMain">
            <div class="icon">
                <el-tooltip content="此处没有微信提示，请移动到其他位置" placement="top" show-arrow show-after="200">
                   <div class="wx"></div>
                  </el-tooltip>
                  <el-tooltip content="电话号码~~~110-119-120" placement="top" show-arrow show-after="200">
                    <div class="phone"></div>
                  </el-tooltip>
            </div>
            <div>
                <p>Copyright © 2010-2022 南京爱一格网络科技有限公司 版权所有</p>
                <p>经营性许可证编号： <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">苏B2-20180515</a> &nbsp;<a href="http://ccm.mct.gov.cn/ccnt/sczr/service/business/emark/toDetail/b324ae6cb184469691bb4a8e75a93b41" target="_blank"><img src="https://rs.dance365.com/jinying.png" style="width: 20px; height: 20px; position: relative; top: 5px;"> 苏网文〔2021〕4647-106号</a></p>
                <p><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">苏ICP备20036081号</a></p>
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32010602010735" target="_blank">
                    <div class="gongan">
                        <img src="https://rs.dance365.com/pc/gongan.png"> 苏公网安备 32010602010735号
                        </div>
                </a>
            </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
body,html{
    margin: 0;
    padding: 0;
}
.footer{
    width: 100%;
    height: 256px;
    background-color:#221f23
}
.footerContent{
    text-align: center;
    font-size: 14px;
    margin: 0 auto;
    width: 1200px;
    padding: 24px 40px 18px;
    box-sizing: border-box;
    color: #b1b5c1
}
.footerTop{
    margin: 0 auto;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-padding-start: 0;
    list-style: none;
    -ms-flex-pack: distribute;
    justify-content: space-around;
}
.footerTop li{
    display: list-item;
    text-align: -webkit-match-parent;
}
.icon{
    display: flex;
    justify-content: space-between;
    width: 130px;
    margin: 28px auto 30px;
}
.wx{
    background:url(../../assets/weChat_normal.a1769059.svg);
    width: 26px;
    height: 24px;
    background-size: 100% 100%;
}
.phone{
    background: url(../../assets/phone_normal.86835eeb.svg);
    width: 26px;
    height: 24px;
    background-size: 100% 100%;
}
.gongan{
    display: flex;
    justify-content: center;
    align-items: center;
}
a{
    color: inherit;
    text-decoration: none;
}
</style>