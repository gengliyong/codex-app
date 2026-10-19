# codex-app

一个零依赖的 Node.js 起步项目：内置一个小型静态文件服务器、一个 `GET /api/health` 接口，以及一个用来演示的前端页面。

## 运行

需要 Node.js 18 或更高版本。

```bash
node server.js
```

然后打开 http://localhost:3000 。想换端口就用环境变量：

```powershell
$env:PORT = 8080; node server.js
```

装了 npm 的话也可以用 `npm start`；`npm run dev` 会在文件变化时自动重启。

## 目录结构

```
.
├── server.js          # HTTP 服务器：静态资源 + /api/health
├── package.json       # 脚本与元信息，没有第三方依赖
└── public/            # 直接对外提供的静态文件
    ├── index.html
    ├── styles.css
    └── app.js
```

## 路由

| 路径 | 说明 |
| --- | --- |
| `GET /` | 返回 `public/index.html` |
| `GET /api/health` | 返回服务状态 JSON |
| `GET /<file>` | 返回 `public/` 下的对应文件 |

## 接下来可以做什么

- 照着 `/api/health` 的写法在 `server.js` 里继续加接口。
- 想上 React / Vue 的话，先装上带 npm 的 Node.js，再在这个目录执行 `npm create vite@latest`，本项目结构不受影响。
- 内容定下来后 `git add` / `git commit` 收个初始提交。