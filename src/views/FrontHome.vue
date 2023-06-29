<script>
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
    <div class="front-home-wrap">
        <HeaderWrap :homeTitle="'問卷 ~'"/>
        <HomeSearchWrap />
    </div>
</template>

<style lang="scss" scoped>
.front-home-wrap {
    
}
</style>