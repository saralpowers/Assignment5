window.addEventListener('load', () => {

    var form = window.document.getElementById('empForm');

    function process(e) {
        id = document.getElementById("userInput");
        nameo = document.getElementById('userInput');
        ext = document.getElementById('userInput');
        email = document.getElementById('userInput');
        department = document.getElementById('userInput');
    }

    form.addEventListener('change', process, true);

    form.addEventListener('submit', event => {
        event.preventDefault();
        console.log(`ID: ${id}`);
        console.log(`Name: `);
        console.log(`Extension: `);
        console.log(`Email: `);
        console.log(`Department: `);
    })
});




