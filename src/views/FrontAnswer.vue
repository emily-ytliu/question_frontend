<script>
export default {
    components: {

    },
    data() {
        return {
            questionTitle: "",
            questionDate: "",
            content: "",

            name: "",
            phone: "",
            mail: "",
            age: 0,

            nameAlertText: "",
            phoneAlertText: "",
            mailAlertText: "",
            ageAlertText: "",

            phonePattern: "^09\\d{8}$",
        }
    },
    methods: {
        // 姓名欄位檢查
        checkName() {
            if(this.name === null || this.name === "") {
                this.nameAlertText = "*姓名欄位未填寫";
            }
            else {
                this.nameAlertText = "";
            }   
        },
        // 手機欄位檢查
        checkPhone() {
            if(this.phone === null || this.phone === "") {
                this.phoneAlertText = "*手機欄位未填寫";
            }
            else if (!this.phone.match(this.phonePattern)) {
                this.phoneAlertText = "*手機格式錯誤";
            }
            else {
                this.phoneAlertText = "";
            }
        },
        // 信箱欄位檢查
        checkMail() {
            if(this.mail === null || this.mail === "") {
                this.mailAlertText = "*Email 欄位未填寫";
            }
            else {
                this.mailAlertText = "";
            }   
        },
        // 年齡欄位檢查
        checkAge() {
            if(this.age === null || this.age === "") {
                this.ageAlertText = "*年齡欄位未填寫";
            }
            else {
                this.ageAlertText = "";
            }   
        },
        // 禁止輸入負數
        preventNegativeInput(event) {
            if (event.keyCode === 189 || event.keyCode === 69 || event.key === '-' || event.key === 'e') {
                event.preventDefault();
            }
        },
        // 禁止點擊成負數
        validateAge() {
            if (this.age < 0) {
                this.age = null; 
            }
        }
    },
    mounted() {

    }
}
</script>

<template>
    <div class="answer-sheet-wrap">
        <div class="title-box">
            <div class="title">
                <h1>{{ questionTitle }}</h1>
            </div>
            <div class="date">
                <h2>{{ questionDate }}</h2>
            </div>
        </div>
        <div class="content-box">
            <p>{{ content }}</p>
        </div>
        <div class="user-info-box">
            <div class="form-item">
                <div class="input-box">
                    <label for="name">姓名</label>
                    <input id="name" v-model="name" @blur="checkName" autocomplete="off" type="text" placeholder="請輸入真實姓名" pattern="" required>
                </div>
                <p class="alert-text">{{ nameAlertText }}</p>
            </div>
            <div class="form-item">
                <div class="input-box">
                    <label for="phone">手機</label>
                    <input id="phone" v-model="phone" @blur="checkPhone" autocomplete="off" type="tel" placeholder="0912345678" pattern="^09\\d{8}$" required>
                </div>
                <p class="alert-text">{{ phoneAlertText }}</p>
            </div>
            <div class="form-item">
                <div class="input-box">
                    <label for="mail">Email</label>
                    <input id="mail" v-model="mail" @blur="checkMail" autocomplete="off" type="email" pattern="^$" required>
                </div>
                <p class="alert-text">{{ mailAlertText }}</p>
            </div>
            <div class="form-item">
                <div class="input-box">
                    <label for="age">年齡</label>
                    <input id="age" v-model="age" @blur="checkAge" @keydown="preventNegativeInput" @input="validateAge" autocomplete="off" type="number" pattern="" required>
                </div>
                <p class="alert-text">{{ ageAlertText }}</p>
            </div>
        </div>
        <div class="question-box">
            <div class="question">
                <span></span>
                <span></span>
            </div>
            <div class="selector">
                <input type="checkbox">
                <input type="radio">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.answer-sheet-wrap {
    .title-box {
        .title {
            h1 {

            }
        }
        .date {
            h2 {

            }
        }
    }
    .content-box {
        p {

        }
    }
    .user-info-box {
        .form-item {
            .input-box {
                display: flex;
                width: 300px;
                margin: 20px auto 15px;
                position: relative;

                label {
                    width: 3rem;
                    padding: 0 15px;
                    line-height: 2rem;
                }
            }
            .alert-text {
                width: 30%;
                height: .5rem;
                margin: 0 auto;
                color: #f00;
                font-size: .5rem;
            }
        }
    }
}
</style>