document.getElementById('email-submit').addEventListener('click', function () {

    const emailField = document.getElementById('email-input');
    const email = emailField.value;
    emailField.value = '';
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email) {
        //  console.log('Enter Email First !');
        statusMsg('Enter Email First!', 'red');
    } else if (email) {
        if (valid.test(email)) {
            // console.log('Valid Email');
            statusMsg('Valied Email!', 'green');

        }
        else {
            // console.log('Invalid Email');
            statusMsg('Invalied Email!', 'red');
        }

    }


});

const statusMsg = (massage, color) => {

    const div = document.getElementById('status-msg');
    div.textContent = '';

    const h5 = document.createElement('h5');

    h5.innerText = massage;
    h5.style.color = color;

    div.appendChild(h5);

}