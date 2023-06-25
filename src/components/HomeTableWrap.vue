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
                  { field: 'question', title: '問卷標題', showOverflow: true },
                  { width: 150, field: 'status', title: '狀態', showOverflow: true },
                  { width: 150, field: 'startDate', title: '開始時間' },
                  { width: 150, field: 'EndDate', title: '結束時間' },
                  { width: 50, type: '', field: '', width: 50, title: '統計' },
                  // { field: 'name', title: 'NName', slots: { default: 'name' } },
                  // { field: 'role', title: 'RRole', showHeaderOverflow: true },
                ],
                data: [
                  { id: 1, question: '中山大學資管類 72 - 購買傾向調查 #21', status: '開放中', startDate: '2021/10/01', EndDate: '2021/10/21' },
                  { id: 2, question: '星巴克裕誠店最佳員工票選', status: '開放中', startDate: '2021/03/01', EndDate: '2021/04/01' },
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
    <div class="home-table-wrap">
        <vxe-grid v-bind="gridOptions">
          <!-- <template #name="{ row }"> -->
            <!-- <span>自定义插槽模板 {{ row.name }}</span> -->
          <!-- </template> -->

          
        </vxe-grid>
    </div>
</template>

<style lang="scss" scoped>
.home-table-wrap {
  padding: 0 60px;
}
</style>