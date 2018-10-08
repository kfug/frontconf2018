<template>
    <main>
      <p-hero></p-hero>
      <p-about></p-about>
      <p-session></p-session>
      <p-sponsor></p-sponsor>
    </main>
</template>

<script>
import PHero from '~/components/top/Hero.vue'
import PAbout from '~/components/top/About.vue'
import PSession from '~/components/top/Session.vue'
import PSponsor from '~/components/top/Sponsor.vue'

export default {
  components: {
    PHero,
    PAbout,
    PSession,
    PSponsor
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";

</style>

