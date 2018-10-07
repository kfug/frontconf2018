<template>
    <div class="l-bgWrap">
      <div class="l-bg">
        <p-hero></p-hero>
        <p-hero></p-hero>
        <p-hero></p-hero>
        <l-footer></l-footer>
      </div>
    </div>
</template>

<script>
import PHero from '~/components/top/Hero.vue'
import LFooter from '~/components/layout/Footer.vue'

export default {
  components: {
    PHero,
    LFooter
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/_mixin.scss";

  .l-bgWrap {
    min-height: 100%;
    background: linear-gradient(135deg, #7171c7 0%,#de6d62 100%);
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .l-bg {
    background-image:
      url(~/static/images/bg_pattern.svg),
      url(~/static/images/bg_texture.png);
    background-size: 30%;
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


</style>

