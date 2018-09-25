
(function() {
    const cx =' 000229394527400558897:rt1m190qxei ' ;
    //const cx ='017643444788069204610:4gvhea_mvga';
    const gcse = document.createElement('script');
    gcse.type = 'text/javascript'; gcse.async = true;
    gcse.src = `${document.location.protocol === 'https' ? 'https:' : 'http:'}//www.google.com/cse/cse.js?cx=${cx}`;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();
function loginValidation(){

    var email=window.localStorage.getItem('email');
    var passw=window.localStorage.getItem('password');
    var emailV=document.getElementById("inputEmail").value;
    var passwordV=document.getElementById("inputPassword").value;
    if((emailV==="")||(passwordV===""))
    {
        alert("Please Provide Email-id and Password");
    }else if((emailV==email)&&(passwordV==passw)){
        //window.location.replace("afterLogin.html");
        window.open("afterLogin.html");

        //var emailV=document.getElementById("login").reset();
    }
    else{
        alert("Wrong Email ID or Password");
        //var emailV=document.getElementById("login").reset();
    }
}
function greating() {

}
function signUp()
{
    var fname=frm.fname.value; //fname is FirstName
    var lname=frm.lname.value; //lname is LastName
    var email1=frm.email1.value; //email1 is Email Address 1
    var email2=frm.email2.value; // email2 is Email Address 2
    var pnumb=frm.pnumb.value; // pnumb is Phone Number
    var city=frm.city.value; // city is City
    var state=frm.state.value; // state is State
    var postal=frm.postal.value; // postal is Zip Postal code
    var pass=frm.pass.value; // pass is Password
    var cpass=frm.cpass.value; // cpass is Confirm Password
    var chkCharacter = "^[a-zA-Z\\s]*$";
    var chkEmail="^[a-zA-Z][\\w\\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\\w\\.-]*[a-zA-Z0-9]\\.[a-zA-Z][a-zA-Z\\.]*[a-zA-Z]$";
    var chkNumber = "[0-9]+";
    var pnumlen=pnumb.length;
    var zipclen=postal.length;
    var passlen=pass.length;

    if((fname==="")||(lname==="")||(email1==="")||(email2==="")||(pnumb==="")||(city==="")||(state==="")||(postal==="")||(pass==="")||(cpass===""))
    {
        alert("Please Fill All Details");
    }
    else if(!fname.match(chkCharacter))
    {
        alert("First Name must be Characters only");
        frm.fname.value="";
    }
    else if(!lname.match(chkCharacter))
    {
        alert("Last Name must be Characters only");
        frm.lname.value="";
    }
    else if(!email1.match(chkEmail))
    {
        alert("Invaild Email Address");
        frm.email1.value="";
        frm.email2.value="";
    }
    else if(!email1.match(email2))
    {
        alert("Email and Confirm Email doesnot match");
        frm.email1.value="";
        frm.email2.value="";
    }
    else if(passlen<7)
    {
        alert("Password must be atleast 8 character");
        frm.pass.value="";
        frm.cpass.value="";
    }
    else if(!cpass.match(pass))
    {
        alert("Password and Confirm Password doesnot match");
        frm.pass.value="";
        frm.cpass.value="";
    }
    else if(!pnumb.match(chkNumber)||pnumlen!=10)
    {
        alert("Invaild Mobile Number");
        frm.pnumb.value="";
    }
    else if(!city.match(chkCharacter))
    {
        alert("Invalid City Name");
        frm.city.value="";
    }
    else if(!state.match(chkCharacter))
    {
        alert("Invalid State Name");
        frm.state.value="";
    }
    else if(!postal.match(chkNumber)||zipclen!=6)
    {
        alert("Invaild Zip Code");
        frm.postal.value="";
    }
    else
    {
        window.localStorage.setItem('firstName',frm.fname.value);
        window.localStorage.setItem('lastName',frm.lname.value);
        window.localStorage.setItem('email',frm.email1.value);
        window.localStorage.setItem('password',frm.cpass.value);
        window.localStorage.setItem('phoneNumber',frm.pnumb.value);
        window.localStorage.setItem('city',frm.city.value);
        window.localStorage.setItem('state',frm.state.value);
        window.localStorage.setItem('postal',frm.postal.value);
        alert("Your Response has been recorded");
        frm.fname.value="";
        frm.lname.value="";
        frm.pnumb.value="";
        frm.email1.value="";
        frm.email2.value="";
        frm.city.value="";
        frm.state.value="";
        frm.postal.value="";
        frm.pass.value="";
        frm.cpass.value="";
    }
}
function emptyDetails()
{
    frm.fname.value="";
    frm.lname.value="";
    frm.pnumb.value="";
    frm.email1.value="";
    frm.email2.value="";
    frm.city.value="";
    frm.state.value="";
    frm.postal.value="";
    frm.pass.value="";
    frm.cpass.value="";
}
