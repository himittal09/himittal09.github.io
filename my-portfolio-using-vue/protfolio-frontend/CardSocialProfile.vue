<template>
  <div class="md-elevation-3 SocialProfile">
    <md-list class="md-double-line">
      
      <md-list-item>
        <div class="md-list-item-text">
          <strong class="md-list-xitem-text">E-mail : </strong>
          <strong><a href="mailto:prashatn.dhiru@gmail.com">prashatn.dhiru@gmail.com</a></strong>
        </div>
        <md-icon class="md-size-2x">mail</md-icon>
      </md-list-item>

      <md-divider></md-divider>

      <md-list-item>
        <div class="md-list-item-text">
          <strong class="md-list-xitem-text">GitHub : </strong>
          <strong><a href="https://www.github.com/prashant-dhiru/">github.com/prashant-dhiru/</a></strong>
        </div>
        <md-avatar>
          <img src="@/assets/icons/github.svg"/>
        </md-avatar>
      </md-list-item>

      <md-divider></md-divider>

      <md-list-item>
        <div class="md-list-item-text">
          <strong class="md-list-xitem-text">Linked-In : </strong>
          <strong><a href="https://www.linkedin.com/in/prashant-dhirendra-1876b110a/">linkedin.com/in/prashant-dhirendra-1876b110a/</a></strong>
        </div>
        <md-avatar>
          <img src="@/assets/icons/linkedin.svg"/>
        </md-avatar>
      </md-list-item>

      <md-divider></md-divider>

      <md-list-item>
        <div class="md-list-item-text">
          <strong class="md-list-xitem-text">Stack-Overflow : </strong>
          <strong><a href="https://www.stackoverflow.com/users/7657533">stackoverflow.com/users/7657533</a></strong>
        </div>
        <md-avatar>
          <img src="@/assets/icons/stack-overflow.svg"/>
        </md-avatar>
      </md-list-item>

      <md-list-item>
        <div class="md-list-item-text">
          <strong class="md-list-xitem-text">Hacker-Rank : </strong>
          <strong><a href="https://www.hackerrank.com/prashant_dhiru">hackerrank.com/prashant_dhiru</a></strong>
        </div>
        <md-avatar>
          <img src="@/assets/icons/hackerrank.svg"/>
        </md-avatar>
      </md-list-item>

    </md-list>
  </div>
</template>

<script>
export default {
  name: 'CardSocialProfile'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SocialProfile{
  margin-top: 15px;
  margin-bottom: 15px;
}
.md-title{
  text-align: left;
}
.md-card-content{
  text-align: justify;
}
.md-list-item-text{
  margin-left: 10px;;
}
</style>
