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
            component: () => import('../views/layout/MainLayout.vue'),
            redirect: "/home",
            children: [

            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login/LoginView.vue')
        },
        {
            path: '*',
            component: () => import('../views/404.vue')
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    // if (to.path === '/login') {
    //     next()
    //     var tokenStr = window.sessionStorage.getItem('token')
    // }
    // if (!tokenStr) {
    //     next()
    // } else {
    //     next('/login')
    // }

    const token = localStorage.getItem("edb-authorization-token")
    if (to.path === "/login" && token) {
        next("/");
        return;
    }
    if (to.path !== "/login" && !token) {
        next("/login");
        return;
    }

    if (token && store.state.userMenuData.menuData.length == 0) {
        let GetUserRoutersApiRes = await GetUserRoutersApi();
        let newUserMenuData = [{ title: "首页", path: "/home" }]
        console.log("获取用户路由api:", GetUserRoutersApiRes)
        let ret = GetUserRoutersApiRes.data.map(item => {
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
        //以上生成菜单数据
        //以下用户可以访问的路由数据
        let newChildrenRoutes = [{
            path: "/home",
            meta: { titles: ["首页"] },
            component: () => import('../views/HomeView.vue')
        },
        {
            path: "/profile",
            meta: { titles: ["个人中心"] },
            component: () => import('../views/Profile.vue')
        }
        ]


        GetUserRoutersApiRes.data.forEach(item => {
            let ret = item.children.map(sitem => {
                return {
                    path: item.path + "/" + sitem.path,
                    meta: {
                        titles: [item.meta.title, sitem.meta.title]
                    },
                    component: () => import(`../views${item.path}/${sitem.name}.vue`)
                }
            })
            newChildrenRoutes = [...newChildrenRoutes, ...ret]
        })

        newChildrenRoutes.forEach(item => {
            router.addRoute("mainlayout", item);
        });
        next(to.path)
        return
    }


    next();
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router;
