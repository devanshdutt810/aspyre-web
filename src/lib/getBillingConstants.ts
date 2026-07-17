export function GetBillingConstants(subtotal: number) {
  let cgst: number = 0;
  let sgst: number = 0;

  if (subtotal === 100) {
    cgst = CGST.Equals100;
    sgst = SGST.Equals100;
  }
  if (subtotal > 100 && subtotal <= 200) {
    cgst = CGST.Btw100And200;
    sgst = SGST.Btw100And200;
  }
  if (subtotal > 200) {
    cgst = CGST.MoreThan200;
    sgst = SGST.MoreThan200;
  }

  return {
    cgst: cgst,
    sgst: sgst,
  };
}

export function getDiscountPercentage(discountCode: string = "") {
  let discount = 0;
  if (discountCode !== "") {
    discount =
      discountCode === "WELCOME10"
        ? Discount.WELCOME10
        : discountCode === "DRESS15"
          ? Discount.DRESS15
          : discountCode === "JACKET20"
            ? Discount.JACKET20
            : discount;
  }
  return discount;
}

enum CGST {
  Equals100 = 8,
  Btw100And200 = 12,
  MoreThan200 = 15,
}

enum SGST {
  Equals100 = 8,
  Btw100And200 = 12,
  MoreThan200 = 15,
}

enum Discount {
  WELCOME10 = 10,
  DRESS15 = 15,
  JACKET20 = 20,
}
