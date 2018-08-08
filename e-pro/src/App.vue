<template>
  <div id="app">
    <keep-alive>
        <router-view/>
    </keep-alive>
    
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from "@/components/common/Nav.vue"
export default {
  components:{
     Nav
  },
  name: 'App'
}
</script>

<style scoped>


</style>
