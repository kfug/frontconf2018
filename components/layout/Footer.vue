<template>
  <footer class="l-footer">
    <div class="c-container">
      <div class="share">
        <h5 class="title">
          SHARE
        </h5>
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
  </footer>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";
  .l-footer {
    margin-top: 100px;
    padding-top: 100px;
    height: 500px;
    text-align: center;
    color: white;
    overflow: hidden;
    background: url("~/static/images/footer.svg");
    background-size: contain;
    background-position: center bottom;
    background-repeat: no-repeat;
    position: relative;

    .c-container {

    }

    .title {
      @include title;
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

