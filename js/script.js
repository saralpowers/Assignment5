window.addEventListener('load', (e) => {
    let form = document.querySelector('#empForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let empId = window.document.getElementById('id').value;
        console.log(`ID: ${empId}`);
        let myName = window.document.getElementById("name").value;
        console.log(`Name: ${myName}`);
        let extension = window.document.getElementById("ext").value;
        console.log(`Extension: ${extension}`);
        let email = window.document.getElementById("email").value;
        console.log(`Email: ${email}`);
        let department = window.document.getElementById("department").value;
        console.log(`Department: ${department}`);
    });});