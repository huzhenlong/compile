/**
 * Created by zw on 2015/12/21.
 */
(function () {
    var services = XREWIN.config.services;
    var sid = XREWIN.getSid();
    var listUrl = XREWIN.appendParam(services.PLAT + "/Platform/list", "sid", sid);
    var _PLATFORM = function () {
    };

    _PLATFORM.prototype.getGetSelectCustomersUrl = function () {
        return XREWIN.appendParam(listUrl, "type", "customers")
    };

    _PLATFORM.prototype.getGetSelectBrandsUrl = function () {
        return XREWIN.appendParam(listUrl, "type", "brands")
    };

    if (!window.PLATFORM) {
        window.PLATFORM = new _PLATFORM();
    }
})();