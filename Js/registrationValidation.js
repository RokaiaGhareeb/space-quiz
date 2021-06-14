////Function to setCookies////////////
function setCookie(cookieName, cookieValue, expiryDate) {
    document.cookie = cookieName + "=" + cookieValue + ";expires=Thu, 01 Jan 2970 00:00:01 GMT";
}


/////Validation/////////
var fname = document.getElementById('fname')
var fnamespan = document.getElementById("fnamespan");
var fnamedivalt = document.getElementById('fnamedivalt')

var lname = document.getElementById('lname');
var lnamespan = document.getElementById("lnamespan");
var lnamedivalt = document.getElementById('lnamedivalt');

var email = document.getElementById('email');
var emailspan = document.getElementById("emailspan");
var emaildivalt = document.getElementById('emaildivalt');

var password = document.getElementById("password");
var passwordspan = document.getElementById("passwordspan");
var passdivalt = document.getElementById("passdivalt");

var repassword = document.getElementById("repassword");
var repasswordspan = document.getElementById("repasspan");
var repassdivalt = document.getElementById("repassdivalt");

function validate(){
    if(fname.value == "" || !(/^[A-Za-z]+$/.test(fname.value))){
        fnamespan.style.display = "inline";
        fnamedivalt.style.display = "none";
        return false;
    }else{
        fnamespan.style.display = "none";
        fnamedivalt.style.display = "block";
    }
    if(lname.value == "" || !(/^[A-Za-z]+$/.test(lname.value))){
        lnamespan.style.display = "inline";
        lnamedivalt.style.display = "none";
        return false;
    }else{
        lnamespan.style.display = "none";
        lnamedivalt.style.display = "block";
    }
    if(email.value == "" || !(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email.value))){
        emailspan.style.display = "inline";
        emaildivalt.style.display = "none";
        return false;
    }else{
        emailspan.style.display = "none";
        emaildivalt.style.display = "block";
    }
    if(password.value == "" || password.value.length < 8){
        passwordspan.style.display = "inline";
        passdivalt.style.display = "none";
        return false;
    }else{
        passwordspan.style.display = "none";
        passdivalt.style.display = "block";
    }
    if(repassword.value == "" || repassword.value !== password.value){
        repasswordspan.style.display = "inline";
        repassdivalt.style.display = "none";
        return false;
    }else{
        repasswordspan.style.display = "none";
        repassdivalt.style.display = "block";
    }
    setCookie("fname", fname.value);
    setCookie("lname", lname.value);
    setCookie("email", email.value);
    setCookie("password", password.value);
    setCookie("checkuserforspacequiz", "exist");
    window.location.replace("../Pages/questionPage.html");
}
