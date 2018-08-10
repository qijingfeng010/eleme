<template>
    <div ref="page" class="page">
       <div class="pageWrap">
           <slot/>

       </div>
    </div>
</template>

<script>
export default {
   
   
   mounted(){
       let scroll=new IScroll(this.$refs.page,{
           probType:this.onScroll?3:0
       });
       this.scroll=scroll
       scroll.on('beforeScrollStart',()=>{
           scroll.refresh()
       })

   }

}
</script>

<style scoped>
.page{
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    bottom: 0.49rem;
    background: #fff;
    overflow: hidden;
}

</style>
