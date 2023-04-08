//npm install generate-password
var generatePassword = require("generate-password");
const generateRandomPassword = () => {
  return generatePassword.generate({
    length: 12,
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: true,
  });
};
console.log("your random password is ", generateRandomPassword());