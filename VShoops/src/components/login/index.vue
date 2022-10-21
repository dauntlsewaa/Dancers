<template>
    <div class="login-container">
        <el-from ref="formRef" :model="ruleForm" :rules="loginRules" class="login-form">
            <div class="title-container">
                <h3 class="title">中舞网</h3>
            </div>
            <el-form-item label="用户名" style="padding-left:550px">
                <el-input v-model="ruleForm.name" class="svg-container" :input-style="{width:'300px',height:'40px',}" />
            </el-form-item>
            <el-form-item label="密码：" prop="pass" style="padding-left:550px">
                <el-input v-model="ruleForm.pass" type="password" autocomplete="off" class="svg-container"
                    :input-style="{width:'300px',height:'40px'}" />
            </el-form-item>
            <router-link to="/index/recommend">
                <!-- <el-button type="primary" style="width:100px;margin-bottom:30px;height: 40px;"
                    @click.native.prevent="handleLogin">登 陆</el-button> -->
                <button style="width:100px;margin-bottom:30px;height: 40px; background-color:#409eff;border:#409eff">登录</button>
            </router-link>
        </el-from>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { Loading } from '@element-plus/icons-vue';
import { userInfo } from 'os';
const formRef = ref<FormInstance>()
const ruleForm = reactive({
    name: 'admin',
    pass: '111111',

})
const validateUsername = (rule: any, value: any, callback: any) => {
    if (value.length < 4) {
        callback(new Error('用户名长不能小于4位'))
    } else {
        callback()
    }
}
const validatePassword = (rule: any, value: any, callback: any) => {
    if (value.length < 6) {
        callback(new Error('密码长度不能小于6位'))
    } else {
        callback()
    }
}
const loginRules = {
    username: [{ required: true, validator: validateUsername }],
    password: [{ required: true, trigger: 'blur', validator: validatePassword }]
}
// 点击登录的回调
const handleLogin = () => {

}
</script>

<style scoped>
.login-container {
    width: 100%;
    height: 700px;
    text-align: center;
    background-image: url(./images/01-dance.webp);
}

.login-form {
    width: 300px;
    height: 600px;
    /* text-align: center; */
}

.el-input__wrapper {
    width: 300px;
    height: 40px;
}

.title {
    font-size: 26px;
    color: chartreuse;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
    padding-top: 200px;
}
</style>