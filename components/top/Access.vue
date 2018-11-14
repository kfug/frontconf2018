<template>
  <section class="p-access">
    <div class="c-container">
      <img class="circle--outline" src="~/static/images/parts_circle-outline.svg">
      <img class="line" src="~/static/images/parts_line.svg">
      <div class="c-block">
        <h3 class="title">
          ACCESS
        </h3>
        <div class="access-box">
          <img src="~/assets/images/top_access.png">
          <div class="access-discription">
            <p class="description towor-name">
              グラントフロント大阪 北館 タワーC８階
            </p>
            <p class="description">
              〒530-0011 大阪市北区大深町3-1<br>
              グランフロント大阪 北区 タワーC８階
            </p>
          </div>
        </div>
        <div class="attention">
          <i class="material-icons warning-icon">warning</i>
          <span>タワーCへはグランフロント北館１階からしかアクセスできません</span>
        </div>
        <router-link to="/session" class="c-btn1">
          <span>GoogleMapを開く</span>
        </router-link>
        <router-link to="/session" class="c-btn2">
          <span>タワーCへの館内ルート</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";

  .p-access {
    @include p-padding;
    p,span {
      font-size: 1.4rem;
      @include desktop {
        font-size: 1.6rem;
      }
    }

    i {
      font-size: 1.6rem;
      @include desktop {
        font-size: 2.4rem;
      }
    }

    .c-btn1 {
      @include c-btn--white;
      margin: 0 1rem;
    }

    .c-btn2 {
      @include c-btn--outline;
      margin: 0 1rem;
    }

    img {
      width: 150px;
      height: 150px;
      margin-right: 50px;
      margin-bottom: 10px;
    }

    .access-box {
      display: flex;
      flex-wrap: wrap;
    }

    .access-discription {
      display: flex;
      flex-direction: column;
    }

    .attention {
      display: inline-flex;
      margin-bottom: 10px;
    }

    .warning-icon {
      padding: 5px;
    }

    .c-container {
      text-align: right;
      position: relative;
    }
    .circle--outline {
      max-width: 50px;
      position: absolute;
      top: -70px;
      left: 200px;
      @include desktop {
        max-width: 60px;
      }
    }
    .line {
      max-width: 160px;
      transform: rotate(73deg);
      position: absolute;
      top: -80px;
      left: 150px;
      @include desktop {
        max-width: 300px;
        top: -180px;
        left: 60px;
      }
    }

    @include c-block--outline

    .c-block {
      padding: 100px 25px;
      padding-left: 80px;
      .title {
        margin: 10px 0;
      }
      .description {
        margin: 0 0 10px 0;
      }
    }
  }
</style>

