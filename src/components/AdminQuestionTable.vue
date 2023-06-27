<script>
import { useEventBusStore } from '../stores/eventBus'
export default {
    components: {
    },
    data() {
        return {
          internalTableData: [],
        }
    },
    methods: {
    },
    computed: {
      tableData() {
        const eventBusStore = useEventBusStore();
        return eventBusStore.tableData;
      }
    },
    mounted() {
      this.internalTableData = this.tableData;
      console.log(this.internalTableData)
    }
}
</script>

<template>
    <div class="admin-question-table-wrap">
      <div class="btn-box">
        <vxe-button icon="vxe-icon-delete" circle></vxe-button>
      </div>
      <vxe-table
        :data="this.internalTableData"
        :border=true
        header-align="center"
        align="center">
      <vxe-table-column
        type="checkbox"
        width="50"></vxe-table-column>
      <vxe-table-column
        type="seq"
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
          <vxe-button icon="vxe-icon-edit" class="edit-icon"></vxe-button>
      </vxe-table-column>
    </vxe-table>
    </div>
</template>

<style lang="scss" scoped>
.admin-question-table-wrap {
    padding: 0 180px;
    .btn-box {
        padding: 10px 8px;
    }
    .edit-icon {
        border: none;
    }
}
</style>