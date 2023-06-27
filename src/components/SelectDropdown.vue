<script>
export default {
    components: {
    },
    data() {
        return {
            select: "請選擇",
        }
    },
    methods: {
        selectOption(option) {
            this.select = option;
            this.$emit("toOutside", this.select)
        },
    },
    mounted() {

    }
}
</script>

<template>
    <div class="select-drop">
        <div class="drop-option">
            <span>{{ select }}</span>
        </div>
        <ul class="dropdown">
            <li @click="selectOption('單選')">單選</li>
            <li @click="selectOption('多選')">多選</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.select-drop {
    width: 90px;
    position: relative;
    
    &:hover{
        .dropdown {
            display: block;
            position: absolute;
        }
    }
    .drop-option {
        position: relative;
        padding: 0 10px;
        line-height: 2rem;
        border: 1px solid var(--grey-light);
        border-radius: 4px;
        color: var(--grey-dark);
        cursor: pointer;

        &::after {
        content: "";
        position: absolute;
        top: 12px;
        right: 12px;
        border-width: 8px 6px;
        border-style: solid;
        border-color: var(--grey-dark) transparent transparent;
        }

        span {

        }
    }
    .dropdown {
        display: none;
        padding: 10px;
        background-color: #f9f9f9;
        box-shadow: 0px 2px 3px 0px #ccc;
        border-radius: 4px;

        li {
            padding: 0 10px;
            line-height: 2rem;
            cursor: pointer;
            &:hover {
                border-radius: 4px;
                background-color: var(--orange-light);
                color: #000;
            }
        }
    }
}
</style>