import { defineStore } from 'pinia';

export const useEventBusStore = defineStore('eventBus', {
    state: () => ({
        // 定義需要共享的資料
        tableData: [],

        qInput: "",
        notNull: false,
        selector: "",
        typeValue: "",
    }),
    actions: {
        // 定義觸發事件的方法
        addToTableData(topData) {
            this.tableData.push(topData);
        },
        setTopData(dataFromTable) {
            // this.input = ;
            // this.notNull = ;
            // this.selector = ;
            // this.typeValue = ;
        },
    }
})