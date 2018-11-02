<template>
  <section class="p-sponsor">
    <div class="c-container">
      <img class="circle" src="~/static/images/parts_circle.svg">
      <img class="circle--outline" src="~/static/images/parts_circle-outline.svg">
      <img class="line" src="~/static/images/parts_line.svg">
      <div class="c-block">
        <h3 class="title">
          AFTER PARTY
        </h3>
        <p class="description">
          FRONTEND CONFERENCE 2018 本編終了後は、会場内で懇親会を開催！
          <br>
          <br>
          お酒やソフトドリンク、食べ物を片手に、気になるセッションのスピーカーや
          スポンサー、コミュニティの人たちとつながるチャンス！
          <br>
          <br>
          懇親会LT や じゃんけん大会も開催の懇親会をお見逃しなく！
        </p>
        <router-link to="/posts/after_party" class="c-btn">
          <span>懇親会 詳細</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";

  .p-sponsor   {

    @include p-padding;

    .c-container {
      text-align: left;
      position: relative;
    }

    .c-btn {
      @include c-btn;
    }

    .circle {
      max-width: 40px;
      position: absolute;
      top: -50px;
      right: 10px;
      @include desktop {
        max-width: 70px;
        top: -180px;
        right: 50px;
      }
    }
    .circle--outline {
      max-width: 80px;
      position: absolute;
      top: -90px;
      right: 260px;
      @include desktop {
        max-width: 110px;
        top: -80px;
        right: 230px;
      }
    }
    .line {
      max-width: 160px;
      position: absolute;
      top: -130px;
      right: 60px;
      @include desktop {
        max-width: 200px;
        top: -180px;
      }
    }
    @include c-block;
  }
</style>

