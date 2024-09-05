(function loadECharts() {
    var script = document.createElement('script');
    script.src = "/js/echarts.min.js";
    script.onload = function() {
        var textToDisplay = getText(); 
        createKoinlChart(textToDisplay);
    };
    document.head.appendChild(script);
})();

function getText() {
    var encodedText = '5pyA5Yqo5oiR5piv';
    return decodeURIComponent(escape(atob(encodedText))); 
}


function createKoinlChart(text) {
    var chartkoinl = document.createElement('div');
    chartkoinl.style.width = '80px';
    chartkoinl.style.height = '48px';
    chartkoinl.style.position = 'fixed';
    chartkoinl.style.top = '5px';
    chartkoinl.style.right = '6px';
    document.body.appendChild(chartkoinl);

    var koinlChart = echarts.init(chartkoinl);
    var option = {
        graphic: {
            elements: [
                {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        text: text,
                        fontFamily: 'STSong',
                        fontSize: 20,
                        fontWeight: 'lighter',
                        lineDash: [0, 200],
                        lineDashOffset: 0,
                        fill: 'transparent',
                        stroke: '#b44b22',
                        lineWidth: 1
                    },
                    keyframeAnimation: {
                        duration: 5000,
                        loop: false,
                        keyframes: [
                            {
                                percent: 0.7,
                                style: {
                                    fill: 'transparent',
                                    lineDashOffset: 200,
                                    lineDash: [200, 0]
                                }
                            }, {
                                percent: 0.8,
                                style: {
                                    fill: 'transparent'
                                }
                            }, {
                                percent: 1,
                                style: {
                                    fill: '#b44b22'
                                }
                            }]
                    }
                }]
        }
    };
    koinlChart.setOption(option);
}
