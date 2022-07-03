const router = require("../../controller/api/addemployee-routes");
const { sequelize } = require("../../models/Employees");

const sequelize = require(sequelize)
const email = document.querySelector('#email').value.trim();
const firstName = document.querySelector('#first name').value.trim();
const lastName = document.querySelector('last name').value.trim();
const phoneNumber = document.querySelector('phone').value.trim();
const dob = document.querySelector('date of birth').value.trim();
const role = document.querySelector('role').value.trim();
const department = document.querySelector('department').value.trim();
const employeeId = document.querySelector('employeeId').value.trim();
const manager = document.querySelector('manager').value.trim();

   
async function addemployeeHandler(event) {
    event.preventDefault();

    router.get('/addemployee', function(req, res) {
        const userDetails = req.body;
    })
}


document.getElementById('buttonId').addEventListener('click', addemployeeHandler)