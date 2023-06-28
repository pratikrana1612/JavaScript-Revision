const REQUIRED = "required";
const MIN_LENGTH = "minLength";

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}
const getUserInput = function (inputId) {
  return document.getElementById(inputId).value;
};

function greet(user) {
  console.log(user.username + " is ok");
}
function createUser(user, password) {
  if (!validate(user, REQUIRED) || !validate(password, MIN_LENGTH, 5)) {
    throw new Error(
      "Invalid username or password (password must be at least 5 characters"
    );
  }
  return {
    username: user,
    password: password,
  };
}

const signUpHandler = function (event) {
  event.preventDefault();
  const username = getUserInput("username");
  const password = getUserInput("password");
  try {
    const userName = createUser(username, password);
    console.log(userName);
    greet(username);
  } catch (err) {
    alert(err.message);
  }
};

function connectForm(formId, formsubmitHandler) {
  const form = document.getElementById(formId);
  form.addEventListener("submit", formsubmitHandler);
}

connectForm("user-input", signUpHandler);
