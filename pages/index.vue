<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        2018 Nov
      </h1>
      <h2 class="subtitle">
        FRONTEND CONFERENCE 2018
      </h2>
      <div class="links">
        <a
          href=""
          target="_blank"
          class="button--green">Join Slack</a>
        <a
          href=""
          target="_blank"
          class="button--orange">GitHub</a>

        <p class="prevLinks" style="margin: 1em">
          <a href="http://kfug.jp/frontconf2016/">2016</a>
          &nbsp;
          <a href="http://kfug.jp/frontconf2017/">2017</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 60px;
  line-height: 80px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.prevLinks a{
  color: #26ACE0;
  font-weight: bold;
}
.prevLinks a:visited{
  color: #26ACE0;
}
</style>

