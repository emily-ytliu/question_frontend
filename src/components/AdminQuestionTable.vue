<script>
import { useEventBusStore } from '../stores/eventBus'
export default {
    components: {
    },
    data() {
        return {
          internalTableData: [],
          buttons: [],  // 放入edit-btn的index
        }
    },
    computed: {
      // 1. Top傳到Table
      tableData() {
        const eventBusStore = useEventBusStore();
        return eventBusStore.tableData;
      },
      // 生成編輯按鈕的同時，添加index到buttons
      generatedButtons() {
        return this.buttons.map((button, index) => ({
          index: index,
        }));
      },
    },
    methods: {
      // 2. eidtBtn傳到Top
      handleBtnClick(index) {
        const eventBusStore = useEventBusStore();
        const tableData = eventBusStore.tableData;
        const selectorData = eventBusStore.selector;
        // 調用Pinia定義的方法
        eventBusStore.editBtnToTopData({ 
          tableData,
          selectorData
        });
      },
      // 添加新按鈕
      addEditBtn() {
        this.buttons.push({});
      },
    },
    created() {
      // 1. Top傳到Table
      this.internalTableData = this.tableData;
      
      this.$nextTick(() => {
        console.log(this.internalTableData)
      });
      
      // 添加新按鈕 
      this.addEditBtn();
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
          <vxe-button 
          icon="vxe-icon-edit" 
          class="edit-icon" 
          v-for="(button, index) in buttons" 
          :key="index" 
          @click="handleBtnClick(index)"></vxe-button>
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