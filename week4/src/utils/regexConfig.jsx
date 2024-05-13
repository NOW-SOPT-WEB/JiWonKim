export const RegExpConfig = {
    pwRegExp: /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
    phoneRegExp: /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/,
}

export const formatPhoneNumber = (input) => {
    const num = ('' + input).replace(/\D/g, '');
    const match = num.match(/^(\d{3})(\d{3,4})(\d{4})$/);
    if (match) {
      return [match[1], match[2], match[3]].join('-');
    }
    return input;
}