<template>
    <div id="page">
       <div class="pageWrap">
           <slot/>

       </div>
    </div>
</template>

<script>
export default {
   

}
</script>

<style scoped>
#page{
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    bottom: 0.4rem;
    /* background: #ebebeb; */
    overflow: hidden;
}

</style>
