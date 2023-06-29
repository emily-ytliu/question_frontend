import { defineStore } from 'pinia';

export const useEventBusStore = defineStore('eventBus', {
    state: () => ({
        // 定義需要共享的資料
        tableData: [],
    }),
    getters: {
        
    },
    actions: {
        // 定義觸發事件的方法
        // 1. Top傳到Table
        addToTableData(topData) {
            this.tableData.push(topData);
        },
    }
})