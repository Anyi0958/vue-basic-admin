/*
 * @Author: your name
 * @Date: 2021-09-30 17:59:56
 * @LastEditTime: 2021-09-30 18:02:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-basic-admin\src\mock\app.js
 */

import { requestBase } from "@config";

let demoList = {
  status: 200,
  message: "success",
  data: {
    total: 100,
    "rows|10": [
      {
        id: "@guid",
        name: "@cname",
        "age|20-30": 23,
        "job|1": ["前端工程师", "后端工程师", "UI工程师", "需求工程师"],
      },
    ],
  },
};
export default {
  [`get|/${requestBase}/parameter/query`]: demoList,
};
