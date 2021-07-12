const Control = require('foundation/control');

class OnsenBase extends Control {

  // Extend this in components, these all should have
  // some optimal size specified by their css
  get optimalSize() {
    return [200, 32];
  }

  setEnabledStyle(state) {
    super.setEnabledStyle(state);
    if (state) {
      this.unsetAttrOfPart('control', 'disabled');
    }
    else {
      this.setAttrOfPart('control', 'disabled');
    }
  }

}

class OnsenToggle extends OnsenBase {

  get defaultEvents() {
    return {click: true};
  }

  click() {
    this.setValue(!this.value);
    return false;
  }

  refreshValue() {
    if (this.value) {
      this.setAttrOfPart('control', 'checked', true);
    }
    else {
      this.setAttrOfPart('control', 'checked', false);
    }
  }
}

module.exports = {
  OnsenBase, OnsenToggle
};
