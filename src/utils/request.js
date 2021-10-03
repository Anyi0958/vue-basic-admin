/*
 * @Author: ay
 * @Date: 2021-09-30 14:47:51
 * @LastEditTime: 2021-09-30 17:59:09
 * @LastEditors: Please set LastEditors
 * @Description: 网络请求
 * @FilePath: \vue-basic-admin\src\utils\request.js
 */

//axios 使用文档  https://www.kancloud.cn/yunye/axios/234845
import axios from "axios";
import store from "@/store";
import i18n from "@/lang";
import {
  tokenName,
  requestTimeout,
  requestDataType,
  requestBase,
  requestErrorCode,
} from "@config";

// 消息提示
const AnMessages = require("@/layouts/layouts.js").AnMessages;
const $_Message = function ({ type = "success", content }) {
  return AnMessages({
    content,
    type,
  });
};

// 超时设定
axios.defaults.timeout = requestTimeout;

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么

    // 设置请求数据类型
    config.headers["Content-Type"] = requestDataType[config.DataType];

    // 是否需要登录凭证
    if (config.HasToken) {
      config.headers[tokenName] = store.getters.token;
    }

    // 删除工具属性
    delete config.DataType;
    delete config.HasToken;

    console.log("-----request 请求拦截器 请求数据-----", config);

    //这里会过滤所有为空、0、false的key，如果不需要请自行注释
    // if (config.data)
    //   config.data = Vue.prototype.$baseLodash.pickBy(
    //     config.data,
    //     Vue.prototype.$baseLodash.identity
    //   );

    return config;
  },
  (err) => {
    console.error("-----request 请求拦截器 请求错误-----", err);
    // 对请求错误做些什么
    $_Message({
      message: i18n.t("request.error"),
      type: "error",
    });
    return Promise.resolve(err);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    console.log("-----request 响应拦截器 响应数据-----", response.data);
    // 对响应数据做点什么
    const Data = response.data;
    const Code = Data.code;
    // 根据返回的code值来做不同的处理(和后端约定)
    const ErrorCodes = Object.keys(requestErrorCode) || [];
    if (ErrorCodes.includes(Code)) {
      $_Message({
        message: i18n.t(`request.${requestErrorCode[Code]}`),
        type: "error",
      });
    }
    return Data;
  },
  (err) => {
    // 对响应错误,返回状态码不为200时候的错误处理
    // let { message } = err;
    // if (message === "Network Error") {
    //   message = "后端接口连接异常";
    // }
    // if (message.includes("timeout")) {
    //   message = "后端接口请求超时";
    // }
    // if (message.includes("Request failed with status code")) {
    //   const code = message.substr(message.length - 3);
    //   message = "后端接口" + code + "异常";
    // }
    // $_Message.error(message || `后端接口未知异常`, "error");

    console.log("-----request 响应拦截器 响应错误", err);
    $_Message({
      message: err.toString(),
      type: "error",
    });
    return Promise.resolve(err);
  }
);

/**
 * token验证的请求
 * @param {String}  method    请求方法
 * @param {String}  url       请求地址，必填
 * @param {String}  params    请求参数
 * @param {String}  DataType  请求数据类型(form json blob)，默认 根据 setting.js 配置
 * @param {Boolean} HasToken  是否携带凭证，默认携带
 */

export const request = ({
  method = "get",
  url,
  params,

  DataType = "json",
  HasToken = true,
}) => {
  // eslint-disable-next-line no-undef
  console.log(" --------- axios 接收参数  ---------", arguments);

  return axios({
    DataType: DataType.toLowerCase(),
    HasToken: HasToken,

    method: method,
    url: `${requestBase}${url}`,

    // `params` 是即将与请求一起发送的 URL 参数
    // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
    params: ["put", "post", "patch"].includes(method.toLowerCase())
      ? null
      : params,

    // `data` 是作为请求主体被发送的数据
    // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
    // 在没有设置 `transformRequest` 时，必须是以下类型之一：
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    data: ["put", "post", "patch"].includes(method.toLowerCase())
      ? params
      : null,

    // `headers` 是即将被发送的自定义请求头
    headers: {},

    // `responseType` 表示服务器响应的数据类型，
    // 可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: ["blob"].includes(DataType.toLowerCase()) ? "blob" : "json",

    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [
      function (data) {
        // 对 data 进行任意转换处理
        if (DataType.toLowerCase() == "json") return JSON.stringify(data);
        let ret = "";
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        ret = ret.substring(0, ret.length - 1);
        return ret;
      },
    ],

    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [
      function (data) {
        // 对 data 进行任意转换处理
        try {
          return JSON.parse(data);
        } catch (err) {
          console.log("---- axios data 转换处理 异常 -----", err);
          return data;
        }
      },
    ],
  });
};

// 并发多个请求
// axios.all([getUserAccount(), getUserPermissions()])
//   .then(axios.spread(function (acct, perms) {
//     两个请求现在都执行完成
//   }));
export const allRequest = async (params) => {
  let res = [];
  await axios.all(params).then(
    axios.spread(function () {
      res = [...arguments];
      return res;
    })
  );
  return res;
};
