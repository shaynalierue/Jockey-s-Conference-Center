function isFilled(fieldName) {
  return document.forms["contact-form"][fieldName].value !== "";
}

function isChecked(fieldName) {
  return document.forms["contact-form"][fieldName].checked;
}

function isPhoneValid(phoneNumber) {
  if (phoneNumber.substring(0, 3) !== "+62") {
    alert("Phone Number must be started with +62");
    return false;
  }

  let tempPhoneNumber = phoneNumber.replace("+62", "");
  if (isNaN(tempPhoneNumber)) {
    alert("Phone Number must only contains number");
    return false;
  }

  if (tempPhoneNumber.length <= 9 || tempPhoneNumber.length > 13) {
    alert("Phone number must contains 10-13 digits");
    return false;
  }

  return true;
}

function validateForm() {
  if (!isFilled("name")) {
    alert("Name must be filled out");
    return false;
  }

  if (!isFilled("email")) {
    alert("Email must be filled out");
    return false;
  }

  if (!isFilled("phone-number")) {
    alert("Phone number must be filled out");
    return false;
  }

  if (!isFilled("message")) {
    alert("Message must be filled out");
    return false;
  }

  if (!isChecked("phone-cb") && !isChecked("email-cb")) {
    alert("Preferred contact method must be filled out");
    return false;
  }

  if (!isPhoneValid(document.forms["contact-form"]["phone-number"].value)) {
    return false;
  }

  alert("Successfully submitted!")
  return false
}
