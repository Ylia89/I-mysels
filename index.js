function saveInfo(){
    let userInput = document.getElementById('uname').value
    let pswInput = document.getElementById('psw').value
    console.log(userInput, pswInput)
    localStorage.setItem('login',JSON.stringify({user:userInput, psw:pswInput}))
}


document.getElementById('btn').addEventListener('click', saveInfo)
let localData = JSON.parse(localStorage.getItem('login'))
if(localData!=null){
    document.getElementById('user').textContent = localData.user
    document.getElementById('password').textContent = localData.psw
}


