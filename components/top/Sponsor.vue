<template>
  <section class="p-sponsor">
    <div class="c-container">
      <img class="c-circle" src="~/static/images/parts_circle.svg">
      <img class="c-circle--outline" src="~/static/images/parts_circle-outline.svg">
      <img class="c-line" src="~/static/images/parts_line.svg">
      <div class="c-block">
        <h3 class="title">
          SPONSOR
        </h3>
        <p class="description">
          FRONTEND CONFERENCE 2018 では<br>
          スポンサー企業様のご協賛をお待ちしております！<br>
          <br>
          求人やサービス紹介、などスポンサー様の露出ご要望等に添えるスポンサーメニューをご用意しておりますので、
          ご興味の企業様は、下記のフォームよりご連絡の上、資料請求のお手続きをよろしくお願いいたします。
        </p>
        <a href="https://docs.google.com/forms/d/1NDzn_9PYl28Ew86rrAZ8KryfUc7V5VEYhnJNT4SekPY/" target="_blank" class="c-btn">
          <span>スポンサー申し込み</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";

  .p-sponsor   {

    @include p-padding;

    .c-btn {
      @include c-btn;
    }

    .c-container {
      text-align: left;
      position: relative;
    }
    .c-circle {
      max-width: 70px;
      position: absolute;
      top: -180px;
      right: 50px;
    }
    .c-circle--outline {
      max-width: 110px;
      position: absolute;
      top: -80px;
      right: 230px;
    }
    .c-line {
      max-width: 200px;
      position: absolute;
      top: -180px;
      right: 60px;
    }

    @include c-block;
  }
</style>

