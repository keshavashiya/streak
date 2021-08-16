const message = {
	EMPTY_FIELD: "Field can't be empty.",
	INVALID_FIELD: 'Field contains only characters.',
	INVALID_NUMBER_FIELD: 'Field contains only numbers.',
	INVALID_ALPHANUMERIC: 'Field contains only alpha numeric.',
	INVALID_BRANCHCODE: 'Field contains only alpha numeric with space and hyphen.',
	INVALIDATE_EMAIL: 'Email address is invalid!',
	EMPTY_EMAIL: 'Please enter your email address.',
	EMPTY_BRANCHCODE: 'Please enter branch code',
	EMPTY_PASSWORD: 'Please enter your password.',
	PASSWORD_MISMATCH: 'Password and Confirm password are not same.',
	EMPTY_OTP: 'Please enter otp code.',
	INVALID_MOBILE: 'Mobile Number is invalid',
	INVALID_PASSWORD:
		'Password should contain at least 8 character and one lowercase, upercase, number and special character.',
};

export const validateEmail = value => {
	// eslint-disable-next-line no-useless-escape
	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (reg.test(value)) {
		return null;
	} else {
		return value ? message.INVALIDATE_EMAIL : message.EMPTY_EMAIL;
	}
};

export const alphaNumeric = value => {
	if (value) {
		let reg = /^[a-z0-9]+$/i;
		if (reg.test(value)) {
			return null;
		} else {
			return value ? message.INVALID_ALPHANUMERIC : message.EMPTY_FIELD;
		}
	} else {
		return message.EMPTY_FIELD;
	}
};

export const validBranchCode = value => {
	if (value) {
		let reg = /^[-a-z0-9 ]+$/i;
		if (reg.test(value)) {
			return null;
		} else {
			return value ? message.INVALID_BRANCHCODE : message.EMPTY_BRANCHCODE;
		}
	} else {
		return message.EMPTY_BRANCHCODE;
	}
};

// export const numericValidation = value => {
// 	if (value) {
// 		let reg = /^[0-9]+$/i;
// 		if (reg.test(value)) {
// 			return null;
// 		} else {
// 			return value ? message.INVALID_NUMBER_FIELD : message.EMPTY_FIELD;
// 		}
// 	} else {
// 		return message.EMPTY_FIELD;
// 	}
// };

export const validateField = value => {
	return value ? null : message.EMPTY_FIELD;
};

export const validateNameField = value => {
	let regX = /^[a-zA-Z]+$/g;
	if (value === undefined) {
		return message.EMPTY_FIELD;
	} else if (regX.test(value)) {
		return null;
	} else {
		return value ? message.INVALID_FIELD : message.EMPTY_FIELD;
	}
};

// export const validateLastNameField = value => {
// 	let regX = /^[a-zA-Z]+$/g;
// 	if(value === undefined){
// 		return message.EMPTY_FIELD;
// 	}else if(regX.test(value) ){
//      return null;
// 	}else{
// 		return value ? message.INVALID_LASTNAME : message.EMPTY_FIELD;
// 	}
// };

export const validateMobile = (value, length) => {
	// return value ? null : message.EMPTY_FIELD;
	if (!value) {
		return message.EMPTY_FIELD;
	} else if (value && length ? value.length < length : value.length < 10) {
		return message.INVALID_MOBILE;
	} else {
		return null;
	}
};

export const validatePassword = value => {
	return value ? null : message.EMPTY_PASSWORD;
};

export const comparePassword = (password, confirm) => {
	// return value ? '' : message.EMPTY_PASSWORD;
	if (password === confirm) {
		return null;
	} else {
		return message.PASSWORD_MISMATCH;
	}
};

export const validateOtp = value => {
	// return value && value.length < 6 ? message.EMPTY_OTP : null;
	if (!value) {
		return message.EMPTY_OTP;
	} else if (value && value.length < 6) {
		return message.EMPTY_OTP;
	} else {
		return null;
	}
};

export const passwordFormatValidation = password => {
	let validatePsw = {
		validlowerCase: false,
		validupperCase: false,
		validNumbers: false,
		validLength: false,
		specialChar: false,
	};

	// Validate lowercase letters

	let lowerCaseLetters = /[a-z]/g;

	lowerCaseLetters.test(password) ? (validatePsw.validlowerCase = true) : (validatePsw.validlowerCase = false);

	// Validate capital letters

	let upperCaseLetters = /[A-Z]/g;

	if (upperCaseLetters.test(password)) {
		validatePsw.validupperCase = true;
	}

	// Validate numbers

	let numbers = /[0-9]/g;

	if (numbers.test(password)) {
		validatePsw.validNumbers = true;
	}

	// Validate length

	if (password && password.length >= 8) {
		validatePsw.validLength = true;
	}

	// Validate special character

	let specialChar = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

	if (specialChar.test(password)) {
		validatePsw.specialChar = true;
	}

	if (
		validatePsw.validlowerCase &&
		validatePsw.validupperCase &&
		validatePsw.validNumbers &&
		validatePsw.validLength &&
		validatePsw.specialChar
	) {
		return null;
	} else {
		return message.INVALID_PASSWORD;
	}

	// return validatePsw;
};
