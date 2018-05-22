//function takes an array of objects and return the last 5 objects

const lastFive = (arr) => {
  let last = arr.length;
  let front = last - 5;
  return arr.slice(front, last)
}

export default lastFive;
