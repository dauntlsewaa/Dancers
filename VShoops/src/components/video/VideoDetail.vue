<template>
    <div class="Container">
        <div class="header">导航头</div>
        <div class="main">
            <div class="mian-left"></div>
            <div class="mian-mid">
                
            </div>
            <div class="mian-right"></div>
        </div>







    </div>
</template>


<script setup lang="ts">
import 'video.js/dist/video-js.min.css'
import videojs from 'video.js';


</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.Container{
    width: 100%;
    height: 100%;
}
.header{
    width: 100%;
    height: 60px;
    background-color: aquamarine;
}
/* 中间视频播放部分 */
.main{
    width: 100%;
    height: 660px;
    display: flex;
}
.mian-left{
    width: 420px;
    height: 660px;
    background-color: #1E1E1E;
}
.mian-mid{
    width: 1060px;
    height: 660px;
    border: 1px solid red;
}
.mian-right{
    width: 420px;
    height: 660px;
    border: 1px solid green;
    background-color: #1E1E1E;
}
</style>