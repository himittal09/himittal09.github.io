<template>
  <div class="intro md-elevation-3" >
    <md-card class="md-primary">
      <md-card-header>
        <div class="md-title">Hey There</div>
      </md-card-header>

      <md-card-content class="md-card-content">
        <p>I'm <strong> Prashant Dhirnedra</strong>, currently pursuing my <strong>Master's in Computer Application</strong> from <strong>Vellore Institute of Technology</strong>. I have completed my BCA from Pt.RSU. I have been enthusistic about System Design, Single Page Applications and Deep Learning </p>
        <p>I'm also passionate about efficencey of the code, so everyday I try to convert coffee into efficent algorithms.</p>
        <p>Also I'm trying to hard to implement NPL techniques to grade short answers using Neural Networks </p>
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
