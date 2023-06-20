<script>
export default {
    components: {

    },
    data() {
        return {
            tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
              ],
            gridOptions: {
                border: true,
                columns: [
                  { type: 'seq', width: 50 },
                  { field: 'name', title: 'NName', slots: { default: 'name' } },
                  { field: 'sex', title: 'SSex', showHeaderOverflow: true },
                  { field: 'address', title: 'AAddress', showOverflow: true }
                ],
                data: [
                  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
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
        <vxe-button icon="vxe-icon-add" circle></vxe-button>
        <vxe-button status="primary" icon="vxe-icon-delete" circle></vxe-button>
        <vxe-table :data="tableData">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column field="name" title="Namee">
            <template #default="{ row }">
              <span>自定义插槽模板 {{ row.name }}</span>
            </template>
          </vxe-column>
          <vxe-column field="sex" title="Sexx"></vxe-column>
          <vxe-column field="age" title="Agee"></vxe-column>
        </vxe-table>

        <vxe-grid v-bind="gridOptions">
          <template #name="{ row }">
            <span>自定义插槽模板 {{ row.name }}</span>
          </template>
        </vxe-grid>
    </div>
</template>

<style lang="scss" scoped>

</style>