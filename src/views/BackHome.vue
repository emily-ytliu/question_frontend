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
        <div class="btn-box">
            <vxe-button icon="vxe-icon-delete" circle></vxe-button>
            <RouterLink to="/back-admin/content"><vxe-button icon="vxe-icon-add" circle class="add-btn"></vxe-button></RouterLink>
        </div>
        <HomeTableWrap />
    </div>
</template>

<style lang="scss" scoped>
.btn-box {
    padding: 10px 68px;
    .add-btn {
        margin-left: 16px;
        background-color: var(--orange-light);
        border: 1px solid var(--orange-dark);
    }
}
</style>