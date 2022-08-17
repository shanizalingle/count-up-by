function countUp(countTo, countBy){
  console.log(countTo, countBy);
  const countingArray = [];
  for (let i = 0; i <= countTo; i += countBy){
    //write i to the array
    countingArray.push(i);
  }
  console.log(countingArray);
  return countingArray;
}