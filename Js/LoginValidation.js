function getCookie(cookieName) {
    if (arguments.length == 0) {
        throw ("You should Enter Cookie Name");
    }
    var cName = cookieName + "=";
    var arr = document.cookie.split(';');
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i].trim();
        if (temp.indexOf(cName) == 0)
            return temp.substring(cName.length, temp.length);
    }
    throw ("Enter Valid Cookies Name")
}

var myMail = document.getElementById("loginMail");
var myPassword = document.getElementById("loginPassword");
var y = true;
function startTest()
{
    y = true;
    if (myMail.value !== getCookie("email")) {
        document.getElementById('sp1').style.display="inline";
        y = false;
    }
    else if (myPassword.value !== getCookie("password")) {
        document.getElementById('sp2').style.display="inline";
        y = false;
    }
    if (y == true) {
        window.location.href = "../Pages/questionPage.html"
    }else{
        myPassword.value="";
    }
}





