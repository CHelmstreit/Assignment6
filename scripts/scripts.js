//PART 1, STEP 1b - 'OTHER' ADDRESS TYPE BOX
function getOtherBox(value) {
    if (value == 'other')
        document.getElementById('otherbox').setAttribute('style', 'visibility:visible');
    else
        document.getElementById('otherbox').setAttribute('style', 'visibility:hidden');
}

//PART 1, STEP 1c - SCRIPTS FOR CORRECT ADDRESS INPUT

function validateForm() {
    var name = document.getElementById('name').value;
    var addresstype = document.getElementById('addresstype').value;
    var streetaddress = document.getElementById('streetaddress').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zipcode = document.getElementById('zipcode').value;
    var phonenumber = document.getElementById('phonenumber').value;
    var email = document.getElementById('email').value;

    if (name == "" || name !== /^[\sa-zA-Z]+$/;) {
        alert('Please enter a valid name.');
        return false;
    }

    if (addresstype == "") {
        alert('Please enter a valid address type.');
        return false;
    }

    if (streetaddress == "" || streetaddress !== /^[\sa-zA-Z0-9.]+$/) {
        alert('Please enter a valid street address.');
        return false;
    }

    if (city == "" || city !== /^[\sa-zA-Z]+$/) {
        alert('Please enter a valid city name.');
        return false;
    }

    if (state == "" || state !== /^[\sa-zA-Z]+$/) {
        alert('Please enter your state\'s two-letter abbreviation (Example: "CA", "NV", "NY", etc.).');
        return false;
    }

    if (zipcode == "" || zipcode !== /[^0-9]+$/) {
        alert('Please enter a valid zip code.');
        return false;
    }

    if (phonenumber == "" || phonenumber !== /[^0-9]+$/) {
        alert('Please enter a valid phone number.');
        return false;
    }

    if (email == "") {
        alert('Please enter a valid email address.');
        return false;

    } else {
        return true;
    }
}

//PART 2
