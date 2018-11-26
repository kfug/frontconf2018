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
export default {
  data() {
    return {
      staffs: [
        { icon: 'https://via.placeholder.com/100', name: '名前1', toggle: true, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: 'パブロ・ディエゴ・ホセ・フランシスコ', toggle: true, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前3', toggle: true, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前4', toggle: true, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前5', toggle: true, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前6', toggle: true, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前7', toggle: true, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前8', toggle: true, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前9', toggle: true, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前10', toggle: true, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前11', toggle: true, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前12', toggle: true, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前13', toggle: true, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前14', toggle: true, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前15', toggle: false, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前16', toggle: false, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前17', toggle: false, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前18', toggle: false, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前19', toggle: false, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前20', toggle: false, url: '#'},
        { icon: 'https://via.placeholder.com/100', name: '名前21', toggle: false, url: '#'},
      ]
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

