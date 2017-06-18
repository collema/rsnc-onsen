const OnsenTextInput = require('onsen/textinput');

class OnsenTextareaTransparent extends OnsenTextInput {
  get componentName() {
    return 'textareatransparent';
  }
  get cellTagName() {
    return 'textarea';
  }
  get componentClassNames() {
    return 'textarea--transparent';
  }
  get cellTagAttrs() {
    return {};
  }
}

module.exports = OnsenTextareaTransparent;
