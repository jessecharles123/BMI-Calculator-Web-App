const calculateBtn = document.querySelector(".calculate");
const clearBtn = document.querySelector(".clear");

const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const resultValue = document.querySelector(".result-value");
const resultClass = document.querySelector(".result-class");
const message = document.querySelector(".message");

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return {
      category: "Underweight",
      message:
        "You are underweight. Consider a balanced diet and consult a professional.",
      status: "risk",
    };
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return {
      category: "Normal weight",
      message: "You have a healthy weight. Keep maintaining your lifestyle!",
      status: "normal",
    };
  } else if (bmi >= 25 && bmi < 29.9) {
    return {
      category: "Overweight",
      message:
        "You are slightly overweight. Consider regular exercise and a balanced diet.",
      status: "risk",
    };
  } else {
    return {
      category: "Obese",
      message:
        "Your BMI indicates obesity. It’s advisable to seek medical guidance.",
      status: "risk",
    };
  }
}

function applyResultStyle(status) {
  resultValue.classList.remove("bmi-normal", "bmi-risk");
  resultClass.classList.remove("bmi-normal", "bmi-risk");
  message.classList.remove("bmi-normal", "bmi-risk");

  if (status === "normal") {
    resultValue.classList.add("bmi-normal");
    resultClass.classList.add("bmi-normal");
    message.classList.add("bmi-normal");
  } else {
    resultValue.classList.add("bmi-risk");
    resultClass.classList.add("bmi-risk");
    message.classList.add("bmi-risk");
  }
}

calculateBtn.addEventListener("click", () => {
  const weight = parseFloat(weightInput.value);
  const heightCm = parseFloat(heightInput.value);

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    alert("Please enter valid weight and height values.");
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const roundedBMI = bmi.toFixed(1);

  const result = getBMICategory(bmi);

  resultValue.textContent = roundedBMI;
  resultClass.textContent = result.category;
  message.textContent = result.message;

  applyResultStyle(result.status);
});

clearBtn.addEventListener("click", () => {
  weightInput.value = "";
  heightInput.value = "";

  resultValue.textContent = "--";
  resultClass.textContent = "";
  message.textContent = "";

  resultValue.classList.remove("bmi-normal", "bmi-risk");
  resultClass.classList.remove("bmi-normal", "bmi-risk");
  message.classList.remove("bmi-normal", "bmi-risk");
});
