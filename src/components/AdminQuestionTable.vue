<script>
export default {
    components: {
    },
    data() {
        return {
            gridOptions: {
                border: true,
                align: "center",
                columns: [
                  { type: 'checkbox', width: 50 },
                  { type: 'seq', width: 50 },
                  { field: 'question', title: '問題', showOverflow: true, align: 'left', headerAlign: 'center', },
                  { width: 80, field: 'select', title: '選項', showOverflow: true },
                  { width: 80, field: 'notNull', title: '必填' },
                  { width: 80, field: 'edit', title: '編輯', render: this.renderEditBtn },
                ],
                data: [
                  { id: 1, question: '喜歡的顏色?', select: '單選', notNull: 'V' },
                  { id: 2, question: '討厭的食物?', select: '多選', notNull: 'X' },
                ]
            }
        }
    },
    methods: {
        renderEditBtn() {
            return `<vxe-button type="text" icon="fa fa-edit"></vxe-button>`;
        },
    },
    mounted() {

    }
}
</script>

<template>
    <div class="admin-question-table-wrap">
        <div class="home-table-wrap">
            <vxe-grid v-bind="gridOptions">

            </vxe-grid>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.admin-question-table-wrap {
    padding: 0 180px;
}
</style>