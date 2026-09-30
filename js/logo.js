<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>页面标题（请替换）</title>
</head>
<body>
<!-- 右下角悬浮文字：锦鲤未离 -->
<script>
(function () {
  var TEXT = "锦鲤未离";
  var LINK = "https://koihnl.github.io";   // 点击跳转地址，可自行修改或去掉

  // 1) 先创建容器与样式：与 echarts 是否加载成功无关，元素一定会出现
  var d = document.createElement('div');
  d.id = 'chartkoinl';
  d.className = 'chartkoinl';
  d.title = TEXT;
  document.body.appendChild(d);

  var st = document.createElement('style');
  st.textContent =
    '.chartkoinl{position:fixed;top:5px;right:6px;width:80px;height:48px;z-index:999;' +
    'display:flex;align-items:center;justify-content:center;cursor:pointer;' +
    'color:#b44b22;font-family:"STSong";font-size:20px;font-weight:lighter;' +
    'line-height:1;}';
  document.head.appendChild(st);

  // 点击跳转（事件挂在容器上，canvas 上的点击会冒泡到这里）
  d.addEventListener('click', function () {
    if (LINK) window.location.href = LINK;
  });

  // 2) 引入 echarts：加载成功用描边动画，加载失败则回退为纯文字，保证可见
  var s = document.createElement('script');
  s.src = '/js/echarts.min.js';   // 请改成你项目里 echarts 的真实路径
  s.onload = function () {
    if (!window.echarts) { d.textContent = TEXT; return; }
    var c = echarts.init(d);
    c.setOption({
      graphic: { elements: [{
        type: 'text',
        left: 'center', top: 'center',
        style: {
          text: TEXT,
          fontFamily: 'STSong', fontSize: 20, fontWeight: 'lighter',
          lineDash: [0, 200], lineDashOffset: 0,
          fill: 'transparent', stroke: '#b44b22', lineWidth: 1, cursor: 'pointer'
        },
        keyframeAnimation: {
          duration: 5000, loop: false,
          keyframes: [
            { percent: 0.7, style: { fill: 'transparent', lineDashOffset: 200, lineDash: [200, 0] } },
            { percent: 0.8, style: { fill: 'transparent' } },
            { percent: 1,   style: { fill: '#b44b22' } }
          ]
        }
      }] }
    });
  };
  s.onerror = function () { d.textContent = TEXT; };  // echarts 加载失败时仍显示文字
  document.head.appendChild(s);

  // 3) favicon（可选）
  var link = document.createElement('link');
  link.rel = 'shortcut icon';
  link.href = '/imgs/shortcut-icon.ico';
  link.type = 'image/x-icon';
  document.head.appendChild(link);
})();
</script>
</body>
</html>
