<script>
import { RouterLink, RouterView } from 'vue-router'
import AdminContent from "../components/AdminContent.vue"
import AdminQuestion from "../components/AdminQuestion.vue"
import AdminFeedback from "../components/AdminFeedback.vue"
import AdminResult from "../components/AdminResult.vue"
import SmallBtn from '../components/SmallBtn.vue'
export default {
    components: {
        AdminContent,
        AdminQuestion,
        AdminFeedback,
        AdminResult,
        SmallBtn
    },
    data() {
        return {
            currentRoute: this.$route.path,
            qId: this.$route.params.qId,
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
                <li class="nav-item" 
                    :class="{'content': currentRoute === `/back-admin/content/${qId}`}">
                    <RouterLink :to="`/back-admin/content/${qId}`">問卷</RouterLink>
                </li>
                <li class="nav-item" 
                    :class="{'question': currentRoute === `/back-admin/question/${qId}`}">
                    <RouterLink :to="`/back-admin/question/${qId}`">題目</RouterLink>
                </li>
                <li class="nav-item" 
                    :class="{'feedback': currentRoute === `/back-admin/feedback/${qId}`}">
                    <RouterLink :to="`/back-admin/feedback/${qId}`">回饋</RouterLink>
                </li>
                <li class="nav-item" 
                    :class="{'result': currentRoute === `/back-admin/result/${qId}`}">
                    <RouterLink :to="`/back-admin/result/${qId}`">統計</RouterLink>
                </li>
            </ul>
            <div class="btn-box">
                <RouterLink to="/back-home">
                    <SmallBtn :btnText="'首頁 Go'"/>
                </RouterLink>
            </div>
        </nav>
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
    .back-admin-wrap {
        nav {
            position: relative;
            .nav-box {
                display: flex;
                justify-content: center;
                padding-top: 20px;
                background-image: linear-gradient(to right, #f87400 0%, #f9d923 100%);
                // background-color: var(--orange-dark);
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
                        color: var(--font-light);
                    }
                }

                .content,
                .question,
                .feedback,
                .result {
                background-color: var(--bg-light);
                    a {
                        color: var(--font-dark);
                    }
                }
            }
            .btn-box {
                position: absolute;
                top: 33px;
                right: 40px;
            }
        }
    }
</style>