let array = [
    {
        usernames: "pink panther",
        accountName: "@ppanther99",
        passwords: "123456789"
    },
    {
        usernames: "robert polanderson",
        accountName: "@roberthandsome",
        passwords: "123456789"
    },
    {
        usernames: "charlie brown",
        accountName: "@purplebrown11",
        passwords: "123456789"
    },
];

function join(){
    let submitArray = document.getElementsByTagName("input")
    console.log(submitArray);
    let usernames = submitArray[0].value.toLowerCase();
    let passwords = submitArray[1].value.toLowerCase();
    console.log(usernames)
    console.log(passwords)

    for(let i of array) {
        if (usernames == array[i.usernames] & passwords == array[i.passwords]){
            localStorage.setItem(profileName, array[i.usernames]);
            localStorage.setItem(accountName, array[i.accountName])
            windown.locations.assign("../index.html");
        }
        else{
            window.alert("Wrong username or password")
        }
    }
};

let modal = document.getElementById("signupModel");
function signUp(){
    modal.style.display = "block"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}