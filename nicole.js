//Nicole Javascript:
//Variabler defineres her, ud fra DOM HTML Id
var firstName = document.getElementById("name");
var mail = document.getElementById("mail");
var phone = document.getElementById("phone");
var adress = document.getElementById("adress");
var zip = document.getElementById("zip");
var submit = document.getElementById("submit");
var error = document.getElementById("error");


// Arrays er defineret i js i form af en variabel.
// dette arrays indeholder 2 værdier
var borderColors = ["3px solid red","1px solid grey"];
var errorMessages = [
    "Udfyld oplysninger",
    "Du mangler mail, telefon, adresse og postnummer",
    "Du mangler telefon, adresse og postnummer",
    "Du mangler adresse og postnummer",
    "Du mangler postnummer",
    "Du er nu tilmeldt"]
var colors = ["red","green"]

function check(){

//if er et statement, hvis indholdet i () er sandt eller ej
// hvis det er sandt gør den det der står, hvis ikke så går den videre til else feks
    if(firstName.value.length == 0 && mail.value.length == 0 && phone.value.length == 0 && adress.value.length == 0 && zip.value.length == 0){
        //kalder arrayet ved at hente 0 værdi 
        firstName.style.border = borderColors[0];
        mail.style.border = borderColors[0];
        phone.style.border = borderColors[0];
        adress.style.border = borderColors[0];
        zip.style.border = borderColors[0];
        error.innerHTML = errorMessages[0];
        error.style.color = colors[0]
    }

    //else if er et statement, hvis indholdet i () er delvis sandt eller ej (defineret i den)
    else if(firstName.value.length != 0 && mail.value.length == 0 && phone.value.length == 0 && adress.value.length == 0 && zip.value.length == 0) {
        //alert("Du mangler at udfylde Efternavn, E-mail & Password")
        error.innerHTML = errorMessages[1];
        error.style.color = colors[0]
    }
    else if(firstName.value.length != 0 && mail.value.length != 0 && phone.value.length == 0 && adress.value.length == 0 && zip.value.length == 0) {
        //alert("Du mangler at udfylde E-mail & Password")
        error.innerHTML = errorMessages[2]
        error.style.color = colors[0]
    }
    else if(firstName.value.length != 0 && mail.value.length != 0 && phone.value.length != 0 && adress.value.length == 0 && zip.value.length == 0) {
        //alert("Du mangler at udfylde Password")
        error.innerHTML = errorMessages[3]
        error.style.color = colors[0]
    }
    else if(firstName.value.length != 0 && mail.value.length != 0 && phone.value.length != 0 && adress.value.length != 0 && zip.value.length == 0) {
        error.innerHTML = errorMessages[4]
        error.style.color = colors[0]
        //alert("Du mangler at acceptere vores betingelser")
    }
    else if(firstName.value.length != 0 && mail.value.length != 0 && phone.value.length != 0 && adress.value.length != 0 && zip.value.length == true) {
        //alert("Det virker")
        error.innerHTML = errorMessages[5]
        error.style.color = colors[1]
        firstName.style.border = borderColors[1];
        surname.style.border = borderColors[1];
        mail.style.border = borderColors[1];
        password.style.border = borderColors[1];
    }

    //console på inspect 
    //hvis intet rammer
    else {
        console.log("Det virker slet ikke")
    }
}

//forloop kan køre tal flere gange.
//variabel i er 0 - så længe i er mindre end vores arrays(errorMessages.length) så er loopet i++ hvilket betyder at den altid vil blive plusset med 1
// derfor loop - da den kører igen.
//concole log for at kunne se arrays i inspect
for (var i = 0; i < errorMessages.length; i++) {
    console.log(errorMessages[i])
     }

//Stopper reload af siden hver gang man tilmelder
const form = document.getElementById("form--signup");

function handleForm(event) {
    console.log("hej")
     event.preventDefault(); } 

form.addEventListener('submit', handleForm);


