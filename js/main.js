const getRandomNumber = function(firstValue, secondValue){
  firstValue = Math.ceil(firstValue);
  secondValue = Math.floor(secondValue);
  return !(firstValue > secondValue || firstValue < 0) ? Math.floor(Math.random() * (secondValue - firstValue + 1)) + firstValue : undefined;
};

const isLengthCorrect = function(comment, maxLength){
  return String(comment).length <= maxLength;
};
