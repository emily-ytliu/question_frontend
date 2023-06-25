<script>
export default {
    components: {

    },
    data() {
        return {
            currentRoute: this.$route.path,
            data: [
              { id: 1, question: '中山大學資管類 72 - 購買傾向調查 #21', status: '開放中', startDate: '2021/10/01', endDate: '2021/10/21' },
              { id: 2, question: '星巴克裕誠店最佳員工票選', status: '開放中', startDate: '2021/03/01', endDate: '2021/04/01' },
            ]
        }
    },
    methods: {
      updateColumns() {
            
      }
    },
    mounted() {
      if(this.currentRoute === "/") {
        this.updateColumns();
      } 
    }
}
</script>

<template>
    <div class="home-table-wrap">
      <vxe-table
        :data="this.data"
        :border=true
        align="center"
        >
        <vxe-column 
          type="checkbox" 
          width="50" 
          field="checkbox"></vxe-column>
        <vxe-column 
          type="seq" 
          width="50"></vxe-column>
        <vxe-column 
          width="80" 
          field="edit" 
          title="編輯">
          <vxe-button icon="vxe-icon-edit" class="edit-icon"></vxe-button>
        </vxe-column>
        <vxe-column 
          field="question" 
          title="問卷標題" 
          show-overflow></vxe-column>
        <vxe-column 
          width="80" 
          field="status" title="狀態" 
          show-overflow></vxe-column>
        <vxe-column 
          width="120" 
          field="startDate" 
          title="開始時間"></vxe-column>
        <vxe-column 
          width="120" 
          field="endDate" 
          title="結束時間"></vxe-column>
        <vxe-column 
          width="80" 
          field="statistics" 
          title="統計"></vxe-column>
      </vxe-table>
    </div>
</template>

<style lang="scss" scoped>
.home-table-wrap {
  padding: 0 60px;
  .edit-icon {
        border: none;
    }
}
</style>