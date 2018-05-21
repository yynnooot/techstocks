export const getColor = (num) => {
  let colorClass;
  if(num > 0) colorClass = 'red';
  if(num === 0) colorClass = 'grey';
  if(num < 0) colorClass = 'green'
  return colorClass;
}