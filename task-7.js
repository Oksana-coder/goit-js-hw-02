const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if(login.length >= 4 && login.length <= 16) {
    return true;
  }
return false;
};

// console.log(isLoginValid('Ajax')); 
// console.log(isLoginValid('robotGoogles')); 
// console.log(isLoginValid('Zod')); 
// console.log(isLoginValid('jqueryisextremelyfast'));

const isLoginUnique = function(allLogins, login) {
  if(allLogins.includes(login)) {
    return false;
  }
return true;
};

// console.log(isLoginUnique(logins, 'Ajax')); 
// console.log(isLoginUnique(logins, 'robotGoogles')); 
// console.log(isLoginUnique(logins, 'Zod')); 
// console.log(isLoginUnique(logins, 'jqueryisextremelyfast'));


const addLogin = function(allLogins, login) {
  
  if(!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  
  if(!isLoginUnique(allLogins, login)) {
    return 'Такой логин уже используется!';
  }

  if(isLoginValid(login) && isLoginUnique(allLogins, login)) {
    logins.push(login);
    return 'Логин успешно добавлен!';
  }
}

console.log(addLogin(logins, 'Ajax')); 
console.log(addLogin(logins, 'robotGoogles')); 
console.log(addLogin(logins, 'Zod')); 
console.log(addLogin(logins, 'jqueryisextremelyfast'));
console.log(addLogin(logins, 'Oksana')); 