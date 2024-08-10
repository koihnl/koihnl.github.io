

// 动态加载 ECharts 库
(function loadECharts() {
    var script = document.createElement('script');
    script.src = "/js/echarts.min.js";
    script.onload = function() {
        // 确保 ECharts 加载完毕后，再执行代码
        createKoinlChart();
    };
    document.head.appendChild(script);
})();

// 创建图表的函数
function createKoinlChart() {
    var chartkoinl = document.createElement('div');
    chartkoinl.style.width = '80px';
    chartkoinl.style.height = '48px';
    chartkoinl.style.position = 'fixed';
    chartkoinl.style.top = '5px';
    chartkoinl.style.right = '6px';
    document.body.appendChild(chartkoinl); // 将标题元素添加到章节链接容器中

    var koinlChart = echarts.init(chartkoinl);
    var option = {
        graphic: {    //图形元素配置对象。
            elements: [    //元素数组，包含了要添加到图形中的元素。
                {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        text: '锦鲤未离',
                        fontFamily: 'STSong',
                        fontSize: 20,    // 大小
                        fontWeight: 'lighter',    //粗细
                        lineDash: [0, 200],    //虚线样式，表示实线200个单位后再空200个单位。
                        lineDashOffset: 0,    //虚线偏移量，初始为0。
                        fill: 'transparent',    //填充颜色为透明。
                        stroke: '#b44b22',    //描边颜色
                        lineWidth: 1    //描边宽度
                    },
                    keyframeAnimation: {    //关键帧动画配置。
                        duration: 5000,    //动画持续时间
                        loop: false,    // 循环播放动画。
                        keyframes: [    //关键帧数组，定义动画关键帧。
                            {
                                percent: 0.7,    //关键帧所占百分比。
                                style: {   // 该百分比下的样式配置。
                                    fill: 'transparent',    //透明填充。
                                    lineDashOffset: 200,    //虚线偏移量为200，将导致文本内容呈现出不断变化的动画效果。
                                    lineDash: [200, 0]    //虚线样式，将虚线改为实线。
                                }
                            }, {
                                percent: 0.8,    //停顿一段时间，呈现停顿效果。
                                style: {
                                    fill: 'transparent'    //填充颜色
                                }
                            }, {
                                percent: 1,    //动画结束时的样式。
                                style: {
                                    fill: '#b44b22'    //填充颜色
                                }
                            }]
                    }
                }]
        }
    };
    koinlChart.setOption(option); // 应用配置项到图表实例中
}
