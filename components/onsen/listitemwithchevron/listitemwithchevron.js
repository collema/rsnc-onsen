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
  }
}

module.exports = OnsenListItemWithChevron;
