
(function loadDependencies() {
    var echartsScript = document.createElement('script');
    echartsScript.src = "/js/echarts.min.js";
    document.head.appendChild(echartsScript);

    var cryptoScript = document.createElement('script');
    cryptoScript.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js";
    cryptoScript.onload = function() {
        echartsScript.onload = createKoinlChart; 
    };
    document.head.appendChild(cryptoScript);
})();


function decryptText(ciphertext, key) {
    var bytes = CryptoJS.AES.decrypt(ciphertext, key);
    return bytes.toString(CryptoJS.enc.Utf8); 
}

function createKoinlChart() {
    var chartkoinl = document.createElement('div');
    Object.assign(chartkoinl.style, {
        width: '80px',
        height: '48px',
        position: 'fixed',
        top: '5px',
        right: '6px'
    });
    document.body.appendChild(chartkoinl);

    var koinlChart = echarts.init(chartkoinl);


    var secretKey = 'mySecretKey'; 
    var encryptedText = 'U2FsdGVkX1+kRDw0poC8FDHkgfnoXjxQX4qEFBULP+g=';

    var option = {
        graphic: {
            elements: [{
                type: 'text',
                left: 'center',
                top: 'center',
                style: {

                    text: decryptText(encryptedText, secretKey),  
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
                    keyframes: [{
                        percent: 0.7,
                        style: {
                            fill: 'transparent',
                            lineDashOffset: 200,
                            lineDash: [200, 0]
                        }
                    }, {
                        percent: 0.8,
                        style: { fill: 'transparent' }
                    }, {
                        percent: 1,
                        style: { fill: '#b44b22' }
                    }]
                }
            }]
        }
    };
    koinlChart.setOption(option);
}
