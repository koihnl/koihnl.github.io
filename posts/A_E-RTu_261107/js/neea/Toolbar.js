
/**
 * Adds the toolbar elements.
 */
Toolbar.prototype.init = function()
{
	this.addItems(['undo', 'redo', 'delete', '-', 'actualSize', 'zoomIn', 'zoomOut', '-']);
	var fontElt = this.addMenu('Helvetica', mxResources.get('fontFamily'), true, 'fontFamily');
	fontElt.style.whiteSpace = 'nowrap';
	fontElt.style.overflow = 'hidden';
	fontElt.style.width = '70px';
	this.addSeparator();
	var sizeElt = this.addMenu('12', mxResources.get('fontSize'), true, 'fontSize');
	sizeElt.style.whiteSpace = 'nowrap';
	sizeElt.style.overflow = 'hidden';
	sizeElt.style.width = '30px';

	this.addItems(['-', 'bold', 'italic', 'underline']);
	var align = this.addMenuFunction('geSprite-left', mxResources.get('align'), false, mxUtils.bind(this, function(menu)
	{
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ALIGN], [mxConstants.ALIGN_LEFT], 'geIcon geSprite geSprite-left', null).setAttribute('title', mxResources.get('left'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ALIGN], [mxConstants.ALIGN_CENTER], 'geIcon geSprite geSprite-center', null).setAttribute('title', mxResources.get('center'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ALIGN], [mxConstants.ALIGN_RIGHT], 'geIcon geSprite geSprite-right', null).setAttribute('title', mxResources.get('right'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_VERTICAL_ALIGN], [mxConstants.ALIGN_TOP], 'geIcon geSprite geSprite-top', null).setAttribute('title', mxResources.get('top'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_VERTICAL_ALIGN], [mxConstants.ALIGN_MIDDLE], 'geIcon geSprite geSprite-middle', null).setAttribute('title', mxResources.get('middle'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_VERTICAL_ALIGN], [mxConstants.ALIGN_BOTTOM], 'geIcon geSprite geSprite-bottom', null).setAttribute('title', mxResources.get('bottom'));
	}));
	this.addItems(['fontColor', '-']);
	var line = this.addMenuFunction('geSprite-straight', mxResources.get('line'), false, mxUtils.bind(this, function(menu)
	{
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_EDGE], [null], 'geIcon geSprite geSprite-straight', null).setAttribute('title', mxResources.get('straight'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_EDGE], ['entityRelationEdgeStyle'], 'geIcon geSprite geSprite-entity', null).setAttribute('title', mxResources.get('entityRelation'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_EDGE, mxConstants.STYLE_ELBOW], ['elbowEdgeStyle', 'horizontal'], 'geIcon geSprite geSprite-helbow', null).setAttribute('title', mxResources.get('horizontal'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_EDGE, mxConstants.STYLE_ELBOW], ['elbowEdgeStyle', 'vertical'], 'geIcon geSprite geSprite-velbow', null).setAttribute('title', mxResources.get('vertical'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_EDGE], ['segmentEdgeStyle'], 'geIcon geSprite geSprite-segment', null).setAttribute('title', mxResources.get('plain'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_EDGE], ['orthogonalEdgeStyle'], 'geIcon geSprite geSprite-orthogonal', null).setAttribute('title', mxResources.get('orthogonal'));
	}));
	var linestart = this.addMenuFunction('geSprite-startclassic', mxResources.get('lineend'), false, mxUtils.bind(this, function(menu)
	{
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_STARTARROW, 'startFill'], [mxConstants.NONE, 0], 'geIcon geSprite geSprite-noarrow', null).setAttribute('title', mxResources.get('none'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_STARTARROW, 'startFill'], [mxConstants.ARROW_CLASSIC, 1], 'geIcon geSprite geSprite-startclassic', null).setAttribute('title', mxResources.get('classic'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_STARTARROW, 'startFill'], [mxConstants.ARROW_OPEN, 1], 'geIcon geSprite geSprite-startopen', null).setAttribute('title', mxResources.get('openArrow'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_STARTARROW, 'startFill'], [mxConstants.ARROW_BLOCK, 1], 'geIcon geSprite geSprite-startblock', null).setAttribute('title', mxResources.get('block'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_STARTARROW, 'startFill'], [mxConstants.ARROW_OVAL, 1], 'geIcon geSprite geSprite-startoval', null).setAttribute('title', mxResources.get('oval'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_STARTARROW, 'startFill'], [mxConstants.ARROW_DIAMOND, 1], 'geIcon geSprite geSprite-startdiamond', null).setAttribute('title', mxResources.get('diamond'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_STARTARROW, 'startFill'], [mxConstants.ARROW_DIAMOND_THIN, 1], 'geIcon geSprite geSprite-startthindiamond', null).setAttribute('title', mxResources.get('diamondThin'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_STARTARROW, 'startFill'], [mxConstants.ARROW_CLASSIC, 0], 'geIcon geSprite geSprite-startclassictrans', null).setAttribute('title', mxResources.get('classic'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_STARTARROW, 'startFill'], [mxConstants.ARROW_BLOCK, 0], 'geIcon geSprite geSprite-startblocktrans', null).setAttribute('title', mxResources.get('block'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_STARTARROW, 'startFill'], [mxConstants.ARROW_OVAL, 0], 'geIcon geSprite geSprite-startovaltrans', null).setAttribute('title', mxResources.get('oval'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_STARTARROW, 'startFill'], [mxConstants.ARROW_DIAMOND, 0], 'geIcon geSprite geSprite-startdiamondtrans', null).setAttribute('title', mxResources.get('diamond'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_STARTARROW, 'startFill'], [mxConstants.ARROW_DIAMOND_THIN, 0], 'geIcon geSprite geSprite-startthindiamondtrans', null).setAttribute('title', mxResources.get('diamondThin'));
	}));
	var lineend = this.addMenuFunction('geSprite-endclassic', mxResources.get('lineend'), false, mxUtils.bind(this, function(menu)
	{
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ENDARROW, 'endFill'], [mxConstants.NONE, 0], 'geIcon geSprite geSprite-noarrow', null).setAttribute('title', mxResources.get('none'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ENDARROW, 'endFill'], [mxConstants.ARROW_CLASSIC, 1], 'geIcon geSprite geSprite-endclassic', null).setAttribute('title', mxResources.get('classic'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ENDARROW, 'endFill'], [mxConstants.ARROW_OPEN, 1], 'geIcon geSprite geSprite-endopen', null).setAttribute('title', mxResources.get('openArrow'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ENDARROW, 'endFill'], [mxConstants.ARROW_BLOCK, 1], 'geIcon geSprite geSprite-endblock', null).setAttribute('title', mxResources.get('block'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ENDARROW, 'endFill'], [mxConstants.ARROW_OVAL, 1], 'geIcon geSprite geSprite-endoval', null).setAttribute('title', mxResources.get('oval'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ENDARROW, 'endFill'], [mxConstants.ARROW_DIAMOND, 1], 'geIcon geSprite geSprite-enddiamond', null).setAttribute('title', mxResources.get('diamond'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ENDARROW, 'endFill'], [mxConstants.ARROW_DIAMOND_THIN, 1], 'geIcon geSprite geSprite-endthindiamond', null).setAttribute('title', mxResources.get('diamondThin'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ENDARROW, 'endFill'], [mxConstants.ARROW_CLASSIC, 0], 'geIcon geSprite geSprite-endclassictrans', null).setAttribute('title', mxResources.get('classic'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ENDARROW, 'endFill'], [mxConstants.ARROW_BLOCK, 0], 'geIcon geSprite geSprite-endblocktrans', null).setAttribute('title', mxResources.get('block'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ENDARROW, 'endFill'], [mxConstants.ARROW_OVAL, 0], 'geIcon geSprite geSprite-endovaltrans', null).setAttribute('title', mxResources.get('oval'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ENDARROW, 'endFill'], [mxConstants.ARROW_DIAMOND, 0], 'geIcon geSprite geSprite-enddiamondtrans', null).setAttribute('title', mxResources.get('diamond'));
		this.editorUi.menus.styleChange(menu, '', [mxConstants.STYLE_ENDARROW, 'endFill'], [mxConstants.ARROW_DIAMOND_THIN, 0], 'geIcon geSprite geSprite-endthindiamondtrans', null).setAttribute('title', mxResources.get('diamondThin'));
	}));
	this.addItems(['-', 'strokeColor', 'fillColor']);
	this.addItem('geSprite-gradientcolor', 'gradientColor').setAttribute('title', mxResources.get('gradient'));
	this.addItems(['shadow']);
	
	var graph = this.editorUi.editor.graph;

	// Update font size and font family labels
	var update = mxUtils.bind(this, function()
	{
		var ff = 'Helvetica';
		var fs = '12';
    	var state = graph.getView().getState(graph.getSelectionCell());
    	
    	if (state != null)
    	{
    		ff = state.style[mxConstants.STYLE_FONTFAMILY] || ff;
    		fs = state.style[mxConstants.STYLE_FONTSIZE] || fs;
    		
    		if (ff.length > 10)
    		{
    			ff = ff.substring(0, 8) + '...';
    		}
    		
    		fontElt.innerHTML = ff;
    		sizeElt.innerHTML = fs;
    	}
	});
	
    graph.getSelectionModel().addListener(mxEvent.CHANGE, update);
    graph.getModel().addListener(mxEvent.CHANGE, update);
	
	// Updates button states
    this.addEdgeSelectionHandler([line, linestart, lineend]);
	this.addSelectionHandler([align]);
};

/**
* Adds a handler for showing a menu in the given element.
*/
Toolbar.prototype.addMenuHandler = function (elt, showLabels, funct, showAll) {
    if (funct != null) {
        var graph = this.editorUi.editor.graph;
        var menu = null;

        mxEvent.addListener(elt, 'click', mxUtils.bind(this, function (evt) {
            if (elt.enabled == null || elt.enabled) {
                graph.panningHandler.hideMenu();
                menu = new mxPopupMenu(funct);
                menu.div.className += ' geToolbarMenu';
                menu.showDisabled = showAll;
                menu.labels = showLabels;
                menu.autoExpand = true;

                menu.popup(elt.offsetLeft, elt.offsetTop + elt.offsetHeight + 0, null, evt);
                this.currentMenu = menu;
            }

            mxEvent.consume(evt);
        }));
    }
};
