<template>
  <section class="p-session">
    <div class="c-container">
      <img class="c-circle--outline" src="~/static/images/parts_circle-outline.svg">
      <img class="c-line" src="~/static/images/parts_line.svg">
      <div class="c-block">
        <h3 class="title">
          SESSIONS
        </h3>
        <p class="description">
          フロントエンドのエンジニアリングや、マークアップ、デザインなど、Webに関わる全ての人に是非届けたい珠玉のセッション構成でお送りしております
        </p>
        <router-link to="/session" class="c-btn">
          <span>セッション一覧を見る</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";

  .p-session {
    @include p-padding;

    .c-btn {
      @include c-btn--white;
    }

    .c-container {
      text-align: right;
      position: relative;
    }
    .c-circle--outline {
      max-width: 60px;
      position: absolute;
      top: -70px;
      left: 200px;
    }
    .c-line {
      max-width: 300px;
      transform: rotate(73deg);
      position: absolute;
      top: -180px;
      left: 60px;
    }

    @include c-block--outline;
  }
</style>

