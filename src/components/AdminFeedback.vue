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
                  { type: 'seq', width: 50 },
                  { field: 'name', title: '姓名', showOverflow: true },
                  { field: 'time', title: '填寫時間', showOverflow: true },
                  { width: 80, field: 'detail', title: '詳細內容', render: this.renderEditBtn },
                ],
                data: [
                  { id: 1, name: '第一人', time: '2021/10/23' },
                  { id: 2, name: '第二人', time: '2021/03/04' },
                ]
            }
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <div class="admin-feedback-wrap">
        <vxe-grid v-bind="gridOptions"></vxe-grid>
    </div>
</template>

<style lang="scss" scoped>
.admin-feedback-wrap {
    padding: 40px 180px;
}
</style>