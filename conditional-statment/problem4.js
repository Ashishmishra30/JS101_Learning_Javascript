// Given stored username and password and input username and password, Print if the user can login or not.

let reg_email = "ashishmishra123@masaischool.com";
let reg_pass = "Aa@1234";

let ent_email = "ashishmishra123@masaischool.com";
let ent_pass = "Aa@1234";

if (ent_email == reg_email){

  if (ent_pass == reg_pass){

    console.log("Login Successful");

  } else {

    console.log("Incorrect Password");

  }



} else {

  console.log("Wrong Email")
}