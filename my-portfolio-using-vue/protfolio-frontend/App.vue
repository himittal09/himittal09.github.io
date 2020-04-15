<template>
  <div id="app">
    <header-material></header-material>
    <div class="md-layout">
      <div class="md-layout-item md-small-size-100 md-size-25">
        <layout-left></layout-left>
      </div>  
      <div class="md-layout-item">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      </div>  
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderMaterial from './components/HeaderMaterial.vue'
import LayoutLeft from './components/LayoutLeft.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HeaderMaterial,
    LayoutLeft
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  /* background:lightgrey; */
}
.md-layout{
  padding-left:30px;
  padding-right: 30px;
}
</style>
