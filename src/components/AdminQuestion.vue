<script>
export default {
    components: {
    },
    data() {
        return {
            qInput: "",
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <div class="admin-question-wrap">
        <div class="question-box">
            <div class="item">
                <label for="qTitle">問題</label>
                <input type="text" v-model="qInput">
            </div>
            <vxe-button transfer>
                <template #default>選項</template>
                <template #dropdowns>
                    <vxe-button type="text" content="單選"></vxe-button>
                    <vxe-button type="text" content="多選"></vxe-button>
                </template>
            </vxe-button>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>

</style>