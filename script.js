const minNumber = 1
const maxNumber = 100
let trials = 0

const secretNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("myButton").addEventListener("click", function () {
    const user = parseInt(document.getElementById("inputValue").value);
    console.log(user)
    // const result = document.getElementById("user");
    if (user < minNumber || user > maxNumber) {
        document.getElementById("message").textContent = "please enter the number between 0 to 100.";
    }
    else {

        if (user === secretNumber) {
            document.getElementById("message").textContent = "congratulations !!!  have guessed the right number" + trials;
            document.getElementById("myButton").disabled = true;
        }
        else if (user < secretNumber) {
            document.getElementById("message").textContent = "Try a higher number than you guess number" + user;
        }
        else {
            document.getElementById("message").textContent = "Try a lower number than you guess number" + user;
        }
    }
});
