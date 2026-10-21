# AI 与数据分析个人作品集

深色科技风中文个人作品集，采用深蓝背景、青蓝强调色、本地网格与线框插画，使用原生 HTML、CSS 和 JavaScript，无需安装运行依赖。包含响应式导航、首屏、关于我、项目展示、技能和联系方式。

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
- `app.js`：`projects` 数组中的示例项目。包括标题、摘要、分类（`ai` / `data`）、标签、封面路径 `cover`、项目问题、个人角色、方法与交付物。
- `style.css`：统一配色、系统字体、字号、留白、项目卡片和响应式布局。
- `navigation.js`：手机菜单、键盘关闭菜单与当前板块导航高亮。
- `assets/logo.png`：AI 生成的透明 AW 个人 Logo，用于导航和页脚，深色主题通过 CSS 呈现白色标志。
- `assets/favicon-tech.svg`：适配深色主题的青蓝色 AW 网站图标。
- `assets/profile-aiden.webp`：由用户提供的本人照片处理而成，使用深蓝背景与轻微青蓝轮廓光。更换照片时同时更新 `index.html` 中的预加载链接和 `.profile-image` 的路径、替代文本与实际尺寸。头像区域使用 `contain`，避免手机端裁切头部。
- `assets/project-*.svg`：四张本地项目封面占位图。真实截图可放入 `assets/` 并更新项目的 `cover` 路径；图形仅为示意。
- 邮箱：修改 `index.html` 中 `#email-link` 的 `href` 和显示文字，复制功能会自动读取链接中的地址。

姓名已更新为 Aiden Wu，联系邮箱为 `1141110667@qq.com`；个人介绍、技能和四个项目仍为示例。项目图形不代表真实业务数据，也不声称模型已达到某种准确率。正式使用前请将项目与个人介绍替换为真实经历。

本网站展示项目案例，不调用模型接口或运行 Python 后端。联系按钮打开邮件客户端，无表单后端，也不加载外部图片、字体或分析脚本。

## 验证

`npm run check` 检查三个 JavaScript 文件语法。已使用 Chromium 检查 320、390、760、768、1024、1280、1440 像素宽度，以及图片加载、分类筛选、卡片所有详情入口、Esc 关闭与焦点返回、邮箱复制和手机导航。临时验证脚本与截图位于 Git 忽略的 `work/` 中。

静态部署文件：`index.html`、`style.css`、`app.js`、`navigation.js` 和完整的 `assets/` 文件夹。`server.js` 仅用于本地预览。
