<template>
  <section class="p-hero">
    <div class="c-container">
      <h1 class="title">
        <img src="~/assets/images/logo.svg" alt="FRONTEND CONFERENCE 2018">
      </h1>
      <h2 class="concept">進化を続けるフロントエンドの「今」</h2>
      <p class="info">
        2018.<span>11</span>.<span>24</span>.Sat&nbsp;
        大阪 グランフロント
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";

  .p-hero {
    padding: 30px 0 40px;
    color: white;
    text-align: center;

    @include desktop {
      padding: 50px 0;
    }

    .title {
      margin: 60px auto 20px;
      display: block;
      max-width: 768px;
      text-align: center;

    }
    .concept {
      margin-bottom: 2rem;
      font-size: 3rem;
      font-feature-settings : "palt";
      letter-spacing: 4px;
    }

    .info {
      font-size: 2rem;
      font-feature-settings : "palt";
      letter-spacing: 2px;
      @include desktop {
        font-size: 2.8rem;
      }
      span {
        font-size: 3.5rem;
      }
    }
  }
</style>

