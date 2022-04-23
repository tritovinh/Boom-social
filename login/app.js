const accountArray = [
    {
        userName: "pink panther",
        accountName: "@ppanther99",
        password: "123456789"
    },
    {
        userName: "robert polanderson",
        accountName: "@roberthandsome",
        password: "123456789"
    },
    {
        userName: "charlie brown",
        accountName: "@purplebrown11",
        password: "123456789"
    },
];
const submitArray = document.getElementsByClassName("login-form")
function join() {
    console.log(submitArray);
    let usernames = submitArray[0].value.toLowerCase();
    let passwords = submitArray[1].value.toLowerCase();

    for (let i of accountArray) {
        if (usernames == accountArray[i].userName && passwords == accountArray[i].password) {
            localStorage.setItem("profileName", accountArray[i].userName);
            localStorage.setItem("accountName", accountArray[i].accountName);
            console.log(localStorage.getItem("profileName"))
            return
        }
    }
    window.alert("Wrong username or password")
};

let modal = document.getElementById("signupModel");
function signUp() {
    modal.style.display = "block"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const signUpForm = document.getElementsByClassName("signup-form")
function signup() {
    let name = signUpForm[2].value.toLowerCase();
    let usernameLogin = signUpForm[3].value.toLowerCase();
    let password = signUpForm[4].value.toLowerCase();
    let dateOfBirth = signUpForm[5].value.toLowerCase();
    console.log(signUpForm);
}