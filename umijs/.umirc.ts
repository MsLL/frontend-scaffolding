import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'upup-umijs',
  routes: [
    { path: '/', component: '@/pages/index' },
    // 访问 http://localhost:8000/user http://localhost:8000/user/list http://localhost:8000/user/profile 看效果
    { path: '/user', redirect: '/user/list'},
    { path: '/user/list', component: '@/pages/User/UserList.jsx'},
    // 访问http://localhost:8000/user/profile的时候注意观察title
    { path: '/user/profile', component: '@/pages/User/UserProfile.jsx',title:"用户详情"}
  ],
  fastRefresh: {},

  // 参 https://umijs.org/zh-CN/config#proxy
  // 访问http://localhost:8000/jsonplaceholder/users http://localhost:8000/jsonplaceholder/posts
  proxy: {
    '/jsonplaceholder': {
      'pathRewrite': { '^/jsonplaceholder' : '' },
      'changeOrigin': true,
      'target': 'http://jsonplaceholder.typicode.com/',
    },
  },
  
  // yarn build编译输出目录，默认就是dist目录
  // outputPath:"dist"
});
