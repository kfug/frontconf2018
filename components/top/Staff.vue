<template>
  <section>
    <div class="p-staff">
      <div class="p-container">
        <div class="intro">
          <h2 class="c-title">
            STAFF
          </h2>
          <div class="grid">
            <div class="staff">
              <img class="staff-img" src="">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";

  .p-staff {
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

      .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        @include desktop {
          grid-template-columns: repeat(7, 1fr);
        }

        .staff {
          width: 100px;
          height: 175px;
          margin-bottom: 20px;
        }
      }


    }

  }

</style>

