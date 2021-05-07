const inputs = Array.from(document.querySelectorAll('input'));
const form = document.querySelector('#testimonials');

inputs.pop();
inputs.push(document.querySelector('textarea'));

const regExp = {
  fname: [/^[a-zA-Z]+$/, "First Name must be non-empty with no whitespaces"],
  email: [/^([a-z\d\.-]{3,20})@([a-z\d-]{2,10})\.([a-z]{1,6})(\.[a-z]{2,8})?$/, "Invalid Email"],
  phone: [/^\d{10}$/, "Phone Number must be 10-digit and numeric"],
  feedback: [/^(?!\s*$).+/, "Please Provide Feedback"]
};

const createError = (errorMessage, input) => {
  let error = document.createElement("P");
  error.innerHTML = `${errorMessage}`;
  input.parentElement.appendChild(error);
};

const removeWarnings = inputs => {
  inputs.forEach(input => {
    if (input.parentElement.lastChild.nodeName === 'P') {
      input.parentElement.lastChild.remove();
    }
  })
}

const validateForm = (field, regex) => {
  if (regex[0].test(field.value)) {
    field.className = 'valid';
    if (field.parentElement.lastChild.nodeName === 'P') {
      field.parentElement.lastChild.remove();
    }
  } else {
    if(!field.classList.contains('invalid')) {
      field.className = 'invalid';
    }
  }
};

const submitFormValidations = inputs => {
  let flag = true;
  removeWarnings(inputs);
  inputs.forEach(input => {
    validateForm(input, regExp[input.getAttribute('name')]);
    if (input.classList.contains('invalid')) {
      flag = flag ? !flag : flag;
      const errorMessage = regExp[`${input.attributes.name.value}`][1];
      createError(errorMessage, input);
    }
  });
  if (flag) {
    alert('Form Validation Successful');
    form.reset();
  }
}

inputs.forEach(input => {
    input.addEventListener('keyup', e => {
        validateForm(e.target, regExp[e.target.attributes.name.value]);
    })
})

form.addEventListener('submit', e => {
    e.preventDefault();
    submitFormValidations(inputs);
})