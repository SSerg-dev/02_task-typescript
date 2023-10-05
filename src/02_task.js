"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalPrice = void 0;
var totalPrice = function (data) {
    var result = data.price;
    if (data.isInstallment) {
        result = (data.price * ((100 - data.discount) / 100)) / data.months;
    }
    return result;
};
exports.totalPrice = totalPrice;
