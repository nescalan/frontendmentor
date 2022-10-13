const rating = (id) => {
  const recivedId = parseInt(id);
  console.log("Id Recibido: " + recivedId);
  let messageOne = "Texto Vacío";
  let liElements = document.querySelectorAll("li");

  switch (recivedId) {
    case 1:
      messageOne = "Mensaje Uno";
      const elementId1 = document.getElementById(recivedId);
      elementId1.classList.add("visited");
      console.log(elementId1);
      break;
    case 2:
      messageOne = "Mensaje Dos";
      elementId1.classList.add("visited");
      const elementId2 = document.getElementById(recivedId);
      elementId2.classList.add("visited");
      console.log(elementId2);
      break;
    case 3:
      messageOne = "Mensaje Tres";
      break;
    case 4:
      messageOne = "Mensaje Cuatro";
      break;
    case 5:
      messageOne = "Mensaje Cinco";
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
