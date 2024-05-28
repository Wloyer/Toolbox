import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Header from '../components/organisms/Header/Header.vue'
import Footer from '../components/organisms/Footer/Footer.vue'
import PostIt from '../views/PostIt.vue'
import PostItHeader from '../components/organisms/Header/PostItHeader.vue'
import PostItFooter from '../components/organisms/Footer/PostItFooter.vue'
import calculator from '../views/Calculator.vue'
import CalculatorHeader from '../components/organisms/Header/CalculatorHeader.vue'
import CalculatorFooter from '../components/organisms/Footer/CalculatorFooter.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: {
                default: HomeView,
                header: Header,
                footer: Footer
            }
        },
       {
            path: 'PostIt',
            name: 'PostIt',
            components: {
                default: PostIt,
                postItHeader: PostItHeader,
                postItFooter: PostItFooter
            }
        },
        {
            path: 'Calculator',
            name: 'Calculator',
            components: {
                default: calculator,
                todoHeader: CalculatorHeader,
                todoFooter: CalculatorFooter
            }
        }
    ]
})

export default router
