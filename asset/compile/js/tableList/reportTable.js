/**
 * Created by HZL on 2016/2/22.
 */
/**
 * 邮件
 */
//创建任务信息table
(function ($) {
    $.fn.taskInfo = function (obj) {
        var plugin = this;
        //创建任务信息table
        var table = $('<table class="table table-striped table-bordered table-hover"></table>');
        //创建tBody
        var tBody = $("<tbody></tbody>").appendTo(table);
        //创建第一行
        $('<tr><th width="20%">任务名称</th><td>' + obj["taskName"] + '</td><th width="20%">邮件主题</th><td>' + obj["emailSubject"] + '</td></tr>').appendTo(tBody);
        //创建第二行
        $('<tr><th>任务开始时间</th><td>' + obj["taskStartTime"] + '</td><th>最后刷新时间</th><td>' + obj["latestRefreshTime"] + '</td></tr>').appendTo(tBody);
        //创建第三行
        $('<tr><th>提交人数</th><td>' + obj["submitCount"] + '</td><th>发送人数</th><td>' + obj["sendCont"] + '</td></tr>').appendTo(tBody);

        //判断是否为个性化邮件
        if (obj["type"] == 1) {
            $('<tr><th>个性化预览模板数量</th><td colspan="3">' + obj["personalityCount"] + '</td></tr>').appendTo(tBody);
        }
        plugin.append(table);
        return plugin;
    };
})(jQuery);

//创建总体情况table
(function ($) {
    $.fn.totalCase = function (obj) {
        var plugin = this;
        //创建总体情况table
        var table = $('<table class="table table-striped table-bordered table-hover"></table>');
        //创建tBody
        var tBody = $("<tbody></tbody>").appendTo(table);
        //创建第一行
        var firstRow = $('<tr></tr>').appendTo(tBody);

        //创建第一列chart框架
        $('<td width="40%" style=" text-align:center;"><div id="main" style="width: 600px;height:600px;"></div></td>').appendTo(firstRow);
        //创建第二列总体情况框架
        var secondColumn = $('<td width="60%"></td>').appendTo(firstRow);
        //创建总体情况table
        var totalTable = $('<table class="table table-striped table-bordered table-hover"></table>').appendTo(secondColumn);
        //创建tHead
        $('<thead><tr><th width="18%">项目</th><th width="11%">数量</th><th width="11%">比例</th><th width="60%">说明</th></tr></thead>').appendTo(totalTable);
        //创建tBody
        var totalBody = $("<tbody></tbody>").appendTo(totalTable);
        //创建第一行
        $('<tr><th style="vertical-align:middle;">提交数量</th><td style="vertical-align:middle;">' + obj["submitCount"]["count"] + '</td><td style="vertical-align:middle;">' + obj["submitCount"]["scale"] + '%</td><td >' + obj["submitCount"]["info"] + '</td></tr>').appendTo(totalBody);
        //创建第二行
        $('<tr><th style="vertical-align:middle;">过滤数量</th><td style="vertical-align:middle;">' + obj["filterCount"]["count"] + '</td><td style="vertical-align:middle;">' + obj["filterCount"]["scale"] + '%</td>' +
            '<td style="padding:0;">' +
            '<table class="table table-striped table-bordered table-hover" style="margin:0;">' +
            '<thead>' +
            '<tr>' +
            '<th width="30%">过滤原因</th>' +
            '<th width="20%">统计数量</th>' +
            '<th width="20%">比例</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td>格式错误</td>' +
            '<td>' +
            '<a href="' + obj["filterCount"]["detail"]["formatErrorHref"] + '" title="点击下载错误邮箱列表">' +
            obj["filterCount"]["detail"]["formatErrorCount"] +
            '</a></td>' +
            '<td>' +
            obj["filterCount"]["detail"]["formatErrorScale"] +
            '%</td>' +
            '</tr>' +
            '<tr>' +
            '<td>单次提交中重复</td>' +
            '<td>' +
            '<a href="' + obj["filterCount"]["detail"]["repeatHref"] + '" title="点击下载重复邮箱列表">' +
            obj["filterCount"]["detail"]["repeatCount"] +
            '</a></td>' +
            '<td>' + obj["filterCount"]["detail"]["repeatScale"] + '%</td>' +
            '</tr>' +
            '<tr>' +
            '<td>以往发送退订</td>' +
            '<td>' +
            '<a href="' + obj["filterCount"]["detail"]["unregHref"] + '" title="点击下载以往退订邮箱列表">' +
            obj["filterCount"]["detail"]["unregCount"] +
            '</a></td>' +
            '<td>' + obj["filterCount"]["detail"]["unregScale"] + '%</td>' +
            '</tr>' +
            '<tr>' +
            '<td>以往发送无效</td>' +
            '<td>' +
            '<a href="' + obj["filterCount"]["detail"]["invalidHref"] + '" title="点击下载以往地址无效邮箱列表">' +
            obj["filterCount"]["detail"]["invalidCount"] + '</a></td>' +
            '<td>' + obj["filterCount"]["detail"]["invalidScale"] + '%</td>' +
            '</tr>' +
            '<tr>' +
            '<td>以往用户举报或拒收</td>' +
            '<td>' +
            '<a href="' + obj["filterCount"]["detail"]["rejectHref"] + '" title="点击下载以往以往用户举报邮箱列表">' +
            obj["filterCount"]["detail"]["rejectCount"] + '</a></td>' +
            '<td>' + obj["filterCount"]["detail"]["rejectScale"] + '%</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>').appendTo(totalBody);
        //创建第三行
        $('<tr><th style="vertical-align:middle;">退回邮件</th><td style="vertical-align:middle;">' + obj["backEmail"]["count"] + '</td><td style="vertical-align:middle;">' + obj["backEmail"]["scale"] + '%</td>' +
            '<td style="padding:0;">' +
            '<table class="table table-striped table-bordered table-hover" style="margin:0;">' +
            '<thead>' +
            '<tr>' +
            '<th width="30%">退回原因</th>' +
            '<th width="20%">统计数量</th>' +
            '<th width="20%">比例</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td>邮箱地址无效</td>' +
            '<td>' + obj["backEmail"]["detail"]["emailInvalidCount"] + '</td>' +
            '<td>' +
            obj["backEmail"]["detail"]["emailInvalidScale"] +
            '%<br/><small><a href="' + obj["backEmail"]["detail"]["emailInvalidHref"] + '" title="点击下载无效邮箱列表">下载无效</a></small>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>用户举报或拒收</td>' +
            '<td>' + obj["backEmail"]["detail"]["informOrRejectCount"] + '</td>' +
            '<td>' + obj["backEmail"]["detail"]["informOrRejectScale"] + '%</td>' +
            '</tr>' +
            '<tr>' +
            '<td>其它原因拒收</td>' +
            '<td>' +
            obj["backEmail"]["detail"]["otherRejectCount"] +
            '</td>' +
            '<td>' +
            obj["backEmail"]["detail"]["otherRejectScale"] +
            '%<br/><small><a href="' + obj["backEmail"]["detail"]["otherRejectHref"] + '" title="点击下载所有拒收邮箱列表">下载拒收</a></small>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>').appendTo(totalBody);
        //创建第四行
        $('<tr><th>发送成功</th><td>' + obj["sendSuccess"]["count"] + '</td><td >' + obj["sendSuccess"]["scale"] + '%</td><td>' + obj["sendSuccess"]["info"] + '</td></tr>').appendTo(totalBody);
        //创建第五行
        $('<tr>' +
            '<th>打开</th>' +
            '<td ><a href="' + obj["open"]["href"] + '" title="点击下载打开邮件邮箱列表">' +
            obj["open"]["count"] +
            '</a></td>' +
            '<td >' + obj["open"]["scale"] + '%</td>' +
            '<td >' + obj["open"]["info"] + '</td>' +
            '</tr>').appendTo(totalBody);
        //创建第六行
        $('<tr>' +
            '<th >点击</th>' +
            '<td><a href="' + obj["click"]["href"] + '" title="点击下载点击列表">' +
            obj["click"]["count"] +
            '</a></td>' +
            '<td>' + obj["click"]["scale"] + '%</td>' +
            '<td >' + obj["click"]["info"] + '</td>' +
            '</tr>').appendTo(totalBody);
        //创建第七行
        $('<tr>' +
            '<th >退订</th>' +
            '<td ><a href="' + obj["unreg"]["href"] + '" title="点击下载退订邮箱列表">' +
            obj["unreg"]["count"] +
            '</a></td>' +
            '<td>' + obj["unreg"]["scale"] + '%</td>' +
            '<td>' + obj["unreg"]["info"] + '</td>' +
            '</tr>').appendTo(totalBody);
        //创建第八行
        $('<tr>' +
            '<th>举报或拒收</th>' +
            '<td colspan="2"><a href="' + obj["informOrReject"]["href"] + '" title="点击下载用户举报拒收列表">' +
            obj["informOrReject"]["count"] +
            '</a></td>' +
            '<td>' + obj["informOrReject"]["info"] + '</td>' +
            '</tr>').appendTo(totalBody);

        plugin.append(table);

        return plugin;
    };
})(jQuery);

/**
 *短信
 */
//创建任务信息table
(function ($) {
    $.fn.smsTaskInfo = function (obj) {
        var plugin = this;
        //创建任务信息table
        var table = $('<table class="table table-striped table-bordered table-hover"></table>');
        //创建tBody
        var tBody = $("<tbody></tbody>").appendTo(table);
        //创建第一行
        $('<tr><th width="20%">任务名称</th><td>' + obj["taskName"] + '</td><th width="20%">短信标题</th><td>' + obj["emailSubject"] + '</td></tr>').appendTo(tBody);
        //创建第二行
        $('<tr><th>任务开始时间</th><td>' + obj["taskStartTime"] + '</td><th>最后刷新时间</th><td>' + obj["latestRefreshTime"] + '</td></tr>').appendTo(tBody);
        //创建第三行
        $('<tr><th>提交人数</th><td>' + obj["submitCount"] + '</td><th>发送人数</th><td>' + obj["sendCont"] + '</td></tr>').appendTo(tBody);

        $('<tr><th>短信内容</th><td colspan="3">' + obj["personalityCount"] + '</td></tr>').appendTo(tBody);
        plugin.append(table);
        return plugin;
    };
})(jQuery);

//创建总体情况table
(function ($) {
    $.fn.smsTotalCase = function (obj) {
        var plugin = this;
        //创建总体情况table
        var table = $('<table class="table table-striped table-bordered table-hover"></table>');
        //创建tBody
        var tBody = $("<tbody></tbody>").appendTo(table);
        //创建第一行
        var firstRow = $('<tr></tr>').appendTo(tBody);

        //创建第一列chart框架
        $('<td width="40%" style=" text-align:center;"><div id="main" style="width: 600px;height:600px;"></div></td>').appendTo(firstRow);
        //创建第二列总体情况框架
        var secondColumn = $('<td width="60%"></td>').appendTo(firstRow);
        //创建总体情况table
        var totalTable = $('<table class="table table-striped table-bordered table-hover"></table>').appendTo(secondColumn);
        //创建tHead
        $('<thead><tr><th width="18%">项目</th><th width="11%">数量</th><th width="11%">比例</th><th width="60%">说明</th></tr></thead>').appendTo(totalTable);
        //创建tBody
        var totalBody = $("<tbody></tbody>").appendTo(totalTable);
        //创建第一行
        $('<tr><th style="vertical-align:middle;">提交数量</th><td style="vertical-align:middle;">' + obj["submitCount"]["count"] + '</td><td style="vertical-align:middle;">' + obj["submitCount"]["scale"] + '%</td><td >' + obj["submitCount"]["info"] + '</td></tr>').appendTo(totalBody);
        //创建第二行
        $('<tr><th style="vertical-align:middle;">过滤数量</th><td style="vertical-align:middle;">' + obj["filterCount"]["count"] + '</td><td style="vertical-align:middle;">' + obj["filterCount"]["scale"] + '%</td>' +
            '<td style="padding:0;">' +
            '<table class="table table-striped table-bordered table-hover" style="margin:0;">' +
            '<thead>' +
            '<tr>' +
            '<th width="30%">过滤原因</th>' +
            '<th width="20%">统计数量</th>' +
            '<th width="20%">比例</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td>格式错误</td>' +
            '<td>' +
            '<a href="' + obj["filterCount"]["detail"]["formatErrorHref"] + '" title="点击下载错误邮箱列表">' +
            obj["filterCount"]["detail"]["formatErrorCount"] +
            '</a></td>' +
            '<td>' +
            obj["filterCount"]["detail"]["formatErrorScale"] +
            '%</td>' +
            '</tr>' +
            '<tr>' +
            '<td>单次提交中重复</td>' +
            '<td>' +
            '<a href="' + obj["filterCount"]["detail"]["repeatHref"] + '" title="点击下载重复邮箱列表">' +
            obj["filterCount"]["detail"]["repeatCount"] +
            '</a></td>' +
            '<td>' + obj["filterCount"]["detail"]["repeatScale"] + '%</td>' +
            '</tr>' +
            '<tr>' +
            '<td>以往发送退订</td>' +
            '<td>' +
            '<a href="' + obj["filterCount"]["detail"]["unregHref"] + '" title="点击下载以往退订邮箱列表">' +
            obj["filterCount"]["detail"]["unregCount"] +
            '</a></td>' +
            '<td>' + obj["filterCount"]["detail"]["unregScale"] + '%</td>' +
            '</tr>' +
            '<tr>' +
            '<td>以往发送无效</td>' +
            '<td>' +
            '<a href="' + obj["filterCount"]["detail"]["invalidHref"] + '" title="点击下载以往地址无效邮箱列表">' +
            obj["filterCount"]["detail"]["invalidCount"] + '</a></td>' +
            '<td>' + obj["filterCount"]["detail"]["invalidScale"] + '%</td>' +
            '</tr>' +
            '<tr>' +
            '<td>以往用户举报或拒收</td>' +
            '<td>' +
            '<a href="' + obj["filterCount"]["detail"]["rejectHref"] + '" title="点击下载以往以往用户举报邮箱列表">' +
            obj["filterCount"]["detail"]["rejectCount"] + '</a></td>' +
            '<td>' + obj["filterCount"]["detail"]["rejectScale"] + '%</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>').appendTo(totalBody);

        //创建第六行
        $('<tr>' +
            '<th >点击</th>' +
            '<td><a href="' + obj["click"]["href"] + '" title="点击下载点击列表">' +
            obj["click"]["count"] +
            '</a></td>' +
            '<td>' + obj["click"]["scale"] + '%</td>' +
            '<td >' + obj["click"]["info"] + '</td>' +
            '</tr>').appendTo(totalBody);

        plugin.append(table);

        return plugin;
    };
})(jQuery);