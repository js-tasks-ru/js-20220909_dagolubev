export default class ColumnChart {
    constructor(params = {}) {
        this.title  = params.label ?? '';
        this.list   = params.data ?? [];
        this.link   = params.link;
        this.value  = params.value;
        this.format = params.formatHeading;

        this.chartHeight = 50;

        this.maxItem = Math.max(...this.list);

        this.render();
    }

    destroy() {
        this.element = null;
    }

    remove() {
        this.element.remove();
    }

    update(itemsList = []) {
        const columnsElem = this.element.querySelector('.column-chart__chart');

        const newColumns = document.createElement('div');

        newColumns.innerHTML = `<div data-element="body" class="column-chart__chart">${this.getColumns(itemsList)}</div>`;

        columnsElem.replaceWith(newColumns);
    }

    getValue() {
        if (this.value == undefined) return '';
        return (typeof this.format == 'function') ? this.format(this.value) : this.value;
    }

    getLink() {
        return (this.link != undefined) ? `<a href="${this.link}" class="column-chart__link">View all</a>`: '';
    }

    getColumn(itemValue) {
        return `<div style="--value: ${Math.floor(itemValue/this.maxItem*this.chartHeight)}" data-tooltip="${String(Math.round(itemValue/this.maxItem*100))}%"></div>`;
    }

    getColumns(itemsList) {
        if (!Array.isArray(itemsList)) return '';

        return itemsList.map(item => this.getColumn(item)).join('');
    }

    getTemplate() {
        return `
            <div class="column-chart__title">Total ${this.title} ${this.getLink()}</div>
            <div class="column-chart__container">
                <div data-element="header" class="column-chart__header">${this.getValue()}</div>
                <div data-element="body" class="column-chart__chart">${this.getColumns(this.list)}</div>
            </div>`;
    }

    render() {
        const loadingClass = (!Array.isArray(this.list) || this.list.length == 0) ? 'column-chart_loading' : '';

        const wrapper = document.createElement('div');

        wrapper.className = `column-chart ${loadingClass}`;

        wrapper.style = `--chart-height: ${this.chartHeight}`;

        wrapper.innerHTML = this.getTemplate();

        this.element = wrapper;
    }

}
