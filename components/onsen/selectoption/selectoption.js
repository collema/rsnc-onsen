const {OnsenBase} = require('onsen/base');

class OnsenSelectOption extends OnsenBase {
  get componentName() {
    return 'selectoption';
  }
  get cellTagName() {
    return 'option';
  }
  setSelectedStyle(_state) {
    if (_state) {
      this.setAttr('selected', 'selected');
    }
    else {
      this.unsetAttr('selected', 'selected');
    }
  }
  refreshValue() {
    super.refreshValue();
    console.log(this.value, this.options.selectionValue);
    this.setSelected(this.value === this.options.selectionValue);
  }
  click() {
    console.log(this.options.selectionValue);
    this.setValue(this.options.selectionValue);
  }
}

module.exports = OnsenSelectOption;
