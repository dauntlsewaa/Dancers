<template>
    <el-card class="card">
        <div>
            <span class="title">选择我的兴趣技能</span>
            <em>3&nbsp;/&nbsp; 7</em>
            <p class="title-memo">例如舞蹈就选舞种</p>
        </div>
        <div class="el-from" style="margin:15px 0" >
            <el-input v-model="input" placeholder="搜索兴趣技能" style="width:180px" icon="el-icon-zoom-out"></el-input>
            <el-button plain disabled style="">搜索</el-button>
        </div>
        <div>
            <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type" class="tags">
                {{tag.name}}
            </el-tag>
        </div>
        <el-scrollbar height="400px">
            <p class="sub-title">推荐技能</p>
                <el-badge v-for="item in items" :key="item.label" :type="item.type" effect="plain"
                    class="tags " @click="change">
                    {{ item.label }}
                    <svg v-if="isShow" t="1666098282249" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2522" width="16" height="16"><path d="M511.978511 61.559031c-247.304456 0-447.785489 200.480011-447.785489 447.785489s200.480011 447.785489 447.785489 447.785489 447.785489-200.480011 447.785489-447.785489S759.283989 61.559031 511.978511 61.559031zM475.04432 734.373647c-7.345292 7.163143-16.946974 10.729365-26.547633 10.729365-9.625218 0-19.225877-3.566222-26.544563-10.729365L201.24442 518.992251c-14.659885-14.322194-14.659885-37.509289 0-51.831482 14.662955-14.322194 38.428218-14.322194 53.091172 0l194.160071 189.467189L827.060629 287.271726c14.662955-14.322194 38.428218-14.322194 53.091172 0 14.663978 14.295588 14.663978 37.482683 0 51.804876L475.04432 734.373647z" p-id="2523" fill="#d4237a"></path></svg>
                </el-badge>

        </el-scrollbar>
        <!-- card body -->
        <div class="dialog-footer">
           <el-button style="width:130px;height:40px;">取消</el-button>
           <el-button type="danger" style="width:130px;height:40px;" color="#f93684"> 确认</el-button>
        </div>
        
    </el-card>

</template>

<script lang="ts">
import { ref } from 'vue'
let isShow = ref(false)
// import { SuccessFilled } from '@element-plus/icons-vue'
let change=()=>{
    isShow.value =!isShow.value
}
export default {
    data() {
        return {
            input: '',
            count: 0,
            tags: [
                { name: '现代舞', type: 'info' },
                { name: '爵士舞', type: 'info' },
                { name: '民族舞', type: 'info' },
            ],
            items: [
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
                { type: 'info', label: '手势舞蹈' },
            ]
        }
    },
    methods: {
        load() {
            this.count += 2
        }
    }
}
</script>

<style scoped>
.card{
    width: 654px;
    height: 100%;
    margin: auto;
}
.title {
    font-size: normal;
    font-size: 18px;
}
.el-form{
    margin: 15px 0;
}
.title-memo {
    color: #b1b5c1;
    margin: 6px 0 0;
    font-size: 14px;
    ;
}

.el-form {
    margin-top: 10px;
}

.tags {
    min-width: 100px;
    height: 40px;
    line-height: 38px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #eaecf0;
    color: #111;
    background-color: #fff;
    cursor: pointer;
    margin: 0 22px 21px 0;
    display: inline-block;
    font-size: 12px;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.item{
    margin-top: 10px;
    margin-right: 40px;
    position: relative;
}
.icon{
    position: absolute;
    left: 80px;
    top: -10px;
}
.sub-title {
    margin: 8px 0 10px;
    color: #111;
    font-size: 14px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.tag-group {
    height: 300px;
    overflow: hidden;
}
.dialog-footer{
    padding:10px 75px;
    text-align:right;
}
.el-button-small{
    padding: 9px;
    font-size: 12px;
    border-radius: 3px;
}
.el-button-primary{
    color: #fff;
    background-color: #f93684;
    border-color:#f93684 ;
}
/* .el-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
} */
</style>