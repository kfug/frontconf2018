<template>
  <section class="p-sponsor">
    <div class="c-container">
      <img class="circle" src="~/static/images/parts_circle.svg">
      <img class="circle--outline" src="~/static/images/parts_circle-outline.svg">
      <img class="line" src="~/static/images/parts_line.svg">
      <div class="c-block">
        <h3 class="title">
          SPONSOR
        </h3>
        <p class="description">
          FRONTEND CONFERENCE 2018 では
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

