//function that adds trailing zeros to dollar price

const addZero = (num) => {
  if(num === null){
    return;
  }
  return Number.parseFloat(num).toFixed(2)
};

export default addZero;
