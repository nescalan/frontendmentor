const rating = (id) => {
  const recivedId = parseInt(id);
  console.log("Id Recibido: " + recivedId);
  let messageOne = "Texto Vacío";
  let elementId1, elementId2, elementId3, elementId4, elementId5;
  elementId1 = document.getElementById("1");
  elementId2 = document.getElementById("2");
  elementId3 = document.getElementById("3");
  elementId4 = document.getElementById("4");
  elementId5 = document.getElementById("5");

  switch (recivedId) {
    case 1:
      messageOne = "Mensaje Uno";
      elementId1.classList.add("visited");
      elementId2.classList.remove("visited");
      elementId3.classList.remove("visited");
      elementId4.classList.remove("visited");
      elementId5.classList.remove("visited");

      console.log(elementId1);
      break;
    case 2:
      messageOne = "Mensaje Dos";
      elementId1.classList.add("visited");
      elementId2.classList.add("visited");
      elementId3.classList.remove("visited");
      elementId4.classList.remove("visited");
      elementId5.classList.remove("visited");

      console.log(elementId2);
      break;
    case 3:
      messageOne = "Mensaje Tres";
      elementId1.classList.add("visited");
      elementId2.classList.add("visited");
      elementId3.classList.add("visited");
      elementId4.classList.remove("visited");
      elementId5.classList.remove("visited");

      console.log(elementId3);
      break;
    case 4:
      messageOne = "Mensaje Cuatro";
      elementId1.classList.add("visited");
      elementId2.classList.add("visited");
      elementId3.classList.add("visited");
      elementId4.classList.add("visited");
      elementId5.classList.remove("visited");
      console.log(elementId4);
      break;
    case 5:
      messageOne = "Mensaje Cinco";
      elementId1.classList.add("visited");
      elementId2.classList.add("visited");
      elementId3.classList.add("visited");
      elementId4.classList.add("visited");
      elementId5.classList.add("visited");
      console.log(elementId5);
      break;
    default:
      text = "No value found";
  }

  console.log(messageOne);
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("li").forEach((element) => {
    let id = element.getAttribute("id");
    element.addEventListener("click", function () {
      console.log("A button with ID " + id + " was clicked!");
      rating(id);
    });
  });
});
