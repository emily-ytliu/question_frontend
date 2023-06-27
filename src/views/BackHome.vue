<script>
import { RouterLink} from 'vue-router'
import HeaderWrap from "../components/Header.vue"
import HomeSearchWrap from "../components/HomeSearchWrap.vue"
import HomeTableWrap from "../components/HomeTableWrap.vue"
export default {
    components: {
        HeaderWrap,
        HomeSearchWrap,
        HomeTableWrap
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
        <HomeTableWrap />
    </div>
</template>

<style lang="scss" scoped>

</style>