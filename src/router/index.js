import Vue from 'vue'
import Router from 'vue-router'
import { GetUserRoutersApi } from '@/request/api'
import store from '@/store'
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

router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem("edb-authorization-token")
    if (to.path === "/login && token") {
        next("/");
        return;
    }
    if (to.path !== "/login" && !token) {
        next("/login");
        return;
    }

    if (token && store.state.userMenuData.menuData.length == 0) {
        let GetUserRouterApiRes = await GetUserRoutersApi();
        console.log(GetUserRouterApiRes)

        let newUserMenuData = [{ title: "首页", path: "/" }]
        let ret = GetUserRouterApiRes.data.map(item => {
            if (item.children) {
                return {
                    title: item.meta.title,
                    path: item.path,
                    children: item.children.map(sitem => {
                        return {
                            title: sitem.meta.title,
                            path: item.path + "/" + sitem.path
                        }
                    })
                }
            }
            else {
                return {
                    title: item.meta.title,
                    path: item.path,
                }
            }
        })
        newUserMenuData = [...newUserMenuData, ...ret];
        store.commit("userMenuData/changeMenuData", newUserMenuData)
        console.log('我是新数据', newUserMenuData)
    }


    next();
})



export default router;
