import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: ()=>import('../views/Login'),
        children: [{
            path:'register',
            name:'Register',
            component:()=>import('../views/Register')
        },{
            path: 'loginUser',
            name:'LoginUser',
            component:()=>import('../views/LoginUser')
        }
        ]
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home'),
        children: [{
            path: '/mainPage',
            name: 'MainPage',
            component: () => import('../views/MainPage')
        },{
            path: '/articleDetails',
            name: 'ArticleDetails',
            component: () => import('../views/ArticleDetails')
        },{
            path: '/myInfo',
            name: 'MyInfo',
            component: () => import('../views/MyInfo')
        },{
            path: '/favorites',
            name: 'Favorites',
            component:()=>import('../views/Favorites')
        },
            {
            path: '/attention',
            name: 'Attention',
            component:()=>import('../views/Attention')
        },
            {
            path: '/fans',
            name: 'Fans',
            component:()=>import('../views/Fans')
        },
            {
            path: '/writeArticle',
            name: 'WriteArticle',
            component:()=>import('../views/WriteArticle')
        }
        ]
    },

]




const router = new VueRouter({
    /*mode: 'history',*/
    base: process.env.BASE_URL,
    routes
})

export default router
