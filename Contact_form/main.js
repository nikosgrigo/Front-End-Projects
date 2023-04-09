"use strict";

//Get elements from html
const modal = document.querySelector(".Modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-Modal");
const SubmitFormbtn = document.getElementById("form_button");

const textAreaInput = document.getElementById("textarea_input");
const emailInput = document.getElementById("email_input");
const nameInput = document.getElementById("name_input");

const form = document.querySelector(".needs-validation");
const toast = document.getElementById("toast");

const InitiateForm = function () {
  form.classList.remove("was-validated");
  form.classList.add("needs-validation");
  textAreaInput.value = "";
  emailInput.value = "";
  nameInput.value = "";
};

//Open Modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  InitiateForm();
};

//Add EventListener to Submit-Button
SubmitFormbtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (form.checkValidity() && textAreaInput.value !== "") {
    console.log(textAreaInput.value);
    form.classList.add("was-validated");
    openModal();
  } else {
    toast.classList.remove("hidden");
    toast.style.opacity = "1";

    // Hide toast message after 3 seconds
    setTimeout(function () {
      toast.style.opacity = "0";
      toast.classList.add("hidden");
    }, 2000);
  }
});

//Add EventListener to Close-Button
btnCloseModal.addEventListener("click", closeModal);

//Click everywhere outside the modal to exit
overlay.addEventListener("click", closeModal);

//Press ESC key to exit modal panel
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
