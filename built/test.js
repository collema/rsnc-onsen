const LOAD = require('core/load');

LOAD(() => {
  const Switch = require('onsen/switch');
  const Range = require('onsen/range');
  const NavigationBar = require('onsen/navigationbar');
  const NavigationBarItem = require('onsen/navigationbaritem');
  const NavigationBarWithOutlineButton = require('onsen/navigationbarwithoutlinebutton');
  const BottomBar = require('onsen/bottombar');
  const NavigationBarWithSegment = require('onsen/navigationbarwithsegment');
  const NoShadowNavigationBar = require('onsen/noshadownavigationbar');
  const TransparentNavigationBar = require('onsen/transparentnavigationbar');
  const Button = require('onsen/button');
  const OutlineButton = require('onsen/outlinebutton');
  const LightButton = require('onsen/lightbutton');
  const QuietButton = require('onsen/quietbutton');
  const CallToActionButton = require('onsen/calltoactionbutton');
  const ButtonBar = require('onsen/buttonbar');
  const Segment = require('onsen/segment');
  const IconTabBar = require('onsen/icontabbar');
  const TabBar = require('onsen/tabbar');
  const IconOnlyTabBar = require('onsen/icononlytabbar');
  const TopTabBar = require('onsen/toptabbar');
  const BorderedTopTabBar = require('onsen/borderedtoptabbar');
  const Notification = require('onsen/notification');
  const ToolBarButton = require('onsen/toolbarbutton');
  const Checkbox = require('onsen/checkbox');
  const NoBorderCheckbox = require('onsen/nobordercheckbox');
  const RadioButton = require('onsen/radiobutton');
  // const List = require('onsen/list');
  // const NoborderList = require('onsen/noborderlist');
  // const CategoryListHeader = require('onsen/categorylistheader');
  // const TappableList = require('onsen/tappablelist');
  // const SwitchInListItem = require('onsen/switchinlistitem');
  // const ListItemWithChevron = require('onsen/listitemwithchevron');
  // const InsetList = require('onsen/insetlist');
  // const RadioButtonInListItem = require('onsen/radiobuttoninlistitem');
  // const CheckboxInListItem = require('onsen/checkboxinlistitem');
  // const NoBorderCheckboxInListItem = require('onsen/nobordercheckboxinlistitem');
  // const TextInputInListItem = require('onsen/textinputinlistitem');
  // const TextareaInListItem = require('onsen/textareainlistitem');
  // const RightLabelInListItem = require('onsen/rightlabelinlistitem');
  // const ListItemWithSubtitle = require('onsen/listitemwithsubtitle');
  // const ListItemWithThumbnail = require('onsen/listitemwiththumbnail');
  // const ListItemWithIcon = require('onsen/listitemwithicon');
  // const ListItemWithoutDivider = require('onsen/listitemwithoutdivider');
  // const ListItemWithLongDivider = require('onsen/listitemwithlongdivider');
  const SearchInput = require('onsen/searchinput');
  const TextInput = require('onsen/textinput');
  const UnderbarTextInput = require('onsen/underbartextinput');
  const Textarea = require('onsen/textarea');
  const TextareaTransparent = require('onsen/textareatransparent');
  const Dialog = require('onsen/dialog');
  const AlertDialog = require('onsen/alertdialog');
  const AlertDialogWithoutTitle = require('onsen/alertdialogwithouttitle');
  const AlertDialogWithMultipleButtons = require('onsen/alertdialogwithmultiplebuttons');
  const AlertDialogWithMultipleButtons2 = require('onsen/alertdialogwithmultiplebuttons2');
  const Popover = require('onsen/popover');
  const PopoverDown = require('onsen/popoverdown');
  const PopoverLeft = require('onsen/popoverleft');
  const PopoverRight = require('onsen/popoverright');
  const Modal = require('onsen/modal');
  const ProgressBar = require('onsen/progressbar');
  const ProgressCircle = require('onsen/progresscircle');
  const Fab = require('onsen/fab');
  const FabMini = require('onsen/fabmini');

  const app = require('foundation/application').new();
  let top = 10;
  const padLeft = 16;
  const padTop = 12;

  [Switch].forEach(Item => {
    let left = padLeft;
    left += Item.new({
      rect: [left, top],
      parent: app,
      value: false
    }).optimalSize[0] + padLeft;
    left += Item.new({
      rect: [left, top],
      parent: app,
      value: true
    }).optimalSize[0] + padLeft;
    left += Item.new({
      rect: [left, top],
      parent: app,
      enabled: false
    }).optimalSize[0] + padLeft;
    top += Item.new({
      rect: [left, top],
      parent: app,
      enabled: false,
      value: true
    }).optimalSize[1] + padTop;
  });
  [Checkbox, NoBorderCheckbox].forEach(Item => {
    let left = padLeft;
    left += Item.new({
      rect: [left, top],
      parent: app,
      value: false,
      label: 'OFF'
    }).optimalSize[0] + padLeft;
    left += Item.new({
      rect: [left, top],
      parent: app,
      value: true,
      label: 'ON',
    }).optimalSize[0] + padLeft;
    left += Item.new({
      rect: [left, top],
      parent: app,
      enabled: false,
      label: 'OFF, disabled',
    }).optimalSize[0] + padLeft;
    top += Item.new({
      rect: [left, top],
      parent: app,
      enabled: false,
      value: true,
      label: 'ON, disabled',
    }).optimalSize[1] + padTop;
  });
  [RadioButton].forEach(Item => {
    let left = padLeft;
    left += Item.new({
      rect: [left, top],
      parent: app,
      value: false,
      label: 'Radio'
    }).optimalSize[0] + padLeft;
    left += Item.new({
      rect: [left, top],
      parent: app,
      value: false,
      label: 'Radio2',
    }).optimalSize[0] + padLeft;
    left += Item.new({
      rect: [left, top],
      parent: app,
      enabled: false,
      label: 'Radio3, disabled',
    }).optimalSize[0] + padLeft;
    top += Item.new({
      rect: [left, top],
      parent: app,
      enabled: false,
      value: true,
      label: 'Radio4, disabled',
    }).optimalSize[1] + padTop;
  });
  [Button, OutlineButton, LightButton, QuietButton, CallToActionButton].forEach(Item => {
    let left = padLeft;
    left += Item.new({
      rect: [left, top],
      parent: app,
      label: 'Button Enabled'
    }).optimalSize[0] + padLeft;
    top += Item.new({
      rect: [left, top],
      parent: app,
      enabled: false,
      label: 'Button Disabled',
    }).optimalSize[1] + padTop;
  });
  [TextInput, UnderbarTextInput, SearchInput].forEach(Item => {
    let left = padLeft;
    const width = 200;
    const height = 32;
    Item.new({
      rect: [left, top, width, height],
      parent: app,
      label: 'TextInput Enabled',
      value: 'test text',
      placeholder: 'enter some text here'
    });
    left += width + padLeft;
    Item.new({
      rect: [left, top, width, height],
      parent: app,
      enabled: false,
      label: 'TextInput Disabled',
      value: 'text',
      placeholder: 'enter some text here'
    });
    top += height + padTop;
    left = padLeft;
    Item.new({
      rect: [left, top, width, height],
      parent: app,
      label: 'TextInput Enabled',
      value: '',
      placeholder: 'enter some text here'
    });
    left += width + padLeft;
    Item.new({
      rect: [left, top, width, height],
      parent: app,
      enabled: false,
      label: 'TextInput Disabled',
      value: '',
      placeholder: 'enter some text here'
    });
    top += height + padTop;
  });
  [Textarea, TextareaTransparent].forEach(Item => {
    let left = padLeft;
    const width = 200;
    const height = 200;
    Item.new({
      rect: [left, top, width, height],
      parent: app,
      label: 'TextInput Enabled',
      value: 'test text',
      placeholder: 'enter some text here'
    });
    left += width + padLeft;
    Item.new({
      rect: [left, top, width, height],
      parent: app,
      enabled: false,
      label: 'TextInput Disabled',
      value: 'text',
      placeholder: 'enter some text here'
    });
    top += height + padTop;
    left = padLeft;
    Item.new({
      rect: [left, top, width, height],
      parent: app,
      label: 'TextInput Enabled',
      value: '',
      placeholder: 'enter some text here'
    });
    left += width + padLeft;
    Item.new({
      rect: [left, top, width, height],
      parent: app,
      enabled: false,
      label: 'TextInput Disabled',
      value: '',
      placeholder: 'enter some text here'
    });
    top += height + padTop;
  });

});

/*NavigationBar, NavigationBarItem, NavigationBarWithOutlineButton,
    BottomBar, NavigationBarWithSegment, NoShadowNavigationBar,
    TransparentNavigationBar, ButtonBar, Segment, IconTabBar,
    TabBar, IconOnlyTabBar, TopTabBar, BorderedTopTabBar,
    Notification, ToolBarButton, List, NoborderList,
    CategoryListHeader, TappableList, SwitchInListItem,
    ListItemWithChevron, InsetList, RadioButtonInListItem,
    CheckboxInListItem, NoBorderCheckboxInListItem,
    TextInputInListItem, TextareaInListItem, RightLabelInListItem,
    ListItemWithSubtitle, ListItemWithThumbnail, ListItemWithIcon,
    ListItemWithoutDivider, ListItemWithLongDivider,
    Dialog, AlertDialog,
    AlertDialogWithoutTitle, AlertDialogWithMultipleButtons,
    AlertDialogWithMultipleButtons2, Popover, PopoverDown,
    PopoverLeft, PopoverRight, Modal, ProgressBar,
    ProgressCircle, Fab, FabMini*/
