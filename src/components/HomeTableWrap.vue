<script>
import { RouterLink} from 'vue-router'
export default {
    components: {
    },
    data() {
        return {
            currentRoute: this.$route.path,
            tableData: [],
            hideBtn: false,
        }
    },
    methods: {
      hideCheckboxEdit() {
          return this.currentRoute !== "/";
      },
      hideWrite() {
          return this.currentRoute !== "/back-home";
      },
      hideBtns() {
        if (this.currentRoute === "/") {
          this.hideBtn = true;
        }
        else {
          this.hideBtn = false;
        }
      }
    },
    mounted() {
      this.hideBtns();
      // fetch 後端API
      fetch("http://localhost:8080/get_all", {
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include', 
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        
        for (let i = 0; i < data.outlineList.length; i++) {
          this.tableData.push({
            id: data.outlineList[i].outlineId,
            qTitle: data.outlineList[i].title,
            status: data.outlineList[i].status,
            startDate: data.outlineList[i].startDate,
            endDate: data.outlineList[i].endDate
          });
          
        }
        
      })
    },
}
</script>

<template>
    <div class="home-table-wrap">
      <div class="btn-box" :class="{ hide: hideBtn }">
        <vxe-button icon="vxe-icon-delete" circle></vxe-button>
        <RouterLink to="/back-admin/content"><vxe-button icon="vxe-icon-add" circle class="add-btn"></vxe-button></RouterLink>
      </div>
      <vxe-table
        :data="this.tableData"
        :border=true
        align="center"
        >
        <vxe-column 
          type="checkbox" 
          width="50" 
          field="checkbox"
          :visible="hideCheckboxEdit()"></vxe-column>
        <vxe-column 
          type="seq" 
          width="50"></vxe-column>
        <vxe-column 
          width="80" 
          field="edit" 
          title="編輯"
          :visible="hideCheckboxEdit()">
          <RouterLink to="/back-admin/content"><vxe-button icon="vxe-icon-edit" class="edit-icon">
          </vxe-button></RouterLink>
        </vxe-column>
        <vxe-column 
          width="80" 
          field="write" 
          title="填寫"
          :visible="hideWrite()">
          <vxe-button icon="vxe-icon-edit" class="edit-icon"></vxe-button>
        </vxe-column>
        <vxe-column 
          field="qTitle" 
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
  margin: 20px 0;
  padding: 0 60px;
  .hide {
    display: none;
  }
  .btn-box {
    padding: 10px 8px;
    .add-btn {
        margin-left: 14px;
        background-color: var(--orange-light);
        border: 1px solid var(--orange-dark);
    }
}
  .edit-icon {
        border: none;
    }
}
</style>