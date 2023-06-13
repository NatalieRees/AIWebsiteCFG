// Sign Up Button

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function closeForm() {
  document.getElementById("id01").style.display = "none";
};

function gohome()
{
window.location.href="../index.html"
};

function updateTxt(field1, field2) {
  var field1 = document.getElementById(field1).value;
  var field2 = document.getElementById(field2).value;
  console.log("Name has been entered");
  alert('Thank you for contacting us ' + field1 + ' ' + field2);
};

function PressAlert() {
  console.log("Sign Up Occured");
  alert("Thanks for signing up!");
};
