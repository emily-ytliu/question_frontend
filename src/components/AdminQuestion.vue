<script>
import AdminQuestionTop from './AdminQuestionTop.vue';
import AdminQuestionTable from './AdminQuestionTable.vue'
import SmallBtn from './SmallBtn.vue';
export default {
    components: {
        AdminQuestionTop,
        AdminQuestionTable, 
        SmallBtn
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
    <div class="admin-question-wrap">
        <AdminQuestionTop />
        <AdminQuestionTable />
        <div class="btn-box">
            <SmallBtn type="button" :btnText="'取消'" />
            <SmallBtn type="button" :bgc="'var(--orange-dark)'" :color="'var(--font-light)'" :btnText="'確認'" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.admin-question-wrap {
    .btn-box {
        display: flex;
        justify-content: space-between;
        width: 600px;
        margin: 40px auto;
    }
}
</style>