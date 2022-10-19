<template>
    <!-- 我的练习室组件 -->
    <div>
        <el-card class="header" shadow="always" :body-style="{ padding: '20px' }" >
            <el-button text class='active'  >全部</el-button>
            <el-button text >我创建的</el-button>
            <el-button text >我加入的</el-button>
            <el-button text >我课程的</el-button>
            <el-button class="establish" size="default">创建</el-button> 
        </el-card>
        <el-card shadow="always" style="height: 730px;" :body-style="{ padding: '20px' }">
                <el-empty description="无更多数据" image="https://rs.dance365.com/img/no_content@3x.0fd78ad2.png" />
        </el-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header{
    margin-bottom: 10px;
    height:80px;
    padding:10px ;
}
.el-button.active{
    background-color: #f93684;
    color: #fff;
}
.establish{
    float: right;
    background-color: #f93684;
    color: #fff;
    border-radius: 30px;
    width: 84px;
    height: 32px;
}

</style>