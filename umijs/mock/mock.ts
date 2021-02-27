// 参https://umijs.org/zh-CN/docs/mock
import user2 from './user2.json';
export default {
    // 支持值为 Object 和 Array
    'GET /api/users': { users: [1, 2] },
  
    // GET 可忽略
    '/api/users/1': { id: 1 },

    // 使用外部数据文件
    'GET /api/users/2': {user2},

  
    // 支持自定义函数，API 参考 express@4
    'POST /api/users/create': (req, res) => {
      // 添加跨域请求头
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end('ok');
    },
  }
  