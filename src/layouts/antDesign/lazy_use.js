/*
 * @Author: ay
 * @Date: 2021-09-15 11:34:17
 * @LastEditTime: 2021-09-30 16:13:31
 * @LastEditors: Please set LastEditors
 * @Description: antDesign 按需加载
 */
import Vue from "vue";

// base library
import {
  ConfigProvider,
  Layout,
  Input,
  InputNumber,
  Button,
  Switch,
  Radio,
  Checkbox,
  Select,
  Card,
  Form,
  Row,
  Col,
  Modal,
  Table,
  Tabs,
  Icon,
  Badge,
  Popover,
  Dropdown,
  List,
  Avatar,
  Breadcrumb,
  Steps,
  Spin,
  Menu,
  Drawer,
  Tooltip,
  Alert,
  Tag,
  Divider,
  DatePicker,
  TimePicker,
  Upload,
  Progress,
  Skeleton,
  Popconfirm,
  PageHeader,
  Result,
  Statistic,
  Descriptions,
  Space,
  message,
  notification,
} from "ant-design-vue";

Vue.use(ConfigProvider);
Vue.use(Layout);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Button);
Vue.use(Switch);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Card);
Vue.use(Form);
Vue.use(Row);
Vue.use(Col);
Vue.use(Modal);
Vue.use(Table);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Badge);
Vue.use(Popover);
Vue.use(Dropdown);
Vue.use(List);
Vue.use(Avatar);
Vue.use(Breadcrumb);
Vue.use(Steps);
Vue.use(Spin);
Vue.use(Menu);
Vue.use(Drawer);
Vue.use(Tooltip);
Vue.use(Alert);
Vue.use(Tag);
Vue.use(Divider);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Skeleton);
Vue.use(Popconfirm);
Vue.use(PageHeader);
Vue.use(Result);
Vue.use(Statistic);
Vue.use(Descriptions);
Vue.use(Space);

Vue.prototype.$message = message;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;

/** 网络请求 消息提示
 * @param {String} content    提示内容  string
 * @param {Number} duration  自动关闭的延时，单位秒。设为 0 时不自动关闭。
 * @param {String} type      类型  success/warning/info/error
 */

export const AnMessages = function (obj) {
  let isNumber = Object.prototype.toString.call(obj).slice(8, -1) === "Number";
  let config = {
    content: obj.content,
    duration: isNumber ? obj.duration : 3,
  };
  return message[obj.type](config);
};
