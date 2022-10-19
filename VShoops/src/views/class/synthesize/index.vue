<template>
    <!-- 综合 -->
    <el-menu class="el-menu-demo" mode="horizontal" active-text-color="#f93684">
        <el-menu-item index="2-1">综合</el-menu-item>
        <el-menu-item index="2-2">销量由高到低</el-menu-item>
        <el-menu-item index="2-3">浏览量</el-menu-item>
        <el-sub-menu index="2-4">
            <template #title>价格</template>
            <el-menu-item index="2-6">价格由高到低</el-menu-item>
            <el-menu-item index="2-7">价格由低到高</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2-5">发布时间</el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>


</script>

<style scoped>
.el-menu-demo {
    display: flex;
    justify-content: center;
    border-bottom: none;
}
/deep/.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
    color:#f93684 ; 
}
</style>