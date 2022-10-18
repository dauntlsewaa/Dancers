<template>
    <div class="filter-order-container">
        <!-- 上面一栏 -->
      <div class="filter-order">
        <!-- 左侧部分 -->
         <ul class="order-container">
            <li class="order-item active">综合榜</li>
            <li class="order-item ">热练榜</li>
            <li class="order-item ">新锐榜</li>
            <li class="order-item ">最新</li>
         </ul>
         <!-- 右侧部分 -->
         <div class="filter-btn">
            <el-button>筛选<i><svg t="1666092085140" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3120" width="16" height="16"><path d="M830.24 340.688l11.328 11.312a16 16 0 0 1 0 22.624L530.448 685.76a16 16 0 0 1-22.64 0L196.688 374.624a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l288.496 288.496 288.512-288.496a16 16 0 0 1 22.624 0z" p-id="3121" fill="#bfbfbf"></path></svg></i></el-button>
            
         </div>
      </div>
      <!-- 点击筛选弹出部分下方 -->
      <div class="filter-container">
        <div class="filter-content-container">
            <!-- 兴趣技能 -->
            <div class="interest">
                <span>兴趣技能:</span>
                   <div class="dance">
                    <div class="checkbox-button isChecked">爵士舞</div>
                    <div class="checkbox-button ">爵士舞</div>
                    <div class="checkbox-button ">爵士舞</div>
                    <div class="checkbox-button isChecked">爵士舞</div>
                    <div class="checkbox-button isChecked">爵士舞</div>
                    <div class="checkbox-button ">爵士舞</div>
                    <div class="checkbox-button ">爵士舞</div>
                    <div class="checkbox-button isChecked">爵士舞</div>
                    <div class="checkbox-button isChecked">爵士舞</div>
                    <div class="checkbox-button isChecked">爵士舞</div>
                    <div class="checkbox-button ">爵士舞</div>
                    <div class="checkbox-button ">爵士舞</div>
                    <div class="checkbox-button isChecked">爵士舞</div>
                   </div>
                  <div class="reset">重置</div>
            </div>
            <!-- 内容样式 -->
            <div class="interest">
                <span>兴趣技能:</span>
                   <div class="dance">
                    <div class="checkbox-button isChecked">视频</div>
                    <div class="checkbox-button ">图片</div>
                    <div class="checkbox-button ">文章</div>
                
                   </div>
               
            </div>
        </div>
       
        
      </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.filter-order-container{
    width: 1200px;
    background:rgb(247, 242, 242);
    margin:0 auto;
  
}
.order-container{
    display: flex;
    width: 1117px;
    padding-left:0;
}
.filter-order{
    display: flex;
    padding:25px 30px;
}
.order-item{
    list-style: none;
    font-size: 14px;
    width: 42px;
    margin-right: 60px;
}

.active {
    color: red;
}
.filter-btn{
    display: flex;
    padding-left: 20px;
    padding-right: 10px; 
    
    
}
button{
    border-radius:50px;
    width: 83px;
    margin-top:8px;
    background-color:#e9ecec;
    font-size: 16px;
    background: #e9ecec;
    line-height: 36px;
    color: #7d8090;
  
}
i{
    margin-left: 3px;
    margin-top: 3px;
}

/*下方*/
.filter-container{
    padding: 27px 30px;
}
.interest{
    display: flex;
    margin-bottom: 8px;
}
span{
    width: 95px;
    color: #b1b5c1;
    padding: 7px 0;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
}
.dance{
    display: flex;
    width: 1000px;
    flex-wrap: wrap;
}
.checkbox-button{
    font-size: 14px;
    border-radius: 4px;
    margin-right:50px;
    margin-top: 10px;
    border-radius: 10px;
    color: #606266;
    width: 66px;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
.isChecked{
    background-color: #f93684;
    color:white;
}
.reset{
    margin-top:15px;
    right: 30px;
    top: 33px;
    font-size: 14px;
    color: #f93684;
}
</style>