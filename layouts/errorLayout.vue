<template>
    <div class="l-bgWrap">
        <div class="l-bg">
            <nuxt/>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['error'],
        layout: 'error',
    }
</script>


<style lang="scss" scoped>
    @import "~/assets/scss/_library.scss";

    .l-bgWrap {
        min-height: 100%;
        background: linear-gradient(135deg, #7171c7 0%,#de6d62 100%);
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center center;
    }
    .l-bg {
        background-image:
                url(~assets/images/bg_pattern.svg),
                url(~assets/images/bg_texture.png);
        background-size: 30%;
    }
</style>

