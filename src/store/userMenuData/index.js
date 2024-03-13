export default {
    namespaced: true,
    state: {
        menuData: []
    },
    mutations: {
        changeMenuData(state, payload) {
            state.menuData = payload;
            console.log("vuex", state.menuData)
        }
    }
}