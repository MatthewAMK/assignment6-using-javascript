// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submitButton = document.getElementById("submit-button");

// add a click event listener to the submit button
submitButton.addEventListener("click", function(event) {
  // prevent the form from submitting and refreshing the page
  event.preventDefault();

  // get the contact page element
  const contactPage = document.getElementById("contact-page");

  // create a new paragraph element
  const messageElement = document.createElement("p");

  // set the text of the paragraph element to "Thank you for your message"
  messageElement.textContent = "Thank you for your message";

  // set the font size of the paragraph element to 24
  messageElement.style.fontSize = "24px";

  // replace the contact page contents with the message element
  contactPage.innerHTML = "";
  contactPage.appendChild(messageElement);
});