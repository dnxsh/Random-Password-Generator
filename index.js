const passbox=document.getElementById("Password");

const chars="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@$%&*";
function passcreate(){
    const len=document.getElementById("length").value;
    let Password="";
    if(len>=6 && len<=30){
        while(len>Password.length){
            Password+=chars[Math.floor(Math.random()*chars.length)];
        }
        passbox.value=Password;           
    }
    else{
        passbox.value="-- error: Minimun length is 6 --";
    }     
}
function passcopy(){
    passbox.select();
    navigator.clipboard.writeText(passbox.value);
}