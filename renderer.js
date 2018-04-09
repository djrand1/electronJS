filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
var modal = document.getElementById('loginPage');
//Variable for the button to open modal
var modalBut = document.getElementById('loginOpen');
//Variable for the exit buttton
var exit = document.getElementsByClassName('exitBtn')[0];
//Listner for click to open login
modalBut.addEventListener('click',openModal);
//Listner to close the Login
exit.addEventListener('click',closeModal);
//Listner for clicking outside of modal
window.addEventListener('click', clickOutside)

//function to open modal
function openModal(){
  modal.style.display= 'block';
}

//function to close modal
function closeModal(){
  modal.style.display= 'none';

}

//function to close modal if user clicks outside modal
function clickOutside(e){
  if(e.target == modal){
      modal.style.display="none";
    }
}

function checkInfoLogin(form) {
  var attemp=3;
  var errors1=[];
  var email1=form.loginEmail.value;
  var password1=form.loginPass.value;

  if(attemp==0){

    alert("Too many failed attempts. Please contact administrator.");
  }

  if(email1==""){
    errors1.push('email1 field is empty.');

   }

   if(password1==""){
      errors1.push('password1 field is empty.');

   }

   if(errors1.length > 0){
     var message1 = "errors1:\n\n"
     for(var i = 0;i< errors1.length;i++){
       message1+=errors1[i] + "\n";
     }
     attemp--;
     alert(message1);
     return false;
   }

}

function checkinfo(form){
var errors=[];
var email = form.signupEmail.value;
var password = form.signupPass.value;
var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//At least one Number, one uppercase and one lowercase letter
//At minimum six characters
  var passValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  //Checks if email field is not left blank.
  if(email==""){
    errors.push('Email field is empty.');
   }

//Double Checks that a valid email was entered.
    else if(!check.test(form.signupEmail.value)){
      errors.push("Please enter a valid email:");
    }
//Checks if password field is not left blank.
    if(password==""){
       errors.push('Password field is empty.');
    }
//Check that the password contain one number, one uppercase and lowercas letter.
//Also checks that the password is 6 characters long.
    else if(!passValid.test(password)){
      errors.push('Invalid Password');
    }
//Checks that the rentered password is the same as the orignal password.
    if(form.signupPass.value != form.signupPass1.value){
      errors.push("Passwords do not Match");
    }

    if(errors.length > 0){
      var message = "Errors:\n\n"
      for(var i = 0; i < errors.length; i++){
        message += errors[i] + "\n";
      }
      alert(message);
      return false;
    }

    //valid registration
    return true;
 }

 function swap(referTo){
  if(referTo.getAttribute("data-tab") == "login") {
    document.getElementById("form-body").classList.remove('active');
    referTo.parentNode.classList.remove('signup');
  }
  else{
    document.getElementById("form-body").classList.add('active');
    referTo.parentNode.classList.add('signup');
  }
 }
