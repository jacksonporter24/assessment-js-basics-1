console.log("Welcome to the password validator tool!")

var prompt = require("prompt");
prompt.start();
prompt.get(["password"], 
function(err, res){
    if (res.password.length < 10 && res.password.length > 20) {
        console.log("The password you entered is incorrect. Please try again.")

    } else {
        console.log("Successful!")
    }
   
});
