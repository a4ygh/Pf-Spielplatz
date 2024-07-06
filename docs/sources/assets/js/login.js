var objPeople = [
    {
        email : "admin1@rs.de",
        password : "pf3-a1-rs"
    },
    
    //              admin1@rs.de
    //              pf3-a1-rs

    {
        email : "admin2@rs.de",
        password : "pf3-a2-rs"
    }
]
function getInfo() {
    const ms = document.getElementById('ms') // = Modal Success
    const mf = document.getElementById('mf') // = Modal Fail
    const ol = document.getElementById('ol') // = Overlay

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    for (var i = 0 ; i< objPeople.length;i++) {
        if (email == objPeople[i].email && password == objPeople[i].password) {
            console.log(email + " is logged in!!!")
            ms.classList.add('reveal')
            ol.classList.add('rol')
            setTimeout(function(){location.href = "./portfolio"}, 4000)
            return
        }
    }
    console.log("Failed to log in")
    mf.classList.add('reveal')
    ol.classList.add('rol')
    setTimeout(function(){
        mf.classList.remove('reveal')
        ol.classList.remove('rol')
    },4000)
}