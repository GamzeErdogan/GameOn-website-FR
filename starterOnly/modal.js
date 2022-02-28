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
//validation pour prenom
const nameInput = document.getElementById('first');
const alertNameLabel = document.getElementById('alertMessage_name');
nameInput.addEventListener('input', function(event){
  
  if(/([A-Z])/gi.test(event.target.value) && event.target.value.length >= 2){
      alertNameLabel.textContent = 'PRENOM VALIDE';
      nameInput.style.border ='none';
      alertNameLabel.style.color = 'green';
  }else if (event.target.value==null || event.target.value.length < 2){
      alertNameLabel.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prenom';
      nameInput.style.border ='2px solid red';
      alertNameLabel.style.color = 'red';
      alertNameLabel.style.fontSize = '14px';

  } else {
      nameInput.style.border ='2px solid red';
      alertNameLabel.textContent = 'Prenom Invalide';
      alertNameLabel.style.color = 'red';
  }
});

//validation pour nom
  const surNameInput = document.getElementById('last');
  const alertSurNameLabel = document.getElementById('alertMessage_surName');
  surNameInput.addEventListener('input', function(event){
  
  if(/([A-Z])/gi.test(event.target.value) && event.target.value.length >= 2){

      alertSurNameLabel.textContent = 'NOM VALIDE';
      surNameInput.style.border ='none';
      alertSurNameLabel.style.color = 'green';
  }else if (event.target.value==null || event.target.value.length < 2){

      alertSurNameLabel.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
      surNameInput.style.border ='2px solid red';
      alertSurNameLabel.style.color = 'red';
      alertSurNameLabel.style.fontSize = '14px';

  } else {

      surNameInput.style.border ='2px solid red';
      alertSurNameLabel.textContent = 'Nom Invalide';
      alertSurNameLabel.style.color = 'red';
  }
});
//validation pour email
const emailInput = document.getElementById('email');
const alertMessage_email = document.getElementById('alertMessage_email');
  emailInput.addEventListener('input',function(event){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mailformat.test(event.target.value)){
      alertMessage_email.textContent = "L`adresse électronique est valide.";
      alertMessage_email.style.color = 'green';
      emailInput.style.border ='none';
      return true;
    } else{
      alertMessage_email.textContent = "L`adresse électronique est Invalide.";
      alertMessage_email.style.color = 'red';
      alertMessage_email.style.fontSize = '14px';
      emailInput.style.border ='2px solid red';
      return false;
    }
  });


