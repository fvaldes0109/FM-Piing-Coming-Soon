let validationText, input, form;

function init() {
    validationText = document.querySelector('.invalid-text');
    input = document.querySelector('input');
    form = document.querySelector('form');

    input.addEventListener('focus', resetValidity);
    form.addEventListener('submit', attemptSubmit);
}


function attemptSubmit(event) {
    event.preventDefault();

    let field = input;
    let width = document.body.clientWidth;
    text = field.value;
    if (text.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        event.target.submit();
    } else {
        input.style.border = "1px solid hsl(354, 100%, 66%)";
        validationText.style.visibility = 'visible';
        if (width <= 900) {
            validationText.style.display = 'block';
        }
        return false;
    }
}

function resetValidity(event) {

    let width = document.body.clientWidth;
    input.style.border = "1px solid hsl(0, 3%, 80%)";
    validationText.style.visibility = 'hidden';
    if (width <= 900) {
        validationText.style.display = 'none';
    }
}

window.addEventListener("load", init);