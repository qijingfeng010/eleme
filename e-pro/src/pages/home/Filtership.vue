<template>
<div>
    <div id="filtership">
        <div v-for="(item,index) in message" :key="index" class="content">
            {{item.title}}
        </div>        
    </div>
    <sort :data="titleData"></sort>
</div>
    
    
</template>

<script>
import {getRestaurants} from "@/services/home.js"

import Sort from "./Sort.vue"

export default {
    components:{
       Sort
    },
    data(){
        return{
            message:[
                {title:'综合排序',path:""},
                {title:'距离最近'},
                {title:'品质联盟'},
                {title:'筛选'}
            ],
            titleData:[]

      }
    },

    mounted(){
        getRestaurants().then(result=>{
            let data = result.data.inside_sort_filter.map(item=>{
                // console.log(item.name)
                this.titleData.push(item.name)
            })
            console.log(this.titleData)            
        })
    }

}
</script>

<style scoped>
  #filtership{
      display: flex;
  }
  .content{
      flex: 1;
      line-height: 0.4rem;
      text-align: center;
      border-bottom: 1px solid #999;
  }

</style>
