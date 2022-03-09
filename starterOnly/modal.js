function editNav() {
  var topNav = document.getElementById("myTopnav");
  topNav.classList.toggle('responsive');
};

// DOM Elements
let modalbg = document.querySelector(".bground");
let modalBtn = document.querySelectorAll(".modal-btn");
let formData = document.querySelectorAll(".formData");
let isFirstNameValide = false;
let isSurNameValide = false;
let isBirthDateValide = false;
let isEmailValide = false;
let isHowManyValide = false;
let isRadioBoxValide = false;
let isCheckBoxValide = false;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// hide modal form
function hideModal() {
  modalbg.style.display = "none";
  let allFormError = document.getElementsByClassName("formError");
  let allInput = document.getElementById('formSubmitId').getElementsByClassName("text-control");
  for (const formError of allFormError) {
    formError.classList.add("hidden");
  }
  for (const input of allInput) {
    input.value = "";
  }
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
    //if one of the option is not checked => error
    alertMessage_radio.classList.remove("hidden");
    isRadioBoxValide= false;
  } else{
    alertMessage_radio.classList.add("hidden");
    isRadioBoxValide =true;
  }
}
 // listening submit event on form element so function validate is run

document.getElementById('formSubmitId').addEventListener('submit', (e) => {
  e.preventDefault();
  validateFormCheck()
});

 // if first.value is empty or first lenght is less than 2 characters
// then error message is displayed

function validateFormCheck (){
  
  const alertNameLabel = document.getElementById('alertMessage_name');
  const nameInput = document.getElementById('first');
  if(nameInput.value == "" || nameInput.value.length < 2){
      alertNameLabel.classList.remove("hidden");
      nameInput.style.border = "2px solid red";
      isFirstNameValide = false;
    } else{
      alertNameLabel.classList.add("hidden");
      nameInput.style.border = "none";
      isFirstNameValide = true;
    }

  const alertSurNameLabel = document.getElementById('alertMessage_surName');
  const surNameInput = document.getElementById('last');
  if(surNameInput.value == "" || surNameInput.value.length < 2){
    alertSurNameLabel.classList.remove("hidden");
    surNameInput.style.border = "2px solid red";
      isSurNameValide = false;

  } else{
    alertSurNameLabel.classList.add("hidden");
    surNameInput.style.border = "none";
    isSurNameValide = true;
  }

  const alertMessage_email = document.getElementById('alertMessage_email');
  const emailInput = document.getElementById('email');

  // regex for email addres

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(emailInput.value == "" || mailformat.test(emailInput.value)==false){
      alertMessage_email.classList.remove("hidden");
      emailInput.style.border = "2px solid red";
      isEmailValide = false;
  } else {
    alertMessage_email.classList.add("hidden");
    emailInput.style.border = "none";
    isEmailValide = true;
  }
  const birthdate = document.getElementById('birthdate');
  const alertMessage_date = document.getElementById('alertMessage_date');
  const givenDate = new Date(birthdate.value);
  const currentDate = new Date();

  if((givenDate > currentDate) || birthdate.value == ""){
    alertMessage_date.classList.remove("hidden");
    birthdate.style.border = "2px solid red";
    isBirthDateValide = false;
  } else {
    alertMessage_date.classList.add("hidden");
    birthdate.style.border = "none";
    isBirthDateValide = true;
  }

  const howManyTimesInput = document.getElementById('quantity');
  const alertMessage_howMany = document.getElementById('alertMessage_howMany');
  if(howManyTimesInput.value == "" || isNaN(howManyTimesInput.value)){
    alertMessage_howMany.classList.remove("hidden");
    howManyTimesInput.style.border = "2px solid red";
    isHowManyValide = false;
  }else{
    alertMessage_howMany.classList.add("hidden");
    howManyTimesInput.style.border = "none";
    isHowManyValide = true;
  }

  checkAllRadioButtons();

  const checkBox1 = document.getElementById('checkbox1');
  const alertMessage_checkBox1 = document.getElementById('alertMessage_checkBox1');
  if(checkBox1.checked==false ){
    alertMessage_checkBox1.classList.remove("hidden");
    isCheckBoxValide = false;
   
  } else {
    alertMessage_checkBox1.classList.add("hidden");
    isCheckBoxValide = true;
  }

  if (isFirstNameValide && isSurNameValide && isBirthDateValide && isEmailValide && isHowManyValide && isRadioBoxValide && isCheckBoxValide ){
    document.getElementById('formSubmitId').style.display = "none";
    document.getElementById('modal-close').style.display = "block";
  }
  
  document.getElementById('modal-close').addEventListener("click", function(event){
    modalbg.style.display = "none";
  });
  
}
// Close the modal form when you click on the X.
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click",hideModal);
