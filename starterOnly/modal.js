function editNav() {
  var topNav = document.getElementById("myTopnav");
  topNav.classList.toggle('responsive');
};

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
// hide modal form
function hideModal() {
  modalbg.style.display = "none";
}

// validation pour radio-box
function  checkAllRadioButtons(){
  const alertMessage_radio = document.getElementById('alertMessage_radio');
  let isSelected = false;
  for(var i=1; i<7; i++){
      const id =['location'+[i]];
        if(document.getElementById(id).checked == true){
          isSelected = true;
        } 
  };

  if(!isSelected){
    alertMessage_radio.textContent = 'Vous devez choisir une option.';
    alertMessage_radio.style.color= 'red';
    alertMessage_radio.style.fontSize = '14px';
  }
}
 
// pour le submit bouton
document.getElementById('formSubmitId').addEventListener('submit', (e) => {
  e.preventDefault();
  validateFormCheck()
});

function validateFormCheck (){
  let isAllCorrect = true;
  const alertNameLabel = document.getElementById('alertMessage_name');
  const nameInput = document.getElementById('first');
  if(nameInput.value == "" || nameInput.value.length < 2){
      alertNameLabel.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prenom';
      nameInput.style.border ='2px solid red';
      alertNameLabel.style.color = 'red';
      alertNameLabel.style.fontSize = '14px';
      nameInput.focus();
      isAllCorrect = false;
    }

  const alertSurNameLabel = document.getElementById('alertMessage_surName');
  const surNameInput = document.getElementById('last');
  if(surNameInput.value == "" || surNameInput.value.length < 2){
      alertSurNameLabel.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
      surNameInput.style.border ='2px solid red';
      alertSurNameLabel.style.color = 'red';
      alertSurNameLabel.style.fontSize = '14px';
      surNameInput.focus();
      isAllCorrect = false;
  }

  const alertMessage_email = document.getElementById('alertMessage_email');
  const emailInput = document.getElementById('email');
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(emailInput.value == "" || mailformat.test(emailInput.value)==false){
      alertMessage_email.textContent = "L`adresse électronique est Invalide.";
      alertMessage_email.style.color = 'red';
      alertMessage_email.style.fontSize = '14px';
      emailInput.style.border ='2px solid red';
      emailInput.focus();
      isAllCorrect = false;
  }
  
  const birthdate = document.getElementById('birthdate');
  const alertMessage_date = document.getElementById('alertMessage_date');
  const givenDate = new Date(birthdate.value);
  const currentDate = new Date();
  if((givenDate > currentDate) || birthdate.value == ""){
    alertMessage_date.textContent = 'Vous devez entrer votre date de naissance.';
    alertMessage_date.style.fontSize = '14px';
    alertMessage_date.style.color = 'red';
    birthdate.style.border = '2px solid red';
    birthdate.focus();
    isAllCorrect = false;
  }

  const howManyTimesInput = document.getElementById('quantity');
  const alertMessage_howMany = document.getElementById('alertMessage_howMany');
  if(howManyTimesInput.value == "" || isNaN(howManyTimesInput.value)){
    alertMessage_howMany.textContent = 'Vous devez saisir une valeur numérique.';
    alertMessage_howMany.style.color = "red";
    alertMessage_howMany.style.fontSize = "14px";
    howManyTimesInput.style.border = "2px solid red";
    howManyTimesInput.focus();
    isAllCorrect = false;
  }

  checkAllRadioButtons();

  const checkBox1 = document.getElementById('checkbox1');
  const alertMessage_checkBox1 = document.getElementById('alertMessage_checkBox1');
  if(checkBox1.checked==false ){
    alertMessage_checkBox1.textContent = "Veuillez acceptez les conditions d'utilisation";
    alertMessage_checkBox1.style.color = "red";
    alertMessage_checkBox1.style.fontSize = "14px";
    isAllCorrect = false;
  }

  if (isAllCorrect){
    document.getElementById('formSubmitId').style.display = "none";
    document.getElementById('modal-close').style.display = "block";
  }
  
  document.getElementById('modal-close').addEventListener("click", function(event){
    modalbg.style.display = "none";
  });
  
  return isAllCorrect;
}
// Close the modal form when you click on the X.
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click",hideModal);
