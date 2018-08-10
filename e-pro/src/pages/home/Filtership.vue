<template>
<div>
    <div id="filtership">
        <div v-for="(item,index) in message" :key="index" class="content"
        @click="gotoFlag(item.type)">
            {{item.title}}
        </div>   
             
    </div>
       
    <sort :data="titleData" v-if="type=='sort'"></sort>  
    <distance v-if="type=='distance'"></distance>
    <distance></distance>
</div>
    
    
</template>

<script>
import {getRestaurants} from "@/services/home.js"
import Sort from "./Sort.vue"
import Distance from "./Distance.vue"

export default {
    components:{
       Sort,
       Distance
    },
    data(){
        return{
            message:[
                {title:'综合排序',type:'sort'},
                {title:'距离最近',type:'distance'},
                {title:'品质联盟'},
                {title:'筛选'}
            ],
            type:[],
            titleData:[]

      }
    },
    methods:{
        gotoFlag(type){
            this.type=type
        }
    },

    mounted(){
        getRestaurants().then(result=>{
            let data = result.data.inside_sort_filter.map(item=>{
                // console.log(item.name)
                this.titleData.push(item.name)
            })
            // console.log(this.titleData)            
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
