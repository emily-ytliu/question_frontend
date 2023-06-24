<script>
export default {
    components: {
    },
    props: ["btnText", "bgc", "color"],
    data() {
        return {
            defaultBgc: "var(--orange-light)"
        }
    },
    methods: {
    },
    computed: {
        computedBgc() {
            return this.bgc || this.defaultBgc;
        } 
    },
    mounted() {
    }
}
</script>

<template>
    <div class="small-btn-wrap">
        <button :style="{ 'background-color': computedBgc, 'color': color }">{{ btnText }}</button>
    </div>
</template>

<style lang="scss" scoped>
.small-btn-wrap {
    button {
        width: 80px;
        border: none;
        border-radius: 50px;
        line-height: 2rem;
        box-shadow: 0px 2px 3px 0px rgba(240, 188, 136, 0.5);
        font-weight: bold;
        cursor: pointer;
        transition: .3s;
        
        &:hover {
            transform: translateY(-3px);
        }
        &:active {
            scale: .95;
        }
    }
}
</style>