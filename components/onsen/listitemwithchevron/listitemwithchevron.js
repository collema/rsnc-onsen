const {OnsenBase} = require('onsen/base');

class OnsenListItemWithChevron extends OnsenBase {
  get componentName() {
    return 'listitemwithchevron';
  }
  get cellTagName() {
    return 'li';
  }
  draw() {
    super.draw();
    this.setCSSClass('list__item');
  }
  setSelectedStyle(_state) {
    this.toggleCSSClass(this.elemId, 'list__item--chevron', _state);
    if (_state) {
      this.setStyle('backgroundColor', 'yellow');
    }
    else {
      this.setStyle('backgroundColor', 'white');
    }
  }
  refreshValue() {
    super.refreshValue();
    this.setSelected(this.value === this.options.selectionValue);
  }
  click() {
    this.setValue(this.options.selectionValue);
  }
}

module.exports = OnsenListItemWithChevron;
