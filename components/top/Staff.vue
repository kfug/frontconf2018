<template>
  <section>
    <div class="p-staff">
      <div class="p-container">
        <div class="intro">
          <h2 class="c-title">
            STAFF
          </h2>
          <div class="grid">
            <div class="staff" v-for="staff in staffs" :key="staff.name">
              <div class="staff-box" v-if="staff.toggle">
                <a v-bind:href="staff.url"><img class="staff-img" v-bind:src="staff.icon"></a>
              </div>
              <div class="staff-box" v-else>
                <img class="staff-img" v-bind:src="staff.icon">
              </div>
              <span class="staff-name">{{ staff.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import staffs from '../../contents/staffs.yml'
export default {
  data() {
    return {
      staffs: staffs.staffs
    }
  }
}


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
        justify-items: center;
        @include desktop {
          grid-template-columns: repeat(7, 1fr);
        }

        .staff {
          width: 100px;
          height: 175px;
          margin-bottom: 20px;
          .staff-box {
            display: inline-block;
            .staff-img {
              height: 100px;
              margin-bottom: 10px;
              border-radius: 300px;
            }
          }
          .staff-name {
            font-size: 14px;
            line-height: 1.5;
            display: inline-block;
          }
        }
      }


    }

  }

</style>

