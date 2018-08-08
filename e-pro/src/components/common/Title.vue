<template>
        <div class="top">
            <span class="iconfont">{{iconfont}}</span>
            <span class="title">{{title}}</span>
            <span class="rightBtn">{{rightBtn}}</span>
        </div>
</template>

<script>
export default {
    data(){
        return{
            title:'addr',
            iconfont:'&#xe645;',
            rightBtn:'新增地址'
        }
    }

}
</script>

<style>
  .top{
      width: 100%;
      height: 0.49rem;
      background: #0390ff;
      line-height: 0.49rem;
      display: flex;
      color: #fff;
      z-index: 5;
  }
  .top>span{
      flex:1;
      text-align: center
  }
</style>
