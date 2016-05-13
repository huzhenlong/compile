/**
 * Created by zw on 2016/1/5.
 */
(function ($, window, document, undefined) {
    if (typeof $.Workflow !== 'undefined') {
        return;
    }
    var defaultOptions = {
        nodeSize: 50,
        // 最大列数
        maxColumn: 0,
        // 垂直间距
        verticalInterval: 1.5,
        horizontalInterval: 1.5,
        textInterval: 10
    };

    var WorkflowEvent = {
        Loaded: "canvas.load.workflow",
        AddNode: "node.add.workflow",
        DeleteNode: "node.delete.workflow",
        SelectNode: "node.select.workflow",
        MouseOverNode: "node.mouseover.workflow",
        MouseOverLine: "line.mouseover.workflow",
        MoveNode: "node.move.workflow"
    };

    var canvas = $('canvas');
    var nodeIndex = 0;
    var workflowIndex = 0;

    //region 一般方法

    var getNodeId = function (key, name, type) {
        if (type === 'end') {
            return key + "-" + type;
        }
        else {
            var id = md5(key + name);
            id += "-" + type;
            return id;
        }
    };

    var getLineName = function (name) {
        return name + "-line";
    };

    var getCommonArcName = function (name) {
        return name + "-arc";
    };

    var getPlusTextName = function (name) {
        return name + "-text";
    };

    var getTextNumber = function (name) {
        return name + "-num";
    };

    var getLoopName = function (name) {
        return name + "-loop";
    };

    var getChildIndex = function (name, nIndex) {
        if (typeof name == "string") {
            name = canvas.getLayer(name).data;
        }

        if (name["type"] == 'advanced-group-flow') {
            var ports = name["ports"];
            return ports[nIndex - 1];
        }

        return nIndex;
    };

    var getChildName = function (name, nIndex) {
        return name + "_" + nIndex;
    };

    var getPlusName = function (name) {
        if (isPlusRect(name)) {
            return name;
        }
        return name + "-plus";
    };

    var isPlusRect = function (name) {
        return (name + '').indexOf("-plus") != -1;
    };

    var getRandomColor = function () {
        return '#' +
            (function (color) {
                return (color += '0123456789'[Math.floor(Math.random() * 10)])
                && (color.length == 3) ? color : arguments.callee(color);
            })('');
    };

    var getGroupName = function (name) {
        return "c_" + (name.split('_').length - 1);
    };

    var getLeafLayers = function (canvas) {
        return canvas.getLayers(function (layer) {
            var isLeaf = layer.data["isLeaf"];
            return isLeaf;
        });
    };

    var getCenterPoint = function (startNode, outCount, nIndex) {
        var centerPoint = [];
        var nodeSize = startNode.nodeSize;
        centerPoint[0] = startNode.x + startNode.horizontalInterval * nodeSize;
        centerPoint[1] = startNode.y - startNode.horizontalInterval * ((outCount - 1) / 2 - (nIndex - 1)) * nodeSize;
        return centerPoint;
    };

    var getLineStartPoint = function (startNode, outCount, nIndex) {
        var nodeSize = startNode.nodeSize;
        var x = startNode.x + nodeSize / 2 * Math.cos(Math.PI / 2 - Math.PI / (outCount + 1) * nIndex);
        var y = startNode.y - nodeSize / 2 * Math.sin(Math.PI / 2 - Math.PI / (outCount + 1) * nIndex);
        return [x, y]
    };

    var getLineEndPoint = function (endNode) {
        return [endNode.x - endNode.nodeSize / 2, endNode.y];
    };


    //endregion


    var getChildNode = function (canvas, name, nIndex) {
        var childName = getChildName(name, getChildIndex(name, nIndex));
        var child = canvas.getLayer(childName);
        if (!child) {
            child = canvas.getLayer(getPlusName(childName));
        }
        return child;
    };

    var sortNode = function (a, b) {
        return a.name > b.name ? 1 : -1
    };

    var sortPort = function (a, b) {
        return a > b ? 1 : -1
    };


    var Workflow = function (opts) {
        var that = this;
        if (!(that instanceof Workflow)) {
            that = new Workflow();
        }
        that.init(opts);
        return that;
    };

    Workflow.prototype.setOption = function (key, value) {
        if (!this.options) {
            this.options = {};
        }
        this.options[key] = value;
    };

    Workflow.prototype.getOption = function (key) {
        if (key in this.options) {
            return this.options[key];
        }
        return null;
    };

    Workflow.prototype.init = function (opts) {
        var that = this;
        that.options = $.extend({}, defaultOptions, opts);
        var key = that.getOption("key");
        that.workflowModal = WorkflowNodeModal({
            onClickNode: that.drawCommonRect,
            onSaveNode: that.setNodeValues,
            key: that.getOption("key"),
            workflow: that
        });
        that.data = {};
        var height = canvas.height();
        var nodeSize = that.getOption("nodeSize");
        var beginNode = {};
        beginNode.name = "n0";
        beginNode = that.buildNode(beginNode, [nodeSize, height / 2]);
        that.drawPlusRect(beginNode);
        if (typeof opts.onload == 'function') {
            canvas.bind(WorkflowEvent.Loaded, opts.onload);
        }
        canvas.trigger(WorkflowEvent.Loaded, that);
        $(document).on("keydown", function (e) {
            if (e.keyCode == 46 || e.keyCode == 8) {
                if (e.target.tagName === 'CANVAS'
                    || e.target.tagName === 'DOCUMENT'
                    || e.target.tagName === 'BODY') {
                    that.deleteSelectedNode();
                    return false;
                }
            }
        });
        return that;
    };

    Workflow.prototype.clearCanvas = function () {
        var that = this;
        canvas.removeLayers();
        canvas.clearCanvas();
        var height = canvas.height();
        var nodeSize = that.getOption("nodeSize");
        var beginNode = {};
        beginNode.name = "n0";
        beginNode = that.buildNode(beginNode, [nodeSize, height / 2]);
        that.drawPlusRect(beginNode);
    };

    Workflow.prototype.addWorkflow = function () {
        var that = this;
        var nodeSize = that.getOption("nodeSize");
        var beforeLayer = canvas.getLayer("n" + workflowIndex);
        while (!beforeLayer) {
            workflowIndex++;
            beforeLayer = canvas.getLayer("n" + workflowIndex);
        }
        if (beforeLayer) {
            var beginNode = {};
            workflowIndex++;
            beginNode.name = "n" + workflowIndex;
            beginNode = that.buildNode(beginNode, [beforeLayer.x, beforeLayer.y + 1.5 * nodeSize]);
            that.drawPlusRect(beginNode);
            that.moveRect();
        }
    };

    Workflow.prototype.getWorkflowCount = function () {
        var layers = canvas.getLayerGroup("c_0");
        return layers.length;
    };

    Workflow.prototype.showThumbnail = function () {
        this.workflowModal.showThumbnail(canvas);
    };

    //region 数据操作
    Workflow.prototype.buildNode = function (node, centerPoint) {
        var newNode = this.buildPlusNode(node, centerPoint);
        newNode.type = node.type;
        newNode.ports = node.ports;
        newNode.src = node.src;
        newNode.desc = node.desc;
        newNode.dependName = node.dependName;
        return newNode;
    };

    Workflow.prototype.buildPlusNode = function (node, centerPoint) {
        if (!node) {
            node = {};
        }
        var that = this;
        var newNode = {};
        newNode.nodeSize = that.getOption("nodeSize");
        newNode.verticalInterval = that.getOption("verticalInterval");
        newNode.horizontalInterval = that.getOption("horizontalInterval");
        newNode.key = that.getOption("key");
        newNode.name = node.name;
        newNode.color = node.color;
        if (centerPoint) {
            newNode.x = centerPoint[0];
            newNode.y = centerPoint[1];
        }
        else {
            newNode.x = node.x;
            newNode.y = node.y;
        }
        return newNode;
    };

    Workflow.prototype.loadNodes = function (data) {
        var that = this;
        var loadFunc = function (data, wf) {
            return function () {
                if (data && data.nodes && data.nodes.length > 0) {
                    canvas.removeLayers();
                    wf.drawCommonRect(data.nodes);
                    workflowIndex = that.getWorkflowCount() - 1;
                    console.info("workflowIndex=" + workflowIndex);
                    canvas.click();
                }
            }
        };

        var clickFunc = function () {
            return function () {
                canvas.click();
            }
        };
        setTimeout(loadFunc(data, this), 100);
        setTimeout(clickFunc(), 200);
    };

    var generateAction = function (node) {
        return {type: node.type, id: node.id, workValues: node.workValues}
    };

    Workflow.prototype.getNodes = function () {
        var lines = [];
        var nodes = [];
        var actions = [];
        var ids = {};
        var layers = canvas.getLayers(function (layer) {
            return typeof layer.name === 'string'
        }).sort(sortNode);
        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            if (layer.data) {
                var node = layer.data;

                switch (node.nodeDrawType) {

                    case "line":
                        var temp = [];
                        temp.push(node.sid);
                        temp.push(node.port);
                        temp.push(node.did);
                        lines.push(temp.join());

                        break;
                    default:
                        if (node.id) {
                            var rNode = $.extend({}, node, {isLoaded: false, nodeModal: false});

                            nodes.push(rNode);
                            if (!(node.id in ids) && !node.dependName) {
                                ids[node.id] = true;
                                actions.push(generateAction(rNode));
                            }
                        }

                        break;
                }
            }

        }
        return {lines: lines.join(';'), nodes: nodes, actions: actions};
    };

    Workflow.prototype.getNodeByName = function (name) {
        var layer = canvas.getLayer(name);
        if (layer) {
            return layer.data;
        }
        return null;
    };

    Workflow.prototype.getIcon = function (nodeModalId) {
        var that = this;
        var node = that.workflowModal.getNode(nodeModalId);
        if (node) {
            return node.icon;
        }
        else {
            return null;
        }
    };

    Workflow.prototype.deleteNode = function (nodeName) {
        var layer = canvas.getLayer(nodeName);
        if (layer) {
            var lineName = getLineName(nodeName);
            var delLayers = canvas.getLayers(function (delLayer) {
                return delLayer.name && delLayer.name.indexOf(layer.name) == 0 && delLayer.name != lineName;
            });
            for (var i = 0; i < delLayers.length; i++) {
                canvas.removeLayer(delLayers[i]);
            }
            var copyLayers = canvas.getLayers(function (copyLayer) {
                return copyLayer.data && copyLayer.data.dependName == nodeName;
            });
            for (var n = 0; n < copyLayers.length; n++) {
                var copyLayer = copyLayers[n];
                canvas.removeLayerGroup(copyLayer.name);
                var copyNode = this.buildPlusNode(copyLayer, [copyLayer.x, copyLayer.y]);
                this.drawPlusRect(copyNode);
            }
            canvas.removeLayer(getTextNumber(layer.name));
            var node = this.buildPlusNode(layer.data, [layer.x, layer.y]);
            this.drawPlusRect(node);
            this.removeSelected();
            canvas.drawLayers({clear: true});

            canvas.trigger(WorkflowEvent.DeleteNode, layer.data);
        }
    };

    Workflow.prototype.deleteSelectedNode = function () {
        var selected = this.getOption("selected");
        this.deleteNode(selected);
    };

    Workflow.prototype.setNodeValues = function (name, values) {
        var layer = canvas.getLayer(name);
        if (layer) {
            layer.data["workValues"] = values;
            if (layer.data["type"] == "advanced-group-flow") {
                layer.data["ports"] = typeof values.group == 'string' ? values.group.split(',') : values.group;
            }
        }
    };

    Workflow.prototype.setAllPlusNodes = function (endFlag) {
        var that = this;
        var layers = canvas.getLayerGroup("plus");
        that.workflowModal.clearHistoryNode();
        var nodes = that.getNodes().nodes;
        if ($.isArray(nodes)) {
            nodes.forEach(function (nodeTemp) {
                if (!nodeTemp.dependName) {
                    nodeTemp.dependName = nodeTemp.name;
                    nodeTemp.ports = [];
                    nodeTemp.outCount = 0;
                    that.workflowModal.addHistoryNode(nodeTemp);
                }
            });
        }
        if ($.isArray(layers)) {
            var sources = [];
            layers.forEach(function (layer) {
                if (layer.data) {
                    layer.data.x = layer.x;
                    layer.data.y = layer.y;
                    delete layer.data.color;
                    sources.push(layer.data);
                }
            });
            if (endFlag) {
                that.workflowModal.addWorkflowNode(sources, "tab-base-end");
            } else {
                that.workflowModal.show(sources);
            }
        }
    };

    //endregion


    //region 画图

    Workflow.prototype.drawPlusRect = function (node) {
        var that = this;
        var name = node.name;
        var color = node.color;
        var columnNum = name.split('_').length;
        var nodeSize = that.getOption("nodeSize");
        that.setOption("maxColumn", Math.max(columnNum, that.getOption("maxColumn")));
        node.isLeaf = true;
        delete node.type;
        var plusGroup = getPlusName(name);
        canvas.drawArc({
            layer: true,
            name: getPlusName(name),
            groups: [getGroupName(name), plusGroup, 'plus'],
            data: node,
            strokeStyle: 'gray',
            strokeWidth: 2,
            strokeDash: [5],
            x: node.x, y: node.y,
            radius: nodeSize / 2,
            click: function (layer) {
                if (layer.data) {
                    layer.data.x = layer.x;
                    layer.data.y = layer.y;
                    delete layer.data.color;
                    that.workflowModal.clearHistoryNode();
                    var nodes = that.getNodes().nodes;
                    if ($.isArray(nodes)) {
                        nodes.forEach(function (nodeTemp) {
                            if (!nodeTemp.dependName) {
                                nodeTemp.dependName = nodeTemp.name;
                                nodeTemp.ports = [];
                                nodeTemp.outCount = 0;
                                if (nodeTemp.id.indexOf("-end") == -1) {
                                    that.workflowModal.addHistoryNode(nodeTemp);
                                }
                            }
                        });
                    }
                    that.workflowModal.show(layer.data);
                }
            },
            mouseover: function (layer) {
                console.info("plus.name=" + layer.name);
                canvas.trigger(WorkflowEvent.MouseOverNode, layer.data);
            }
        }).drawText({
            layer: true,
            name: getPlusTextName(name),
            groups: [plusGroup],
            fillStyle: color || '#36c',
            strokeWidth: 2,
            x: node.x, y: node.y,
            fontSize: '20pt',
            fontFamily: 'Verdana, sans-serif',
            text: '+'
        });
        return node;
    };

    Workflow.prototype.drawCommonRect = function (nodeData, loadFunc, loadFuncArgs) {
        var that = this;
        if (!$.isArray(nodeData)) {
            nodeData = [nodeData];
        }
        nodeData.sort(sortNode);
        nodeData.forEach(function (node, index, array) {
            var tColor = getRandomColor();
            var nodeSize = that.getOption("nodeSize");
            node.ports = node.ports.sort(sortPort);
            var outCount = node.ports.length;
            var color = node.color || tColor;
            node.color = color;
            var name = node.name;
            var group = getGroupName(name);
            node.isLeaf = outCount < 1;
            node.outCount = outCount;
            var text = node.desc;
            if (!node.id) {
                nodeIndex++;
                node.nodeIndex = nodeIndex;
                node.id = getNodeId(node.key, node.name, node.type);
                node.desc = text;
            }
            else {
                nodeIndex = Math.max(nodeIndex, node.nodeIndex);
            }

            var icon = that.getIcon(node.nodeModalId) || node.icon;

            // 清除Plus
            canvas.setLayer(getLineName(name), {strokeDash: []});
            canvas.removeLayerGroup(getPlusName(name));
            canvas.drawText({
                layer: true,
                text: icon,
                name: name,
                data: node,
                groups: [group, name],
                x: node.x, y: node.y,
                fillStyle: color,
                fontStyle: "bold",
                fontSize: nodeSize + 'px',
                fontFamily: 'IconFont',
                cursors: {"mouseover": "pointer"},
                click: function (layer) {
                    if (layer.data.dependName) {
                        that.shakeRect(layer.data.dependName);
                    }
                    console.info(layer.name + ";width=" + layer.width + ";height=" + layer.height);
                    that.drawSelected(layer.name);
                    canvas.focus();
                },
                dblclick: function (layer) {
                    if (layer.data.dependName) {
                        canvas.triggerLayerEvent(layer.data.dependName, 'dblclick');
                    }
                    else {
                        if (layer.data.nodeModal === false && layer.data.nodeModalId) {
                            layer.data.nodeModal = that.workflowModal.generateNodeModal(layer.data.nodeModalId);
                        }
                        if (layer.data.nodeModal) {
                            var modal = layer.data.nodeModal;
                            modal.show();
                            if (layer.data.workValues) {
                                modal.editContent($.extend(layer.data.workValues, {layerName: layer.name}));
                                var wGroup = layer.data.workValues.group;
                                if (wGroup) {
                                    var preSel = wGroup.split(',');
                                    for (var i = 0; i < preSel.length; i++) {
                                        if (!modal.$form.find('[value="' + preSel[i] + '"]')) {
                                            that.deleteNode(layer.name + '_' + preSel[i]);
                                        }
                                    }
                                }

                                //console.info("workValues=" + JSON.stringify(layer.data));
                                console.info("workValues=" + JSON.stringify(layer.data.workValues));
                            }
                            else {
                                console.info("workValues is null");
                            }
                        }
                        //}

                    }
                },
                mouseover: function (layer) {
                    var infoLayerCss = 'top:' + (layer.eventY - 60) + 'px;left:' + node.x + 'px;';
                    var nameArray = layer.name.split('_');
                    var fromGroup = nameArray.pop();
                    var desc = layer.data.desc;
                    if (fromGroup && fromGroup.length > 30) {
                        var parentData = canvas.getLayer(nameArray.join('_')).data;
                        if (parentData.nodeModal === false && parentData.nodeModalId) {
                            parentData.nodeModal = that.workflowModal.generateNodeModal(parentData.nodeModalId);
                        }
                        desc = '分组来自：' + $('[value="' + fromGroup + '"]').parent('label').text();
                    }
                    $('#canvases').append('<div class="infoLayer" style="' + infoLayerCss + '">' + desc + '</div>');
                    canvas.trigger(WorkflowEvent.MouseOverNode, layer.data);
                    console.info(layer.data["id"] + "-" + layer.name);
                },
                mouseout: function () {
                    var infoLayer = $('.infoLayer');
                    if (infoLayer && infoLayer.length > 0) {
                        infoLayer.remove();
                    }
                }
            });
            if (node.dependName) {
                text = '\ue662' + text;
            } else {
                for (var n = 0; n < outCount; n++) {
                    var centerPoint = getCenterPoint(node, node.outCount, n + 1);
                    var childName;
                    if (node.type == "advanced-group-flow") {
                        childName = getChildName(name, node.ports[n]);
                    } else {
                        childName = getChildName(name, getChildIndex(node, n + 1));
                    }
                    var plusNode = {name: childName, color: tColor};
                    plusNode = that.buildPlusNode(plusNode, centerPoint);
                    var dNode = that.drawPlusRect(plusNode);
                    that.drawLine(node, dNode, n + 1, color);
                }
            }

            canvas.drawText({
                layer: true,
                groups: [name],
                name: getTextNumber(name),
                fillStyle: color,
                strokeWidth: 2,
                x: node.x,
                y: node.y + nodeSize / 2 + that.getOption("textInterval"),
                fontSize: '8pt',
                fontFamily: 'Microsoft YaHei,IconFont,sans-serif',
                text: text
            });
            if (index == (array.length - 1)) {
                var moveRect = function () {
                    return function () {
                        that.moveRect();
                    }
                };
                setTimeout(moveRect(), 100);

                if (loadFunc && (typeof loadFunc == "function")) {
                    loadFunc.apply(that, loadFuncArgs);
                }
            }
        });
        canvas.trigger(WorkflowEvent.AddNode, nodeData);
    };

    Workflow.prototype.drawSelected = function (clickName) {
        var that = this;
        var nodeSize = this.getOption("nodeSize");
        this.setOption("selected", clickName);
        var clickLayer = canvas.getLayer(clickName);
        var name = "workflow-selected";
        var layer = canvas.getLayer(name);
        if (layer) {
            canvas.removeLayer(layer);
        }
        var selectArc = {
            layer: true,
            name: name,
            strokeWidth: 2,
            strokeStyle: 'rgb(0,0,255)',
            x: clickLayer.x,
            y: clickLayer.y,
            radius: parseInt(nodeSize / 2) + 4,
            click: function () {
                canvas.triggerLayerEvent(that.getOption("selected"), 'click');
            },
            dblclick: function () {
                canvas.triggerLayerEvent(that.getOption("selected"), 'dblclick');
            }
        };
        canvas.drawArc(selectArc);

        canvas.trigger(WorkflowEvent.SelectNode, clickLayer.data);
    };

    Workflow.prototype.removeSelected = function () {
        this.setOption("selected", "");
        var name = "workflow-selected";
        var layer = canvas.getLayer(name);
        if (layer) {
            canvas.removeLayer(layer);
        }
    };

    Workflow.prototype.drawLine = function (sNode, dNode, nIndex, color) {
        var name = getLineName(dNode["name"]);
        var sp = getLineStartPoint(sNode, sNode.outCount, nIndex);
        var dp = getLineEndPoint(dNode);
        var obj = {
            layer: true,
            data: {
                sid: sNode.id,
                did: dNode.id || "",
                nodeDrawType: "line",
                port: nIndex,
                sNode: sNode,
                dNode: dNode
            },
            name: name,
            strokeStyle: color || 'gray',
            strokeWidth: 2,
            strokeDash: [5],
            rounded: true,
            mouseover: function (layer) {

                canvas.trigger(WorkflowEvent.MouseOverLine, layer.data);
            }
        };

        var pts = [sp];
        if (sp[1] != dp[1]) {
            var tempX = sp[0] + (dp[0] - sp[0]) / 2;
            pts.push([tempX, sp[1]]);
            pts.push([tempX, dp[1]]);
        }
        pts.push(dp);

        for (var p = 0; p < pts.length; p += 1) {
            obj['x' + (p + 1)] = pts[p][0];
            obj['y' + (p + 1)] = pts[p][1];
        }
        canvas.drawLine(obj);
        canvas.moveLayer(name, 0);
    };

    Workflow.prototype.movePlusRect = function (name, y) {
        var layer = canvas.getLayer(getPlusName(name));
        if (layer) {
            canvas.setLayer(layer, {y: y});
            canvas.setLayer(getPlusTextName(name), {y: y});
            var layerLine = canvas.getLayer(getLineName(name));
            if (layerLine) {
                if (layerLine.hasOwnProperty("y3")) {
                    canvas.setLayer(layerLine, {y3: y, y4: y});
                }
                else {
                    canvas.setLayer(layerLine, {y2: y});
                }
            }
        }
        else {
            console.info("Did not found " + name + " plus.")
        }

    };

    Workflow.prototype.moveCommonRect = function (name, y) {
        var nodeSize = this.getOption("nodeSize");
        var layer = canvas.getLayer(name);
        if (layer) {
            var distance = y - layer.y;
            canvas.setLayer(layer, {y: y});
            canvas.setLayer(getLoopName(name), {y: y});
            //canvas.setLayer(getCommonArcName(name), {y: y});
            canvas.setLayer(getTextNumber(name), {y: y + nodeSize / 2 + this.getOption("textInterval")});
            var layerLine = canvas.getLayer(getLineName(name));
            if (layerLine) {
                if (layerLine.hasOwnProperty("y3")) {
                    canvas.setLayer(layerLine, {y3: y, y4: y});
                }
                else {
                    canvas.setLayer(layerLine, {y2: y});
                }
                layerLine.data.did = layer.data.id;
            }

            var outCount = parseInt(layer.data["outCount"]);
            for (var n = 0; n < outCount; n++) {
                var childName = getChildName(name, getChildIndex(layer.data, n + 1));
                var layerChildLine = canvas.getLayer(getLineName(childName));
                if (layerChildLine) {
                    if (layerChildLine.hasOwnProperty("y3")) {
                        canvas.setLayer(layerChildLine, {
                            y1: layerChildLine.y1 + distance,
                            y2: layerChildLine.y2 + distance
                        });
                    }
                    else {
                        canvas.setLayer(layerChildLine, {y1: layerChildLine.y1 + distance});
                    }
                }
            }
        }
    };

    Workflow.prototype.moveRect = function () {
        var that = this;
        var maxColumn = this.getOption("maxColumn");
        var nodeSize = this.getOption("nodeSize");
        var verticalInterval = this.getOption("verticalInterval");
        var horizontalInterval = this.getOption("horizontalInterval");
        var layers = getLeafLayers(canvas).sort(sortNode);
        var height = verticalInterval * (layers.length + 1) * nodeSize;
        var width = ((maxColumn + 1) * horizontalInterval + 1) * nodeSize;
        if (height > canvas[0].height) {
            canvas[0].height = height;
        }
        if (width > canvas[0].width) {
            canvas[0].width = width;
        }
        var yMargin = parseInt((canvas[0].height - height) / 2);
        canvas.drawLayers();
        for (var n = 0; n < layers.length; n++) {
            var layer = layers[n];
            var y = ((n + 1) * verticalInterval ) * nodeSize + yMargin;
            if (isPlusRect(layer.name)) {
                that.movePlusRect(layer.data["name"], y);
            } else {
                that.moveCommonRect(layer.name, y);
            }
        }
        canvas.drawLayers();
        for (var column = maxColumn - 1; column > -1; column--) {
            var gName = "c_" + column;
            var cLayers = canvas.getLayerGroup(gName);
            if (cLayers) {
                cLayers = cLayers.sort(sortNode);
                for (var nIndex = 0; nIndex < cLayers.length; nIndex++) {
                    var nLayer = cLayers[nIndex];
                    if (!isPlusRect(nLayer.name)) {
                        var firstChild = getChildNode(canvas, nLayer.name, 1);
                        if (firstChild) {
                            var nCount = parseInt(nLayer.data["outCount"]);
                            var moveToY = 0;
                            if (nCount % 2 == 0) {
                                var beginLayer = getChildNode(canvas, nLayer.name, nCount / 2);
                                var endLayer = getChildNode(canvas, nLayer.name, nCount / 2 + 1);
                                moveToY = parseInt((beginLayer.y + endLayer.y) / 2);
                            }
                            else {
                                moveToY = getChildNode(canvas, nLayer.name, (nCount + 1) / 2).y;
                            }
                            that.moveCommonRect(nLayer.name, moveToY);
                        }
                    }
                }
            }
        }
        that.removeSelected();
        canvas.drawLayers({clear: true});
        canvas.click();
        canvas.trigger(WorkflowEvent.MoveNode);
    };

    Workflow.prototype.shakeRect = function (gName) {
        canvas.animateLayerGroup(gName, {
            y: '+=5'
        }, 50).animateLayerGroup(gName, {
            y: '-=10'
        }, 100).animateLayerGroup(gName, {
            y: '+=5'
        }, 50).animateLayerGroup(gName, {
            x: '+=5'
        }, 50).animateLayerGroup(gName, {
            x: '-=10'
        }, 100).animateLayerGroup(gName, {
            x: '+=5'
        }, 50);
    };
    //endregion

    //region 监听事件

    Workflow.prototype.on = function (name, callback) {
        canvas.on(name, callback);
    };

    Workflow.prototype.off = function (name) {
        canvas.off(name, callback);
    };

    //endregion

    if (typeof $.Workflow === 'undefined') {
        $.Workflow = Workflow;
        window.Workflow = Workflow;
        document.Workflow = Workflow;

        $.WorkflowEvent = WorkflowEvent;
        window.WorkflowEvent = WorkflowEvent;
        document.WorkflowEvent = WorkflowEvent;
    }

})(jQuery, window, document);