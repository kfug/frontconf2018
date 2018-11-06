<template>
    <main>
      <p-hero></p-hero>
      <p-about></p-about>
      <p-session></p-session>
      <p-sponsor></p-sponsor>
      <p-access></p-access>
      <p-sponsorlist/>
      <p-staff/>
    </main>
</template>

<script>
import PHero from '~/components/top/Hero.vue'
import PAbout from '~/components/top/About.vue'
import PSession from '~/components/top/Session.vue'
import PSponsor from '~/components/top/Sponsor.vue'
import PAccess from '~/components/top/Access.vue'
import PSponsorlist from './-sponsor.vue'
import PStaff from '~/components/top/Staff.vue'

export default {
  components: {
    PHero,
    PAbout,
    PSession,
    PSponsor,
    PAccess,
    PSponsorlist,
    PStaff
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";


</style>

