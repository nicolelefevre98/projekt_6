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



function confirmMessage() {
    const firstName = document.getElementById('fName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phoneNumber').value;

    const contactInfo = [firstName, email, phone];
    


}




//stop reload 
const form = document.getElementById("form-contact");

function handleForm(event) {
     event.preventDefault(); 
     console.log('tests')} 

form.addEventListener('submit', handleForm);
