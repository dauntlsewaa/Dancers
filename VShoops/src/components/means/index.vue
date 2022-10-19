<template>
    <!-- 我的资料 -->
    <div style="width:1020px" class="box">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>编辑资料</span>
            </div>
        </el-card>
        <el-card style="min-height: 650px">
            <el-form :model="userForm" ref="userFormRef" class="block ">
                <div style="margin-bottom: 30px;margin-left: 400px">
                    <el-avatar class="blockImg"
                        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">
                    </el-avatar>
                </div>
            </el-form>
            <el-form inline>
                <el-form-item style="margin-left: 150px" label="用户名：">
                    <el-input v-model="userForm.username" placeholder="admin" />
                </el-form-item>
                <el-form-item label="生日：">
                    <div class="demo-date-picker">
                        <div>
                            <el-date-picker v-model="userForm.birthDate" type="date" placeholder="1997-07-20"
                                :default-value="new Date(2010, 9, 1)"></el-date-picker>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item></el-form-item>
            </el-form>
            <el-form style="margin-left: 150px" inline>
                <el-form-item label="性别：">
                    <el-button disabled type="danger">男</el-button>
                    <el-button>女</el-button>
                </el-form-item>
                <el-form-item style="margin-left: 100px" label="城市：">
                    <el-input v-model="userForm.address" placeholder="上海/上海" />
                </el-form-item>
            </el-form>
            <el-form inline>
                <el-form-item style="margin-left: 150px" label="成长等级:">
                    <span class="demo-lv">lv.1</span>
                </el-form-item>
                <el-form-item style="margin-left: 145px" label="技能水平:">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            零基础
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>零基础 零基础小白</el-dropdown-item>
                                <el-dropdown-item>业余初级 0-1年学龄</el-dropdown-item>
                                <el-dropdown-item>业余中级 1-2年学龄</el-dropdown-item>
                                <el-dropdown-item>业余高级 2-4年学龄</el-dropdown-item>
                                <el-dropdown-item>专业初级 4-6年学龄</el-dropdown-item>
                                <el-dropdown-item>专业中级 6-8年学龄</el-dropdown-item>
                                <el-dropdown-item>专业高级 8年以上学龄</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-form-item>
            </el-form>
            <el-form>
                <el-form-item style="margin-left: 150px" label="兴趣技能：">
                    <el-tag v-for="tag in dynamicTags" :key="tag" class="mx-1" closable :disable-transitions="false"
                        style="margin-right: 10px;" type="info" size="large">
                        {{ tag }}
                    </el-tag>
                    <el-input v-if="inputVisible" ref="InputRef" v-model="inputValue" class="ml-1 w-20 mb-10"
                        size="small" style="width: 100px;height:30px;margin-top: 10px" />
                    <el-button v-show="dynamicTags.length<7" style="width: 80px" v-else class="button-new-tag ml-1">
                        请选择
                    </el-button>
                </el-form-item>
                <div class="demo-button">
                    <el-button type="danger" style="width:100; height:40px; background-color:#f93684; margin-left: 450px;margin-top: 50px;">登录</el-button>
                </div>
            </el-form>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const value1 = ref('')
//收集表单数据
const userForm = reactive({
    username: "admin",//用户名
    birthDate: "1997-07-20",
    address: "上海/上海",
})

//可关闭的tab页start
const inputValue = ref('')
const dynamicTags = ref(['拉丁舞', '街舞', '芭蕾舞', '女团舞', '水袖舞', '恰恰', '分解教学'])
const inputVisible = ref(false)
</script>

<style scoped>
/* 我的资料 */
.box {
    width: 1200px;
    margin: 0 auto;
}

.box-card {
    margin: 20px 0;
}

.block {
    height: 140px;
    width: 120px;

}

.block>p {
    text-align: center;
}

.blockImg {
    width: 120px;
    height: 120px;

}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}

.demo-lv {
    width: 50px;
    height: 30px; 
    background-color: #f93684;
    /* font-size: 6px; */
    color: #fff; 
    text-align: center;

}
/* .demo-button{
    margin: 0 auto;
} */
</style>