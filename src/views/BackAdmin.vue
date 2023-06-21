<script>
import { RouterLink, RouterView } from 'vue-router'
import AdminContent from "../components/AdminContent.vue"
import AdminQuestion from "../components/AdminQuestion.vue"
import AdminFeedback from "../components/AdminFeedback.vue"
import AdminResult from "../components/AdminResult.vue"
export default {
    components: {
        AdminContent,
        AdminQuestion,
        AdminFeedback,
        AdminResult
    },
    data() {
        return {
            currentRoute: this.$route.path,
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <div class="back-admin-wrap">
        <nav>
            <ul class="nav-box">
                <li class="nav-item" :class="{'content': currentRoute === '/backAdmin/content'}">
                    <RouterLink to="/backAdmin/content">
                        問卷
                    </RouterLink>
                </li>
                <li class="nav-item" :class="{'question': currentRoute === '/backAdmin/question'}">
                    <RouterLink to="/backAdmin/question">
                        題目
                    </RouterLink>
                </li>
                <li class="nav-item" :class="{'feedback': currentRoute === '/backAdmin/feedback'}">
                    <RouterLink to="/backAdmin/feedback">
                        回饋
                    </RouterLink>
                </li>
                <li class="nav-item" :class="{'result': currentRoute === '/backAdmin/result'}">
                    <RouterLink to="/backAdmin/result">
                        統計
                    </RouterLink>
                </li>
            </ul>
        </nav>
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
    .back-admin-wrap {
        nav {
            .nav-box {
                display: flex;
                justify-content: center;
                padding-top: 20px;
                background-color: #ef9038;
                .nav-item {
                    margin: 0 10px;
                    border-radius: .5rem .5rem 0 0;
                    text-align: center;
                    font-weight: 700;
                    cursor: pointer;
                    transition: .3s;

                    a {
                        display: block;
                        padding: 20px 30px 15px;
                        color: #fff;
                    }
                }

                .content,
                .question,
                .feedback,
                .result {
                background-color: #fff;
                    a {
                        color: #3e241b;
                    }
                }
            }
        }
    }
</style>