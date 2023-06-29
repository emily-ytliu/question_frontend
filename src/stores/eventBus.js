import { defineStore } from 'pinia';

export const useEventBusStore = defineStore('eventBus', {
    state: () => ({
        // 定義需要共享的資料
        tableData: [],
    }),
    getters: {
        getTableData() {
            return this.tableData;
        },
    },
    actions: {
        // 定義觸發事件的方法
        // 1. Top傳到Table
        addToTableData(topData) {
            this.tableData.push(topData);
        },
        setTableData(newData) {
            this.tableData = newData;
        },
    }
})