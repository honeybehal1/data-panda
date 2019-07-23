import { isEmpty } from "./general-imports";
const VALIDATION_TYPES = {
    phone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}
const validationMessage = {
    phone: 'Invalid phone number',
    email: "Invalid Email Id"
}
export function isValidInput(value, type = '', errorMessage = "") {
    errorMessage = isEmpty(errorMessage) ? "Invalid Email Id" : validationMessage[type];
    const validation = { isValid: false, errorMessage };
    var re = isEmpty(type) ? VALIDATION_TYPES.email : VALIDATION_TYPES[type];
    if (re.test(value)) {
        validation.isValid = true;
        validation.errorMessage = errorMessage;
    }
    return validation;
}

