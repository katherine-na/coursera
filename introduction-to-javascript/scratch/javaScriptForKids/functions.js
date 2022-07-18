const makeStrawberriesAndCream = function (numberOfPeople) {
  take("strawberries", "fridge");
  const numberOfStrawberries = 7 * numberOfPeople;
  put("stawberries", numberOfStrawberries, "chopping board");
  wash("strawberries");
  disinfect("strawberries");
  cut("strawberries");
  take("cream", "fridge");
  const creamQuanitity = 100 * numberOfPeople;
  put("cream", creamQuanitity, "bowl");
  put("cream", "strawberries", "bowl");
};

makeStrawberriesAndCream((numberOfPeople = 1));
