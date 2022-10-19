<template>
    <div class="special">
        <el-container class="brief">
            <el-header class="title">那些温暖治愈人心的舞蹈，无论何时，我们还有舞蹈</el-header>
            <el-main class="main">
                <el-avatar :size="60" src="https://empty" @error="errorHandler">
                    <img src="./images/logo.png" />
                </el-avatar>
                <span class="level_box" title="舞蹈资讯" style="width:60px">舞蹈资讯</span>
                <span>
                    <i icon="el-icon-delete"></i>
                    <i data-v-3f436a2c class="lv2"></i>
                    <i data-v-3f436a2c class="lv0"></i>
                </span>
                <span>
                   <el-row>
                    <el-button type="danger" round>+关注</el-button>
                   </el-row>
                </span>
                <span style="font-size:14px color:#7d8090">更新时间:4月25</span>
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts">
export default ({
    methods: {
        errorHandler() {
            return true
        }
    },
})
</script>

<style scoped>
.special {
    width: 100%;
    height: 100%;
    /* display: block; */
    background-color: #f5f7f9;
}

.brief {
    width: 1200px;
    background-color: #fff;
    position: relative;
    margin-left: 50%;
    left: -600px;

}

.title {
    color: #111;
    font-size: 34px;
    text-align: center;
}
.level_box .lv[data-v-3f436a2c]{
    width: 15px;
    height: 10px;
    background-image: url(https://rs.dance365.com/level_Lv.@3x.png)
}
</style>