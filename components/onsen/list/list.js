const {OnsenBase} = require('onsen/base');
const ChevronListItem = require('onsen/listitemwithchevron');

class OnsenList extends OnsenBase {
  get componentName() {
    return 'list';
  }
  get cellTagName() {
    return 'ul';
  }
  draw() {
    super.draw();
    this.setCSSClass('list');
  }
  refreshList() {
    if (this.listItems) {
      this.listItems.forEach(listItem => listItem.die());
    }
    this.listItems = [];
    let top = 0;
    this.value.forEach(adminUser => {
      const selected = adminUser.email === this.options.selectionValue.value.email;
      this.listItems.push(
        ChevronListItem.new([0, top, this.rect.width, 40], this, {value: adminUser, selected})
      );
      top += 44;
    });
  }
  refreshValue() {
    console.log('list refreshValue', this.value);
    console.log('app value', this.app.adminAccountListValue.value);
    if (this.isArray(this.value)) {
      this.refreshList();
    }
  }
}

module.exports = OnsenList;
