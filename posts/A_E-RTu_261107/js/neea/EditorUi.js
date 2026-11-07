(function () {
    // Initializes the user interface
    var editorUiNeeaInit = EditorUi.prototype.init;
    EditorUi.prototype.init = function () {
        editorUiNeeaInit.apply(this, arguments);

        window.onbeforeunload = function () {
            //if (editor.modified) {
            //return mxResources.get('allChangesLost');
            //}
        };

        for (var p in this.sidebar.palettes) {
            if (typeof (this.sidebar.palettes[p]) != "function") {
                var elts = this.sidebar.palettes[p];
                if (elts != null) {
                    var vis = (elts[1].children[0].style.display == 'none') && (elts[0].style.display != 'none');
                    if (vis) {
                        elts[0].click();
                        break;
                    }
                }
            }
        }
    };
    EditorUi.prototype.createKeyHandler = function (editor) {
        var graph = this.editor.graph;
        var keyHandler = new mxKeyHandler(graph);

        // Routes command-key to control-key on Mac
        keyHandler.isControlDown = function (evt) {
            return mxEvent.isControlDown(evt) || (mxClient.IS_MAC && evt.metaKey);
        };

        // Helper function to move cells with the cursor keys
        function nudge(keyCode) {
            if (!graph.isSelectionEmpty()) {
                var dx = 0;
                var dy = 0;

                if (keyCode == 37) {
                    dx = -1;
                }
                else if (keyCode == 38) {
                    dy = -1;
                }
                else if (keyCode == 39) {
                    dx = 1;
                }
                else if (keyCode == 40) {
                    dy = 1;
                }

                graph.moveCells(graph.getSelectionCells(), dx, dy);
                //graph.scrollCellVisible(graph.getSelectionCell());
            }
        };

        // Binds keystrokes to actions
        var bindAction = mxUtils.bind(this, function (code, control, key, shift) {
            var action = this.actions.get(key);

            if (action != null) {
                var f = function () {
                    if (action.enabled) {
                        action.funct();
                    }
                };

                if (control) {
                    if (shift) {
                        keyHandler.bindControlShiftKey(code, f);
                    }
                    else {
                        keyHandler.bindControlKey(code, f);
                    }
                }
                else {
                    if (shift) {
                        keyHandler.bindShiftKey(code, f);
                    }
                    else {
                        keyHandler.bindKey(code, f);
                    }
                }
            }
        });

        var ui = this;
        var keyHandleEscape = keyHandler.escape;
        keyHandler.escape = function (evt) {
            ui.hideDialog();
            keyHandleEscape.apply(this, arguments);
        };

        // Ignores enter keystroke. Remove this line if you want the
        // enter keystroke to stop editing.
        keyHandler.enter = function () { };
        keyHandler.bindKey(8, function () { graph.foldCells(true); }); // Backspace
        keyHandler.bindKey(13, function () { graph.foldCells(false); }); // Enter
        keyHandler.bindKey(33, function () { graph.exitGroup(); }); // Page Up
        keyHandler.bindKey(34, function () { graph.enterGroup(); }); // Page Down
        keyHandler.bindKey(36, function () { graph.home(); }); // Home
        keyHandler.bindKey(35, function () { graph.refresh(); }); // End
        keyHandler.bindKey(37, function () { nudge(37); }); // Left arrow
        keyHandler.bindKey(38, function () { nudge(38); }); // Up arrow
        keyHandler.bindKey(39, function () { nudge(39); }); // Right arrow
        keyHandler.bindKey(40, function () { nudge(40); }); // Down arrow
        keyHandler.bindKey(113, function () { graph.startEditingAtCell(); });
        bindAction(46, false, 'delete'); // Delete
        bindAction(82, true, 'rotate'); // Ctrl+R
        bindAction(83, true, 'save'); // Ctrl+S
        bindAction(83, true, 'saveAs', true); // Ctrl+Shift+S
        bindAction(107, false, 'zoomIn'); // Add
        bindAction(109, false, 'zoomOut'); // Subtract
        bindAction(65, true, 'selectAll'); // Ctrl+A
        bindAction(86, true, 'selectVertices', true); // Ctrl+Shift+V
        bindAction(69, true, 'selectEdges', true); // Ctrl+Shift+E
        bindAction(69, true, 'export'); // Ctrl+Shift+E
        bindAction(66, true, 'toBack'); // Ctrl+B
        bindAction(70, true, 'toFront'); // Ctrl+F
        bindAction(68, true, 'duplicate'); // Ctrl+D
        bindAction(90, true, 'undo'); // Ctrl+Z
        bindAction(89, true, 'redo'); // Ctrl+Y
        bindAction(88, true, 'cut'); // Ctrl+X
        bindAction(67, true, 'copy'); // Ctrl+C
        bindAction(81, true, 'connect'); // Ctrl+Q
        bindAction(86, true, 'paste'); // Ctrl+V
        bindAction(71, true, 'group'); // Ctrl+G
        bindAction(71, true, 'grid', true); // Ctrl+Shift+G
        bindAction(85, true, 'ungroup'); // Ctrl+U
        //bindAction(112, false, 'about'); // F1

        return keyHandler;
    };


    /**
     * Refreshes the viewport.
     */
    EditorUi.prototype.readonly = function () {
        this.editor.graph.setEnabled(false)
        this.editor.graph.panningHandler.factoryMethod = mxUtils.bind(this, function (menu, cell, evt) {
            //this.menus.createPopupMenu(menu, cell, evt);
        });

        var quirks = mxClient.IS_IE && (document.documentMode == null || document.documentMode == 5);
        var w = this.container.clientWidth;
        var h = this.container.clientHeight;

        if (this.container == document.body) {
            w = document.body.clientWidth || document.documentElement.clientWidth;
            h = (quirks) ? document.body.clientHeight || document.documentElement.clientHeight : document.documentElement.clientHeight;
        }

        var effHsplitPosition = Math.max(0, Math.min(this.hsplitPosition, w - this.splitSize - 20));
        var effVsplitPosition = Math.max(0, Math.max(this.vsplitPosition, h - 1));

        this.menubarContainer.style.display = 'none';
        this.toolbarContainer.style.display = 'none';
        this.sidebarContainer.style.display = 'none';
        this.vsplit.style.display = 'none';
        this.sidebarContainer.style.top = "0px";

        this.outlineContainer.style.width = effHsplitPosition + 'px';
        this.outlineContainer.style.height = effVsplitPosition + 'px';
        this.outlineContainer.style.bottom = this.footerHeight + 'px';
        this.diagramContainer.style.left = (effHsplitPosition + this.splitSize) + 'px';
        this.diagramContainer.style.top = this.sidebarContainer.style.top;
        this.footerContainer.style.height = this.footerHeight + 'px';
        this.hsplit.style.top = this.sidebarContainer.style.top;
        this.hsplit.style.bottom = this.outlineContainer.style.bottom;
        this.hsplit.style.left = effHsplitPosition + 'px';

        if (quirks) {
            this.menubarContainer.style.width = w + 'px';
            this.toolbarContainer.style.width = this.menubarContainer.style.width;
            var sidebarHeight = (h - effVsplitPosition - this.splitSize - this.footerHeight - this.menubarHeight - this.toolbarHeight);
            this.sidebarContainer.style.height = sidebarHeight + 'px';
            this.diagramContainer.style.width = (w - effHsplitPosition - this.splitSize) + 'px';
            var diagramHeight = (h - this.footerHeight - this.menubarHeight - this.toolbarHeight);
            this.diagramContainer.style.height = diagramHeight + 'px';
            this.footerContainer.style.width = this.menubarContainer.style.width;
            this.hsplit.style.height = diagramHeight + 'px';
        }
        else {
            this.sidebarContainer.style.bottom = (effVsplitPosition + this.splitSize + this.footerHeight) + 'px';
            this.diagramContainer.style.bottom = this.outlineContainer.style.bottom;
        }
    };
})();