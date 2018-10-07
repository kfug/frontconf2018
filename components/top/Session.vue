<template>
  <section class="p-session">
    <div class="c-container">
      <img class="c-circle" src="~/static/images/parts_circle.svg">
      <img class="c-line" src="~/static/images/parts_line.svg">
      <div class="c-block">
        <h3 class="title">
          SESSIONS
        </h3>
        <p class="description">
          フロントエンドのエンジニアリングや、マークアップ、デザインなど、Webに関わる全ての人に是非届けたい珠玉のセッション構成でお送りしております
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";

  .p-session {
    @include p-padding;

    .c-container {
      text-align: right;
      position: relative;
    }
    .c-circle {
      max-width: 60px;
      position: absolute;
      top: -120px;
      right: 90px;
    }
    .c-line {
      max-width: 300px;
      position: absolute;
      top: -200px;
      right: 0;
    }

    @include c-block--outline;
  }
</style>

