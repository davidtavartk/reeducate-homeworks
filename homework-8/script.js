const usernameRegex = /^[a-zA-Z0-9]{3,10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

const username = "user123";
if (!usernameRegex.test(username)) {
  console.log('Username must be 3-10 characters.');
} else {
  console.log('Valid username');
}

const email = "example@mail.com";
if (emailRegex.test(email)) {
    console.log('Valid email');
} else {
    console.log('Email format is incorrect.');
}

const password = "pass123";
if (passwordRegex.test(password)) {
    console.log('Valid password');
} else {
    console.log('Password must be at least 6 characters long and contain at least one letter and one number.');
}