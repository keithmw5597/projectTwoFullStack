const router = require("../../controller/api/addemployee-routes");
const { sequelize } = require("../../models/Employees");

const sequelize = require(sequelize)
const form = document.querySelector('#employee-form').value.trim();
const email = document.querySelector('#email').value.trim();
const firstName = document.querySelector('#fName').value.trim();
const lastName = document.querySelector('#lName').value.trim();
const phoneNumber = document.querySelector('#phone').value.trim();
const dob = document.querySelector('#DOB').value.trim();
const role = document.querySelector('#role').value.trim();
const department = document.querySelector('#department').value.trim();
const employeeId = document.querySelector('#employeeId').value.trim();
const manager = document.querySelector('#manager').value.trim();

   


async function signupFormHandler(event) {
    event.preventDefault();
  
    getInputs() = function() {
        if (form === "") {
            alert("Please complete all fields")
            return false;
        }
        else {
            const response =  await fetch('/api/users/addemployee', {
                method: 'post',
                body: JSON.stringify({
                  email,
                  firstName,
                  lastName,
                  phoneNumber,
                  dob,
                  role,
                  department,
                  employeeId,
                  manager
                }),
                headers: { 'Content-Type': 'application/json' }
              });
              console.log(response)
        
              //check the response status
              if(response.ok){
                console.log('success')
                document.location.replace('login')
              }else{
                alert(response.statusText);
              }
        };
    }
  };


document.getElementById('buttonId').addEventListener('click', getInputs)


document.getElementById('buttonId').addEventListener('click', getInputs)