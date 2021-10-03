import zhLocale from "element-ui/lib/locale/lang/zh-CN";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";

const APP = {
  "app.lang": "中文",
  "app.message": "消息 !!22",
};

const REQUEST = {
  "request.success": "请求成功",
  "request.error": "请求异常",
  "request.noPermissionCode": "暂无权限",
  "request.invalidCode": "登录失效",
};

export default {
  ...zhLocale,
  ...zhCN,
  ...APP,
  ...REQUEST,
};
