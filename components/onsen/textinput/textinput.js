const ELEM = require('core/elem');
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
      textSelectable: true,
      refreshOnInput: true,
      refreshOnBlur: true
    });
  }

  get defaultEvents() {
    return {
      textEnter: true,
      contextMenu: true,
    };
  }

  contextMenu() { return true; }

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

  getInputElement() {
    return ELEM.get(this.elemId);
  }

  getTextFieldValue() {
    const _inputElement = this.getInputElement();
    if (_inputElement === null) {
      return '';
    }
    return _inputElement.value;
  }

  getSelectionRange() {
    const _inputElement = this.getInputElement();
    if (_inputElement === null || this.hasTextFocus === false) {
      return [0, 0];
    }
    return [
      _inputElement.selectionStart,
      _inputElement.selectionEnd
    ];
  }

  setSelectionRange(_selectionStart, _selectionEnd) {
    if (_selectionStart instanceof Array) {
      _selectionEnd = _selectionStart[1];
      _selectionStart = _selectionStart[0];
    }
    if (typeof _selectionEnd === 'undefined') {
      _selectionEnd = _selectionStart;
    }
    const _inputElement = this.getInputElement();
    if (_inputElement === null || this.hasTextFocus === false) {
      return;
    }
    _inputElement.setSelectionRange(_selectionStart, _selectionEnd);
  }

  setTextFieldValue(_value) {
    const _inputElement = this.getInputElement();
    const _selectionRange = this.getSelectionRange();
    if (_inputElement === null) {
      return;
    }
    if (_inputElement.value !== String(_value)) {
      _inputElement.value = _value;
    }
    this.setSelectionRange(_selectionRange[0], _selectionRange[1]);
  }

  refreshValue() {
    this.setTextFieldValue(this.value);
  }

  validateText(text) {
    // extendable
    return text;
  }

  textEnter() {
    this.setValue(
      this.validateText(
        this.getTextFieldValue()
      )
    );
    if (this.options.refreshOnInput) {
      this.refreshValue();
    }
    return false;
  }

}

module.exports = OnsenTextInput;
