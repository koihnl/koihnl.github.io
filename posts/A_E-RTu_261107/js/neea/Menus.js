(function () {
    var menusInit = Menus.prototype.init;
    Menus.prototype.init = function () {
        menusInit.apply(this, arguments);
        var graph = this.editorUi.editor.graph;
        var editorUi = this.editorUi;

        if (true) {
            this.put('moreShapes', new Menu(mxUtils.bind(this, function (menu, parent) {
                var addItem = mxUtils.bind(this, function (names, label, prefix) {
                    prefix = (prefix != null) ? prefix : '';

                    var item = menu.addItem(label || names[0], null, mxUtils.bind(this, function () {
                        this.editorUi.sidebar.togglePalettes(prefix, names);
                    }), parent);

                    if (this.editorUi.sidebar.palettes[prefix + names[0]][0].style.display != 'none') {
                        this.addCheckmark(item);
                    }
                });

            })));
        }
    };
})();