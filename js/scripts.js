//Business Logic
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

//UI Logic
function handleSubmission(event){
  event.preventDefault();
  console.log("submitting...")
  const countTo1 = document.querySelector("#count-to");
  const countBy = document.querySelector("#count-by");
  const countToNumber = parseInt(countTo1.value);
  const countByNumber = parseInt(countBy.value);
  const printArray = countUp(countToNumber, countByNumber);
  printArray.forEach(function(element){
    console.log("Printing...")
    const paragraph = document.createElement("p");
    const resultDiv = document.getElementById("result-div");
    const countToSpan = document.querySelector("span.count-to-return");
    const countBySpan = document.querySelector("span.count-by-return");
    countToSpan.innerText = countTo1.value;
    countBySpan.innerText = countBy.value;
    paragraph.append(element);
    resultDiv.append(paragraph);
  });
}

window.addEventListener("load", function(event){
  event.preventDefault();
  const countingForm = document.getElementById("counting-form");
  countingForm.addEventListener("submit", handleSubmission);
});