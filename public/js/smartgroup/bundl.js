"use strict";

var BuildBtn = React.createClass({
    displayName: "BuildBtn",
    render: function render() {
        var createRow = function createRow(button) {
            return React.createElement(
                "button",
                { "data-filter-table": button.table, "data-filter-column": button.column,
                    "class": "btn btn-outline btn-white sm-row-button", "data-container": "body",
                    "data-toggle": "popover", "data-placement": "auto bottom",
                    "data-content": getContent(button),
                    "data-original-title": "", title: ""
                },
                button.text
            );
        };
        return React.createElement(
            "div",
            { "class": "panel-body sg-body" },
            this.props.rows.map(createRow.buttons)
        );
    }
});
var TabContent = React.createClass({
    displayName: "TabContent",
    render: function render() {
        var createCon = function createCon(row) {
            return React.createElement(
                "div",
                { id: row.value, "class": "tab-pane" },
                React.createElement(BuildBtn, { rows: row })
            );
        };

        return React.createElement(
            "div",
            { "class": "tab-content", id: "tabContent" },
            filterButtons.map(createCon)
        );
    }
});
var TabTitle = React.createClass({
    displayName: "TabTitle",
    render: function render() {

        var createItem = function createItem(item) {
            return React.createElement(
                "a",
                { "data-toggle": "tab", href: "#" + item.value, "aria-expanded": "false" },
                item.name
            );
        };

        return React.createElement(
            "li",
            null,
            this.props.filterButton.map(createItem)
        );
    }
});
var TabUl = React.createClass({
    displayName: "TabUl",
    render: function render() {
        return React.createElement(
            "ul",
            { "class": "nav nav-tabs", id: "tabUl" },
            React.createElement(TabTitle, { filterButton: filterButtons })
        );
    }
});
var Tabs = React.createClass({
    displayName: "Tabs",
    render: function render() {
        return React.createElement(
            "div",
            { "class": "tabs-container sg-tabs-container" },
            React.createElement(TabUl, null),
            React.createElement(TabContent, null)
        );
    }
});
ReactDOM.render(React.createElement(Tabs, null), document.getElementById('smartgroup-filter'));