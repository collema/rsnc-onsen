const {OnsenBase} = require('onsen/base');
const ChevronListItem = require('onsen/listitemwithchevron');

class OnsenList extends OnsenBase {
  get componentName() {
    return 'list';
  }
  draw() {
    super.draw();
    this.setStyle('overflow-y', 'scroll');
  }
  refreshList() {
    if (this.listItems) {
      this.listItems.forEach(listItem => listItem.die());
    }
    this.listItems = [];
    let top = 0;
    const selectionValue = this.options.selectionValue;
    this.value.forEach(value => {
      const listItem =
        ChevronListItem.new([0, top, this.rect.width, 40], this, {
          label: value,
          selectionValue: value,
          events: {click: true}}
        );
      selectionValue.bindResponder(listItem);
      this.listItems.push(listItem);
      top += 44;
    });
  }
  refreshValue() {
    if (this.isArray(this.value)) {
      this.refreshList();
    }
  }
}

module.exports = OnsenList;
