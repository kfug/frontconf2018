<template>
    <section>
        <div class="p-error">
            <div class="text">
                <div class="text_title">
                <h1 v-if="error.statusCode === 404">404　Not Found</h1>
                <h1 v-else>エラーが発生しました</h1>
                </div>
                <p class="text_description">
                    お探しのページが見つかりませんでした。
                </p>
                <div class="link">
                <a href="https://2018.kfug.jp/">フロントエンドカンファレンス2018サイトへ</a>
            </div>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        props: ['error'],
        layout: 'errorLayout',
    }
</script>


<style lang="scss" scoped>
    @import "~/assets/scss/_library.scss";

    .p-error {
        min-height: 100vh;
        text-align: center;
        padding: 30px 0 60px;
        color: white;

        //エラーの内容
        .text {
            padding: 40px 0 ;
            text-align: center;
            color: white;
            @include desktop {
                padding: 90px 0;
            }

            &_title {
                @include c-title;
            }
            &_description {
                margin: 0 auto;
                max-width: 680px;
            }
        }
    }
    h1{
        font-size:5rem;
    }
    .link{
        margin-top:50px;
    }
    a{
        text-decoration: none;
        color: #353D60;
    }



</style>

