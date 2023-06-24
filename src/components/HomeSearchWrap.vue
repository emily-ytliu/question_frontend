<script>
export default {
    components: {

    },
    data() {
        return {
            qTitleInput: "",
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
    <div class="home-search-wrap">
        <div class="search-item input-item">
            <label for="qTitle">問卷標題</label>
            <input type="text" v-model="qTitleInput">
        </div>
        <div class="search-item">
            <label for="qStartDate">開始時間</label>
            <input type="date" v-model="qStartInput">
        </div>
        <div class="search-item">
            <label for="qEndDate">結束時間</label>
            <input type="date" v-model="qEndInput">
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
.home-search-wrap {
    margin: 0 auto;
    .search-item {
        display: flex;
        width: 480px;
        margin: 20px auto;

        label {
            padding: 0 15px;
            line-height: 2rem;
        }
    }
}
</style>