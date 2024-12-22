const myForm = document.getElementById("form-phone-book");
const theName = document.getElementById("name");
const thePhone = document.getElementById("phone");
const theEmail = document.getElementById("email");

const allNames = [];
const allPhones = [];
const allEmails = [];

let allLines = "";

myForm.addEventListener("submit", function(even) {
   even.preventDefault()

   addLines();
   updateAllLists();
});


function addLines() {
    
   if(allNames.includes(theName.value) || allPhones.includes(thePhone.value) || allEmails.includes(theEmail.value)) {
       alert(`Data is already registered, try again with different data!`);

   } else {
   allNames.push(theName.value);
   allPhones.push(thePhone.value);
   allEmails.push(theEmail.value);

   let tableLine = `<tr>`;
   tableLine += `<td>${theName.value}</td>`;
   tableLine += `<td>${thePhone.value}</td>`;
   tableLine += `<td>${theEmail.value}</td>`;
   tableLine += `</tr>`;

   allLines += tableLine;

   }

   theName.value = "";
   thePhone.value = "";
   theEmail.value = "";
}

function updateAllLists() {
   const contactTables = document.querySelector("tbody");
   contactTables.innerHTML = allLines;
}



















