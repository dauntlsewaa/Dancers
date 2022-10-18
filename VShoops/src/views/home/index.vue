<template>
    <div >
        <el-button type="primary" size="default" @click="handler">提交</el-button>
        
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {reqVideoList} from '../../api/home/index'
let handler = async ()=>{
  console.log(123)
  let result = await reqVideoList()
  console.log(result)
}
</script>

<style scoped>

</style>