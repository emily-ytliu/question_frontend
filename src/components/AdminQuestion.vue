<script>
import SelectDropdown from './SelectDropdown.vue';
export default {
    components: {
        SelectDropdown
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
            <div class="item">
                <SelectDropdown />
            </div>
            <div class="item">
                
            </div>
            
            
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
.admin-question-wrap {
    .question-box {
        .item {
            display: flex;
            width: 480px;
            margin: 20px auto;

            label {
                padding: 0 15px;
                line-height: 2rem;
            }
        }
    }
}
</style>