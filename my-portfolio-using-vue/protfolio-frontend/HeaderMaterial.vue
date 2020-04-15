<template>
  <div class="md-layout" id="outer">
    <div class="md-layout-item">
    <md-card md-with-hover>
      <md-card-media-cover>
        <md-card-media>
          <img src="@/assets/dribbble.png" alt="Skyscraper">
        </md-card-media>
        <md-card-area>
          <md-avatar class="md-large md-elevation-8" id="large-avatar">
            <img src="@/assets/avatar.jpg" alt="Skyscraper">
          </md-avatar>
        </md-card-area>
      </md-card-media-cover>
        <div class="md-layout">
          <div class="md-layout-item md-size-15">
          <md-card-header>
          </md-card-header>
          </div>
          <div class="md-layout-item md-size-33 md-xsmall-size-100">
          <md-card-header>
            <div class='md-title'>Prashant Dhirendra</div>
            <div class='md-subhead'><strong>Name</strong></div>
          </md-card-header>
          </div>
          <div class="md-layout-item md-xsmall-size-100">
          <md-card-header>
            <div class='md-title'>MCA</div>
            <div class='md-subhead'><strong>Education</strong></div>
          </md-card-header>
          </div>
          <div class="md-layout-item md-xsmall-size-100">
          <md-card-header>
            <div class='md-title'>12</div>
            <div class='md-subhead'><strong>Project</strong></div>
          </md-card-header>
          </div>
          <div class="md-layout-item md-xsmall-size-100">
          <md-card-header>
            <div class='md-title'><md-icon>file_copy</md-icon></div>
            <div class='md-subhead'><strong>Download Résumé</strong></div>
          </md-card-header>
          </div>
        </div>
    </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMaterial',
  props: {
    msg: String
  },
  data: function() {
    return {}
  },  
  methods : {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#outer{
  padding: 30px;
  padding-bottom: 10px;
}
.md-card-media img{
  object-fit:cover;
  object-position: 0px;
  height: 150px;
}
#large-avatar{

  margin-bottom: -50px;
  min-width: 120px;
  min-height: 120px;
  border-radius: 30px;
  margin-left: 5%;
}
</style>
