/*
 * @Author: your name
 * @Date: 2021-10-03 18:19:37
 * @LastEditTime: 2021-10-03 18:19:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-basic-admin\mock\demoList.js
 */
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
  "get|/parameter/query": demoList,
};
