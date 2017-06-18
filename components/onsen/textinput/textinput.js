const ControlDefaults = require('foundation/control/controldefaults');
const {OnsenBase} = require('onsen/base');

class OnsenTextInput extends OnsenBase {
  get componentName() {
    return 'textinput';
  }
  get cellTagName() {
    return 'input';
  }
  get componentClassNames() {
    return ['text-input'];
  }
  get cellTagAttrs() {
    return {
      type: 'text'
    };
  }
  get controlDefaults() {
    return ControlDefaults.extend({
      textSelectable: true
    });
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

  get markupElemIds() {
    return {
      label: this.elemId,
      value: this.elemId
    };
  }

  set markupElemIds(obj) {}

  refreshLabel() {
    const placeholder = this.isString(this.options.placeholder) ?
      this.options.placeholder :
      this.label;
    this.setAttrOfPart('label', 'placeholder', placeholder);
  }
}

module.exports = OnsenTextInput;
