// 1 - ask user to set a username and password
// 2 - login function - ensure user can only login if their username and password are correct

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

const matt = new User("matthew","password123");

let login = (user) => {
  const password = prompt(`Hi ${user.username}, please enter your password:`);
  if (password == user.password) {
    console.log("password OK");
    return `Welcome ${user.username}!`
  } else {
    console.log("password FAIL");
    return `Your password is incorrect.`
  }
}

login(matt);
