<template>
    <div class="Container">
        <div class="themeList">
            <div class="themeItem">
                <a href="www.baidu.com"><img class="themeImg"  src="./images/theme.png"></a>
            </div>
            <div class="themeItem">
                <img class="themeImg"  src="./images/theme.png" alt="">
            </div>
            <div class="themeItem">
                <img class="themeImg"  src="./images/theme.png" alt="">
            </div>
            <div class="themeItem">
                <img class="themeImg"  src="./images/theme.png" alt="">
            </div>
            <div class="themeItem">
                <img class="themeImg"  src="./images/theme.png" alt="">
            </div>
            <div class="themeItem">
                <img class="themeImg"  src="./images/theme.png" alt="">
            </div>
            <div class="themeItem">
                <img class="themeImg"  src="./images/theme.png" alt="">
            </div>
            <div class="themeItem">
                <img class="themeImg"  src="./images/theme.png" alt="">
            </div>
            <div class="themeItem">
                <img class="themeImg"  src="./images/theme.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.Container{
    width: 1200px;
    height: 770px;
    margin: 0 auto;
    /* border: 1px solid red; */
    background-color: #F5F7F9;
}
.themeList{
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
}
.themeItem{
    width: 260px;
    height: 200px;
    /* border:  1px solid green; */
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
}
.themeImg{
    width: 100%;
    height: 100%;
}
</style>