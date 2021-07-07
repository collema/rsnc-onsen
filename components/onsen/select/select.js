const {OnsenBase} = require('onsen/base');
const SelectOption = require('onsen/selectoption');

class OnsenSelect extends OnsenBase {
  get componentName() {
    return 'select';
  }
  get cellTagName() {
    return 'select';
  }
  refreshList() {
    if (this.listItems) {
      this.listItems.forEach(listItem => listItem.die());
    }
    this.listItems = [];
    const selectionValue = this.options.selectionValue;
    this.optionItems.forEach(value => {
      const listItem =
        SelectOption.new([0, 0, 0, 0], this, {
          label: value,
          selectionValue: value,
          events: {click: true}
        });
      selectionValue.bindResponder(listItem);
      this.listItems.push(listItem);
    });
  }
  refreshValue() {
    if (this.isArray(this.optionItems)) {
      this.refreshList();
    }
  }
}

module.exports = OnsenSelect;
