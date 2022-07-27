const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")

function PasswordGenerator(){
    let password1 = [ ]
    let password2 = [ ]
    let message1 = " "
    let message2 = " "
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
