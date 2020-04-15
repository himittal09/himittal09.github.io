<template>
  <div class="home">
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
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderMaterial from '@/components/HeaderMaterial.vue'
import LayoutLeft from '@/components/LayoutLeft.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    HeaderMaterial,
    LayoutLeft
  }
}
</script>
<style>
.md-layout{
  padding-left:30px;
  padding-right: 30px;
}
</style>