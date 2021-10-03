/*
 * @Author: your name
 * @Date: 2021-09-15 11:18:16
 * @LastEditTime: 2021-09-15 14:37:26
 * @LastEditors: Please set LastEditors
 * @Description: 多种ui布局
 * @FilePath: \vue-basic-admin\src\layouts\index.js
 */

const defaultSettings = require("@/config");

const FooterBar = require(`./${defaultSettings.layoutUI}/FooterBar`).default;
const HeaderBar = require(`./${defaultSettings.layoutUI}/HeaderBar`).default;
const SetBtn = require(`./${defaultSettings.layoutUI}/SetBtn`).default;
const SideBar = require(`./${defaultSettings.layoutUI}/SideBar`).default;
const TagsBar = require(`./${defaultSettings.layoutUI}/TagsBar`).default;
let AnMessages = null;
switch (defaultSettings.layoutUI) {
  case "antDesign":
    AnMessages = require("./antDesign/lazy_use").AnMessages;
    break;
  case "elementUI":
    AnMessages = require("./elementUI/lazy_use").AnMessages;
    break;

  default:
    break;
}

module.exports = { FooterBar, HeaderBar, SetBtn, SideBar, TagsBar, AnMessages };
