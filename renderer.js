// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
//Variable for the modal by Id
//Variable for the modal by Id
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

function insertUser(username,password,permissions) {
    let userInsertSql = 'INSERT INTO user_info (username,password,permissions)\n'+
                        ' VALUES\n'+
                        '('+ '"'+username+'"' +','+ '"'+password+'"' +','+ permissions +');'
	exectueSQLstmt(userInsertSql);
}
function exectueSQLstmt(stmt) {
  const sqlite3 = require('sqlite3').verbose();

  const path = require('path');

  let db_path = '%CD%';


  let db = new sqlite3.Database(db_path+'POD_dbfile.db', (err) => {
      if (err) {
          console.error(err.message);
      }
      console.log('SQLiteTestDB Connected');
  });
    db.run(stmt)

}

function searchUsername(username1){

  const sqlite3 = require('sqlite3').verbose();

  const path = require('path');

  let db_path = '%CD%';

  var test = 0;

  let db = new sqlite3.Database(db_path+'POD_dbfile.db', (err) => {
      if (err) {
          console.error(err.message);
      }
      console.log('SQLiteTestDB Connected');
  });

  db.all("SELECT username FROM user_info", function(err,rows) {
      rows.forEach(function (row){
        if(row.username==username1){
          test++;
        }
      })
  });

  db.close();
//"SELECT * FROM user_info WHERE (username==username1)",function(err,rows)
return test;



}
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

  var copy = 0;
  copy = searchUsername(email);
  console.log(copy);
  if(copy>0){
    alert("Username taken!");
    return false;
  }
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


	insertUser(email,password,1);
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
