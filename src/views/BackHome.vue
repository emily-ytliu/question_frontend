<script>
import { RouterLink} from 'vue-router'
import HeaderWrap from "../components/Header.vue"
import HomeSearchWrap from "../components/HomeSearchWrap.vue"
export default {
    components: {
        HeaderWrap,
        HomeSearchWrap,
    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <div class="back-home-wrap">
        <HeaderWrap :homeTitle="'後台管理'" />
        <HomeSearchWrap />
    </div>
</template>

<style lang="scss" scoped>

</style>