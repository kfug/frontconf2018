<template>
  <section>
    <div class="p-session">
      <router-link to="/" class="btn-close">
        <img src="~/assets/images/btn-close.png" alt="">
      </router-link>
      <div class="p-container">
        <div class="intro">
          <h2 class="c-title">
            SESSIONS
          </h2>
          <p class="description">
            フロントエンドのエンジニアリングや、マークアップ、デザインなど、Webに関わる全ての人に是非届けたい珠玉のセッション構成でお送りしております。
          </p>
        </div>
        <div :id="session.name" class="session-list"
             v-for="(session,key) in sessions" :key="key">
          <div class="session-item">
            <h2 class="session-title">{{session.title}}</h2>
            <span class="session-sub" v-if="session.subtitle">{{session.subtitle}}</span>
            <p class="session-about" v-html="session.body"></p>
            <hr>
            <div class="speaker-prof">
              <div class="row">
                <div class="col-sm-auto">
                  <div class="speaker-icon" v-if="session.image"
                       :style="{backgroundImage: `url(${session.image})`}"></div>
                  <div class="speaker-icon" v-else>
                  </div>
                  <div class="speaker-link pc">
                    <a :href="session.twitter" v-if="session.twitter" rel="noopener" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a :href="session.facebook" v-if="session.facebook" rel="noopener" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a :href="session.url" v-if="session.url" rel="noopener" target="_blank">
                      <i class="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div class="col-sm">
                  <h3 class="speaker-name">{{session.name}}</h3>
                  <span class="speaker-affiliation">{{session.team}}</span>
                  <p class="speaker-about" v-html="session.profile" />
                </div>
              </div>
              <div class="speaker-link sp">
                <a href="" v-if="session.twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="" v-if="session.facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" v-if="session.url">
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
import VueScrollTo from "vue-scrollto"

export default {
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
          display: inline-block;
          position: absolute;
          left: 50%;
          transform: translate(-45%, 60%);
        }
      }
    }
    .speaker-link.pc {
      display: none;
      @include desktop{
        display: block;
        text-align: center;
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

