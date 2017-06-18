const OnsenTextInput = require('onsen/textinput');

class OnsenSearchInput extends OnsenTextInput {
  get componentName() {
    return 'searchinput';
  }
  get componentClassNames() {
    return 'search-input';
  }
}

module.exports = OnsenSearchInput;
