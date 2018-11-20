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
              <img class="staff-img" src="https://via.placeholder.com/100">
              <span class="staff-name">パブロ・ディエゴ・ホセ・フランシスコ</span>
            </div>
            <!--<div class="staff">-->
              <!--<div v-for="staff in staffs" :key="staff.name">-->
                <!--<img class="staff-img" v-bind:src="staff.icon">-->
                <!--&lt;!&ndash;<span class="staff-name">{{ staff.name }}</span>&ndash;&gt;-->
              <!--</div>-->
            <!--</div>-->
            <div class="staff">
              <img class="staff-img" src="https://via.placeholder.com/100">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="https://via.placeholder.com/100">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="https://via.placeholder.com/100">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="https://via.placeholder.com/100">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="https://via.placeholder.com/100">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="https://via.placeholder.com/100">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="https://via.placeholder.com/100">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
            </div>
            <div class="staff">
              <img class="staff-img" src="https://via.placeholder.com/100">
              <span class="staff-name">名前名前名前名前名前名前名前</span>
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
        { icon: 'https://via.placeholder.com/100', name: '名前1'},
        { icon: 'https://via.placeholder.com/100', name: '名前2'},
        { icon: 'https://via.placeholder.com/100', name: '名前3'},
        { icon: 'https://via.placeholder.com/100', name: '名前'},
        { icon: 'https://via.placeholder.com/100', name: '名前'},
        { icon: 'https://via.placeholder.com/100', name: '名前'},
        { icon: 'https://via.placeholder.com/100', name: '名前'},
        { icon: 'https://via.placeholder.com/100', name: '名前'},
        { icon: 'https://via.placeholder.com/100', name: '名前'},
        { icon: 'https://via.placeholder.com/100', name: '名前'},
        { icon: 'https://via.placeholder.com/100', name: '名前'},
        { icon: 'https://via.placeholder.com/100', name: '名前'},
        { icon: 'https://via.placeholder.com/100', name: '名前'},
        { icon: 'https://via.placeholder.com/100', name: '名前'}
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
          .staff-img {
            padding-bottom: 10px;
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

