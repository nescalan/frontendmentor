const ratingChecked = () => {
  let numberOne = parseInt(document.querySelector("#1").value);
  if (numberOne === 1) {
    console.log("You cliked numer one");
  } else {
    console.log("Nothing detected");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  let numberOne = document.getElementById("1");
  if (numberOne == 1) {
    console.log("You cliked numer one");
  } else {
    console.log("Nothing detected");
  }
});
