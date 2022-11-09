const ftoc = function(F) {
  const C = (F - 32) * (5/9);
  return roundToOneDecimal(C);
};

const ctof = function(C) {
  const F = (C * 1.8) + 32;
  return roundToOneDecimal(F);
};

const roundToOneDecimal = function (number) {
  return Math.round(number*10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
