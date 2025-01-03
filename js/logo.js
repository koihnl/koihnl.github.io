(function() {
    // 动态加载ECharts库
    const s = document.createElement('script');
    s.src = "/js/echarts.min.js";
    s.onload = () => {
        // 解码文字
        const t = decodeURIComponent(escape(atob('6ZSm6bKk5pyq56a7'))); // 解码为“点击进入”
        // 创建图表容器
        const d = document.createElement('div');
        d.className = 'chartkoinl';
        document.body.appendChild(d);
        // 初始化ECharts实例并设置选项
        const c = echarts.init(d);

        // 设置选项
        c.setOption({
            graphic: {
                elements: [{
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        text: t,
                        fontFamily: 'STSong',
                        fontSize: 20,
                        fontWeight: 'lighter',
                        lineDash: [0, 200],
                        lineDashOffset: 0,
                        fill: 'transparent',
                        stroke: '#b44b22',
                        lineWidth: 1,
                        cursor: 'pointer' // 鼠标悬停时显示为可点击
                    },
                    keyframeAnimation: {
                        duration: 5000,
                        loop: false,
                        keyframes: [
                            { percent: 0.7, style: { fill: 'transparent', lineDashOffset: 200, lineDash: [200, 0] } },
                            { percent: 0.8, style: { fill: 'transparent' } },
                            { percent: 1, style: { fill: '#b44b22' } }
                        ]
                    },
                    onclick: () => {
                        // 点击事件：跳转到指定网址
                        window.location.href = 'https://koihnl.github.io';
                    }
                }]
            }
        });
    };
    document.head.appendChild(s);

    // 添加样式
    const st = document.createElement('style');
    st.textContent = '.chartkoinl { width: 80px; height: 48px; position: fixed; top: 5px; right: 6px; }';
    document.head.appendChild(st);

    // 设置favicon
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.href = '/imgs/shortcut-icon.ico';
    link.type = 'image/x-icon';
    document.head.appendChild(link);
})();
