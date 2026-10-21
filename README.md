# 个人作品集

简洁的中文个人作品集，使用原生 HTML、CSS 和 JavaScript，无需安装运行依赖。

## 直接预览

下载并解压完整文件夹，双击 `index.html` 即可预览，项目筛选和弹窗均可使用。邮箱复制如受浏览器限制，页面会显示可手动复制的邮箱。

## 本地运行

需要 Node.js 18 或更高版本。

```bash
npm run dev
```

访问 http://localhost:3000 。可用 `PORT=8080 npm run dev` 修改端口。

## 内容替换

- `index.html`：姓名、自我介绍、所在地、技能、经历数据、联系方式和 SEO 信息。
- `app.js`：`projects` 中的项目名称、分类、年份、标签与详情；`mockups` 为示例项目插画。
- 邮箱：同时修改 `index.html` 中 `#email-link` 的 `href` 和文字；复制功能会自动读取邮箱文字。
- `style.css`：颜色、排版、项目图形和响应式布局。
- `favicon.svg`：站点图标。

当前姓名、经历、技能和项目均为示例，邮箱使用 `hello@example.com`，发布前请替换。项目点击后显示示例详情，不会跳转到不存在的演示网址。联系按钮打开邮件客户端，无表单后端。

## 验证

`npm run check` 检查 JavaScript 语法。已使用 Chromium 验证 320、390、768、1024、1440 像素宽度无横向溢出，以及项目筛选、弹窗、Esc 关闭、邮箱复制和锚点导航。临时验证脚本与截图位于被 Git 忽略的 `work/` 中。

可以直接将 `index.html`、`style.css`、`app.js` 和 `favicon.svg` 部署到静态托管平台；`server.js` 仅用于本地预览。
