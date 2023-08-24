function validateform()
{
    var name=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(name="")
    {
        alert("pls fill the username");
    }
    else if(password.length < 6){
        alert("pls fill password");
    }
    else{
        window.open("file:///C:/Users/M%20TECH/Desktop/HTML%20Demos/boutique%20new%20gender%20shyam.html")
    }
}
// 
 /* */
