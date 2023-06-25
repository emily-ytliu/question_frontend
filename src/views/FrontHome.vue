<script>
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
    <div class="front-home-wrap">
        <HeaderWrap :homeTitle="'問卷 ~'"/>
        <HomeSearchWrap />
        <HomeTableWrap :hideColumns="['checkbox', 'edit']" />
    </div>
</template>

<style lang="scss" scoped>
.front-home-wrap {
    
}
</style>