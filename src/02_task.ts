interface dataPrice {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

export const totalPrice = (data: dataPrice): number => {
  let result: number = data.price;
  if (data.isInstallment) {
    result = (data.price * ((100 - data.discount) / 100)) / data.months;
  }
  return result;
};
