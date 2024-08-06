function showAnswers() {
  const form = document.getElementById("myForm");

  let formText = `name: ${form["name"].value}\n`;
  formText += `phone: ${form["phone"].value}\n`;
  formText += `amount: ${form["amount"].value}\n`;
  formText += `price: ${form["cost"].value}\n`;
  formText += `reason: ${form["reason"].value}\n`;
  formText += `comment: ${form["comment"].value}\n`;

  console.log("pressed");

  alert(formText);
}

const button = document.querySelector(".js-button");
button.addEventListener("click", showAnswers);
console.log("jhh");
