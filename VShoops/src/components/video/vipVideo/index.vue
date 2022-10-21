<template>
  <div style="background-color: #fff">
    <Header />
    <div style="background-color: #f5f7f9; width: 1200px; margin: 0 auto">
      <div class="Container">
        <div class="main">
          <!-- 小窗播放 -->
          <!-- <div id="small"></div> -->
          <div class="videoPlay">
            <div id="mse"></div>
          </div>

          <div class="video-sub-container">
            <div class="videoIconLift">
              <span class="iconPlayer">
                <svg
                  t="1666229717515"
                  class="c1"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3850"
                  width="16"
                  height="16"
                >
                  <path
                    d="M512.1 63.9c-247.4 0-447.9 200.5-447.9 447.9 0 247.4 200.5 447.9 447.9 447.9S960 759.2 960 511.8c0.1-247.4-200.5-447.9-447.9-447.9z m210.5 480.2L413.7 722.4c-24.9 14.4-56-3.6-56-32.3V333.5c0-28.7 31.1-46.7 56-32.3l308.8 178.3c24.9 14.3 24.9 50.3 0.1 64.6z"
                    p-id="3851"
                    fill="#bfbfbf"
                  ></path>
                </svg>
                <span class="seeNum1">&nbsp&nbsp {{}}</span>
              </span>
              <span class="iconNice">
                <svg
                  t="1666229795102"
                  class="c2"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4918"
                  width="16"
                  height="16"
                >
                  <path
                    d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667z"
                    p-id="4919"
                    fill="#bfbfbf"
                  ></path>
                </svg>
                <span class="seeNum2">&nbsp&nbsp {{}}</span>
              </span>
              <span class="iconLike">
                <svg
                  t="1666229845544"
                  class="c3"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5950"
                  width="16"
                  height="16"
                >
                  <path
                    d="M781.186088 616.031873q17.338645 80.573705 30.59761 145.848606 6.119522 27.537849 11.219124 55.075697t9.689243 49.976096 7.649402 38.247012 4.079681 19.888446q3.059761 20.398406-9.179283 27.027888t-27.537849 6.629482q-5.099602 0-14.788845-3.569721t-14.788845-5.609562l-266.199203-155.027888q-72.414343 42.836653-131.569721 76.494024-25.498008 14.278884-50.486056 28.557769t-45.386454 26.517928-35.187251 20.398406-19.888446 10.199203q-10.199203 5.099602-20.908367 3.569721t-19.378486-7.649402-12.749004-14.788845-2.039841-17.848606q1.01992-4.079681 5.099602-19.888446t9.179283-37.737052 11.729084-48.446215 13.768924-54.055777q15.298805-63.23506 34.677291-142.788845-60.175299-52.015936-108.111554-92.812749-20.398406-17.338645-40.286853-34.167331t-35.697211-30.59761-26.007968-22.438247-11.219124-9.689243q-12.239044-11.219124-20.908367-24.988048t-6.629482-28.047809 11.219124-22.438247 20.398406-10.199203l315.155378-28.557769 117.290837-273.338645q6.119522-16.318725 17.338645-28.047809t30.59761-11.729084q10.199203 0 17.848606 4.589641t12.749004 10.709163 8.669323 12.239044 5.609562 10.199203l114.231076 273.338645 315.155378 29.577689q20.398406 5.099602 28.557769 12.239044t8.159363 22.438247q0 14.278884-8.669323 24.988048t-21.928287 26.007968z"
                    p-id="5951"
                    fill="#bfbfbf"
                  ></path>
                </svg>
                <span class="seeNum3">&nbsp&nbsp {{}}</span>
              </span>
            </div>
            <div class="videoIconRight">
              <span class="iconMusic">
                <svg
                  t="1666232581050"
                  class="c4"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="11193"
                  width="20"
                  height="20"
                >
                  <path
                    d="M512 55.854545c-256 0-460.8 204.8-460.8 460.8v418.909091c0 18.618182 18.618182 37.236364 37.236364 37.236364s37.236364-18.618182 37.236363-37.236364v-418.909091c0-214.109091 172.218182-386.327273 386.327273-386.327272s386.327273 172.218182 386.327273 386.327272v418.909091c0 18.618182 18.618182 37.236364 37.236363 37.236364s37.236364-18.618182 37.236364-37.236364v-418.909091c0-256-204.8-460.8-460.8-460.8z"
                    p-id="11194"
                    fill="#bfbfbf"
                  ></path>
                  <path
                    d="M242.036364 595.781818c-18.618182 0-37.236364 18.618182-37.236364 37.236364V930.909091c0 18.618182 18.618182 37.236364 37.236364 37.236364s37.236364-18.618182 37.236363-37.236364v-297.890909c0-18.618182-18.618182-37.236364-37.236363-37.236364zM795.927273 595.781818c-18.618182 0-37.236364 18.618182-37.236364 37.236364V930.909091c0 18.618182 18.618182 37.236364 37.236364 37.236364s37.236364-18.618182 37.236363-37.236364v-297.890909c0-18.618182-18.618182-37.236364-37.236363-37.236364z"
                    p-id="11195"
                    fill="#bfbfbf"
                  ></path>
                </svg>
                <span class="iconName">音频</span>
              </span>
              <span class="iconDown">
                <svg
                  t="1666232667874"
                  class="c5"
                  viewBox="0 0 1026 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="13362"
                  width="20"
                  height="20"
                >
                  <path
                    d="M767.66305 531.384715l-236.251012 236.251011h-36.395426l-236.251012-236.251011L340.176422 449.973893 449.107294 559.47943V257.780503h127.703249v301.698927l109.505537-109.505537z m159.629062 279.542413l-92.137895-92.137894a395.880074 395.880074 0 1 0-204.325199 157.011145l99.161573 99.161573a511.834624 511.834624 0 1 1 197.429224-164.034824z"
                    p-id="13363"
                    fill="#bfbfbf"
                  ></path>
                </svg>
                <span class="iconDownName">缓存</span>
              </span>
              <span class="iconShare">
                <svg
                  t="1666230256639"
                  class="c6"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="9340"
                  width="16"
                  height="16"
                >
                  <path
                    d="M972.8 549.9136v294.7584A128.0768 128.0768 0 0 1 844.8 972.8H179.2a128 128 0 0 1-128-128V179.2c0-70.7328 57.1904-128 127.872-128h202.3168a25.6 25.6 0 0 0 0-51.2H179.072A179.072 179.072 0 0 0 0 179.2v665.6a179.2 179.2 0 0 0 179.2 179.2h665.6c98.944 0 179.2-80.2816 179.2-179.328V549.9136a25.6 25.6 0 0 0-51.2 0z"
                    p-id="9341"
                    fill="#bfbfbf"
                  ></path>
                  <path
                    d="M960 128c-353.4592 0-640 286.5408-640 640a25.6 25.6 0 0 0 51.2 0c0-325.1968 263.6032-588.8 588.8-588.8a25.6 25.6 0 0 0 0-51.2z"
                    p-id="9342"
                    fill="#bfbfbf"
                  ></path>
                  <path
                    d="M720.1024 62.1568l256 102.4a25.6 25.6 0 0 0 18.9952-47.5136l-256-102.4a25.6 25.6 0 0 0-18.9952 47.5136z"
                    p-id="9343"
                    fill="#bfbfbf"
                  ></path>
                  <path
                    d="M808.8064 348.4672l194.6368-189.312a25.6 25.6 0 1 0-35.6864-36.7104L773.12 311.7568a25.6 25.6 0 1 0 35.6864 36.7104z"
                    p-id="9344"
                    fill="#bfbfbf"
                  ></path>
                </svg>
                <span class="iconShareName">分享</span>
              </span>
            </div>
          </div>
        </div>

        <!-- 视频底部详情 -->
        <div class="videoDetailCon">
          <div class="videoNav">
            <div class="Vtitle">为舞蹈而生唐诗逸！不施粉黛一舞倾城，盈盈跳出柔筋纤体古典美！</div>
            <div class="joinClub">加入练习室</div>
          </div>

          <!-- 作者名字 -->
          <div class="videoInfo">
            <div class="infoLeft">
              <div class="infoImg">
                <img class="avaImg" src="./images/tou.png" >
              </div>
              <div class="infoName">每日瑜伽课堂</div>
              <div class="infoLv">Lv.15</div>
              <div class="infoBook">+关注</div>
            </div>
            <div class="infoRight">发布时间：10-15</div>
          </div>
          <div class="videoName">
            <div class="videoDec">城市舞集中国舞学员舞蹈展示</div>
          </div>
          <div class="videoLike">
            <div class="likeList">兴趣技能：<span>中国舞、舞蹈教学、基本功</span></div>
          </div>
        </div>

        <!--买课 -->
        <div class="sellCon">
          <div class="sellList">
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

        <!-- TA相关与更多推荐 -->
        <!-- TA的相关 -->
        <div class="aboutCon">
          <div class="aboutDet">
            <div class="aboutTitle">TA的相关</div>
            <div class="aboutList">
              <div class="aboutImg">
                <img class="aboutImg1" src="./images/about.png" alt="" />
              </div>
              <div class="aboutName">青玉案·元夕</div>
              <div class="aboutIcon">
                <div><img src="./images/play.png" alt="" /></div>
                <div class="iconNum">304</div>
              </div>
            </div>
            
          </div>
          <!-- 更多推荐 -->
          <div class="recommend">
            <div class="aboutDet">
              <div class="aboutTitle">更多推荐</div>
              <div class="aboutList">
                <div class="aboutImg">
                  <img class="aboutImg1" src="./images/about.png" alt="" />
                </div>
                <div class="aboutName">青玉案·元夕</div>
                <div class="aboutIcon">
                  <div><img src="./images/play.png" alt="" /></div>
                  <div class="iconNum">304</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部留言 -->
      <div class="sayCon">
        <div class="sayAbout">
          <div class="sayWho">
            <img src="./images/pos.png" alt="" /> &nbsp&nbsp
            <input type="text" placeholder="说点什么吧~~" />
          </div>
        </div>

        <div class="sayWhat">
          <div class="sayTitle">留言（0）</div>
        </div>
        <div class="sayList">
          <el-empty description="暂无留言" />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>


<script setup lang="ts">
import Header from '../../components/header/header.vue'
import Footer from '../../components/footer/footer.vue'
import { reqVideoList } from "../../api/home/index";
import { useRouter } from "vue-router";
import { nextTick, onMounted, ref, onBeforeMount } from "vue";
import Player from "xgplayer";
import pip from "xgplayer/dist/controls/pip";

// 视频数据
let video = ref<any>([]);

let router = useRouter();

onMounted(async () => {
  // await getVideoList();
  
  videoPlay();
  router.push("/player");
  // console.log(video.value);
});

//请求视频数据
const getVideoList = async () => {
  let result = await reqVideoList();
  console.log(result);
  video.value = result.content;
  // console.log(video.value);
};

// 视频播放
let videoPlay = () => {
  let player = new Player({
    el: document.querySelector("#mse"),
    id: "mse",
    url: "https://rs.dance365.com/video/1665037427475_rs_aaebe87822094966abba935519d8bfc8gonr.mp4",
    // 封面图
    poster: "",
    width: 1200,
    height: 534,
    // 视频预览
    thumbnail: {
      pic_num: 44,
      width: 160,
      height: 90,
      col: 10,
      row: 10,
      urls: [
        "./xgplayer-demo-thumbnail-1.jpg",
        "./xgplayer-demo-thumbnail-2.jpg",
      ],
    },
    //下一集
    playNext: {
      urlList: ["url1", "url2", "url3"],
    },
    pip: true, //打开画中画

    // 流式布局
    fluid: true,
    //循环
    loop: true,
    //首诊显示
    // videoInit: true

    //倍速播放
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
    defaultPlaybackRate: 1, //默认1倍速

    
  });

  return player;
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.Container {
  width: 100%;
  height: 1740px;
  /* border: 1px  solid red; */
}
.main {
}
.videoPlay {
  width: 100%;
  height: 534px;
  /* border: 1px solid green; */
}

.video-sub-container {
  width: 100%;
  height: 60px;
  /* border: 2px solid gold; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #121212;
  color: #b1b5c1;
}

/* 视频下面的图标 */
.videoIconLift {
  /* margin: 20px; */
  font-size: 14px;
  color: #bfbfbf;
  /* margin: 20px; */
}
.iconPlayer {
  margin: 20px;
}
.iconNice {
  margin: 20px;
}
.iconLike {
  margin: 20px;
}
.videoIconRight {
  margin: 30px;
  font-size: 14px;
}
.iconMusic {
  margin: 20px;
}
.iconDown {
  margin: 20px;
}
.iconShare {
  margin: 10px;
}
.iconName {
  margin: 10px;
  margin-top: 20px;
}
.iconDownName {
  margin: 10px;
}
.iconShareName {
  margin: 10px;
}

/* 视频详情 */
.videoDetailCon {
  width: 1200px;
  height: 240px;
  /* border: 1px solid greenyellow; */
  background-color: #fffeff;
}

/* 标题 */
.videoNav {
  width: 100%;
  height: 50px;
  /* border: 1px solid blueviolet; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.Vtitle {
  margin-left: 20px;
  font-size: 18px;
}
.joinClub {
  width: 100px;
  height: 40px;
  margin-right: 30px;
  margin-top: 10px;
  border: 1px solid #f93684;
  line-height: 40px;
  text-align: center;
  border-radius: 16px;
  color: #f93694;
}

/* 作者头像名字信息 */
.videoInfo {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid black; */
}
.infoLeft {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.infoImg {
  margin-left: 20px;
  width: 50px;
  height: 50px;
}
.avaImg {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.infoName {
  margin-left: 10px;
}
.infoLv {
  width: 46px;
  height: 18px;
  margin-left: 10px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 5px;
  background-color: #ff3bc0;
  color: #fffeff;
}
.infoBook {
  margin-left: 20px;
  width: 86px;
  height: 40px;
  border: 1px solid #e7eaed;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  border-radius: 20px;
  color: #f93684;
  background-color: #f9ebf1;
}
/* 发布时间 */
.infoRight {
  margin-right: 20px;
  color: #b1b5c1;
}
/* 描述 */
.videoName {
  width: 100%;
  height: 40px;
  /* border: 1px solid orange; */
  border-bottom: 1px solid #bfbfbf;
}
.videoDec {
  margin-left: 20px;
  margin-top: 10px;
}
/* 兴趣爱好 */
.videoLike {
  width: 100%;
  height: 60px;
  /* border: 1px solid orange; */
}
.likeList {
  margin-top: 30px;
  margin-left: 20px;
}
.likeList span {
  color: #f93694;
}

/* 买课 */
.sellCon {
  width: 100%;
  height: 100px;
  /* border: 1px solid orangered; */
  background-color: #f5f7f9;
}
.sellList {
  margin-top: 20px;
  width: 100%;
  height: 60px;
  /* border: 1px solid olive; */
  background-color: #fffeff;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.el-button {
  background-color: #ffeaf2 !important;
  margin-left: 20px;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  color: black;
  font-size: 16px;
}

/* TA的相关与更多推荐 */
.aboutCon {
  width: 100%;
  height: 600px;
  /* border: 1px solid orchid; */
}
.aboutDet {
  width: 100%;
  height: 340px;
  /* border: 2px solid blue; */
}
.aboutTitle {
  width: 100%;
  height: 70px;
  /* border: 1px solid aqua; */
  line-height: 50px;
  font-size: 28px;
  margin-left: 20px;
}
.aboutList {
  width: 100%;
  height: 250px;
  /* border: 1px solid seagreen; */
  margin-left: 20px;
}
.aboutImg {
  width: 280px;
  height: 180px;
  /* border: 1px solid red; */
  border-radius: 10px;
  overflow: hidden;
}
.aboutImg1 {
  width: 100%;
  height: 100%;
}
.aboutName {
  margin-top: 10px;
  font-size: 18px;
}
.aboutIcon {
  margin-top: 10px;
  display: flex;
}
.iconNum {
  margin-left: 5px;
  color: #b1b5c1;
}

/* 留言 */
.sayCon {
  width: 100%;
  height: 600px;
  /* border: 2px solid orange; */
}
.sayAbout {
  width: 100%;
  height: 80px;
  /* border: 1px solid black; */
}
.sayWho {
  margin-left: 20px;
  display: flex;
  margin: 0 10px;
}
.sayWhat {
  margin-left: 10px;
  width: 100%;
  height: 80px;
  /* border: 1px solid orangered; */
  border-bottom: 1px solid #b1b5c1;
}
.sayWho input {
  width: 1200px;
  border-radius: 8px;
  border: 1px solid #bfbfbf !important;
}
.sayTitle {
  margin-top: 20px;
  font-size: 28px;
}
.sayList {
  width: 100%;
  height: 300px;
  /* border: 2px solid royalblue; */
}
</style>