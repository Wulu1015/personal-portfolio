# AI 与数据分析个人作品集

简洁的中文个人作品集，使用原生 HTML、CSS 和 JavaScript，无需安装运行依赖。包含响应式导航、首屏、关于我、项目展示、技能和联系方式。

本次发布候选：`2d9f249-learning-20261110`。在基于历史提交 `2d9f24930ba57963897fc874d6eb022cf6b0fd90` 的绿色无头像草稿上新增“我的学习记录”。保留单栏首屏、Aiden Wu、邮箱、原 Logo 和四个示例项目，不引入此前 R1/R2 的设计。

用户已于 2026-11-10（北京时间）确认发布本候选。后续修改仍须先交付 HTML 预览，并在获得针对该版本的明确确认后更新线上。恢复节点与候选校验信息见 `VERSION-NODES.md`；Pages 实际部署状态以 GitHub Actions 为准。此前完整恢复版和 G1/R1/R2 存档均保留。

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
- `learning.js`：学习记录的独立分类筛选与结果播报，不使用项目筛选的 `data-filter`。
- `assets/logo.png`：AI 生成的透明 AW 个人 Logo，用于导航、页脚和网站图标。
- `assets/project-*.svg`：四张本地项目封面占位图。真实截图可放入 `assets/` 并更新项目的 `cover` 路径；图形仅为示意。
- 邮箱：修改 `index.html` 中 `#email-link` 的 `href` 和显示文字，复制功能会自动读取链接中的地址。

姓名已更新为 Aiden Wu，联系邮箱为 `1141110667@qq.com`；个人介绍、技能和四个项目仍为示例。项目图形不代表真实业务数据，也不声称模型已达到某种准确率。正式使用前请将项目与个人介绍替换为真实经历。

## 学习记录

`index.html` 中的 `#learning` 位于技能与联系方式之间，导航可直接跳转。六条静态示例覆盖课程学习、知识笔记、阅读书单；可按类型筛选，并展开每条的学习笔记。未开启 JavaScript 时仍可阅读和展开所有条目，筛选按钮保持隐藏。

课程、日期、来源、实际书名和学习进度都未核实，示例不表示 Aiden 已学过或读完。当前不接入 Notion、课程平台或模型 API，不自动抓取私人笔记。替换真实记录时，修改每个 `.learning-record` 的标题、说明、标签、日期、来源和 `<details>` 正文，并设置 `data-learning-type="course|note|book"`；只有拿到真实网址后再添加来源链接。不要把示例计数当作学习成就。

加入第五项导航后，平板宽度隐藏重复的“聊聊合作”按钮，保留导航内的联系方式；手机菜单仍使用 760/761px 边界，无 JS 时导航换行展示。

本网站展示项目案例，不调用模型接口或运行 Python 后端。联系按钮打开邮件客户端，无表单后端，也不加载外部图片、字体或分析脚本。

## 验证

`npm run check` 检查四个 JavaScript 文件语法。学习版检查结果记录在 `work/learning-validation.json` 与 `work/learning-offline-validation.json`；此前无头像版检查仍保留在 `work/validation.json`。项目 `app.js` 和封面保持历史版原文件，导航仅添加学习区高亮目标。

当前导出由 `work/export-learning.cjs` 生成 `/workspace/outputs/Aiden-Wu-learning-preview.html`，CSS、JavaScript 与全部素材内联。之前不含学习区的候选源文件及清单保存在 `work/before-learning-20261110`，先前预览文件继续保留。

默认导出完整内联的单文件 HTML，ZIP 为包含同份 HTML 的备用交付形式。聊天中能预览不等于用户端一定能下载；云端 Chromium 的离线内存路由验证不能替代 Mac Safari/file URL 或大陆网络实测。

静态部署文件：`index.html`、`style.css`、`app.js`、`navigation.js` 、`learning.js` 和完整的 `assets/` 文件夹。`server.js` 仅用于本地预览。
