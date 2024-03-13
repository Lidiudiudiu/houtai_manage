import Vue from "vue";
import SvgIcon from "./SvgIcon.vue";
Vue.component("svg-icon", SvgIcon) //全局注册组件

const req = require.context('@/assets/icons/svg', false, /\.svg$/)
const requireAll = requireContext => {
    // requireContext.keys()数据：['./404.svg', './agency.svg', './det.svg', './user.svg']
    requireContext.keys().map(requireContext)
}
requireAll(req)
