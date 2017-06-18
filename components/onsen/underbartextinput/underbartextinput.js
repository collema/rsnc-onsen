const OnsenTextInput = require('onsen/textinput');

class OnsenUnderBarTextInput extends OnsenTextInput {
  get componentName() {
    return 'underbartextinput';
  }
  get componentClassNames() {
    return 'text-input--underbar';
  }
}

module.exports = OnsenUnderBarTextInput;
