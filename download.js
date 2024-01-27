const hutaoVerify = document.querySelector('#hutao-');
const hutaoBox = document.querySelector('.verify_box')

hutaoVerify.addEventListener('click', () => {
    hutaoBox.classList.toggle('d-flex')
})

document.addEventListener('click', function (e) {
    if (!hutaoBox.contains(e.target) && !hutaoVerify.contains(e.target)) {
        hutaoBox.classList.remove('d-flex');
    }
})

const correctOTP = "2244";

function moveToNext(currentInput) {
    const inputValue = currentInput.value;

    if (inputValue.length === 1) {
        const nextInput = currentInput.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    };
}

function refresh() {
    window.location = window.location;
}

function validateOTP() {
    const userOTP = Array.from(document.querySelectorAll('.pin')).map(input => input.value).join('');

    if (userOTP === correctOTP) {
        window.location.href = "videos/hutao.mp4";
        setTimeout(refresh, 5000)
    } else {
        console.log("Noo")
    }
}