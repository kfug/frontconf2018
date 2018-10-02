<template>
  <section>
    <div class="sec-hero">
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
    </div>
    <div class="sec-mainWrap">
      <div class="sec-about">
        <div class="container">
          <h2 class="title">
            FRONTEND CONFERENCE 2018
          </h2>
          <p class="description">
            2016 , 2017 年とたくさんの人に来場頂いた
            関西最大級のフロントエンド製作者向けイベント FRONTEND CONFERENCE が
            今年も開催されます！<br><br>

            例年通り、 デザイナもエンジニアも、職種問わず
            Webに携わるすべての人が楽しめるイベントとして
            様々なセッション・企画等を検討中です！<br><br>

            詳細はConnpassをご確認ください
          </p>
          <a href="https://kfug.connpass.com/event/98855/" target="_blank" class="btn">
            <span>connpassページへ</span>
          </a>
        </div>
      </div>
      <div class="container">
        <hr>
      </div>
      <div class="sec-session">
        <div class="container">

          <h2 class="title">
            SESSIONS
          </h2>
          <p class="description">
            フロントエンドのエンジニアリングや、マークアップ、デザインなど、Webに関わる全ての人に是非届けたい珠玉のセッション構成でお送りしております。
          </p>
          <router-link to="/sessin" class="btn">
            <span>セッション一覧を見る</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="sec-wanted">
      <div class="container">
        <h2 class="title">
          SPONSOR
        </h2>
        <p class="description">
          FRONTEND CONFERENCE 2018 では<br>
          スポンサー企業様のご協賛をお待ちしております！<br>
          <br>
          求人やサービス紹介、などスポンサー様の露出ご要望等に添えるスポンサーメニューをご用意しておりますので、ご興味の企業様は、下記のフォームよりご連絡の上、資料請求のお手続きをよろしくお願いいたします。
        </p>
        <a href="https://docs.google.com/forms/d/1NDzn_9PYl28Ew86rrAZ8KryfUc7V5VEYhnJNT4SekPY/" target="_blank" class="btn">
          <span>スポンサー申し込み</span>
        </a>
      </div>
    </div>
    <div class="sec-footer">
      <div class="container">
        <p class="description">
          「フロントカンファレンス2018」のSNSアカウントをフォローして最新情報チェック！
        </p>
        <a href="https://twitter.com/frontkansai" target="_blank" class="btn">
          <i class="fab fa-twitter"></i>
          <span>twitterアカウント</span>
        </a>
        <a href="https://www.facebook.com/frontconf2018" target="_blank" class="btn">
          <i class="fab fa-facebook-f"></i>
          <span>Facebookページ</span>
        </a>
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
  @mixin desktop(){
    @media(min-width: 768px){
      @content
    }
  }
  *{
    text-align: center;
    color: inherit;
    font-size: 1.6rem;
    line-height: 2;
    @include desktop {
      font-size: 1.8rem;
    }
  }
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
  .sec-mainWrap {
    color: white;
    background: linear-gradient(left, #9c94de 1%,#bf94a0 49%,#FA8782 100%);

    hr {
      background: white;
    }
  }
  .sec-about {
    padding: 40px 0 60px;
    color: white;
    @include desktop {
      padding: 90px 0;
    }

    .title {
      margin-bottom: 1em;
      letter-spacing: 2px;
      font-size: 2.5rem;
      font-family: 'Capriola', sans-serif;
      @include desktop {
        font-size: 4rem;
      }
    }
    .description {
      margin: 0 auto 50px;
      max-width: 680px;
    }
    .btn {
      display: inline-block;
      padding: 10px;
      border-radius: 9999px;
      min-width: 280px;
      color: #444A64;
      background: white;

      &:hover {
        opacity: .6;
      }
    }
  }
  .sec-session {
    padding: 40px 0 60px;
    color: white;
    @include desktop {
      padding: 90px 0;
    }

    .title {
      margin-bottom: 1em;
      letter-spacing: 2px;
      font-size: 2.5rem;
      font-family: 'Capriola', sans-serif;
      @include desktop {
        font-size: 4rem;
      }
    }
    .description {
      margin: 0 auto 50px;
      max-width: 680px;
    }
    .btn {
      display: inline-block;
      padding: 10px;
      border-radius: 9999px;
      min-width: 280px;
      color: #444A64;
      background: white;

      &:hover {
        opacity: .6;
      }
    }
  }
  .sec-wanted {
    padding: 40px 0 60px;
    color: #444A64;
    background: white;

    @include desktop {
      padding: 90px 0;
    }

    .title {
      margin-bottom: 1em;
      letter-spacing: 2px;
      font-size: 2.5rem;
      font-family: 'Capriola', sans-serif;
      @include desktop {
        font-size: 4rem;
      }
    }
    .description {
      margin: 0 auto 50px;
      max-width: 680px;
    }
    .btn {
      display: inline-block;
      padding: 10px;
      border-radius: 9999px;
      min-width: 280px;
      color: white;
      background: linear-gradient(left, #9c94de 1%,#bf94a0 49%,#FA8782 100%);

      &:hover {
        opacity: .6;
      }
    }
  }
  .sec-footer {
    padding: 40px 0;
    color: white;
    background: #444A64;
    @include desktop {
      padding: 90px 0;
    }

    .description {
      margin-bottom: 30px;
    }

    .btn {
      display: inline-block;
      margin-bottom: 30px;
      padding: 10px;
      border-radius: 9999px;
      border: 1px solid white;
      min-width: 280px;
      color: white;
      background: transparent;

      i {
        display: inline-block;
        margin-right: .8em;
      }

      &:hover {
        opacity: .6;
      }

      @include desktop {
        &:not(:last-of-type) {
          margin-right: 20px;
        }
      }

    }

  }

</style>

