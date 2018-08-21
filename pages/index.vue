<template>
  <section class="container">
    <div>
      <h1>
        FRONTEND <br>
        CONFERENCE <br>
        2018
      </h1>

      <p class="time">
        2018.11.24
      </p>
      <p class="place">
        @Osaka
      </p>
      <p class="message">
        デザイナからエンジニア、 <br>
        Webに携わる全ての人へ
      </p>

      <div class="logo">
        powored by <br>
        <img style="margin-top:5px;width: 150px" src="/kfug_logo.png" alt="">
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

<style scoped>
  *{
    text-align: center;
    color: #555;
  }
  h1{
    margin-top: 4rem;
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: 2px;
  }
  .time,.place{
    margin-top: 2rem;
    font-size: 1.3rem;
  }
  .message{
    margin-top: 2rem;
  }

</style>

