<script>
import HomeTableWrap from "./HomeTableWrap.vue"
export default {
    components: {
        HomeTableWrap,
    },
    data() {
        return {
            qTitleInput: "",
            qStartInput: "",
            qEndInput: "",
            searchData: null,
        }
    },
    // methods: {
    //     search() {
    //         const searchBody = {
    //             "title": this.qTitleInput,
    //             "start_date": this.qStartInput,
    //             "end_date": this.qEndInput
    //         }

    //         fetch("http://localhost:8080/search", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             "body": JSON.stringify(searchBody),
    //             credentials: 'include', 
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             this.searchData = data;
    //         })
    //     }

    // },
    mounted() {
        // 如果結束時間<開始時間
        if (this.qEndInput < this.qStartInput) {
            return this.$swal("注意!", "輸入的時間錯誤", "error");
        }
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
        <div class="search-btn-box">
            <button type="button" @click="search">搜尋</button>
        </div>
        <HomeTableWrap />
    </div>
</template>

<style lang="scss" scoped>
.home-search-wrap {
    margin: 40px auto;
    .search-item {
        display: flex;
        width: 480px;
        margin: 20px auto;

        label {
            padding: 0 15px;
            line-height: 2rem;
        }

        input {
            width: 75%;
        }
    }
    .search-btn-box {
        width: 480px;
        margin: 0 auto;

        button {
            width: 100%;
            margin: 20px 0 10px;
            line-height: 2rem;
            border: none;
            border-radius: 50px;
            background-color: var(--orange-dark);
            box-shadow: 0px 2px 3px 0px rgba(240, 188, 136, 0.5);
            color: var(--font-light);
            font-weight: bold;
            cursor: pointer;
            transition: .4s;

            &:hover {
                background-color: var(--button-hover);
                color: var(--font-dark);
                box-shadow: 0px 15px 20px var(--orange-light);
                transform: translateY(-3px);
            }
            &:active {
                scale: .98;
            }
        }
    }

}
</style>