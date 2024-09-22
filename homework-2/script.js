const passwords = [];

passwords.push("FirstPassword", "SecondPassword", "ThirdPs");

passwords.forEach((password, index) => {
    const updatedPassword = password.toLowerCase();
    passwords[index] = updatedPassword;
    console.log("Each Password:", updatedPassword);
    
    if (updatedPassword.length >= 8) {
        console.log("Strong password");
    } else {
        console.log("Weak password");
    }

    let letterCount = 0;
    for (let i = 0; i < updatedPassword.length; i++) {
        letterCount++;
    }
    console.log("Letter count:", letterCount);
});

passwords.shift();
console.log("Updated array after shift():", passwords);

passwords.unshift("NewPassword".toLowerCase());
console.log("Updated array after unshift():", passwords);

