window.addEventListener('load', () => {

    let form = window.document.getElementById('empForm');

    function saveval(e) {
        window.console.log(`${e.target.id}: ${e.target.value}`);
    }

    empForm.addEventListener('change', saveval, {
    }, false);

    form.addEventListener('submit', event => {
        event.preventDefault();
        window.console.log()
    })
});




