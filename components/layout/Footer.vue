<template>
  <footer class="l-footer">
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
  </footer>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_mixin.scss";
  .l-footer {
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

