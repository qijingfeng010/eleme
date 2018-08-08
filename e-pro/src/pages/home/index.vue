<template>
    <div id="home">
        <!-- <h1>首页</h1> -->
        <div class="top">
            <router-link to="/address" class="location">
               <i class="iconfont">&#xe613;</i>
               <b>如意楼</b>
               <i class="iconfont">&#xe666;</i>
            </router-link>
            <search-inp></search-inp>
        </div>
       
        <Banner :data="bannerData"/>
        <Nav></Nav>
        <goods-list></goods-list>

    </div>
</template>

<script>
import SearchInp from "@/components/home/index/SearchInp.vue"
import Banner from "@/components/home/index/Banner.vue"
import GoodsList from "@/components/common/GoodsList.vue"

import {getHomeBannerData} from "@/services/home.js"

export default {
    components:{
        SearchInp,
        Banner,
        GoodsList
    },
    data(){
        return{
           bannerData:[]


        }
    },
    mounted(){
        
        getHomeBannerData().then(result=>{
            this.bannerData=result
            // console.log(this.bannerData)
        })
    }

}
</script>

<style scoped>
body,html{
    width: 100%;
    height: 100%;
}
#home{
    width: 100%;

}
.location{
   width: 100%;
   height: 0.4rem;
   font-size: 0.16rem;
   color: #fff;
}
.top{
   background: linear-gradient(left,#0af, #0085ff);
   line-height: 0.4rem;
   padding-left: 0.1rem;
   box-sizing: border-box;

}

</style>
