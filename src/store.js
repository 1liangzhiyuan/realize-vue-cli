// 引入vue
import Vue from 'vue';
// 引入vuex和store
import Vuex, { Store } from 'vuex';

// 安装
Vue.use(Vuex);

// 实例化
export default new Store({
    // 数据
    state: {
        num: 100
    },
    getters: {},
    mutations: {},
    actions: {}
})