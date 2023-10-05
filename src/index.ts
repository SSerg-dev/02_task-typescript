import { type } from "os";
import { totalPrice } from "./02_task.js";

const discountPrice = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log("🚀 ~ file: index.ts:5 ~ discountPrice:", discountPrice)
// 6250

