// 引入vue
import Vue from 'vue';
// 引入Router
import Router from 'vue-router';
// 引入组件
// import Home from './views/Home'
// 配置@v代表src/views目录
import Home from '@v/Home'

// 安装
Vue.use(Router);

// 实例化
export default new Router({
    // 路由规则
    routes: [
        // 列表页
        { path: '/list/:page', component: () => import('@v/List') },
        // 详情页
        { path: '/detail/:id', component: () => import('@v/Detail') },
        // 首页是默认页面
        { path: '*', component: Home }
    ]
})