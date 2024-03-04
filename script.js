"use strict";

const billAmount = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const amountPerson = document.querySelector(".tip--amount");
const totalPerson = document.querySelector(".tip--total");
const tipButtons = document.getElementsByClassName(".select-tip-buttons");
const tipBtn = document.querySelectorAll(".tip-btns");
const tipVal = document.querySelectorAll(".tip-percentage");
const inputDivBorder1 = document.getElementById("input--container1");
const inputDivBorder2 = document.getElementById("input--container2");
const customInput = document.getElementById("Custom-input");

// setting the textcontent and values for all outputs to zero
amountPerson.textContent = "0.00";
totalPerson.textContent = "0.00";
billAmount.value = 0;
peopleInput.value = 0;

// ----------------------------------------------
// color change on typing function

const typingFunc = (Element) => {
  Element.addEventListener("input", function () {
    Element.classList.add("input-color-active");
  });
};
typingFunc(billAmount);
typingFunc(peopleInput);

// ----------------------------------------------
// A function for the reset button state

const resetButtonState = () => {
  // conditional statements for the reset button state
  if (billAmount.value > 0 && peopleInput.value > 0) {
    document.querySelector(".displays-btn").classList.add("displays-btn-state");
  } else {
    document
      .querySelector(".displays-btn")
      .classList.remove("displays-btn-state");
  }
  document
    .querySelector(".displays-btn")
    .addEventListener("click", function () {
      amountPerson.textContent = "0.00";
      totalPerson.textContent = "0.00";
      billAmount.value = 0;
      peopleInput.value = 0;
      customInput.value = "";

      document
        .querySelector(".displays-btn")
        .classList.remove("displays-btn-state");
      // Loop to remove the select button style on clicking the reset button
      for (let j = 0; j < tipBtn.length; j++) {
        tipBtn[j].style.removeProperty("background");
        tipBtn[j].style.removeProperty("color");
      }
    });
};

// ----------------------------------------------
// A for loop for each button clicked
for (let i = 0; i < tipBtn.length; i++) {
  tipBtn[i].addEventListener("click", function () {
    const billValue = parseFloat(billAmount.value);
    const peopleValue = parseFloat(peopleInput.value);
    // ----------------------------------------------
    // conditional statements for the bill input state
    if (Number.isNaN(billValue) || billValue <= 0) {
      inputDivBorder1.classList.add("border-active");
      document.querySelector(".state1").style.color = "var(--red)";
    } else {
      inputDivBorder1.classList.remove("border-active");
      document.querySelector(".state1").style.removeProperty("color");
    }

    // ----------------------------------------------
    // conditional statements for the people input state

    if (Number.isNaN(peopleValue) || peopleValue <= 0) {
      inputDivBorder2.classList.add("border-active");
      document.querySelector(".state2").style.color = "var(--red)";
    } else {
      const tipPercentage = Number(tipVal[i].textContent) / 100;
      const totalAmount = (tipPercentage * billValue) / peopleValue;
      amountPerson.textContent = Number(totalAmount.toFixed(2));
      totalPerson.textContent = billValue + Number(amountPerson.textContent);
      // removing the state class
      inputDivBorder2.classList.remove("border-active");
      document.querySelector(".state2").style.removeProperty("color");
    }

    // ----------------------------------------------
    // calling the resetButtonState function
    resetButtonState();

    // Clear hover style from all buttons
    for (let j = 0; j < tipBtn.length; j++) {
      tipBtn[j].style.removeProperty("background");
      tipBtn[j].style.removeProperty("color");
    }

    // Setting style for the clicked button
    tipBtn[i].style.background = "var(--Strong-cyan)";
    tipBtn[i].style.color = "var(--Very-dark-cyan)";
  });

  // ----------------------------------------------
  // Custom input

  customInput.addEventListener("input", function () {
    const billValue = parseFloat(billAmount.value);
    const peopleValue = parseFloat(peopleInput.value);
    if (Number.isNaN(billValue) || billValue <= 0) {
      inputDivBorder1.classList.add("border-active");
      document.querySelector(".state1").style.color = "var(--red)";
    } else {
      const customValue = Number(customInput.value);
      console.log(customValue);
      const tipPercentage = customValue / 100;
      const totalAmount = (tipPercentage * billValue) / peopleValue;
      amountPerson.textContent = Number(totalAmount.toFixed(2));
      totalPerson.textContent = billValue + Number(amountPerson.textContent);
      console.log(totalAmount);

      // removing the state class
      inputDivBorder1.classList.remove("border-active");
      document.querySelector(".state1").style.removeProperty("color");
    }

    if (Number.isNaN(peopleValue) || peopleValue <= 0) {
      inputDivBorder2.classList.add("border-active");
      document.querySelector(".state2").style.color = "var(--red)";
    } else {
      const customValue = Number(customInput.value);
      console.log(customValue);
      const tipPercentage = customValue / 100;
      const totalAmount = (tipPercentage * billValue) / peopleValue;
      amountPerson.textContent = Number(totalAmount.toFixed(2));
      totalPerson.textContent = billValue + Number(amountPerson.textContent);
      console.log(totalAmount);
      resetButtonState();

      // removing the state class
      inputDivBorder2.classList.remove("border-active");
      document.querySelector(".state2").style.removeProperty("color");
    }
  });
}
