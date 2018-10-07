<template>
  <footer class="l-footer">
    <div class="c-container">
      <div class="p-share">
        <h5 class="c-title">
          SHARE
        </h5>
        <a class="c-btn" href="https://twitter.com/intent/tweet?text=FRONTEND CONFERENCE 2018｜関西フロントエンドUG https://2018.kfug.jp/&amp;hashtags=frontkansai" target="_blank" >
          <i class="fab fa-twitter"></i>
          <span>Twitterでシェア</span>
        </a>
        <a class="c-btn" href="https://www.facebook.com/sharer.php?u=https://2018.kfug.jp/&amp;t=FRONTEND CONFERENCE 2018｜関西フロントエンドUG https://2018.kfug.jp/&amp;hashtags=frontkansai" target="_blank" >
          <i class="fab fa-facebook-f"></i>
          <span>Facebookでシェア</span>
        </a>
        <span class="p-border"></span>
      </div>
      <div class="p-official">
        <h5 class="c-title">
          OFFICIAL
        </h5>
        <a href="https://twitter.com/frontkansai" target="_blank" >
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/frontconf2018" target="_blank" >
          <i class="fab fa-facebook-f"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";
  .l-footer {
    margin: 100px auto 0;
    text-align: center;
    min-width: 100%;
    max-width: 980px;
    width: 100%;
    max-height: 450px;
    overflow: hidden;
    color: white;
    background: url("~/static/images/footer.svg");
    background-size: contain;
    background-position: center bottom;
    background-repeat: no-repeat;
    position: relative;

    &::after {
      content: "";
      display: block;
      padding-top: 50%;

    }

    .c-container {
      position: absolute;
      width: 80%;
      top: 18%;
      left: 50%;
      transform: translateX(-50%);

    }
    .c-title {
      @include title;
    }

    .c-btn {
      @include c-btn--outline;

      @include desktop {
        &:not(:last-of-type) {
          margin-right: 10px;
        }
      }
    }

    .p-share {
      margin-bottom: 20px;
      .c-title {
        margin-bottom: 10px;
      }
    }




    .p-border{
      display: block;
      margin: 0 auto;
      padding-bottom: 3%;
      width: 95%;
      max-width: 700px;
      border-bottom: 1px solid rgba(255,255,255,.2);
    }
    .p-official {
      .c-title {
        font-size: 3rem;
        margin-bottom: 20px;
      }
      a {
        display: inline-block;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        color: white;
        position: relative;
        transition: all .4s ease;
        &:not(:last-of-type) {
          margin-right: 60px;
        }

        &:hover {
          opacity: .4;
        }

        i {
          display: inline-block;
          font-size: 3rem;
          position: absolute;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          transition: all .4s ease;

        }

      }

    }

  }
</style>

