<template>
  <section>
    <div class="p-session">
      <router-link to="/" class="btn-close">
        <img src="~/assets/images/btn-close.png" alt="">
      </router-link>
      <div class="container">
        <div class="intro">
          <h2 class="c-title">
            SESSIONS
          </h2>
          <p class="description">
            フロントエンドのエンジニアリングや、マークアップ、デザインなど、Webに関わる全ての人に是非届けたい珠玉のセッション構成でお送りしております。
          </p>
        </div>

        <div class="session-list">
          <div class="session-item">
            <h2 class="session-title">25文字でできるフロントエンドあんなことやこんなこと</h2>
            <span class="session-sub">- サブタイトルがある場合、このエリアにに入ります。-</span>
            <p class="session-about">
              それはほかもうその始末者という事のために書いないだ。まあ途中に相違人はあたかもこの損害なうかもを釣っといたへは留学至るたたて、それだけにも掘たたまします。大学でおりない事ははたして先刻にことにでたまし。余計岡田さんを注文自力更に蹂躙から並べだ根本その人間何か講義をという小発展ないらしくうんて、どんな十月は私か弟会をなりが、岡田さんの事を間柄のそこにどうしてもご払底と借りて何利器をお観念が書いように余計ご尊重に潜んなけれですて、どうぞ同時に始末に掘りないが行かでんが起りないです。実はそうしてお様子があっのはとても大丈夫となっますから、その個性からは破るないからという本国がありて来でまし。
            </p>
            <hr>
            <div class="speaker-prof">
              <div class="row">
                <div class="col-sm-auto">
                  <div class="speaker-icon">
                  </div>
                  <div class="speaker-link pc">
                    <a href="" >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" >
                      <i class="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div class="col-sm">
                  <h3 class="speaker-name">サンプル 太郎</h3>
                  <span class="speaker-affiliation">株式会社chatbox</span>
                  <p class="speaker-about">それはほかもうその始末者という事のために書いないだ。まあ途中に相違人はあたかもこの損害なうかもを釣っといたへは留学至るたたて、それだけにも掘たたまします。</p>
                </div>
              </div>
              <div class="speaker-link sp">
                <a href="" >
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="" >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" >
                  <i class="fas fa-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <router-link to="/" class="c-btn">
          <span>TOPに戻る</span>
        </router-link>
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

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";

  .p-session {
    text-align: center;
    padding: 30px 0 60px;
    color: white;

    hr {
      background: white;
    }

    .c-btn {
      @include c-btn--white;
    }
    .btn-close {
      display: inline-block;
      position: fixed;
      right: 10px;
      top: 5px;
      z-index: 100;
      text-align: right;
      @include desktop {
        right: 20px;
        top: 20px;
      }

      img {
        width: 38px;
        height: 38px;
        @include desktop {
          width: 65px;
          height: 65px;
        }
      }
    }

    //イントロ
    .intro {
      padding: 40px 0 ;
      text-align: center;
      color: white;
      @include desktop {
        padding: 90px 0;
      }

      .c-title {
        @include c-title;
      }
      .description {
        margin: 0 auto;
        max-width: 680px;
      }
    }

    //セッション一覧
    .session-list {
      margin: 0 auto;
      max-width: 920px;

    }
    .session-item {
      margin-bottom: 50px;
      padding: 30px 25px ;
      background: white;
      color: #444A64;
      text-align: left;
      @include desktop {
        padding: 40px 70px 50px;
      }

    }
    .session-title {
      margin-bottom: 1em;
      font-size: 2rem;
      line-height: 1.6;
      @include desktop{
        font-size: 2.8rem;
      }
    }
    .session-sub {
      display: block;
      margin-bottom: 1em;
      font-size: 1.7rem;
      line-height: 1.6;
      @include desktop{
        font-size: 2rem;
      }
    }
    .session-about {
      margin-bottom: 30px;
      font-size: 1.6rem;
      line-height: 1.7;
      @include desktop{
        font-size: 1.6rem;
      }
    }
    .speaker-prof {
      padding: 20px 0 0 ;
      text-align: center;
      @include desktop {
        padding: 30px 0 0 ;
        text-align: left;
      }
    }
    .speaker-icon {
      display: inline-block;
      margin-bottom: 5px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #dbe1ec;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      @include desktop {
        display: block;
        margin-bottom: 20px;
        width: 150px;
        height: 150px;
      }
    }
    .speaker-link {
      display: flex;
      justify-content: center;

      a {
        display: inline-block;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background: #F5FAFC;
        text-align: center;
        position: relative;

        &:not(:last-of-type) {
          margin-right: 14px;
        }

        i {
          position: absolute;
          left: 50%;
          transform: translate(-45%, 5%);
        }
      }
    }
    .speaker-link.pc {
      display: none;
      @include desktop{
        display: block;
      }
    }
    .speaker-link.sp {
      display: inline-block;
      @include desktop {
        display: none;
      }
    }
    .speaker-name {
      font-size: 2rem;
      margin-bottom: 5px;
      line-height: 1;
    }
    .speaker-affiliation {
      display: inline-block;
      margin-bottom: 10px;
      font-size: 1.6rem;
    }
    .speaker-about {
      margin-bottom: 10px;
      font-size: 1.5rem;
    }

  }
</style>

