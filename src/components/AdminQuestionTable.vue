<script>
export default {
    components: {
    },
    data() {
        return {
            data: [
                { id: 1, question: '喜歡的顏色?', select: '單選', notNull: 'V' },
                { id: 2, question: '討厭的食物?', select: '多選', notNull: 'X' },
            ]
        }
    },
    methods: {
    },
    mounted() {
        
    }
}
</script>

<template>
    <div class="admin-question-table-wrap">
      <vxe-table
        :data="this.data"
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
        field="select"
        title="選項"
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
    .edit-icon {
        border: none;
    }
}
</style>