function getInfo(){
    $('button').click(function(){
        let info = $(this).value()
        sessionStorage.setItem('get-info', info.value)
        return true
    })
}
document.addEventListener('DOMContentLoaded', function(){
    getInfo()
})

function addText(){
    document.getElementById('uname').innerHTML = sessionStorage.getItem('get-text')
}
document.addEventListener('DOMContentLoaded', function(){
    addText
})

