<template>

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide list" v-for="(item,index) in message" :key='index'>
                    <div class="content" v-for="(it,i) in item" :key='i'>
                        <a href="##" class="food">
                            <img :src="it.image" :alt="it.name">
                            <p>{{it.name}}</p>
                        </a>
                    </div>
                   
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
        </div>

</template>

<script>

import {getHomeBannerData} from "../../../services/home.js"
export default {
    // props:{
    //     arr:Array
    // },
    data(){
        return {
            message:[],
            
        }
    },
    methods:{
             
       
 

    },
    mounted(){       
        this.BannerSwiper = new Swiper ('.swiper-container', {
            loop: true
        })
        getHomeBannerData().then(arr=>{
            this.message = arr;
          
        })

        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            
            // 如果需要分页器
            pagination: '.swiper-pagination',

        })  

    },
    updated(){
        this.BannerSwiper.update();
        this.BannerSwiper.reLoop();
        this.BannerSwiper.slideTo(1,0)
    }

}
</script>

<style scoped>
   .swiper-wrapper{
       width: 100%;
       height: 100%;
   }
   .list{
       width: 100%;
       height: 100%;
       display: flex;
       flex-wrap: wrap
       
   }
   .content{
       width: 20%;
       height: 100%;
    }
    .content img{
        width:0.37rem;
        height: 0.37rem;
    }
    .content .food{
        display: block;
        text-align: center;
        padding: 0.1rem 0;
    }

</style>
