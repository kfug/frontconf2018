<template>
  <section>
    <div class="p-sponsor">
      <div class="p-container">
        <div class="intro">
          <h2 class="c-title">
            TIMETABLE
          </h2>
          <!--<p class="description">-->
            <!--仮テキスト-->
          <!--</p>-->

          <iframe class="preview" width="100%" src="https://drive.google.com/a/chatbox-inc.com/file/d/1XgVp8JS4SzpDlPb_jNRSqN4iPuiNZN3X/preview" frameborder="0"></iframe>
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
  computed:{},
  mounted(){
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

    .preview{
      height: 480px;
      width: 100%;
    }
  }
</style>

