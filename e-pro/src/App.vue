<template>
  <div id="app">
    <router-view/>
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

<style>

</style>
