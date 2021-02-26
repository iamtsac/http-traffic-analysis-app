function validate(email, password)
{
    console.log(email);
    console.log(password);
    var emailFormat = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    var passFormat = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(emailFormat.test(email) && passFormat.test(password))
    {
        alert("Valid email address!");
        return true;
    }
    else
    {
        alert("Invalid email address format or password!");
        return false;
    }
}