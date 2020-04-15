<template>
  <div class="hello">
    <card-intro/>
    <card-social-profile></card-social-profile>
  </div>
</template>

<script>
import CardIntro from "./LayoutLeftComponents/CardIntro.vue"
import CardSocialProfile from './LayoutLeftComponents/CardSocialProfile.vue'
export default {
  name: 'LayoutLeft',
  components : {
    CardIntro,
    CardSocialProfile
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
