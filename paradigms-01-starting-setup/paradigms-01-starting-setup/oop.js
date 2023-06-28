class Validator {
  static REQUIRED = "REQUIRED";
  static MIN_LENGTH = "MIN_LENGTH ";
  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }

  greet() {
    console.log(this.userName);
  }
}

class UserInputForm {
  constructor() {
    this.form = document.getElementById("user-input");
    this.userNameInput = document.getElementById("username");
    this.passwordInput = document.getElementById("password");

    this.form.addEventListener("submit", this.signupHandler.bind(this));
  }

  signupHandler(event) {
    event.preventDefault();
    const userName = this.userNameInput.value;
    const password = this.passwordInput.value;
    if (
      !Validator.validate(userName, Validator.REQUIRED) ||
      !Validator.validate(password, Validator.MIN_LENGTH, 5)
    ) {
      alert(
        "Invalid username or password (password must be at least 5 characters)"
      );
      return;
    }
    const user = new User(userName, password);
    console.log(user);
    user.greet();
  }
}
new UserInputForm();
