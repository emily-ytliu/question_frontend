<script>
export default {
    components: {
    },
    data() {
        return {
            qTitleInput: "",
            qContentInput: "",
            qStartInput: "",
            qEndInput: ""
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <div class="admin-content-wrap">
        <div class="item">
            <label for="qTitle">問卷標題</label>
            <input type="text" v-model="qTitleInput">
        </div>
        <div class="item">
            <label for="qTitle">描述內容</label>
            <input type="text" v-model="qContentInput">
        </div>
        <div class="item">
            <label for="qStartDate">開始時間</label>
            <input type="date" v-model="qStartInput">
        </div>
        <div class="item">
            <label for="qEndDate">結束時間</label>
            <input type="date" v-model="qEndInput">
        </div>
        <button>取消</button>
        <button>下一頁</button>
    </div>
</template>

<style lang="scss" scoped>

</style>