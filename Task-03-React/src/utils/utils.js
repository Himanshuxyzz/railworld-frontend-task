export const formatInInr = (price = 0) => {
  if (price && price >= 0) {
    let rupee = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });

    return rupee.format(price)
  }
  return 
};