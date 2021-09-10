document.getElementById('email-submit').addEventListener('click', function () {

    const emailField = document.getElementById('email-input');
    const email = emailField.value;
    emailField.value = '';
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email) {
        console.log('Enter Email First !');
    } else if (email) {
        if (valid.test(email)) {
            console.log('Valid Email');

        }
        else {
            console.log('Invalid Email');
        }

    }


});