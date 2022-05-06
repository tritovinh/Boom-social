const accountArray = [
    {
        peopleName: "pink panther",
        accountName: "@ppanther99",
        password: "123456789",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYAkhbyXxcAAT35xT6MbEStQdKon2GpHXSQ&usqp=CAU",
        backgroundPic: "https://www.cartoonbrew.com/wp-content/uploads/2021/05/the_pink_phink.jpg"
    },
    {
        peopleName: "bart simpson",
        accountName: "@bartsimpson2808",
        password: "123456789",
        profilePic: "https://i1.sndcdn.com/avatars-000099391844-1oczm0-t500x500.jpg",
        backgroundPic: "https://images.thestar.com/ARV5gQW1Rbd1WoI3vuCYNfBy2xA=/1086x611/smart/filters:cb(2700061000)/https://www.thestar.com/content/dam/thestar/entertainment/television/2014/09/26/when_stewie_met_bart_the_family_guysimpsons_crossover/familyguysimpsons.jpg"
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
        localStorage.setItem("profilePic", accountArray[i].profilePic)
        localStorage.setItem("backgroundPic", accountArray[i].backgroundPic)
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