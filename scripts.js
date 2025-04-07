// 自动更新页面更新时间
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前日期
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    
    document.getElementById('last-updated').textContent = `${year}年${month}月`;
});

// 平滑滚动导航
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});