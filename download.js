const hutaoVerify = document.querySelector('#hutao-');
const hutaoBox = document.querySelector('.verify_box')
let OTPAttept = 5;
let MaxOTPAttept = 5;

function refresh() {
    window.location = window.location;
}
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
        message: "OTP is correct. Access granted!",
        action: () => {
            window.location.href = "videos/hutao.mp4";
        }
    },
    "1234": {
        message: "OTP is correct. Access granted!",
        action: () => {
            window.location.href = "videos/keqing.mp4";
        }
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
            correctOTPCodes[userOTP].action();
            document.querySelector('#incorrectPin').classList.add('d-none')
            document.querySelector('#correctPin').classList.remove('d-none')
            setTimeout(refresh, 6000)
        }
    } else {
        OTPAttept--;
        if (OTPAttept <= 0) {
            blockUser();
        } else {
            clearOTPInputs();
            document.querySelector('.pin').focus();
            document.querySelector('#incorrectPin').classList.remove('d-none')
            if (OTPAttept > 1) {
                document.querySelector('#incorrectPin').innerHTML = `Access denied ${OTPAttept - 1} More`;

            } else if (OTPAttept = 1) {

                document.querySelector('#incorrectPin').innerHTML = `Last Try`;
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