<script>
import SmallBtn from './SmallBtn.vue';
export default {
    components: {
        SmallBtn,
    },
    props: ["homeTitle"],
    data() {
        return {
            currentRoute: this.$route.path,
            text: "",
        }
    },
    methods: {
        toggleTo() {
            if(this.currentRoute === "/back-home") {
                this.$router.push("/");
            }
            else {
                this.$router.push("/back-home");
            }
        },
    },
    mounted() {
        this.text = this.currentRoute === '/back-home' ? '前台 Go' : '後台 Go';
    }
}
</script>

<template>
    <header>
        <div class="logo-wrap">
            <div class="logo-box">
            <img src="../assets/golden-retriever.jpg" alt="logo image">
            </div>
            <div class="logo-text-box">
                <p>{{ homeTitle }}</p>
            </div>
            <div class="btn-box">
                <SmallBtn :btnText="text" @toggleTo="toggleTo" />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-image: linear-gradient(to right, #f87400 0%, #f9d923 100%);
    .logo-wrap {
        display: flex;
        padding: 20px 40px;
        .logo-box {
            width: 60px;
            height: 60px;
            
            img {
                width: 100%;
                height: 100%;
                border-radius: 50px;
            }
        }
        .logo-text-box {
            padding: 14px 30px;
            font-size: 2rem;

            p {
                color: var(--font-light);
                font-weight: bold;
            }
        }
        .btn-box {
            margin: auto 0;
            margin-left: auto;
        }
    }
}
</style>