<template>
<div id="address">
    <top></top>
</div>
    
</template>

<script>
import top from "@/components/common/Title.vue"
export default {
    components:{
        top
    }

}
</script>

<style scoped>
body,html{
    width: 100%;
    height: 100%;
}
#address{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: #fff;
    z-index: 5;

   
}

</style>
