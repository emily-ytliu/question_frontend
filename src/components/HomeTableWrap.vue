<script>
import { useEventBusStore } from '../stores/eventBus'
import { RouterLink} from 'vue-router'
export default {
  components: {
  },
  data() {
      return {
          currentRoute: "",
          tableData: [],
          hideBtn: false,
          newOutlineId: 0,
          start: "",
          end: "",
      }
  },
  created() {
    this.currentRoute = this.$route.path;
    this.$router.afterEach((to, from) => {
      this.currentRoute = to.path;
    });
  },
  computed: {
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
    },
    handleEditClick() {
      console.log(this.currentRoute);
      if (this.currentRoute === "/back-home") {
        this.$router.push("/back-admin/content");
      }
      else {
        this.$router.push("/front-answer");
      }
    },
    updateStatus() {
      // 用日期來判斷status
      // 未開放、進行中、已結束 (前端判斷就好，不用存資料庫)
      const today = new Date();
      if (today < this.start) {
        this.status = "未開放";
      }
      if (today >= this.start && today <= this.end) {
        this.status = "進行中";
      }
      if (today > this.end) {
        this.status = "已結束";
      }
    },
  },
  mounted() {
    this.currentRoute = this.$route.path;
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
        // // 用日期來判斷status
        this.start = new Date(data.outlineList[i].startDate);
        this.end = new Date(data.outlineList[i].endDate);
        this.updateStatus();

        this.tableData.push({
          id: data.outlineList[i].outlineId,
          qTitle: data.outlineList[i].title,
          status: this.status,
          startDate: data.outlineList[i].startDate,
          endDate: data.outlineList[i].endDate
        });
        
      }

      // 後台HomeTableWrap點擊新增按鈕時，
      // 把最後一筆id+1，傳到AdminQuestion
      if (data.outlineList.length === 0) {
        this.newOutlineId = 1;
      }
      else {
        this.newOutlineId = data.outlineList[data.outlineList.length-1].outlineId+1;
      }
      // 加入newOutlineId到Pinia儲存
      const eventBusStore = useEventBusStore();
      eventBusStore.setNewOutlineId(this.newOutlineId);

      // console.log(this.newOutlineId);
    })
  },
}
</script>

<template>
    <div class="home-table-wrap">
      <div class="btn-box" :class="{ hide: hideBtn }">
        <vxe-button icon="vxe-icon-delete" circle></vxe-button>
        <RouterLink to="/back-admin/content">
          <vxe-button icon="vxe-icon-add" circle class="add-btn"></vxe-button>
        </RouterLink>
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
          field="id"
          title="#"
          width="50"></vxe-column>
        <vxe-column 
          width="80" 
          field="edit" 
          title="編輯"
          :visible="hideCheckboxEdit()">
            <vxe-button 
              icon="vxe-icon-edit" 
              class="edit-icon" 
              @click="handleEditClick">
            </vxe-button>
        </vxe-column>
        <vxe-column 
          width="80" 
          field="write" 
          title="填寫"
          :visible="hideWrite()">
          <vxe-button 
            icon="vxe-icon-edit" 
            class="edit-icon"
            @click="handleEditClick"></vxe-button>
        </vxe-column>
        <vxe-column 
          field="qTitle" 
          title="問卷標題" 
          show-overflow></vxe-column>
        <vxe-column 
          width="80" 
          field="status" 
          title="狀態" 
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