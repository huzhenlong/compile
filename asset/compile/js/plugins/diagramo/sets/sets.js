/**
 * Created by Bigdata02 on 2015/8/21.
 */



var FigureDefaults = {
    /**Size of figure's segment*/
    segmentSize : 70,

    /**Size of figure's short segment*/
    segmentShortSize : 40,

    /**Size of radius*/
    radiusSize : 35,

    /**Size of offset for parallels
     * For example: for parallelogram it's projection of inclined line on X axis*/
    parallelsOffsetSize : 40,

    /**Corner radius
     * For example: for rounded rectangle*/
    corner : 10,

    /**Corner roundness
     * Value from 0 to 10, where 10 - it's circle radius.*/
    cornerRoundness : 8,

    /**Color of lines*/
    strokeStyle : "#000000",

    /**Color of fill*/
    fillStyle : "#ffffff",

    /**Text size*/
    textSize : 12,

    /**Text label*/
    textStr : "Text",

    /**Text font*/
    textFont : "Arial",

    /**Color of text*/
    textColor : "#000000"
};
/**
 * 双击产生选中页面
 * @param f
 */
function doubleClickFunc(f){
    var ret = createFigureClickHtml(f.id, f.figureType);
    if (ret == 1) {
        $("#showMesg").modal("show");
    }
    /*$("#outCreate").click(function(){
        var count = 0;
        $('input[name="selectPoint"]:checked').each(function(){
            ++count;
        });
        var x = f.rotationCoords[0].x;
        var y = f.rotationCoords[0].y;
        CONNECTOR_MANAGER.connectionPointRemoveAllByParent(f.id)
        addConnectionPoint(f, x, y,count);
        var ctx = getContext();
        CONNECTOR_MANAGER.connectionPointPaint(ctx, f.id)
        $("#showMesg").hide()
    });*/
}

function unDoubleClickFunc(f){
    $("#outCreate").unbind()
}
/**
 * Image Button
 * @param f
 * @param x
 * @param y
 * @param src
 * @param outCount
 * @returns {*}
 */
function base_Image(f,x,y,src,outCount){
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    var ifig = new ImageFrame(src, x, y, true, 48, 48);
    ifig.debug = true;
    f.addPrimitive(ifig);

    //Text
    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

    addConnectionPoint(f, x, y, outCount);

    f.finalise();
    return f;
}
/**
 * 双击页面按钮
 * @param x
 * @param y
 * @param src
 * @param outCount
 * @returns {*}
 */
function figure_ImageClick(x, y, src, outCount, figureType)
{
    var f = new Figure("figure", x, y);
    f.figureType = figureType;
    f.doubleClickFunc = doubleClickFunc;
    f.unDoubleClickFunc = unDoubleClickFunc;
    f.funcType = "image_click";
    return base_Image(f,x,y,src,outCount);
}
/**
 * 单击页面按钮
 * @param x
 * @param y
 * @param src
 * @param outCount
 * @returns {*}
 */
function figure_Image(x,y,src,outCount,figureType)
{
    var f = new Figure("figure", x, y);
    f.figureType = figureType;
    f.funcType = "image";
    return base_Image(f,x,y,src,outCount);
}
/**
 * 添加链接点
 * @param f
 * @param x
 * @param y
 * @param count
 */
function addConnectionPoint(f,x,y,count){
    if(f.figureType != 1) {
        CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - 24, y), ConnectionPoint.TYPE_FIGURE);
    }
    if(f.figureType != 2) {
        if (count != undefined && count > 0) {
            var intervalPoint = 50 / (count + 1);
            var i = 1;
            for (; i <= count; i++) {
                CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + 24, y + i * intervalPoint - 25), ConnectionPoint.TYPE_FIGURE);
            }
        }
    }
}

function updateConnectionPoint(f, count) {
    CONNECTOR_MANAGER.connectionPointRemoveCache(f.id);
    addConnectionPoint(f, f.x, f.y, count + 1);
    f.finalise();
    draw();
}
