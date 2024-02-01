const hutaoVerify = document.querySelector('#hutao-');
const hutaoBox = document.querySelector('.verify_box')
let OTPAttept = 5;
let MaxOTPAttept = 5;
// Refresh function
function refresh() {
    window.location = window.location;
}
// Clear OTP Input function
function clearOTPInputs() {
    const otpInputs = document.querySelectorAll('.pin');
    otpInputs.forEach(input => input.value = '');
}

hutaoVerify.addEventListener('click', () => {
    hutaoBox.classList.toggle('d-flex');
    if (OTPAttept > 0) {
        document.querySelector('.pin').focus();
    }
})

document.addEventListener('click', function (e) {
    if (!hutaoBox.contains(e.target) && !hutaoVerify.contains(e.target)) {
        hutaoBox.classList.remove('d-flex');
        clearOTPInputs();
    }
})
const correctOTPCodes = {
    "1507": {
        title:'hutao',
        action: 'https://drive.usercontent.google.com/u/2/uc?id=1ke3jttZXp8pL4NSXUB34lVBKEUQyaEk9&export=download&authuser=0'
    },
    "0220": {
        title:'ganyuKeqing',
        action: 'https://drive.usercontent.google.com/u/0/uc?id=1qqBha41S3JVnMfHmTjraJLRoExIRQ3BO&export=download&authuser=0'
    },
    "tao2": {
        title:'hutao2',
        action: 'https://drive.usercontent.google.com/u/2/uc?id=1_eCrBW1VtWFGjYZt94B4hUOqI0epyGjf&export=download&authuser=0'
    },
    "3108": {
        title:'mona',
        action: 'https://drive.usercontent.google.com/u/2/uc?id=1wZvv3Q1XaUuOCvNXUOM0HlQ_NsyRZs3q&export=download&authuser=0'
    },
    "2705": {
        title:'fischl',
        action: 'https://drive.usercontent.google.com/download?id=15KmtOS_ygYdd-sQf4hEIrzvFl_ywFgDf&export=download&authuser=0'
    },
    "2510": {
        title:'eula',
        action: 'https://drive.usercontent.google.com/u/2/uc?id=1g7w7aOdj0vxwXD2eu7V42NlPJJXMXqIG&export=download&authuser=0'
    },
    "2106": {
        title:'yoimiya',
        action: 'https://drive.usercontent.google.com/download?id=1kFoYDAOBmeNn58zzmRxFrW9Q9HB31tYH&export=download&authuser=0'
    },
    "2627": {
        title:'raidenYae',
        action: 'https://drive.usercontent.google.com/u/2/uc?id=1RAyFBSD6k_jpg724sD6WkQHLutC88l1-&export=download&authuser=0'
    },
    "mc01": {
        title:'monaAether',
        action: 'https://drive.usercontent.google.com/u/2/uc?id=1ycxevdKz3Yd-AUo9Cz2iCUgibZ6jf8ft&export=download&authuser=0'
    },
    "2011": {
        title:'keqing',
        action: 'https://drive.usercontent.google.com/u/2/uc?id=1x005a_N9l7ErYT6LXcLOumUHofBslXRJ&export=download&authuser=0'
    },

};

function moveToNext(currentInput) {
    const inputValue = currentInput.value;

    if (inputValue.length === 1) {
        const nextInput = currentInput.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    };
}
function handleBackspace(event, currentInput) {
    const inputValue = currentInput.value;

    if (event.key === "Backspace" && inputValue.length === 0) {
        const prevInput = currentInput.previousElementSibling;
        if (prevInput) {
            prevInput.focus();
        }
    }
}
function blockUser() {
    document.querySelector('.pin_box').style.pointerEvents = 'none';
    document.querySelectorAll('.pin').forEach(input => input.style.backgroundColor = '#999999');

}

function validateOTP() {
    const userOTP = Array.from(document.querySelectorAll('.pin')).map(input => input.value).join('');

    // Check if the entered OTP matches any code in the object
    if (correctOTPCodes[userOTP]) {
        // Perform the custom action associated with the code
        if (OTPAttept > 0) {
            // correctOTPCodes[userOTP].action();
            window.location.href = correctOTPCodes[userOTP].action;
            document.querySelector('#pinOutput').innerHTML = `<h2 style="color:#00a600;opacity: 1;font-weight: 600;">Access Granted</h2>`;
            // setTimeout(refresh, 10000)
            clearOTPInputs();
            document.querySelector('.pin').focus();
            OTPAttept = 5;
        }
    } else {
        OTPAttept--;
        console.log(OTPAttept)
        if (OTPAttept <= 0) {
            blockUser();
        } else {
            clearOTPInputs();
            document.querySelector('.pin').focus();
            if (OTPAttept > 1) {
                document.querySelector('#pinOutput').innerHTML = `<h2 style="color:red;opacity: 1;font-weight: 600;"> Access denied ${OTPAttept - 1} More</h2>`;

            } else if (OTPAttept = 1) {

                document.querySelector('#pinOutput').innerHTML = `<h2 style="color:red;opacity: 1;font-weight: 600;"> Last Try</h2>`;
            }else{
                
                document.querySelector('#pinOutput').innerHTML = `<h2 style="color:red;opacity: 1;font-weight: 600;">Try again later !</h2> `;
            };
        }
    }
}

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = 'AM';

    // Convert hours to 12-hour format and determine AM/PM
    if (hours > 12) {
        hours -= 12;
        ampm = 'PM';
    }

    // Ensure midnight (12:00) is displayed correctly
    if (hours === 0) {
        hours = 12;
    }

    const timeString = `${hours} : ${minutes} : ${seconds}`;

    document.getElementById('_clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock immediately
updateClock();