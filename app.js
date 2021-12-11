//viser mobile menu når burger menu kommer frem
function showMenu() {
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
      } else {
        mobileMenu.style.display = "block";
      }

};
//lukker menuen igen
function closeMenu() {
    document.getElementById('mobileMenu').style.display = "none";
};




//funktion der giver bekræftigelse på beskeden + informationer der er blevet sendt

function confirmMessage(){

   const firstName = document.getElementById('fName').value;
   const email = document.getElementById('email').value;
   const phone = document.getElementById('phoneNumber').value;
   const messageInput = document.getElementById('msg-input').value;

   const modalConfirm = document.getElementById('closeme');
  
//array der samler værdier fra input fields
const contactInfo = [firstName, email, phone, messageInput];
//ændrer modal fra display none til display flex for at gøre det synligt
modalConfirm.style.display="flex"
//opretter menuen hvor punkterne skal laves
const menu = document.getElementById('menu');
//loop der har en action for hver element i array
contactInfo.forEach((field)=> {
  //henviser til funktionen under der skaber et html element 
  menu.appendChild(createMenuItem(field));
}
)
};


function createMenuItem(field) {
  let li = document.createElement('li');
  li.classList.add("confirm-written-msg");
  li.textContent = field;
  return li;
};
//"lukker" modal igennem css style change
function closeModal() {
  document.getElementById('closeme').style.display = "none";
};





//stop reload 
const form = document.getElementById("form-contact");

function handleForm(event) {
     event.preventDefault(); } 

form.addEventListener('submit', handleForm);





