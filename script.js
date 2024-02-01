let bttn = document.getElementById("bttn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
let logo = document.getElementById("logo");


btn.onclick = function(){
document.body.classList.toggle("dark-theme");

if(document.body.classList.contains("dark-theme")){
    btnIcon.src = "images/sun.png";
    btnText.innerHTML = "Light";
    logo.src = "images/logo.png";
}else{
    btnIcon.src = "images/moon.png";
    btnText.innerHTML = "Dark";
    logo.src = "images/logo black.png";
}
}


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
for(tablink of tablinks){
tablink.classList.remove("active-link");

}
for(tabcontent of tabcontents){
tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}

//-----------script for side menu for mobile view---------------//
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
sidemenu.style.right = "0";

}

function closemenu(){
sidemenu.style.right = "-200px"
}


// ------------------Google Contact Form Script-------------//

const scriptURL = 'https://script.google.com/macros/s/AKfycbywAOSGGPtqIILFnUBfOwHVejLbPf2hvNw7gsrSjh6kh8zpVNLyTV5kHIwlWAMFaHgY/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
msg.innerHTML = "We have received your message! "
setTimeout (function(){
    msg.innerHTML = ""
    form.reset()
}, 5000)
}

)
.catch(error => console.error('Error!', error.message))
}
)