<template>
        <div class="top">
            <span class="iconfont" v-html="iconfont" @click="backAction"></span>
            <span class="title">{{title}}</span>
            <span class="rightBtn">{{rightBtn}}</span>
        </div>
</template>

<script>
export default {
    data(){
        return{
            title:'选中收货地址',
            iconfont:'&#xe645;',
            rightBtn:'新增地址'
        }
    },
    methods:{
        backAction(){
            this.$router.back()
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
       font-size: 0.16rem
  }
  .top .title{
      position: absolute;
      left:50%;
      transform: translateX(-50%)
  }
   .top .rightBtn{
       position: absolute;
       right:0.1rem;
   }
   .top .iconfont{
       position: absolute;
       left: 0.1rem;
   }
 
  
</style>
