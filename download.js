const hutaoVerify = document.querySelector('#hutao-');
const hutaoBox = document.querySelector('.verify_box')

function refresh() {
    window.location = window.location;
}
function clearOTPInputs() {
    // Clear all OTP input fields
    const otpInputs = document.querySelectorAll('.pin');
    otpInputs.forEach(input => input.value = '');
}

hutaoVerify.addEventListener('click', () => {
    hutaoBox.classList.toggle('d-flex');
    document.querySelector('.pin').focus();
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
            // Action for code "2244"
            window.location.href = "videos/hutao.mp4";
            // Add your custom action here
        }
    },
    "1234": {
        message: "OTP is correct. Access granted!",
        action: () => {
            // Action for code "1234"
            window.location.href = "videos/keqing.mp4";
            // Add your custom action here
        }
    },
    // Add more codes and actions as needed
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

// function validateOTP() {
//     const userOTP = Array.from(document.querySelectorAll('.pin')).map(input => input.value).join('');

//     if (userOTP === correctOTP) {
//         window.location.href = "videos/hutao.mp4";
//         setTimeout(refresh, 5000)
//     } else {
//         console.log("Noo")
//     }
// }

function validateOTP() {
    const userOTP = Array.from(document.querySelectorAll('.pin')).map(input => input.value).join('');

    // Check if the entered OTP matches any code in the object
    if (correctOTPCodes[userOTP]) {
        // Perform the custom action associated with the code
        correctOTPCodes[userOTP].action();
        document.querySelector('#incorrectPin').classList.add('d-none')
        document.querySelector('#correctPin').classList.remove('d-none')
        setTimeout(refresh, 4000)
    } else {
        clearOTPInputs();
        document.querySelector('.pin').focus();
        document.querySelector('#incorrectPin').classList.remove('d-none')
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