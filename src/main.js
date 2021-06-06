// 引入vue
import Vue from 'vue';
// 应用程序组件
import App from './App';
// 引入store
import store from './store';
// 引入路由
import router from './router';
// 引入全局样式文件
import './style.scss';
// 实例化
new Vue({
    // 注册store
    store,
    // 注册路由
    router,
    // 渲染
    render: h => h(App)
// 上树
}).$mount('#app')