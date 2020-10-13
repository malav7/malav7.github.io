function myfunction(){
    let search = document.getElementById("search").value;
    console.log(search);
}



function validate(){
     
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
	var letters = /^[A-Za-z ]+$/;

    var user = document.register.username.value;
    var lname = document.register.lastname.value;
    var sname = document.register.surname.value;
    var bday = document.register.birthday.value;
    var email = document.register.email.value;
    var pass = document.register.password.value;
    var cpass = document.register.cpassword.value;
    var cc = document.register.number.value;
    var phone = document.register.phone.value;
    var add = document.register.address.value;

    if(user == "")
    {
    alert("Name should not be blank");
    document.register.username.focus();
    return false;
    }
    if(!letters.test(user))
    {
      alert("Name should be in Alphabets");
      document.register.username.focus();
      return false;
    }

    if(lname == "")
    {
    alert("Last Name should not be blank");
    document.register.lastname.focus();
    return false;
    }
    if(!letters.test(lname))
    {
      alert("Last Name should be in Alphabets");
      document.register.lastname.focus();
      return false;
    }

    if(sname == "")
    {
    alert("SurName should not be blank");
    document.register.surname.focus();
    return false;
    }
    if(!letters.test(sname))
    {
      alert("SurName should be in Alphabets");
      document.register.surname.focus();
      return false;
    }

    if(bday == "")
    {
        alert("Birthday should be selected");
        document.register.birthday.focus();
        return false;
    }

    if(email == "")
    {
        alert("Email should not be blank");
        document.register.email.focus();
        return false;
    }
    else if(!emailRegex.test(email)){
        alert("Email format is not valid");
        document.register.email.focus();
        return false;
    }

    if(pass == "")
    {
        alert("Password should not be blank");
        document.register.password.focus();
        return false;
    }
    else if(pass.length <= 8){
        alert("Password must have at least 8 character");
        document.register.password.focus();
        return false;
    }

    if(cpass == "")
    {
        alert("Confirm Password should not be blank");
        document.register.cpassword.focus();
        return false;
    }
    else if(pass != cpass){
        alert("Both Password should be same");
        document.register.cpassword.focus();
        return false;
    }

    if(cc == "-")
    {
        alert("Country code should be selected");
        document.register.number.focus();
        return false;
    }

    if(isNaN(phone))
    {
        alert("Please Enter Numbers");
        document.register.phone.focus()
        return false;
    }
    if(phone.length != 10)
    {
        alert("Phone Number Should have 10 Numbers");
        document.register.phone.focus();
        return false;
    }

    if(document.register.gender[0].checked == false && document.register.gender[1].checked == false)
    {
        alert("Select Gender");
        document.register.gender[0].focus();
        return false;
    }

    if(add == "")
    {
        alert("Address should not be blank");
        document.register.address.focus();
        return false;
    }
    alert("Your Account is created");

    return true;
    
  }



