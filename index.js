let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")
let message1 = ""
let message2 = ""

function PasswordGenerator(){
    let password1 = [ ]
    let password2 = [ ]
    passwordEl1.textContent = ""
    passwordEl2.textContent = ""
    for (let i = 0; i < 15; i++){
        let randomChar1 = Math.floor(Math.random()*characters.length)
        password1[i] = characters[randomChar1]
        let randomChar2 = Math.floor(Math.random()*characters.length)
        password2[i] = characters[randomChar2]
    }
    for (let i = 0; i < 15; i++){
        message1 += password1[i]
    }
    for (let i = 0; i < 15; i++){
        message2 += password2[i]
    }
    passwordEl1.textContent = message1
    passwordEl2.textContent = message2
}
