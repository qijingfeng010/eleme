<template>

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in data" :key='index'>
                    {{item.name}}
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
        </div>

</template>

<script>


export default {
    props:{
        data:Array
    },
    methods:{

    },
    mounted(){       
        this.BannerSwiper = new Swiper ('.swiper-container', {
            loop: true
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
       height: 1.77rem;
   }

</style>
