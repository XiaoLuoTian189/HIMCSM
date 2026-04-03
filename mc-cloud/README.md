# MC Cloud - 现代云服务器平台

![Minecraft Style](https://img.shields.io/badge/Style-Minecraft-green.svg)
![Frontend](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-blue.svg)

这是一个融合了 **现代 Glassmorphism (毛玻璃) 风格** 和 **Minecraft 经典像素美学** 的自适应云服务器销售平台用户中心前端。

## ✨ 特性 (Features)

- **深色现代像素风**：保留了原版 Minecraft 的经典图标、血量条和指示灯，同时引入了现代感十足的无衬线字体（Inter）、圆角阴影和毛玻璃半透明容器。
- **SPA 视图切换**：使用纯原生 JavaScript 实现了流畅的单页应用无刷新模块切换。
- **全局自适应 (Responsive)**：完美适配 PC 和移动端。在手机端自动切换为优雅的左侧抽屉式汉堡菜单（Hamburger Menu）。
- **Minecraft 原生交互**：
  - “获取成就”式样的右下角/右上角 `Toast` 通知系统。
  - 使用矿物（煤炭、铁锭、钻石）作为套餐等级划分标识的购买卡片页面。
  - 获取原版 Minotar 用户头像 API 渲染。

## 📁 目录结构 (Structure)

```text
mc-cloud/
├── index.html         # 主入口结构与布局视图
├── css/
│   └── style.css      # 所有现代样式、CSS动画与媒体查询适配
├── js/
│   └── script.js      # 菜单逻辑、视图切换与 Toast 交互系统
└── README.md          # 项目说明文档
```

## 🚀 如何运行 (Usage)

本项目纯静态开发，无任何复杂的打包构建依赖（No Node.js / Webpack / Vite needed）。

1. 直接克隆或下载本仓库代码：
   ```bash
   git clone <你的仓库地址>
   cd mc-cloud
   ```
2. 直接在浏览器中双击打开 `index.html` 即可运行。
3. 或者你可以使用 Python 的简易 HTTP 服务在本地快速预览：
   ```bash
   python3 -m http.server 8000
   ```
   随后在浏览器访问 `http://localhost:8000/`

## ⌨️ 字体说明 (Typography)

- **英文强调与数字**：[`Press Start 2P`](https://fonts.google.com/specimen/Press+Start+2P)
- **中文像素字**：[`Zpix`](https://github.com/SolidZORO/zpix-pixel-font) (仅部分徽章和强调词使用)
- **正文阅读字体**：`Inter` (现代无衬线阅读字体)

---
*Developed with AI & Love.*