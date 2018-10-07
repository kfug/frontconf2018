<template>
  <section class="sec-hero">
    <div class="container">
      <h1 class="title">
        FRONTEND <br>
        CONFERENCE <br>
        2018
      </h1>
      <p class="info">
        2018.11.24.Sat<br>
        大阪グランフロントにて開催決定！
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/_mixin.scss";
  .sec-hero {
    padding: 30px 0 40px;
    color: #444A64;
  @include desktop {
    padding: 50px 0 80px;
  }
  .title{
    max-width: 100%;
    margin: 30px 0;
    font-family: 'Capriola', sans-serif;
    font-size: 4rem;
    letter-spacing: 2px;
    line-height: 1.5;
    background: linear-gradient(left, #9c94de 1%, #bf94a0 49%,#FA8782 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  @include desktop {
    margin: 50px 0;
    font-size: 9rem;
  }
  }
  .info {
    font-size: 2rem;
    letter-spacing: 1px;
  @include desktop {
    font-size: 3rem;
  }
  }
  }
</style>

