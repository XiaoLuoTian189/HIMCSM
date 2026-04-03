document.addEventListener('DOMContentLoaded', () => {
    // 侧边栏导航点击事件
    const navButtons = document.querySelectorAll('.nav-menu .mc-btn');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('mc-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    // 切换汉堡菜单状态
    function toggleMobileMenu() {
        mobileMenuBtn.classList.toggle('open');
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        
        // 阻止背景滚动
        if (sidebar.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', toggleMobileMenu);
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('data-target');
            if (targetId) {
                switchView(targetId);
                
                // 如果在移动端，点击菜单后自动关闭侧边栏
                if (window.innerWidth <= 800 && sidebar.classList.contains('open')) {
                    toggleMobileMenu();
                }
            }
        });
    });

    // 页面加载完成后，模拟一条欢迎通知
    setTimeout(() => {
        showToast('欢迎回到 MC Cloud 云控制台!', 'success');
    }, 500);
});

// 视图切换功能
function switchView(viewId) {
    // 1. 更新导航按钮激活状态
    const navButtons = document.querySelectorAll('.nav-menu .mc-btn');
    navButtons.forEach(btn => {
        if (btn.getAttribute('data-target') === viewId) {
            btn.classList.add('active');
            // 获取名称并提示
            const targetName = btn.querySelector('.zh-font').innerText;
            // 只有当不是初始化加载时才提示
            if (document.querySelector('.view-section.active').id !== `view-${viewId}`) {
                 showToast(`导航切换至: ${targetName}`, 'success');
            }
        } else {
            btn.classList.remove('active');
        }
    });

    // 2. 隐藏所有视图
    const views = document.querySelectorAll('.view-section');
    views.forEach(view => {
        view.classList.remove('active');
    });

    // 3. 显示目标视图
    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
        targetView.classList.add('active');
        // 平滑滚动回顶部
        document.getElementById('main-content').scrollTop = 0;
    }
}

// 提示框功能 (模仿 Minecraft 成就提示/系统消息)
function showToast(message, type = 'normal') {
    const container = document.getElementById('toast-container');
    
    const toast = document.createElement('div');
    toast.className = `mc-toast ${type}`;
    
    // 随机选择一个方块图标用于提示
    const icons = [
        'https://minecraft.wiki/images/Grass_Block.png',
        'https://minecraft.wiki/images/Diamond_JE3_BE3.png',
        'https://minecraft.wiki/images/Redstone_Dust_JE2_BE2.png',
        'https://minecraft.wiki/images/Command_Block_JE4.png'
    ];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    
    // 设置 Toast 内部 HTML
    toast.innerHTML = `
        <img src="${randomIcon}" style="width: 32px; height: 32px; image-rendering: pixelated; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));" alt="Icon">
        <div>
            <div class="en-font" style="font-size: 10px; color: var(--mc-yellow); margin-bottom: 4px; letter-spacing: 0.5px;">SYSTEM MESSAGE</div>
            <div class="zh-font" style="font-weight: 500;">${message}</div>
        </div>
    `;
    
    // 添加到容器中
    container.appendChild(toast);
    
    // 3秒后自动移除
    setTimeout(() => {
        if (container.contains(toast)) {
            container.removeChild(toast);
        }
    }, 3000);
}
