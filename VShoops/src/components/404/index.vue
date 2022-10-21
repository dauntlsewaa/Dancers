<template>
    <div class="content">
        <img src="@/assets/404.webp">
        
        <router-link to="/index"><button class="fanhui">点击这里返回首页</button></router-link>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.content{
    margin: 0 auto;
    position: relative;
}
img{
    width: 100%;
    height: 100%;
}
.fanhui{
    position: absolute;
    top: 800px;
    right: 700px;
    font-size: 30px;
}
</style>