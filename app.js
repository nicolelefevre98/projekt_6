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






function confirmMessage(){

  


   const firstName = document.getElementById('fName').value;
   const email = document.getElementById('email').value;
   const phone = document.getElementById('phoneNumber').value;
   const messageInput = document.getElementById('msg-input').value;

   const modalConfirm = document.getElementById('closeme');
  

const contactInfo = [firstName, email, phone, messageInput];

modalConfirm.style.display="flex"
const menu = document.getElementById('menu');
contactInfo.forEach((field)=> {

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

function closeModal() {
  document.getElementById('closeme').style.display = "none";
};





//stop reload 
const form = document.getElementById("form-contact");

function handleForm(event) {
     event.preventDefault(); } 

form.addEventListener('submit', handleForm);





