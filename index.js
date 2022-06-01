const chars = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', "K", 'L', 'M',
    "N", "O", "P", 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', 
    '-', '&', '+', '*', '%'
];
let length = chars.length;
let revealEl1 = document.querySelector('.reveal1');
let revealEl2 = document.querySelector('.reveal2');
let revealEl3 = document.querySelector('.reveal3');
let revealEl4 = document.querySelector('.reveal4');


let counter = 0;


function generatePassword() {
    let password = '';
    
    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * length)
        password += chars[random];           
        
    }
    return password;    
}

revealEl1.textContent = generatePassword()
revealEl2.textContent = generatePassword()
revealEl3.textContent = generatePassword()
revealEl4.textContent = generatePassword()
// for (let reveal of revealEl) {
//     reveal.textContent = generatePassword();
// }
console.log(revealEl1.textContent)
console.log(revealEl2.textContent)
console.log(revealEl3.textContent)
console.log(revealEl4.textContent)