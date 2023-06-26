<script>
import SmallBtn from './SmallBtn.vue';
export default {
    components: {
        SmallBtn
    },
    data() {
        return {
            qTitleInput: "",
            qContentInput: "",
            qStartInput: "",
            qEndInput: "",
        }
    },
    methods: {
        // 預設開始日期
        defaultDate() {
            const today = new Date();
            const defaultStartDate =  today.toISOString().split("T")[0];

            this.qStartInput = defaultStartDate;

            const endDate = new Date(defaultStartDate);
            endDate.setDate(endDate.getDate() + 7);
            const defaultEndDate = endDate.toISOString().split("T")[0];

            this.qEndInput = defaultEndDate;
        },
        // 取消按鈕 (清空所有input)
        cancelBtn() {
            this.qTitleInput = "";
            this.qContentInput = "";
            this.defaultDate();

            sessionStorage.removeItem("qTitle"); 
            sessionStorage.removeItem("qContent");
            sessionStorage.removeItem("qStart");
            sessionStorage.removeItem("qEnd");

        },
        // 下一頁按鈕
        nextBtn() {
            // 若有欄位是空
            if (this.qTitleInput.trim() === ""
                || this.qContentInput.trim() === ""
                || this.qStartInput.trim() === ""
                || this.qEndInput.trim() === "") {
                    return this.$swal("注意!", "有欄位未填寫", "error");
            }
            // 如果開始時間<今天
            let today = new Date();
            today =  today.toISOString().split("T")[0];
            if (this.qStartInput < today) {
                return this.$swal("注意!", "開始時間不可早於今天", "error");
            }

            // 如果結束時間<開始時間
            if (this.qEndInput < this.qStartInput) {
                return this.$swal("注意!", "結束時間不可早於開始時間", "error");
            }

            // 暫存在前端sessionStorage
            sessionStorage.setItem("qTitle", this.qTitleInput);
            sessionStorage.setItem("qContent", this.qContentInput);
            sessionStorage.setItem("qStart", this.qStartInput);
            sessionStorage.setItem("qEnd", this.qEndInput);

            this.$router.push("/back-admin/question")
        }
    },
    mounted() {
        this.defaultDate();

        if (sessionStorage.getItem("qTitle") 
            && sessionStorage.getItem("qContent")
            && sessionStorage.getItem("qStart")
            && sessionStorage.getItem("qEnd")) {
                this.qTitleInput = sessionStorage.getItem("qTitle");
                this.qContentInput = sessionStorage.getItem("qContent");
                this.qStartInput = sessionStorage.getItem("qStart");
                this.qEndInput = sessionStorage.getItem("qEnd");
        }
    }
}
</script>

<template>
    <div class="admin-content-wrap">
        <div class="item-box">
            <div class="item">
                <label for="qTitleInput">問卷標題</label>
                <input type="text" id="qTitleInput" 
                v-model="qTitleInput">
            </div>
            <div class="item">
                <label for="qContentInput">描述內容</label>
                <textarea rows="3" class="content-input" id="qContentInput" v-model="qContentInput"></textarea>
            </div>
            <div class="date-box">
                <div class="item">
                    <label for="qStartInput">開始時間</label>
                    <input type="date" id="qStartInput" v-model="qStartInput">
                </div>
                <div class="item">
                    <label for="qEndInput">結束時間</label>
                    <input type="date" id="qEndInput"
                    v-model="qEndInput">
                </div>
            </div>
        </div>
        <div class="btn-box">
            <SmallBtn type="button" @click="cancelBtn" :btnText="'取消'" />
            <SmallBtn type="button" @click="nextBtn" :bgc="'var(--orange-dark)'" :color="'var(--font-light)'" :btnText="'下一頁'" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.admin-content-wrap {
    width: 600px;
    margin: 0 auto;
    .item-box {
        margin: 40px 0;
        padding: 0 10px;

        .date-box {
            display: flex;
            justify-content: space-between;
            .item {
                width: 48%;

                label {
                    width: 173px;
                }

                input {

                }
            }
        }
        .item {
            display: flex;
            // justify-content: center;
            padding-bottom: 20px;

            label {
                padding-right: 15px;
                line-height: 2rem;
            }

            input,
            textarea {
                width: 479px;
            }

            .content-input {
                padding: 7px 10px;
                line-height: 1.3rem;
                resize: none;
            }
        }
    }
    .btn-box {
        display: flex;
        justify-content: space-between;
    }
}
</style>