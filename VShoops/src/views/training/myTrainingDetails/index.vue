<template>
    <div class="myTrainingDetails">
   <el-card shadow="always" :body-style="{ padding: '30px' }">
 <!-- table展示数据 -->
 <el-table :data="data"  show-header="false"> 
    <el-table-column   width="180">
       <template #="{row,$index}">
        <img src="../../../assets/2.dance.jpg" alt="">
       </template>
    </el-table-column>
    <el-table-column class="description"  width='511px'>
    <div style="height:101px ;width:192">
        <div class="theme">中国舞协中国舞蹈考级九级</div>
        <div class="type" >已练习0次0分钟</div>
    </div>
    </el-table-column>  
    <el-table-column  class="delete" align="right"  >
        <div>
            <svg style="padding-right:10px" t="1666247941729" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4093" width="22" height="22"><path d="M511.913993 63.989249c-247.012263 0-447.924744 200.912481-447.924744 447.924744s200.912481 447.924744 447.924744 447.924744 447.924744-200.912481 447.924744-447.924744S758.926256 63.989249 511.913993 63.989249zM511.913993 895.677474c-211.577356 0-383.763481-172.186125-383.763481-383.763481 0-211.577356 172.014111-383.763481 383.763481-383.763481s383.763481 172.014111 383.763481 383.763481S723.491349 895.677474 511.913993 895.677474z" p-id="4094" fill="#f93684"></path><path d="M672.05913 511.913993l-159.973123 0L512.086007 288.123635c0-17.717453-14.277171-32.166639-31.994625-32.166639-17.717453 0-31.994625 14.449185-31.994625 32.166639l0 255.956996c0 17.717453 14.277171 31.994625 31.994625 31.994625l191.967747 0c17.717453 0 32.166639-14.277171 32.166639-31.994625C704.053754 526.191164 689.604569 511.913993 672.05913 511.913993z" p-id="4095" fill="#f93684"></path></svg>
            <div>未开始</div>
        </div>
    </el-table-column>
  
 </el-table>
   </el-card>
   
    </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
const data= reactive([
    {imgUrl:"../../../assets/2.dance.jpg",
    description:'中国舞协中国舞蹈考级九级',
    time:'昨天 11:30',
     }
    ])
</script>

<style scoped>
.myTrainingDetails{
    width: 1200px;
    margin: 0 auto;
}
.description{
    padding-left: 17px;
}
.theme{
    font-weight: 700;
    font-size: 16px;
    color: #111;
    
}
.type{
    margin-top: 25px;
    font-size: 14px;
    color: #7d8090;
}


</style>