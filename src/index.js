"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_task_js_1 = require("./02_task.js");
var discountPrice = (0, _02_task_js_1.totalPrice)({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log("🚀 ~ file: index.ts:5 ~ discountPrice:", discountPrice);
// 6250
