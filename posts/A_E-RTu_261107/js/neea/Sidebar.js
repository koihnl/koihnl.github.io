(function () {
    // Replaces the sidebar
    Sidebar.prototype.init = function () {

        var imgDir = GRAPH_IMAGE_PATH;
        var dir = STENCIL_PATH;

        this.addErPalette_NEEA(false);
        this.addFlowPalette_NEEA(false);
        this.addIFFlowPalette_NEEA(false);
        this.addStatusPalette_NEEA(false);
        this.addActivityPalette_NEEA(false);

        var dir = STENCIL_PATH;

        this.addGeneralPalette(true);
        this.addUmlPalette(false);
        this.addBpmnPalette(dir, false);
        this.addStencilPalette('flowchart', 'Flowchart', dir + '/flowchart.xml',
            ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');
        this.addStencilPalette('basic', mxResources.get('basic'), dir + '/basic.xml',
            ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');
        this.addStencilPalette('arrows', mxResources.get('arrows'), dir + '/arrows.xml',
            ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');
        this.addImagePalette('clipart', mxResources.get('clipart'), dir + '/clipart/', '_128x128.png',
            ['Earth_globe', 'Empty_Folder', 'Full_Folder', 'Gear', 'Lock', 'Software', 'Virus', 'Email',
             'Database', 'Router_Icon', 'iPad', 'iMac', 'Laptop', 'MacBook', 'Monitor_Tower', 'Printer',
             'Server_Tower', 'Workstation', 'Firewall_02', 'Wireless_Router_N', 'Credit_Card',
             'Piggy_Bank', 'Graph', 'Safe', 'Shopping_Cart', 'Suit1', 'Suit2', 'Suit3', 'Pilot1',
             'Worker1', 'Soldier1', 'Doctor1', 'Tech1', 'Security1', 'Telesales1']);
    };

    /**
    * Adds the general palette to the sidebar.
    */
    Sidebar.prototype.addErPalette_NEEA = function (expand) {
        this.addPalette('ER_NEEA', "ER图", expand || false, mxUtils.bind(this, function (content) {
            content.appendChild(this.createVertexTemplate(null, 80, 40));
            content.appendChild(this.createVertexTemplate('rounded=1', 80, 40));
            content.appendChild(this.createVertexTemplate('rhombus', 120, 40));
            content.appendChild(this.createVertexTemplate('ellipse', 60, 60));

            var assoc = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;edgeStyle=orthogonalEdgeStyle;');
            assoc.geometry.setTerminalPoint(new mxPoint(0, 0), true);
            assoc.geometry.setTerminalPoint(new mxPoint(160, 0), false);
            assoc.edge = true;

            //            var sourceLabel = new mxCell('文字', new mxGeometry(-1, 0, 0, 0), 'resizable=0;align=left;verticalAlign=bottom;labelBackgroundColor=#ffffff;fontSize=10');
            //            sourceLabel.geometry.relative = true;
            //            sourceLabel.setConnectable(false);
            //            sourceLabel.vertex = true;
            //            assoc.insert(sourceLabel);

            //            var targetLabel = new mxCell('文字', new mxGeometry(1, 0, 0, 0), 'resizable=0;align=right;verticalAlign=bottom;labelBackgroundColor=#ffffff;fontSize=10');
            //            targetLabel.geometry.relative = true;
            //            targetLabel.setConnectable(false);
            //            targetLabel.vertex = true;
            //            assoc.insert(targetLabel);

            //            content.appendChild(this.createEdgeTemplateFromCells([assoc], 160, 0));

            content.appendChild(this.createEdgeTemplate('edgeStyle=none;endArrow=none;', 100, 100));
            content.appendChild(this.createEdgeTemplate('edgeStyle=none;fontSize=12,strokeWidth=2', 100, 100));
            content.appendChild(this.createEdgeTemplate('edgeStyle=orthogonalEdgeStyle;fontSize=12', 100, 100));
            content.appendChild(this.createVertexTemplate('text', 40, 26, '文字'));
        }));
    };
    Sidebar.prototype.addFlowPalette_NEEA = function (expand) {
        this.addPalette('FLOW_NEEA', "程序流程图", expand || false, mxUtils.bind(this, function (content) {
            content.appendChild(this.createVertexTemplate(null, 120, 60));
            content.appendChild(this.createVertexTemplate('rhombus', 98, 57));

            var cardCell = new mxCell('条件', new mxGeometry(0, 0, 160, 40),
    		'rhombus;');
            cardCell.vertex = true;

            var assoc1 = new mxCell('否', new mxGeometry(0, 0, 0, 0), 'edgeStyle=elbowEdgeStyle;elbow=horizontal;align=left;verticalAlign=bottom;endArrow=open;endSize=8;fontSize=12;');
            assoc1.geometry.setTerminalPoint(new mxPoint(200, 20), false);
            assoc1.geometry.relative = true;
            assoc1.geometry.x = -1;
            assoc1.edge = true;

            cardCell.insertEdge(assoc1, true);

            var assoc2 = new mxCell('是', new mxGeometry(0, 0, 0, 0), 'edgeStyle=elbowEdgeStyle;elbow=horizontal;align=left;verticalAlign=top;endArrow=open;endSize=8;fontSize=12;');
            assoc2.geometry.setTerminalPoint(new mxPoint(80, 80), false);
            assoc2.geometry.relative = true;
            assoc2.geometry.x = -1;
            assoc2.edge = true;

            cardCell.insertEdge(assoc2, true);

            content.appendChild(this.createVertexTemplateFromCells([cardCell, assoc1, assoc2], 160, 40));

            content.appendChild(this.createEdgeTemplate('edgeStyle=none;fontSize=12,strokeWidth=2', 100, 100));
            content.appendChild(this.createEdgeTemplate('edgeStyle=orthogonalEdgeStyle;fontSize=12', 100, 100));
            content.appendChild(this.createVertexTemplate('text', 40, 26, '文字'));
        }));
    };
    Sidebar.prototype.addIFFlowPalette_NEEA = function (expand) {
        this.addPalette('IFFLOW_NEEA', "控制流程图", expand || false, mxUtils.bind(this, function (content) {

            var cardCell = new mxCell('', new mxGeometry(0, 20, 30, 30),
    		'ellipse;shape=startState;fillColor=#000000;strokeColor=#ff0000;');
            cardCell.vertex = true;

            var assoc2 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=elbowEdgeStyle;elbow=horizontal;verticalAlign=bottom;endArrow=open;endSize=8;strokeColor=#ff0000;');
            assoc2.geometry.setTerminalPoint(new mxPoint(15, 90), false);
            assoc2.edge = true;

            cardCell.insertEdge(assoc2, true);


            var targetLabel = new mxCell('Start', new mxGeometry(0.5, 0.2, 0, 0), 'resizable=0;align=left;verticalAlign=bottom;labelBackgroundColor=#ffffff;fontSize=12');
            targetLabel.geometry.relative = true;
            targetLabel.setConnectable(false);
            targetLabel.vertex = true;
            cardCell.insert(targetLabel);

            content.appendChild(this.createVertexTemplateFromCells([cardCell, assoc2], 30, 30));


            var cardCell = new mxCell('', new mxGeometry(0, 40, 30, 30),
    		'ellipse;shape=startState;fillColor=#000000;strokeColor=#ff0000;');
            cardCell.vertex = true;

            var assoc2 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=elbowEdgeStyle;elbow=horizontal;verticalAlign=top;endArrow=open;endSize=8;strokeColor=#ff0000;');
            assoc2.geometry.setTerminalPoint(new mxPoint(15, 0), true);
            assoc2.edge = true;

            cardCell.insertEdge(assoc2, false);


            var targetLabel = new mxCell('End', new mxGeometry(0.5, 1.5, 0, 0), 'resizable=0;align=left;verticalAlign=bottom;labelBackgroundColor=#ffffff;fontSize=12');
            targetLabel.geometry.relative = true;
            targetLabel.setConnectable(false);
            targetLabel.vertex = true;
            cardCell.insert(targetLabel);

            content.appendChild(this.createVertexTemplateFromCells([cardCell, assoc2], 30, 30));

            var classCell1 = new mxCell('', new mxGeometry(30, 20, 50, 70), 'strokeWidth=2');
            classCell1.vertex = true;

            var targetLabel = new mxCell('While', new mxGeometry(1, 0, 0, 0), 'resizable=0;align=right;verticalAlign=bottom;labelBackgroundColor=#ffffff;fontSize=12');
            targetLabel.geometry.relative = true;
            targetLabel.setConnectable(false);
            targetLabel.vertex = true;
            classCell1.insert(targetLabel);

            var assoc3 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=elbowEdgeStyle;elbow=vertical;align=left;endArrow=open;exitX=0.25;exitY=0;entryX=0.25;entryY=1;endArrow=none;endFill=0');
            assoc3.geometry.offset = new mxPoint(-60, 0);
            assoc3.geometry.x = 21;
            assoc3.geometry.y = 21;
            assoc3.geometry.points = [new mxPoint(10, 20)];
            assoc3.edge = true;

            classCell1.insertEdge(assoc3, true);
            classCell1.insertEdge(assoc3, false);

            content.appendChild(this.createVertexTemplateFromCells([classCell1, assoc3], 70, 90));


            var classCell1 = new mxCell('', new mxGeometry(0, 20, 70, 70), 'strokeWidth=2');
            classCell1.vertex = true;

            var targetLabel = new mxCell('if', new mxGeometry(0.5, 0, 0, 0), 'resizable=0;align=left;verticalAlign=bottom;labelBackgroundColor=#ffffff;fontSize=12');
            targetLabel.geometry.relative = true;
            targetLabel.setConnectable(false);
            targetLabel.vertex = true;
            classCell1.insert(targetLabel);

            var targetLabel = new mxCell('F', new mxGeometry(0, 0, 0, 0), 'resizable=0;align=right;verticalAlign=top;labelBackgroundColor=#ffffff;fontSize=12');
            targetLabel.geometry.relative = true;
            targetLabel.setConnectable(false);
            targetLabel.vertex = true;
            classCell1.insert(targetLabel);

            var targetLabel = new mxCell('T', new mxGeometry(1, 0, 0, 0), 'resizable=0;align=left;verticalAlign=top;labelBackgroundColor=#ffffff;fontSize=12');
            targetLabel.geometry.relative = true;
            targetLabel.setConnectable(false);
            targetLabel.vertex = true;
            classCell1.insert(targetLabel);

            content.appendChild(this.createVertexTemplateFromCells([classCell1], 70, 90));

            var xmlstr = '<shape name="Rounded Rectangular Callout" h="60" w="188" aspect="variable" strokewidth="inherit">'
            + '<connections><constraint x="0.5" y="0" perimeter="0" name="N"/><constraint x="0.5" y="0.715" perimeter="0" name="S"/><constraint x="0" y="0.355" perimeter="0" name="W"/><constraint x="1" y="0.355" perimeter="0" name="E"/><constraint x="0.04" y="1" perimeter="0" name="SW"/></connections>'
            + '<background><miterlimit limit="15"/><path><move x="15.5" y="43"/><line x="5" y="43"/><arc rx="5" ry="5" x-axis-rotation="0" large-arc-flag="0" sweep-flag="1" x="0" y="38"/><line x="0" y="5"/><arc rx="5" ry="5" x-axis-rotation="0" large-arc-flag="0" sweep-flag="1" x="5" y="0"/><line x="183" y="0"/><arc rx="5" ry="5" x-axis-rotation="0" large-arc-flag="0" sweep-flag="1" x="188" y="5"/><line x="188" y="38"/><arc rx="5" ry="5" x-axis-rotation="0" large-arc-flag="0" sweep-flag="1" x="183" y="43"/><line x="29" y="43"/><arc rx="30" ry="30" x-axis-rotation="0" large-arc-flag="0" sweep-flag="1" x="4" y="60"/><arc rx="30" ry="30" x-axis-rotation="0" large-arc-flag="0" sweep-flag="0" x="15.5" y="43"/><close/></path></background>'
            + '<foreground><fillstroke/></foreground>'
            + '</shape>';
            this.addStencil_NEEA(content, xmlstr, 'neea_tagging', '')

            content.appendChild(this.createEdgeTemplate('edgeStyle=none;fontSize=12,strokeWidth=2', 100, 100));
            content.appendChild(this.createEdgeTemplate('edgeStyle=orthogonalEdgeStyle;fontSize=12', 100, 100));
            content.appendChild(this.createVertexTemplate('text', 40, 26, '文字'));

        }));
        var xmlstr = '<shape name="Rounded Rectangular Callout" h="60" w="188" aspect="variable" strokewidth="inherit">'
            + '<connections><constraint x="0.5" y="0" perimeter="0" name="N"/><constraint x="0.5" y="0.715" perimeter="0" name="S"/><constraint x="0" y="0.355" perimeter="0" name="W"/><constraint x="1" y="0.355" perimeter="0" name="E"/><constraint x="0.04" y="1" perimeter="0" name="SW"/></connections>'
            + '<background><miterlimit limit="15"/><path><move x="15.5" y="43"/><line x="5" y="43"/><arc rx="5" ry="5" x-axis-rotation="0" large-arc-flag="0" sweep-flag="1" x="0" y="38"/><line x="0" y="5"/><arc rx="5" ry="5" x-axis-rotation="0" large-arc-flag="0" sweep-flag="1" x="5" y="0"/><line x="183" y="0"/><arc rx="5" ry="5" x-axis-rotation="0" large-arc-flag="0" sweep-flag="1" x="188" y="5"/><line x="188" y="38"/><arc rx="5" ry="5" x-axis-rotation="0" large-arc-flag="0" sweep-flag="1" x="183" y="43"/><line x="29" y="43"/><arc rx="30" ry="30" x-axis-rotation="0" large-arc-flag="0" sweep-flag="1" x="4" y="60"/><arc rx="30" ry="30" x-axis-rotation="0" large-arc-flag="0" sweep-flag="0" x="15.5" y="43"/><close/></path></background>'
            + '<foreground><fillstroke/></foreground>'
            + '</shape>';
        this.addStencil_NEEA(null, xmlstr, 'neea_tagging', '')
    };
    Sidebar.prototype.addStatusPalette_NEEA = function (expand) {
        this.addPalette('STATUS_NEEA', "状态转换图", expand || false, mxUtils.bind(this, function (content) {

            content.appendChild(this.createVertexTemplate('ellipse;shape=endState;fillColor=#000000;strokeColor=#ff0000', 30, 30));

            var classCell = new mxCell('<p style="margin:0px;margin-top:4px;text-align:center;">' +
    			'<b>标题</b></p>' +
				'<hr/><p style="margin:0px;margin-left:4px;text-align:center;">内容</p>', new mxGeometry(0, 0, 130, 80),
				'rounded=1;verticalAlign=top;align=left;overflow=fill;fontSize=12;fontFamily=Helvetica;html=1');
            classCell.vertex = true;
            content.appendChild(this.createVertexTemplateFromCells([classCell], 130, 80));

            content.appendChild(this.createEdgeTemplate('edgeStyle=none;fontSize=12,strokeWidth=2', 100, 100));
            content.appendChild(this.createEdgeTemplate('edgeStyle=orthogonalEdgeStyle;fontSize=12', 100, 100));
            content.appendChild(this.createVertexTemplate('text', 40, 26, '文字'));
        }));
    };
    Sidebar.prototype.addActivityPalette_NEEA = function (expand) {
        this.addPalette('ACTIVITY_NEEA', "活动图", expand || false, mxUtils.bind(this, function (content) {
            var cardCell = new mxCell('', new mxGeometry(0, 0, 30, 30),
                'ellipse;shape=startState;fillColor=#000000;');
            cardCell.vertex = true;
            var assoc2 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=elbowEdgeStyle;elbow=horizontal;verticalAlign=bottom;endArrow=open;endSize=8;');
            assoc2.geometry.setTerminalPoint(new mxPoint(15, 70), false);
            assoc2.edge = true;
            cardCell.insertEdge(assoc2, true);
            content.appendChild(this.createVertexTemplateFromCells([cardCell, assoc2], 30, 30));

            var cardCell = new mxCell('', new mxGeometry(0, 0, 120, 40),
                'rounded=1;arcSize=40;');
            cardCell.vertex = true;
            var assoc2 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=elbowEdgeStyle;elbow=horizontal;verticalAlign=bottom;endArrow=open;endSize=8;');
            assoc2.geometry.setTerminalPoint(new mxPoint(60, 80), false);
            assoc2.edge = true;
            cardCell.insertEdge(assoc2, true);
            content.appendChild(this.createVertexTemplateFromCells([cardCell, assoc2], 120, 40));

            content.appendChild(this.createVertexTemplate('rhombus;', 60, 30));

            var cardCell = new mxCell('', new mxGeometry(0, 0, 200, 10),
                'shape=line;strokeWidth=6;strokeColor=#000000;');
            cardCell.vertex = true;
            var assoc2 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=elbowEdgeStyle;elbow=horizontal;verticalAlign=bottom;endArrow=open;endSize=8;');
            assoc2.geometry.setTerminalPoint(new mxPoint(100, 50), false);
            assoc2.edge = true;
            cardCell.insertEdge(assoc2, true);
            content.appendChild(this.createVertexTemplateFromCells([cardCell, assoc2], 200, 10));

            content.appendChild(this.createVertexTemplate('ellipse;shape=endState;fillColor=#000000;', 30, 30));
            content.appendChild(this.createEdgeTemplate('edgeStyle=none;fontSize=12,strokeWidth=2', 100, 100));
            content.appendChild(this.createEdgeTemplate('edgeStyle=orthogonalEdgeStyle;fontSize=12', 100, 100));
            content.appendChild(this.createVertexTemplate('text', 40, 26, '文字'));
        }));
    };

    Sidebar.prototype.addStencil_NEEA = function (content, xmlstr, name, style) {
        var shape = xmlfromstring(xmlstr);
        mxStencilRegistry.addStencil(name, new mxStencil(shape));

        var w = shape.getAttribute('w');
        var h = shape.getAttribute('h');
        var scale = 1;

        w = (w == null) ? 80 : parseInt(w, 10);
        h = (h == null) ? 80 : parseInt(h, 10);
        var rs = this.createVertexTemplate('shape=' + name + ';' + style,
					Math.round(w * scale), Math.round(h * scale), '');

        if(content!=null)
            content.appendChild(rs);
    };
})();