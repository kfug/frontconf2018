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
            仮テキスト
          </p>

          <div class="sponsor">
            <div class = "sponsor_platinum">
              <div class="sponsor_large">
              <img src="~/assets/images/sponsors/platinum/sp-p01.png">
              <img src="~/assets/images/sponsors/platinum/sp-p01.png">
            </div>
            </div>
            <div class = "sponsor_gold">
              <div class="sponsor_medium">
              <img src="~/assets/images/sponsors/gold/sp-g01.png">
              <img src="~/assets/images/sponsors/gold/sp-g01.png">
              <img src="~/assets/images/sponsors/gold/sp-g01.png">
              <img src="~/assets/images/sponsors/gold/sp-g01.png">
              <img src="~/assets/images/sponsors/gold/sp-g01.png">
              <img src="~/assets/images/sponsors/gold/sp-g01.png">
              </div>
            </div>
            <div class = "sponsor_silver">
              <div class="sponsor_small">
              <img src="~/assets/images/sponsors/silver/sp-s01.png">
              <img src="~/assets/images/sponsors/silver/sp-s01.png">
              <img src="~/assets/images/sponsors/silver/sp-s01.png">
              <img src="~/assets/images/sponsors/silver/sp-s01.png">
              <img src="~/assets/images/sponsors/silver/sp-s01.png">
              <img src="~/assets/images/sponsors/silver/sp-s01.png">
              </div>
            </div>
          </div>


          <router-link to="/" class="c-btn">
            <span>TOPに戻る</span>
          </router-link>
        </div>
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


    .sponsor{
      width: auto;
      &_large {
        max-width: 330px;
        width: 100%;
        margin: 0 5px 30px 5px;
        cursor: pointer;

        @include desktop() {
          max-width: 440px;
          margin: 0 15px 40px 15px;
        }
      }

      &_medium {
        max-width: 150px;
        width: 100%;
        margin: 0 5px 5px 5px;
        cursor: pointer;



        @include desktop() {
          max-width: 215px;
          margin: 0 10px 15px 10px;
        }
      }

      &_small {
        max-width: 100px;
        width: 100%;
        cursor: pointer;
        margin: 0 5px 5px 5px;

        @include desktop() {
          max-width: 150px;
          margin: 0 10px 15px 10px;
        }
      }

    }
    img{
      max-width: 100%;
    }





    //イントロ
    .intro {
      padding: 40px 0;
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
  }
</style>

