function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

const nameInput = document.getElementById('first');
const alertNameLabel = document.getElementById('alertMessage_name');
nameInput.addEventListener('input', function(event){
  
  if(/([A-Z])/gi.test(event.target.value) && event.target.value.length > 2){
      alertNameLabel.textContent = 'dogru girdiniz.';
      nameInput.style.border ='none';
      alertNameLabel.style.color = 'white';
  }else if (event.target.value==null){
      alertNameLabel.textContent = 'Ecrivez votre prenom';
  
  } else {
      nameInput.style.border ='2px solid red';
      alertNameLabel.textContent = 'Prenom Invalide';
      alertNameLabel.style.color = 'red';

  }
});


