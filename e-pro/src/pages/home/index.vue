<template>
    <div id="home">
        <!-- <h1>首页</h1> -->
        <search-inp></search-inp>
       <Nav></Nav>

    </div>
</template>

<script>
import SearchInp from "@/components/home/index/SearchInp.vue"

import {getHomeBannerData} from "@/services/home.js"
export default {
    components:{
        SearchInp
    },
    mounted(){
        // console.log(1);
        getHomeBannerData().then(result=>{
            console.log(result)
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

</style>
