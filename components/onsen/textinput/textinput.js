const {OnsenBase} = require('onsen/base');

class OnsenTextInput extends OnsenBase {
  get componentName() {
    return 'textinput';
  }

  setEnabledStyle(state) {
    super.setEnabledStyle(state);
    if (state) {
      this.unsetAttrOfPart('value', 'disabled');
    }
    else {
      this.setAttrOfPart('value', 'disabled');
    }
  }

  refreshValue() {
    if (this.attrOfPart('value', 'value') !== this.value.toString()) {
      this.setAttrOfPart('value', 'value', this.value.toString());
    }
  }
}

module.exports = OnsenTextInput;
