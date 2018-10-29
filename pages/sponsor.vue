<template>
  <section>
    <div class="p-sponsor">
      <router-link to="/" class="btn-close">
        <img src="~/assets/images/btn-close.png" alt="">
      </router-link>
      <div class="p-container">
        <div class="intro">
          <h2 class="c-title">
            SPONSOR
          </h2>
          <p class="description">
            <!--TODO 仮テキスト-->
            FRONTEND CONFERENCE 2018へご協賛いただいた個人・企業様のご紹介です。
          </p>
        </div>
        <div class="sponsor-list">
          <div class="sponsor-item">
            <h2 class="sponsor-title">{{sponsors.title}}</h2>
            <span class="sponsor-sub">{{sponsors.sub}}</span>
            <div class="sponsor-logoWrap">
              <div class="sponsor-logo"></div>
            </div>
            <p class="sponsor-about">
              {{sponsors.detail}}
            </p>
            <div class="sponsor-link">
              <a class="sponsor-linkBtn" href="" target="_blank">
                <span>広告・企業ページをみる</span>
              </a>
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
import VueScrollTo from "vue-scrollto"

export default {
  data () {
    return {
      sponsors: {
        title: "株式会社chatbox",
        sub: "株式会社chatboxはWebのこれからを語り合う会社です",
        detail: "株式会社 chatbox は大阪の小さなWeb制作会社です。 様々なWeb制作の現場で、「Webのこれからを語り合う」をテーマにWebの可能性を追求し続けています。 Web制作という「作る」業務だけでなく、Webの技術を「伝える」「語り合う」会社として、 制作現場での技術指導や、イベント・セミナーなどの交流活動にも積極的に取り組んでいます。 身の回りにありふれたWebだからこそ、そこにしか無い、そこだけのWebの形を。 現場と、お客様と、ユーザーと、一緒に考えていくのがchatboxのWeb制作のあり方です。"
      }
    }
  },
  components: {
    AppLogo
  },
  computed:{
    sessions(){
      return this.$store.state.speakers
    }
  },
  mounted(){
    const hash = location.hash
    const target = document.getElementById(decodeURI(hash).substr(1))
    console.log(target)
    if(target){
      VueScrollTo.scrollTo(target,500,{
        offset: -80
      })

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";

  .p-sponsor {
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

    //スポンサー一覧
    .sponsor-list {
      margin: 0 auto;
      max-width: 920px;

    }
    .sponsor-item {
      margin-bottom: 50px;
      padding: 30px 25px ;
      background: white;
      color: #444A64;
      text-align: left;
      @include desktop {
        padding: 40px 70px 50px;
      }

    }
    .sponsor-title {
      margin-bottom: 1em;
      font-size: 2rem;
      line-height: 1.6;
      @include desktop{
        font-size: 2.8rem;
      }
    }
    .sponsor-sub {
      display: block;
      margin-bottom: 1em;
      font-size: 1.7rem;
      line-height: 1.6;
      @include desktop{
        font-size: 2rem;
      }
    }
    .sponsor-logoWrap {
      width: 100%;
      text-align: center;
    }
    .sponsor-logo {
      margin: 0 auto;
      display: inline-block;
      margin-bottom: 15px;
      width: 100%;
      max-width: 600px;
      background-image: url(http://placehold.it/600x480);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 50%;

      &::before {
        content: "";
        display: block;
        padding-top: 80%;
      }
    }

    .sponsor-about {
      margin-bottom: 30px;
      font-size: 1.6rem;
      line-height: 1.7;
      @include desktop{
        font-size: 1.6rem;
      }
    }
    .sponsor-link{
      width: 100%;
      display: inline-block;
      text-align: center;
    }
    .sponsor-linkBtn {
      @include c-btn;
    }

  }
</style>

