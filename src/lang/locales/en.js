import enLocale from "element-ui/lib/locale/lang/en";
import en_GB from "ant-design-vue/lib/locale-provider/en_GB";

const APP = {
  lang: "English",
  message: "hello i18n !2131!",
};

const REQUEST = {
  "request.success": "Request succeeded",
  "request.error": "Request exception",
  "request.noPermissionCode": "No permission",
  "request.invalidCode": "Login invalid",
};

export default {
  ...enLocale,
  ...en_GB,
  ...APP,
  ...REQUEST,
};
