<template>
    <div id="sort">
         <p v-for="(item,index) in data" :key="index" 
         @click="btnAction(item)">
             {{item}}
         </p>
    </div>
</template>

<script>
export default {
    props:{
        data:Array
    },
    data(){
        return{
            message:''            
        }
    },
    methods:{
        btnAction(type){
        let val=type
        // console.log(type)
        this.$emit("sendData",val)       
        }
    },

    mounted(){
       
    }

}
</script>

<style scoped>
   #sort{
    padding: 0.12rem;
    background: #fff;

    }
   #sort>p{
       line-height: 0.3rem;
       /* padding-left: 0.2rem */
   }
</style>
