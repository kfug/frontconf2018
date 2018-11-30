<template>
  <section>
    <div class="p-staff">
      <div class="p-container">
        <div class="intro">
          <h2 class="c-title">
            STAFF
          </h2>
          <div class="grid">
            <div class="staff" v-for="(staff, key) in staffs" :key="key">
              <div class="staff-box" v-if="staff.url && staff.icon">
                <a v-bind:href="staff.url" target="_blank"><img class="staff-img d-block" v-bind:src="staff.icon"></a>
              </div>
              <div class="staff-box" v-else-if="!staff.url && staff.icon">
                <img class="staff-img d-block" v-bind:src="staff.icon">
              </div>
              <div class="staff-box" v-else-if="staff.url && !staff.icon">
                <a v-bind:href="staff.url" target="_blank"><img class="staff-img d-block" src="~/static/eggicon.png"></a>
              </div>
              <div class="staff-box" v-else>
                <img class="staff-img d-block" src="~/static/eggicon.png">
              </div>
              <span class="staff-name">{{ staff.name }}</span>
            </div>
          </div>
        </div>
        <div class="intro">
          <h2 class="c-title">
            DESIGNER
          </h2>
          <div class="grid">
            <div class="staff" v-for="(designer, key) in designers" :key="key">
              <div class="staff-box" v-if="designer.url && designer.icon">
                <a v-bind:href="designer.url" target="_blank"><img class="staff-img" v-bind:src="designer.icon"></a>
              </div>
              <div class="staff-box" v-else-if="!designer.url && designer.icon">
                <img class="staff-img" v-bind:src="designer.icon">
              </div>
              <div class="staff-box" v-else-if="designer.url && !designer.icon">
                <a v-bind:href="designer.url" target="_blank"><img class="staff-img" src="~/static/eggicon.png"></a>
              </div>
              <div class="staff-box" v-else>
                <img class="staff-img" src="~/static/eggicon.png">
              </div>
              <span class="staff-name">{{ designer.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed:{
    staffs() {
      console.log(this.$store.state.staffs.staffs)
      return this.$store.state.staffs.staffs
    },
    designers() {
      console.log(this.$store.state.staffs.designers)
      return this.$store.state.staffs.designers
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
              height: 80px;
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

