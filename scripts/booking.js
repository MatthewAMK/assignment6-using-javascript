/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35; // default rate
let selectedDays = []; // array to store selected days
const dayButtons = document.querySelectorAll('.day-selector li'); // select all day buttons
const fullButton = document.getElementById('full'); // select full day button
const halfButton = document.getElementById('half'); // select half day button
const clearButton = document.getElementById('clear-button'); // select clear button
const calculatedCost = document.getElementById('calculated-cost'); // select calculated cost element



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const day = button.id; // get day of the week
      if (!selectedDays.includes(day)) { // if day is not already selected
        selectedDays.push(day); // add day to selectedDays array
        button.classList.add('clicked'); // add clicked class to button
        calculateCost(); // recalculate cost
      }
    });
  });




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', () => {
    selectedDays = []; // reset selected days array
    dayButtons.forEach((button) => {
      button.classList.remove('clicked'); // remove clicked class from all day buttons
    });
    costPerDay = 35; // reset rate to full day rate
    fullButton.classList.add('clicked'); // add clicked class to full day button
    halfButton.classList.remove('clicked'); // remove clicked class from half day button
    calculateCost(); // recalculate cost
  });
  




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener('click', () => {
    costPerDay = 20; // set half day rate
    halfButton.classList.add('clicked'); // add clicked class to half day button
    fullButton.classList.remove('clicked'); // remove clicked class from full day button
    calculateCost(); // recalculate cost
  });


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener('click', () => {
    costPerDay = 35; // set full day rate
    fullButton.classList.add('clicked'); // add clicked class to full day button
    halfButton.classList.remove('clicked'); // remove clicked class from half day button
    calculateCost(); // recalculate cost
  });



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    const totalCost = selectedDays.length * costPerDay; // calculate total cost
    calculatedCost.innerHTML = totalCost; // update calculated cost element
  }
