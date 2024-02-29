function isValidEmail(email) {
  var pattern = /(([a-zA-Z0-9\-?\.?]+)@(([a-zA-Z0-9\-_]+\.)+)([a-z]{2,3}))+$/;
  return new RegExp(pattern).test(email);
}

function isValidPhone(phone, verifyCountryCode) {
  var reExp = verifyCountryCode ? /^\+\d{6,16}$/ : /^\d{6,16}$/;
  return reExp.test(phone);
}

function isValidPassword(password) {
  var pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,15}$/;
  return new RegExp(pattern).test(password);
}

module.exports = {
  isValidEmail,
  isValidPhone,
  isValidPassword,
};
