let BuildBtn = React.createClass({
    render() {
        let createRow = (button) => {
            return (
                <button data-filter-table={button.table} data-filter-column={button.column}
                        class="btn btn-outline btn-white sm-row-button" data-container="body"
                        data-toggle="popover" data-placement="auto bottom"
                        data-content={getContent(button)}
                        data-original-title="" title="">
                    {button.text}
                </button>
            );
        };
        return (
            <div class="panel-body sg-body">{this.props.rows.map(createRow.buttons)}</div>
        );
    }
});
let TabContent = React.createClass({
    render() {
        let createCon = (row) => {
            return (
                <div id={row.value} class="tab-pane">
                    <BuildBtn rows={row}/>
                </div>
            );
        };

        return (
            <div class="tab-content" id="tabContent">
                {filterButtons.map(createCon)}
            </div>
        );
    }
});
let TabTitle = React.createClass({
    render() {

        let createItem = (item) => {
            return <a data-toggle="tab" href={"#" + item.value} aria-expanded="false">{item.name}</a>
        };

        return <li>{this.props.filterButton.map(createItem)}</li>
    }
});
let TabUl = React.createClass({
    render() {
        return (
            <ul class="nav nav-tabs" id="tabUl">
                <TabTitle filterButton={filterButtons}/>
            </ul>
        );
    }
});
let Tabs = React.createClass({
    render() {
        return (
            <div class="tabs-container sg-tabs-container">
                <TabUl />
                <TabContent />
            </div>
        );
    }
});

ReactDOM.render(
    <Tabs />
    , document.getElementById('smartgroup-filter'));