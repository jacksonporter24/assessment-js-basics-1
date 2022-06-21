console.log("Welcome to the password validator tool!")

var prompt = require("prompt");
prompt.start();
prompt.get(["password"], 
function(err, res){
    // This will require the password be between 10 and 20 characters
    if (res.password.length < 10 || res.password.length > 20) {
        console.log("Password needs to be between 10 and 20 characters.")
        return
        // This will require the user to use a digit in their password. 
    } if (!res.password.match(/.*[0-9].*/)) {
        console.log("You need a number.")
        return

    } if (!res.password.match(/.*[~`!@#$%^&*()--+={}[\]|\:;"'<>,.?\/_].*/)) {
        console.log("You need a special character.")
        return

    } if (!res.password.match(/.*[a-zA-Z].*/)) {
        console.log("You need a letter.")
        return

    } else { 
        console.log("Successful!")
    }
});
