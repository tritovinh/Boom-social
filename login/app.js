const accountArray = [
    {
        peopleName: "pink panther",
        accountName: "@ppanther99",
        password: "123456789"
    },
    {
        peopleName: "robert polanderson",
        accountName: "@roberthandsome",
        password: "123456789"
    },
    {
        peopleName: "charlie brown",
        accountName: "@purplebrown11",
        password: "123456789"
    },
];

let loginUser = document.getElementById("loginUsername")
let password = document.getElementById("loginPassword")
function join(){
    check = false;
    for (let i = 0; i < accountArray.length; i++) {
      if (accountArray[i].peopleName == loginUser.value && accountArray[i].password == password.value) {
        console.log("sucess")
        localStorage.setItem("accountName", accountArray[i].accountName)
        localStorage.setItem("userName", accountArray[i].peopleName)
        window.location.replace("../index.html")
        check = true
      }
    }
    if (check == false) {
      alert("Wrong username or password")
    }
}
  



// sign up modal
let modal = document.getElementById("signupModel");
function signUp() {
    modal.style.display = "block"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// sign up 
const signUpForm = document.getElementsByClassName("signup-form")
function signup() {
    let name = signUpForm[2].value.toLowerCase();
    let usernameLogin = signUpForm[3].value.toLowerCase();
    let password = signUpForm[4].value.toLowerCase();
    let dateOfBirth = signUpForm[5].value.toLowerCase();
    console.log("sign up success");
}