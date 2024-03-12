
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'mainlayout',
            component: () => import('../views/layout/MainLayout.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login/LoginView.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("edb-authorization-token")
    if (to.path === "/login && token") {
        next("/");
        return;
    }
    if (to.path !== "/login" && !token) {
        next("/login");
        return;
    }
    next();
})



export default router;
