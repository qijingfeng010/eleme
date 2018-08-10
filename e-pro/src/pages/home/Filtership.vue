<template>
<div>
    <div id="filtership">
        <!-- <div v-for="(item,index) in message" :key="index" class="content"
        @click="gotoFlag(item.type)" type="item.type">
            {{item.title}}
        </div>                -->
        <div class="content" @click="gotoFlag(sort.type)" type="sort">
           {{sort.title}}
        </div> 
        <div class="content" @click="gotoFlag(distance.type)" type="distance">
            距离最近
        </div> 
        <div class="content" @click="gotoFlag(quality.type)" type="quality">
            品质联盟
        </div> 
        <div class="content" @click="gotoFlag(filter.type)" type="filter">
            筛选
        </div> 
    </div>

    <sort :data="titleData" v-if="type=='sort'" @sendData="testData"></sort>  
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
            // message:[
            //     {title:'综合排序',type:'sort'},
            //     {title:'距离最近',type:'distance'},
            //     {title:'品质联盟'},
            //     {title:'筛选'}
                
            // ],
            type:'',
            titleData:[],
            sort: {title:'综合排序',type:'sort'},
            distance:{title:'距离最近',type:'distance'},
            quality:{title:'品质联盟',type:'quality'},
            filter:{title:'筛选',type:"filter"}

      }
    },
    methods:{
        gotoFlag(data){
            this.type=data
            console.log(this.type)
        },
        testData(...rest){
            console.log(rest)
            this.sort.title=rest[0]
            this.type=false
            
        }
        
    },

    mounted(){
        getRestaurants().then(result=>{
            let data = result.data.inside_sort_filter.map(item=>{
                this.titleData.push(item.name)
            })         
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
