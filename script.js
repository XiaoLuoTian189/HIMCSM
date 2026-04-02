document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.mc-btn[data-tab]');
    const tabPanes = document.querySelectorAll('.mc-tab-pane');

    // Tab switching logic
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            navButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding tab pane
            const tabId = button.getAttribute('data-tab');
            const targetPane = document.getElementById(tabId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
            
            // Play click sound (optional, simulated here)
            playClickSound();
        });
    });

    // Inventory slot interaction
    const slots = document.querySelectorAll('.mc-slot');
    const slotDesc = document.querySelector('.mc-slot-desc');
    
    slots.forEach(slot => {
        slot.addEventListener('click', () => {
            const item = slot.querySelector('.mc-item');
            if (item) {
                if (item.classList.contains('diamond-sword')) {
                    slotDesc.textContent = '钻石剑 - 攻击力: 7';
                } else if (item.classList.contains('golden-apple')) {
                    slotDesc.textContent = '金苹果 - 恢复生命与饥饿';
                } else if (item.classList.contains('dirt')) {
                    slotDesc.textContent = '泥土 - 随处可见的方块';
                }
            } else {
                slotDesc.textContent = '空的物品栏';
            }
            playClickSound();
        });
    });

    // Settings buttons toggle
    const settingBtns = document.querySelectorAll('.mc-setting-row .mc-btn.small');
    settingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.textContent === '开启') {
                btn.textContent = '关闭';
                btn.classList.remove('active');
            } else if (btn.textContent === '关闭') {
                btn.textContent = '开启';
                btn.classList.add('active');
            } else if (btn.textContent === '普通') {
                btn.textContent = '困难';
            } else if (btn.textContent === '困难') {
                btn.textContent = '和平';
            } else if (btn.textContent === '和平') {
                btn.textContent = '简单';
            } else if (btn.textContent === '简单') {
                btn.textContent = '普通';
            }
            playClickSound();
        });
    });

    // Simple audio feedback simulation
    function playClickSound() {
        // In a real app, we would play an audio file like 'click.ogg'
        // const audio = new Audio('click.ogg');
        // audio.play();
    }
});
