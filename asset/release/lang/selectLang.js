/**
 * Created by HZL on 2016/4/20.
 */

(function () {
    var lang, TxtContent;
    lang = localStorage['lang'];

    switch (lang) {
        case "en":
            TxtContent = txtEn;
            break;
        default:
            TxtContent = txtCn;
    }

    window.TxtContent = TxtContent;

    $(function () {
        var curTitle = window.location.pathname;
        $('title').text(TxtContent[curTitle]);
        var lg = $("#lang")[0];
        if (lg) {
            lg.addEventListener('change', function () {
                localStorage['lang'] = $(this).val();
                window.location.reload();

            }, false)
        }

    })
})();