//function returns class for font color

const getColor = (num) => {
  let colorClass;
  if(num > 0) colorClass = 'green';
  if(num === 0) colorClass = 'grey';
  if(num < 0) colorClass = 'red';
  return colorClass;
}

export default getColor;
