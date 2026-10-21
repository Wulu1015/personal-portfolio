# AI 与数据分析个人作品集

简洁的中文个人作品集，使用原生 HTML、CSS 和 JavaScript，无需安装运行依赖。包含响应式导航、首屏、关于我、项目展示、技能和联系方式。

## 在线访问与更新

网站地址：https://wulu1015.github.io/personal-portfolio/

GitHub Pages 使用 `codex/personal-portfolio` 分支的根目录发布。将修改提交到该分支后，GitHub 会自动重新部署；书签地址保持不变。部署通常需要等待几分钟。

## 本地预览

下载并解压完整文件夹，使用浏览器打开 `index.html`。请保持 HTML、CSS 和 JavaScript 文件在同一目录。复制邮箱若受浏览器限制，页面会提供手动复制提示。

使用 Node.js 18 或更高版本也可以运行：

```bash
npm run dev
```

浏览器访问 http://localhost:3000 。这个地址只在启动服务的电脑或云环境内部有效。可用 `PORT=8080 npm run dev` 修改端口。

## 内容替换

- `index.html`：姓名、个人介绍、所在地、技能、联系方式、网页标题和搜索摘要。
- `app.js`：`projects` 数组中的示例项目。包括标题、摘要、分类（`ai` / `data`）、标签、项目问题、个人角色、方法与交付物。`mockups` 是本地 HTML/CSS 绘制的预览示意图。
- `style.css`：配色、字体、几何插画、项目预览和响应式布局。
- `navigation.js`：手机菜单、键盘关闭菜单与当前板块导航高亮。
- `favicon.svg`：站点图标。
- 邮箱：修改 `index.html` 中 `#email-link` 的 `href` 和显示文字，复制功能会自动读取链接中的地址。

当前姓名、介绍、技能和四个项目均为示例。项目图形不代表真实业务数据，也不声称模型已达到某种准确率。正式使用前请替换为真实经历；邮箱目前为 `hello@example.com`。

本网站展示项目案例，不调用模型接口或运行 Python 后端。联系按钮打开邮件客户端，无表单后端，也不加载外部图片、字体或分析脚本。

## 验证

`npm run check` 检查三个 JavaScript 文件语法。已使用 Chromium 检查 320、390、760、768、1024、1440 像素宽度，以及分类筛选、项目详情、Esc 关闭与焦点返回、邮箱复制、手机导航和资源加载。临时验证脚本与截图位于 Git 忽略的 `work/` 中。

静态部署文件：`index.html`、`style.css`、`app.js`、`navigation.js` 和 `favicon.svg`。`server.js` 仅用于本地预览。
