"use strict"

let sign_up_form=document.forms.reg_form;

let name_box=sign_up_form.name_box;

let mail_box=sign_up_form.mail_box;

let mobile_box=sign_up_form.mobile_box;

let username_box=sign_up_form.username_box;

let password_box=sign_up_form.password_box;

let confirme_password_box=sign_up_form.confirme_password_box;

let valid=document.querySelectorAll(".radio_content")

let All_invalid_content=document.querySelectorAll("span");

let All_input_tag=document.querySelectorAll("input");

sign_up_form.addEventListener("submit", (event) => {
    event.preventDefault();
    let count=true;

    if (!(/[a-z]{3,}/gi.test(name_box.value))) {
        All_invalid_content[0].classList.add("red_color");
All_input_tag[0].classList.add("redBorder");
count=false;
    }      
     if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail_box.value)){
        All_invalid_content[1].classList.add("red_color");
All_input_tag[1].classList.add("redBorder");
count=false;
        
            }
    if (!(/[0-9]{10}/gi.test(mobile_box.value))) {
        All_invalid_content[2].classList.add("red_color");
All_input_tag[2].classList.add("redBorder");
count=false;

    }
  
     if (!(/[a-z]{3,}/gi.test(username_box.value))) {
        All_invalid_content[3].classList.add("red_color");
All_input_tag[3].classList.add("redBorder");
count=false;


    }
     if (password_box.value=="") {
        All_invalid_content[4].classList.add("red_color");
All_input_tag[4].classList.add("redBorder");
count=false;


    }
     if (password_box.value != confirme_password_box.value || confirme_password_box.value=='') {
        All_invalid_content[5].classList.add("red_color");
All_input_tag[5].classList.add("redBorder");
count=false;


    }
    else if(count){
        alert("Successfully Submitted!!!...");
        sign_up_form.reset();
        document.querySelector(".pop_up_box").style.display = 'none';
    }
    
    setTimeout(()=>{

       for(let i=0;i<All_invalid_content.length;i++){
        All_invalid_content[i].classList.remove("red_color");
        All_input_tag[i].classList.remove("redBorder");
       }
    },2000);

});

let radio_btn_1=document.querySelector("#radio_btn_1");
let radio_btn_2=document.querySelector("#radio_btn_2");
let radio_btn_3=document.querySelector("#radio_btn_3");
let radio_btn_4=document.querySelector("#radio_btn_4");
let radio_btn_5=document.querySelector("#radio_btn_5");




password_box.addEventListener("keyup", () => {

    let capital_letter = /[A-Z]/g;
    let small_letter = /[a-z]/g;
    let digit = /\d/g;
    let special_character = /\W/g;

    if (capital_letter.test(password_box.value)) {
        document.querySelector(".pop_up_box").style.display = 'block';
        radio_btn_1.checked = true;
        valid[0].style.color = 'black';
    }
    else {
    
        valid[0].style.color = 'red';
        radio_btn_1.checked = false;


    }
    if (special_character.test(password_box.value)) {
        document.querySelector(".pop_up_box").style.display = 'block';
        radio_btn_2.checked = true;
        valid[1].style.color = 'black';

    }
    else {
     
        radio_btn_2.checked = false;
        valid[1].style.color = 'red';


    }

    if (digit.test(password_box.value)) {
        document.querySelector(".pop_up_box").style.display = 'block';
        radio_btn_3.checked = true;
        valid[2].style.color = 'black';
    }
    else {
       
        radio_btn_3.checked = false;
        valid[2].style.color = 'red';
    }

    if (small_letter.test(password_box.value)) {
        document.querySelector(".pop_up_box").style.display = 'block';
        radio_btn_4.checked = true;
        valid[3].style.color = 'black';
    }
    else {
   
        radio_btn_4.checked = false;
        valid[3].style.color = 'red';
    }

    if(password_box.value.length>=8){
        document.querySelector(".pop_up_box").style.display = 'block';
        radio_btn_5.checked = true;
        valid[4].style.color = 'black';
    }
    else{
        radio_btn_5.checked = false;
        valid[4].style.color = 'red';
    }
    if (password_box.value == "") {
        document.querySelector(".pop_up_box").style.display = 'none';

    }
    
});
