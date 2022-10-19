<template>
    <div class="Container">
        <div class="header">导航头</div>
        <div class="videoPlay">
            <div class="videoPlay-left"></div>
            <div class="videoPlay-mid">
                <div id="mse"></div>
            </div>
            <div class="videoPlay-right"></div>
        </div>
        <!-- 底部详情 -->

        <div class="upContainer">
            <div class="videoDetail">
                <!-- 视频标题 -->
                <div class="videotitle">
                    <div class="videotitle_left">疾驰 (2 Baddies) 舞蹈版</div>
                    <div class="videotitle_right">加入练习室</div>
                </div>
                <!-- 作者信息 -->
                <div class="author">
                    <div class="authorImg"><img src="./images/tou.png" alt=""></div>
                    <div class="authorName">古舞者</div>
                    <div class="authorLv">Lv.17</div>
                    <div class="book">+关注</div>
                    <div class="pubTime">发布时间：09-19</div>
                </div>
                <!-- 作者和作者兴趣 -->
                <div class="upInfo">
                    <div class="upName">
                        <div class="upName1">原创作者：<span>NCT127</span> </div>
                        <div class="upLike">兴趣技能：<span>唱跳、rap、篮球</span></div>
                    </div>
                </div>

                
            </div>
            <!-- 买课 -->
                <div class="sell">
                    <div class="sellCon" >
                        <div class="sellItem">
                            <el-badge :value="200" :max="99" class="item">
                                <el-button>求视频课</el-button>
                            </el-badge>
                            <el-badge :value="100" :max="10" class="item">
                                <el-button>求配套用品</el-button>
                            </el-badge>
                            <el-badge :value="100" :max="10" class="item">
                                <el-button>求线下课</el-button>
                            </el-badge>
                        </div>
                    </div>
                </div>
            <!-- TA的相关 -->
            
            <div class="aboutCon">
                <div class="aboutList">
                    <div class="aboutTitle">TA的相关</div>
                    <div class="aboutItem">
                        <div class="aboutImg">
                            <img src="./images/about.png" alt="">
                        </div>
                        <div class="aboutName">Future Perfect舞蹈班</div>
                        <div class="playNum">
                            <img src="./images/play.png" alt="">
                            <div class="people">999</div>
                            </div>
                    </div>
                </div>
            </div>

            <!-- 更多推荐 -->
            <div class="aboutCon">
                <div class="aboutList">
                    <div class="aboutTitle">更多推荐</div>
                    <div class="aboutItem">
                        <div class="aboutImg">
                            <img src="./images/about.png" alt="">
                        </div>
                        <div class="aboutName">Future Perfect舞蹈班</div>
                        <div class="playNum">
                            <img src="./images/play.png" alt="">
                            <div class="people">999</div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 留言 -->
        <div class="eq"></div>
            <div class="talkCon">
                <div class="talkItem">
                    <img class="talkImg" src="./images/pos.png" alt="">
                    <div class="write">
                          <input type="textarea"
                            placeholder="说点什么吧">
                    </div>
                </div>
                <el-empty description="description" />
            </div>

        




    </div>
</template>


<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import Player from 'xgplayer'
onMounted(()=>{
    let player = new Player({
  id: 'mse',
  url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  width:1108,
  height:600
});
})

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.Container{
    width: 100%;
    height: 100%;
    background-color: #F5F7F9;
}
.header{
    width: 100%;
    height: 60px;
    /* background-color: aquamarine; */
}
/* 中间视频播放部分 */
.videoPlay{
    width: 100%;
    height: 660px;
    display: flex;
}
.videoPlay-left{
    width: 420px;
    height: 660px;
    background-color: #1E1E1E;
}
.videoPlay-mid{
    width: 1200px;
    height: 660px;
    border: 1px solid red;
}
.videoPlay-right{
    width: 420px;
    height: 660px;
    /* border: 1px solid green; */
    background-color: #1E1E1E;
}
/* 底部详情 */
.upContainer{
    width: 100%;
    height: 800px;
    /* border: 1px solid green; */
    background-color: #F5F7F9;
}

.videoDetail{
    width: 1200px;
    height: 210px;
    margin: 0 auto;
    /* border: 1px solid red; */
    background-color: white;
}
.videotitle{
    width: 1000px;
    height: 42px;
    margin: 0 auto;
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.videotitle_left{
    font-size: 20px;
    margin-left: 14px;
}
.videotitle_right{
    margin-right: 10px;
    border: 1px solid #F93684;
    color: #F93684;
    border-radius: 8px;
    width: 100px;
    height: 38px;
    line-height: 40px;
    text-align: center;
}

.author{
    width: 1000px;
    height: 60px;
    margin: 0 auto;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    
}
.authorImg{
    width: 38px;
    height: 38px;
}
.authorName{
    margin-left: 20px;
    margin-top: 10px;
}
.authorLv{
    margin-left: 10px;
    margin-top: 10px;
    border: 1px solid #F93684;
    border-radius: 5px;
    background-color: #F93684;
    color: white;
}

.book{
    width: 66px;
    height: 34px;
    margin-left: 24px;
    margin-top: 10px;
    border: 1px solid #eee;
    border-radius: 20px;
    text-align: center;
    line-height: 34px;
    background-color: #F9EBF1;
    color: #F93684;
}
.pubTime{
    margin-left: 600px;
    color: #B1B5C1;
}

/* 作者信息 */
.upInfo{
   width: 1000px;
    height: 80px;
    margin: 0 auto;
    /* border: 1px solid blue;  */
}
.upName{
    margin-top: 20px;
}
.upName1{
   
}
.upName1 span{
 color: #F93684;
}
.upLike{
    margin-top: 10px;
}
.upLike span{
    color: #F93684;
}


.sell{
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    border: 1px solid #eee;
    background-color: white;
}
.sellCon{
    width: 1000px;
    height: 80px;
    margin: 0 auto;
    /* border: 1px solid green; */
    
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.el-button{
    width: 100px;
    height: 50px;
    background-color: #FFEAF2;
    border-radius: 20px;
    font-size: 18px;
}

/* TA的相关 */
.aboutCon{
    width: 1200px;
    height: 300px;
    margin: 0 auto;
    border: 1px solid #eee;
    background-color: white;
}
.aboutTitle{
    margin-top: 40px;
    font-size: 30px;
}
.aboutList{
    
    width: 1000px;
    /* height: 400px; */
    margin: 0 auto;
    /* border:  1px solid brown; */
}
.aboutItem{
   
    width: 260px;
    height: 300px;
    /* border:  1px solid green; */
}
.aboutImg img{
    width: 100%;
    border-radius: 2px;
    overflow: hidden;
}
.aboutName{
    margin-top: 10px;
    font-size: 18px;
}
.playNum{
    margin-top: 12px;
    display: flex;
}
.people{
    font-size: 16px;
    margin-left: 4px;
    color: #B1B5C1;
    margin-top: 2px;
}

/* 留言 */
.talkCon{
    width: 1200px;
    height: 600px;
    margin: 0 auto;
    /* border: 1px solid black; */
    background-color:white;
}
.talkItem{
    width: 1000px;
    height: 80px;
    margin: 0 auto;
    /* border: 1px solid #F93684; */
    display: flex;
    position: relative;
}
.talkImg{
    position: relative;
    top: 240px;
}
.write{
position: absolute;
top: 260px;
left: 100px;

}
.write input{
    width: 900px;
    height: 60px;
    background: #F5F7F9;
    border: 1px solid #eee;
}
.el-textarea__inner{
position: absolute;

}
.el-empty{
    position: relative;
    top: 300px;
}
.eq{
    margin: 0 auto;
    width: 1200px;
    height: 40px;
    background-color: #F5F7F9;
    position: relative;
    top: 200px;
}
</style>