(function () {
    /**
    * Initializes the environment.
    */
    var editorNeeaInit = Editor.prototype.init;
    Editor.prototype.init = function () {

        editorNeeaInit.apply(this, arguments);

//        var dateBegin = new Date();  //开始时间
//        var viewNeeavalidateBackground = mxGraphView.prototype.validateBackground;
//        var neeaeditor = this;
//        mxGraphView.prototype.validateBackground = function () {
//            viewNeeavalidateBackground.apply(this, arguments);
//            var dateEnd = new Date();    //结束时间
//            var date3 = dateEnd.getTime() - dateBegin.getTime();
//            if (date3 > 1000 && neeaeditor.modified) {
//                dateBegin = dateEnd;
//                var sid = "";
//                var answer = getResult();
//                if (window.parent.ResponseDiagramResult) {
//                    var frames = window.parent.document.getElementsByTagName("iframe"); //获取父页面所有iframe
//                    for (i = 0; i < frames.length; i++) { //遍历，匹配时弹出id
//                        if (frames[i].contentWindow == window) {
//                            sid = (frames[i].id);
//                        }
//                    }
//                    window.parent.ResponseDiagramResult(sid, answer);
////                    console.log(sid);
////                    console.log(answer);
//                }
//            }
//        };
    };
})();