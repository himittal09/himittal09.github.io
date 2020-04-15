<template>
  <div class="intro md-elevation-3" >
    <md-card class="md-primary">
      <md-card-header>
        <div class="md-title">About Me</div>
      </md-card-header>

      <md-card-content class="md-card-content">
        I'm a software developer / problem solver. When I'm not converting coffee into code, you can find me taking pictures of the beautiful nature. Want to hire me ? I'd love to hear from you.
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'CardIntro'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro{
  margin-top: 15px;
  margin-bottom: 15px;
}
.md-title{
  text-align: left;
}
.md-card-content{
  text-align: justify;
}
</style>
