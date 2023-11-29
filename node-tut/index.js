const validator = require("validator");
const validateEmail = email => {
	return validator.isEmail(email);
};
console.log(
	"is mango@gmail.com a valid email?:",
	validateEmail("mango@gmail.com")
);
console.log("is mangozdog a valid email?;",
	validateEmail("mangozdog"));