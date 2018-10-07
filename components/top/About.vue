<template>
  <section class="p-about">
    <div class="c-container">
      <img class="circle" src="~/static/images/parts_circle.svg">
      <img class="line" src="~/static/images/parts_line.svg">
      <div class="c-block">
        <h3 class="title">
          FRONTEND CONFERENCE 2018
        </h3>
        <p class="description">
          2016 , 2017 年とたくさんの人に来場頂いた 関西最大級のフロントエンド製作者向けイベント FRONTEND CONFERENCE が今年も開催されます！
          例年通り、 デザイナもエンジニアも、職種問わずWebに携わるすべての人が楽しめるイベントとして様々なセッション・企画等を検討中です！
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";

  .p-about {
    @include p-padding;

    .c-container {
      padding: 0;
      text-align: left;
      position: relative;
    }
    .circle {
      max-width: 30px;
      position: absolute;
      top: -40px;
      right: 70px;
      @include desktop {
        max-width: 60px;
        right: 90px;
      }

    }
    .line {
      max-width: 100px;
      position: absolute;
      top: -30px;
      right: 40px;
      @include desktop {
        max-width: 300px;
        top: -200px;
        right: 0;
      }
    }

    @include c-block;
  }
</style>

