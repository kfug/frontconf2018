<template>
  <section>
    <div class="p-sponsor">
      <div class="p-container">
        <div class="intro">
          <h2 class="c-title">
            SPONSORS
          </h2>
          <!--<p class="description">-->
            <!--仮テキスト-->
          <!--</p>-->

          <div class="sponsor">
            <div class = "sponsor_platinum">
              <div class="sponsor_large" v-for="(sponsor,key) in plutinum" :key="key">
                <a :href="sponsor.url" target="_blank" rel="noopener">
                  <img :src="sponsor.image" :alt="sponsor.title">
                </a>
              </div>
            </div>
            <div class = "sponsor_gold">
              <div class="sponsor_medium" v-for="(sponsor,key) in gold" :key="key">
                <a :href="sponsor.url" target="_blank" rel="noopener">
                  <img :src="sponsor.image" :alt="sponsor.title">
                </a>
              </div>
            </div>
            <div class = "sponsor_silver">
              <div class="sponsor_small" v-for="(sponsor,key) in silver" :key="key">
                <a :href="sponsor.url" target="_blank" rel="noopener">
                  <img :src="sponsor.image" :alt="sponsor.title">
                </a>
              </div>
            </div>
          </div>
          <h2 class="c-title">MEDIA・SUPPORT</h2>

          <div class="sponsor">
            <div class = "sponsor_gold">
              <div class="sponsor_medium" v-for="(sponsor,key) in media" :key="key">
                <a :href="sponsor.url" target="_blank" rel="noopener">
                  <img :src="sponsor.image" :alt="sponsor.title">
                </a>
              </div>
            </div>
          </div>
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
    media(){
      return this.$store.state.sponsors.media
    },
    plutinum(){
      return this.$store.state.sponsors.plutinum
    },
    gold(){
      return this.$store.state.sponsors.gold
    },
    silver(){
      return this.$store.state.sponsors.silver
    },
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
    .sponsor{
      width: auto;
      &_platinum,
      &_gold,
      &_silver{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      &_platinum{
        margin-top:80px;
      }
      &_silver{
        margin: 20px 0 30px 0;
      }

      &_large,
      &_medium,
      &_small{
        cursor: pointer;
      }

      &_large {
        width: 90%;
        margin: 0 1.5vw 3vw 1.5vw;
        @include desktop() {
          width: 45%;
          margin: 0 20px 40px 20px;
        }
      }

      &_medium {
        width: 45%;
        margin: 0 1vw 2vw 1vw;
        @include desktop() {
          width: 30%;
          margin: 0 10px 20px 10px;
        }
      }
      &_small {
        width: 30%;
        margin: 0 1vw 2vw 1vw;
        @include desktop() {
          width: 23%;
          margin: 0 5px 10px 5px;
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

