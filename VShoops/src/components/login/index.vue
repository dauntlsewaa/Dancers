<template>
  <div class="login-container">
    <div class="title-container">
      <h3 class="title">中舞网</h3>
    </div>
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="login-form">

      <el-form-item label="用户名" style="padding-left: 650px;width: 300px;" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="密码" style="padding-left: 650px;width: 300px;" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item style="padding-left: 800px;">
        <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const ruleFormRef = ref<FormInstance>()
const router = useRouter();

const ruleForm = ref({
  name: '',
  pass: ''
})

const rules = ref({
  name: [{ min: 3, max: 7, required: true, message: '名称 3 to 5', }],
  pass: [{ min: 3, max: 7, required: true, message: '密码 3 to 5', }]

})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl?.validate((valid) => {


    if (valid) {
      router.push("/index");
      ElMessage({
        message: "登录成功",
        type: 'success'
      })
    }
    ElMessage({
      message: '请重新确认'
    })
  })
}

// const resetForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   formEl.resetFields()
// }
</script>
<style>
.login-container {
  width: 100%;
  height: 700px;
  text-align: center;
  background-image: url(./images/01-dance.webp);
}

.login-form {
  width: 300px;
  height: 600px;
  text-align: center;
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