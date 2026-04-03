document.addEventListener('DOMContentLoaded', () => {
    // 侧边栏导航点击事件
    const navButtons = document.querySelectorAll('.nav-menu .mc-btn');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // 移除所有激活状态
            navButtons.forEach(b => b.classList.remove('active'));
            // 添加当前激活状态
            const target = e.currentTarget;
            target.classList.add('active');
            
            const targetName = target.querySelector('.zh-font').innerText;
            showToast(`导航切换至: ${targetName}`, 'success');
        });
    });

    // 页面加载完成后，模拟一条欢迎通知
    setTimeout(() => {
        showToast('欢迎回到 MC Cloud 云控制台!', 'success');
    }, 500);
});

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
        <img src="${randomIcon}" style="width: 32px; height: 32px; image-rendering: pixelated;" alt="Icon">
        <div>
            <div class="en-font" style="font-size: 10px; color: #ffff55; margin-bottom: 5px; text-shadow: 2px 2px 0px #3f3f15;">SYSTEM MESSAGE</div>
            <div class="zh-font text-shadow">${message}</div>
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
