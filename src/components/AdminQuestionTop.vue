<script>
import SelectDropdown from './SelectDropdown.vue';
export default {
    components: {
        SelectDropdown
    },
    data() {
        return {
            qInput: "",
            notNull: "",
            selector: "",
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <div class="admin-question-top-wrap">
        <div class="question-box">
            <div class="group group-box-1">
                <div class="item q-box">
                    <label for="qTitle">問題</label>
                    <input type="text" id="qTitle"
                    v-model="qInput">
                </div>
                <div class="item not-null-box">
                    <input type="checkbox" id="notNull" v-model="notNull">
                    <label for="notNull">必填</label>
                </div>
            </div>
            <div class="group group-box-2">
                <div class="item">
                    <SelectDropdown />
                </div>
                <div class="item selector-box">
                    <label for="selector">選項</label>
                    <input type="text" id="selector"
                    v-model="selector">
                </div>
                <div class="item">
                    <p>( 多個選項用 ; 分隔 )</p>
                </div>
            </div>         
            <button type="button">新增問題</button>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
.admin-question-top-wrap {
    width: 50%;
    margin: 40px auto;
    .question-box {
        .group {
            display: flex;
            margin: 0 auto;
            padding: 0 10px 20px;

            .item {
                display: flex; 

                label {
                    padding-right: 15px;
                    line-height: 2rem;
                }
            }
        }
        .group-box-1 {
            .q-box {
                width: 88%;

                input {
                    width: 86%;
                }
            }
            .not-null-box {
                label {
                    padding: 0 5px;
                    font-size: .9rem;
                }

                input[type="checkbox"] {
                /* 移除預設 input styles */
                appearance: none;
                width: 1rem;
                height: 1rem;
                margin-top: 8px;
                display: grid;
                place-content: center;
                }

                input[type="checkbox"]::before {
                content: "";
                width: .6rem;
                height: .6rem;
                clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
                transform: scale(0);
                transform-origin: bottom left;
                transition: 120ms transform ease-in-out;
                box-shadow: inset 1em 1em var(--orange-dark);
                /* Windows High Contrast Mode */
                background-color: CanvasText;
                }

                input[type="checkbox"]:checked::before {
                transform: scale(1);
                }
            }
        }
        .group-box-2 {
            .selector-box {
                width: 334px;
                margin: 0 10px 0 30px;

                input {
                    width: 265px;
                }
            }

            p {
                height: fit-content;
                margin: auto 0;
                font-size: .8rem;
                color: var(--grey-darker);
            }
        }
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