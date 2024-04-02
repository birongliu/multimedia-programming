const weightForm = document.getElementById("weightForm");
const result = document.getElementById("output");
weightForm.onsubmit = (k) => {
  k.preventDefault();
  const weightUnit = document.getElementById("weightUnit");
  const outcome = calucateWeightUnit(weightUnit);
  result.innerHTML = `Result: ${outcome}${weightUnit.value}`;
};

function calucateWeightUnit(weightUnit) {
  const weight = document.getElementById("weight").value;
  switch (weightUnit.value) {
    case "lb":
      return calucatePound(weight);
    case "oz":
      return calucateOunce(weight);
    case "g":
      return calucateGram(weight);
    default:
      return weight;
  }
}

function calucateOunce(weight) {
  return weight * 35.274; // 1 kilogram is approximately 35.274 ounces
}

function calucateGram(weight) {
  return weight * 1000; // 1 kilogram is 1000 grams
}

function calucatePound(weight) {
  return weight * 2.20462; // 1 kilogram is approximately 2.20462 pounds
}
