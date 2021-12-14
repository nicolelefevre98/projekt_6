// menu i mobil str
function showMenu() {
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
      } else {
        mobileMenu.style.display = "block";
      }
};
function closeMenu() {
    document.getElementById('mobileMenu').style.display = "none";
};


//Variabler defineres her
var firstName = document.getElementById("name");
var mail = document.getElementById("mail");
var phone = document.getElementById("phone");
var adress = document.getElementById("adress");
var zip = document.getElementById("zip");
var submit = document.getElementById("submit");
var error = document.getElementById("error");


// Arrays er defineret i form af en variabel
var borderColors = ["3px solid red","1px solid grey"];
var errorMessages = [
    "Udfyld oplysninger",
    "Du mangler mail, telefon, adresse og postnummer",
    "Du mangler telefon, adresse og postnummer",
    "Du mangler adresse og postnummer",
    "Du mangler postnummer",
    "Du er nu tilmeldt"]
var colors = ["red","green"]

//For at koden ikke bliver læst før der er trykket på knappen tilmeld
function check(){

// If statement er en condition, som eksikverer et stykke kode, afhængig af den specifikke condition
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
        //alert("Du mangler mail, telefon, adresse og postnummer")
        error.innerHTML = errorMessages[1];
        error.style.color = colors[0]
    }
    else if(firstName.value.length != 0 && mail.value.length != 0 && phone.value.length == 0 && adress.value.length == 0 && zip.value.length == 0) {
        //alert("Du mangler telefon, adresse og postnummer")
        error.innerHTML = errorMessages[2]
        error.style.color = colors[0]
    }
    else if(firstName.value.length != 0 && mail.value.length != 0 && phone.value.length != 0 && adress.value.length == 0 && zip.value.length == 0) {
        //alert("Du mangler adresse og postnummer")
        error.innerHTML = errorMessages[3]
        error.style.color = colors[0]
    }
    else if(firstName.value.length != 0 && mail.value.length != 0 && phone.value.length != 0 && adress.value.length != 0 && zip.value.length == 0) {
        error.innerHTML = errorMessages[4]
        error.style.color = colors[0]
        //alert("Du mangler postnummer")
    }
    else if(firstName.value.length != 0 && mail.value.length != 0 && phone.value.length != 0 && adress.value.length != 0 && zip.value.length == true) {
        //alert("Du er nu tilmeldt")
        error.innerHTML = errorMessages[5]
        error.style.color = colors[1]
        firstName.style.border = borderColors[1];
        mail.style.border = borderColors[1];
        phone.style.border = borderColors[1];
        adress.style.border = borderColors[1];
        zip.style.border = borderColors[1];
    }

    // Hvis absolut intet rammer, er der kørt console log (Som ses på incpect)
    else {
        console.log("Det virker slet ikke")
    }
}

// variabel i er 0 - så længe i er mindre end vores arrays(errorMessages.length) så er loopet i++ hvilket betyder at den altid vil blive plusset med 1
for (var i = 0; i < errorMessages.length; i++) {
    console.log(errorMessages[i])
     }

//Stopper reload af siden hver gang man tilmelder (submit)
const form = document.getElementById("form--signup");
function handleForm(event) {
    console.log("stopreload")
     event.preventDefault(); } 
form.addEventListener('submit', handleForm);