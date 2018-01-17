import { ValidatorFn } from '@angular/forms';

function getError(password) {
  if (!password.match(/[0-9]+/g)) {
    return 'Password must contain digits';
  }
  if (!password.match(/[a-z]+/g)) {
    return 'Password must contain lowercase letters';
  }
  if (!password.match(/[A-Z]+/g)) {
    return 'Password must contain uppercase letters';
  }
  if (password.match(/^[a-zA-Z0-9]+$/g)) {
    return 'Password must contain special characters';
  }
}

export const passwordValidator: ValidatorFn = (control) => {
  const error = getError(control.value);

  return error ? { password: error } : null;
};
