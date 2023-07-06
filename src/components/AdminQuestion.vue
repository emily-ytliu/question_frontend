<script>
import { useEventBusStore } from '../stores/eventBus'
import SmallBtn from './SmallBtn.vue'
export default {
    components: {
        SmallBtn
    },
    data() {
        return {
            // Top
            qInput: "",
            notNull: false,
            selector: "",
            typeValue: "請選擇",
            addOrupdateBtn: "新增問題",
            // Table
            currentId: 1,
            updatedRowIndex: null,
            isEditing: false,
            tableKey: 0,

            status: "",
            qId: this.$route.params.qId,
            updatedData: [],
        }
    },
    computed: {
        // Table
        // 1. Top傳到Table
        tableData() {
            const eventBusStore = useEventBusStore();
            return eventBusStore.tableData;
        },
        // 特定問卷資料
        // getQuestionOne() {
        //     const eventBusStore = useEventBusStore();
        //     return eventBusStore.questionData;
        // }
    },
    methods: {
        // Top
        // 下拉選單組件的值
        selectOption(option) {
            this.typeValue = option;
        },
        // 1. Top傳到Table
        goToTable() {
            // 防呆
            // 欄位是空
            if (this.qInput === ""
                || this.selector === ""
                || this.typeValue === "請選擇") {
                return this.$swal("注意!", "有欄位未填寫", "warning");
            }

            const eventBusStore = useEventBusStore();
            // 將輸入的內容儲存到updatedData中

            // 3. 如果有點擊editBtn，
            // 使用row的index更新表格資料
            if (this.updatedRowIndex !== null) {
                const eventBusStore = useEventBusStore();
                const originalData = eventBusStore.tableData[this.updatedRowIndex];
                // 修改資料不更改id
                this.updatedData = {
                    id: originalData.id,
                    question: this.qInput,
                    type: this.typeValue,
                    notNull: this.notNull ? "V" : "X",
                    selector: this.selector,
                };
                // .splice(開始操作的index位置, 刪除的元素數量, 要新增的元素)
                eventBusStore.tableData.splice(this.updatedRowIndex, 1, this.updatedData);
                this.updatedRowIndex = null;
            } else {
                // 如果updatedRowIndex是null，
                // 表示此筆是新資料，直接儲存到Pinia
                this.updatedData = {
                    id: this.currentId++,
                    question: this.qInput,
                    type: this.typeValue,
                    notNull: this.notNull ? "V" : "X",
                    selector: this.selector,
                }
                const eventBusStore = useEventBusStore();
                eventBusStore.addToTableData(this.updatedData);
            }

            this.isEditing = true;

            this.addOrupdateBtn = this.isEditing ? "新增問題" : "確定修改";

            // :key 強制重新渲染 vxe-table
            // :key 屬性綁定到 tableKey，
            // 透過增加 tableKey 的值來觸發 vxe-table 被卸載並重新載入
            this.tableKey += 1;

            // 包裝在 $nextTick 的回調函數中，確保在 DOM 更新完成後才執行
            this.$nextTick(() => {
                this.clearInput();
            });
        },
        clearInput() {
            this.qInput = "";
            this.notNull = false;
            this.selector = "";
            this.typeValue = "請選擇";
        },
        // 2. editBtn傳到Top
        handleEditBtnClick(row) {
            console.log(row)

            this.qInput = row.question;
            this.notNull = row.notNull === "V" ? true : false;
            this.selector = row.selector;
            this.typeValue = row.type;

            // 3. 將選擇row的index儲存
            const rowIndex = this.tableData.indexOf(row);
            this.updatedRowIndex = rowIndex;

            this.addOrupdateBtn = "確定修改";
        },
        // 新增問卷儲存到資料庫
        addToDB() {
            let questionList = [];
            let notNullList = [];
            let typeList = [];
            let selectorList = [];

            for (let i = 0; i < this.tableData.length; i++) {
                // this.tableData[i].id;
                let question = this.tableData[i].question;
                let notNull = this.tableData[i].notNull === "V" ? true : false;
                let type = this.tableData[i].type;
                let selector = this.tableData[i].selector;

                questionList.push(question);
                notNullList.push(notNull);
                typeList.push(type);
                selectorList.push(selector.join(";"));
            }

            let strQuestionList = questionList.join(", ");
            let strNotNullList = notNullList.join(", ");
            let strTypeList = typeList.join(", ");
            let strSelectorList = selectorList.join(", ");

            let title = sessionStorage.getItem("qTitle");
            let content = sessionStorage.getItem("qContent");
            let start = sessionStorage.getItem("qStart");
            let end = sessionStorage.getItem("qEnd");

            if (title === null || content === null) {
                return this.$swal("注意！", "問題大綱未填寫", "warning")
                .then(() => {
                    this.$router.push("/back-admin/content");
                });  
            }

            // fetch新增問卷後端
            const body = {
                "title": title,
                "description": content,
                "start_date": start,
                "end_date": end,

                "question_title": strQuestionList,
                "not_null": strNotNullList,
                "type": strTypeList,
                "question_selector": strSelectorList
            }
            fetch("http://localhost:8080/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(body),
                credentials: 'include', 
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === "資料不正確") {
                    return this.$swal(data.message, "無法儲存", "error");  
                }
                if (data.message === "新增問卷成功") {
                    console.log(data);

                    sessionStorage.removeItem("qTitle"); 
                    sessionStorage.removeItem("qContent");
                    sessionStorage.removeItem("qStart");
                    sessionStorage.removeItem("qEnd");

                    this.$swal(data.message, "可以到總表查看囉！", "success")
                    .then(() => {
                        this.$router.push("/back-home");
                    });  
                }
            });
        },
        fetchGetOne() {
            // fetch查詢特定問卷後端
            const body = {
                "outline_id": this.qId,
            }
            fetch("http://localhost:8080/get_one", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(body),
                credentials: 'include', 
            })
            .then(response => response.json())
            .then(data => {
                console.log("印看看:")
                console.log(data);

                if (this.qId !== null && data !== undefined) {
                    const qDataList = data.question;
                    let titleAry = qDataList.questionTitle.split(", ");
                    let typeAry = qDataList.type.split(", ");
                    let notNullAry = qDataList.notNull.split(", ");
                    let selectorAry = qDataList.questionSelector.split(", ");

                    this.updatedData = []; // 清空updatedData

                    for (let i = 0; i < titleAry.length; i++) {
                        this.updatedData.push({
                            id: i+1,
                            question: titleAry[i],
                            type: typeAry[i],
                            notNull: notNullAry[i] ? "V" : "X",
                            selector: selectorAry[i],
                        }); 
                    }
                } 
                const eventBusStore = useEventBusStore();
                eventBusStore.addToTableData(this.updatedData);
            })
        },
        // 修改問卷儲存資料庫
        changeToDB() {
            // fetch修改問卷後端
            const body = {
                "title": title,
                "description": content,
                "start_date": start,
                "end_date": end,

                "question_title": strQuestionList,
                "not_null": strNotNullList,
                "type": strTypeList,
                "question_selector": strSelectorList
            }
            fetch("http://localhost:8080/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(body),
                credentials: 'include', 
            })
            .then(response => response.json())
            .then(data => {

            })
        }
    },
    mounted() {
        const eventBusStore = useEventBusStore();
        eventBusStore.tableData;
        this.fetchGetOne();
    }
}
</script>

<template>
    <div class="admin-question-wrap">
        <!-- Top -->
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
                        <div class="select-drop">
                            <div class="drop-option">
                                <span>{{ typeValue }}</span>
                            </div>
                            <ul class="dropdown">
                                <li @click="selectOption('單選')">單選</li>
                                <li @click="selectOption('多選')">多選</li>
                            </ul>
                        </div>
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
                <button type="button" @click="goToTable">{{ addOrupdateBtn }}</button>
            </div>
        </div>
        <!-- Table -->
        <div class="admin-question-table-wrap">
            <div class="btn-box">
                <vxe-button icon="vxe-icon-delete" circle></vxe-button>
            </div>
            <vxe-table
                ref="table"
                :key="tableKey"
                :data="tableData"
                :border=true
                header-align="center"
                align="center">
                <vxe-table-column
                    type="checkbox"
                    width="50"></vxe-table-column>
                <vxe-table-column
                    field="id"
                    title="#"
                    width="50"></vxe-table-column>
                <vxe-table-column
                    field="question"
                    title="問題"
                    show-overflow
                    align="left"
                    header-align="center"></vxe-table-column>
                <vxe-table-column
                    field="type"
                    title="題型"
                    show-overflow
                    width="80"></vxe-table-column>
                <vxe-table-column
                    field="notNull"
                    title="必填"
                    width="80"></vxe-table-column>
                <vxe-table-column
                    width="80"
                    title="編輯">
                    <template #default="{ row }">
                        <vxe-button 
                            icon="vxe-icon-edit" 
                            class="edit-icon" 
                            @click="handleEditBtnClick(row)"></vxe-button>
                    </template>
                </vxe-table-column>
            </vxe-table>
        </div>
        <!-- Button -->
        <div class="bottom-btn-box">
            <SmallBtn type="button" :btnText="'取消'" />
            <SmallBtn @click="addToDB" type="button" :bgc="'var(--orange-dark)'" :color="'var(--font-light)'" :btnText="'確認'" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.admin-question-wrap {
    // Top
    .admin-question-top-wrap {
        width: 600px;
        margin: 0 auto;
        .question-box {
            margin: 40px 0;
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
                    // 下拉選單
                    .select-drop {
                        width: 90px;
                        position: relative;
                        
                        &:hover{
                            .dropdown {
                                display: block;
                                position: absolute;
                            }
                        }
                        .drop-option {
                            position: relative;
                            padding: 0 10px;
                            line-height: 2rem;
                            border: 1px solid var(--grey-light);
                            border-radius: 4px;
                            color: var(--grey-dark);
                            cursor: pointer;

                            &::after {
                            content: "";
                            position: absolute;
                            top: 12px;
                            right: 12px;
                            border-width: 8px 6px;
                            border-style: solid;
                            border-color: var(--grey-dark) transparent transparent;
                            }

                            span {

                            }
                        }
                        .dropdown {
                            display: none;
                            padding: 10px;
                            background-color: #f9f9f9;
                            box-shadow: 0px 2px 3px 0px #ccc;
                            border-radius: 4px;

                            li {
                                padding: 0 10px;
                                line-height: 2rem;
                                cursor: pointer;
                                &:hover {
                                    border-radius: 4px;
                                    background-color: var(--orange-light);
                                    color: #000;
                                }
                            }
                        }
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
    // Table
    .admin-question-table-wrap {
        padding: 0 180px;
        .btn-box {
            padding: 10px 8px;
        }
        .edit-icon {
            border: none;
        }
    }
    // Button
    .bottom-btn-box {
        display: flex;
        justify-content: space-between;
        width: 600px;
        margin: 40px auto;
    }
}
</style>