const OnsenTextInput = require('onsen/textinput');

class OnsenTextarea extends OnsenTextInput {
  get componentName() {
    return 'textarea';
  }
  get cellTagName() {
    return 'textarea';
  }
  get componentClassNames() {
    return null;
  }
  get cellTagAttrs() {
    return {};
  }
}

module.exports = OnsenTextarea;
