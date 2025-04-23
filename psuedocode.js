/*
JavaScript pseudocode for patient signup form validation
*/

// Initialize data display
GET current date
DISPLAY formatted date in “today” element

// Name of slider function
SET slider element to document element with ID “range”
SET output element to document element with ID “range-slider”
DISPLAY initial slider value in output element

FUNCTION update slider display:
SET output text to current slider value

//First name validation
FUNCTION validateFirstName():
	GET first name value
IF first name does not match the pattern for valid name (letters, apostrophes, and a dash only, 1-30 characters):
		DISPLAY "Please enter a valid first name" error message
		RETURN false
	ELSE:
		CLEAR error message
		RETURN true
// Middle initial validation
FUNCTION validateMiddle():
	GET middle initial value
	IF middle initial exists AND does not match pattern for a single letter:
		DISPLAY "Please enter a single letter" error message
		RETURN false
	ELSE:
		CLEAR error message
		RETURN true

//Last name validation
FUNCTION validateLastName():
	GET last name value
IF last name does not match pattern for valid name (letters, apostrophes, and a dash only, 1-30 characters):
		DISPLAY "Please enter a valid last name" error message
		RETURN false
	ELSE:
		CLEAR error message
		RETURN true

//Date of birth validation
FUNCTION validateDob():
	GET date of birth value
	CONVERT to date object
	CALCULATE maximum allowed date (120 years)

	IF date is in the future:
		DISPLAY "Future dates are not allowed." error message
		CLEAR input value
		RETURN false
	ELSE IF date is more than 120 years ago;
		DISPLAY “The date can NOT be over 120 years ago”
		CLEAR input value
	ELSE:
		CLEAR error message
		RETURN true

//Social Security Number validation
FUNCTION validateSsn():
	GET SSN value
	CREATE pattern for valid SSN (xxx-xx-xxx format)

	IF SSN does not match pattern:
		DISPLAY "Enter a valid Social Security Number" error message
		RETURN false
	ELSE:
		CLEAR error message
		RETURN true

//Address validation
FUNCTION validateAddress1():
	GET address value
	IF address length is less than 2 characters
DISPLAY "The address should contain a minimum of 2 characters" error message
		RETURN false
	ELSE:
		CLEAR error message
		RETURN true

//City validation
FUNCTION validateCity();
	GET city value and trim whitespace

	IF city is empty:
		DISPLAY “Select a city, cannot be blank” error message
		RETURN false
	ELSE:
		CLEAR error message message
		RETURN true

//ZIP code validation
FUNCTION validateZipcode():
	GET  ZIP code value
	REMOVE non-digit and non-dash characters

	IF ZIP is empty:
		DISPLAY “Enter a Zip Code” error
		RETURN false

	CREATE pattern for valid ZIP (5 digits or 5+4 format)
	IF ZIP does not match pattern:
		DISPLAY "Enter a valid Zip Code (12345 or 12345-6789)" error message
		RETURN false
	ELSE:
		CLEAR error message
		RETURN true

//Email validation
FUNCTION validateEmail():
	GET email value
	CREATE patter for valid email

	IF email is empty:
		DISPLAY "Email can't be blank" error message
		RETURN false
	IF email does not match pattern:
		DISPLAY "Enter a valid email address" error message
		RETURN false
	ELSE:
		CLEAR error message
		RETURN true

//Phone number formatting
FUNCTION formatPhoneNumber():
	GET phone input element
	REMOVE all non-digit characters from value

	IF length is 3 or less:
		SET value to digits only
	ELSE OF length is less than 6:
		FORMAT as xxx-xx
	ELSE:
		FORMAT as xxx-xxx-xxxx

//Phone number validation
FUNCTION validatePhoneNumber():
	GET phone number value

	IF phone number is empty:
		DISPLAY “Phone number can NOT be blank” error message
		RETURN false

	CREATE pattern for valid phone number (xxx-xxx-xxx format)
	IF phone number does not match pattern:
		DISPLAY "Enter a valid phone #" error message
		RETURN false
	ELSE:
		CLEAR error message
		RETURN true

//User ID validation
FUNCTION validateUsid():
	GET user ID value
	CONVERT to lowercase
	UPDATE input field with lowercase value

	IF user ID is empty:
		DISPLAY “The User ID can NOT be left blank, MUST be filled in” error message
		RETURN false
	IF first character is a number:
		DISPLAY “The User ID can NOT start with a number" error message
		RETURN false

	CREATE pattern for valid characters (letters, numbers, dash)
	IF user ID contains invalid characters:
DISPLAY "The User ID can ONLY have letters, numbers, and an underscore OR dash. NO special characters"; error message
		RETURN false
	ELSE IF the length is less than 5 characters:
		DISPLAY "The User ID must have a minimum of 5 characters" error message
		RETURN false
	ELSE IF the length is more than 30 characters:
		DISPLAY "The User ID can NOT have more than 30 characters" error message
		RETURN false
	ELSE:
		CLEAR error message
		RETURN true

//Password validation
FUNCTION validatepsword():
	GET password value
	GET user ID value
	INITIALIZE empty error messages array
	SET isValid flag to true

	IF password does not contain lowercase letter:
		ADD "Include at least one lowercase letter" error message to array
		SET isValid to false

	IF password does not contain uppercase letter:
		ADD Include at least one uppercase letter" error message to array
SET isValid to false

	IF password does not contain a number:
		ADD "Include at least one number" error message to array
SET isValid to false

	IF password does not contain a special character:
		"Include at least one special character" error message to array
SET isValid to false

	IF user ID exists and is contained in the password:
		ADD "User ID cannot be part of the password" error message to array
SET isValid to false

	UPDATE all message spans with error messages or empty strings
	RETURN isValid

//Confirm password validation
FUNCTION confirmpsword():
	GET password value
	GET confirm password value

	IF confirm password s=is empty:
		CLEAR error message
		RETURN false

	IF both passwords do not match:
		DISPLAY "Both passwords do NOT match" error message
		RETURN false
	ELSE:
		DISPLAY "Both passwords match!" error message
		RETURN true

//Review dorm data
FUNCTION reviewInput():
	GET form element
	GET all form elements
	INITIALIZE HTML output with table header

	FOR EACH form element:
		IF element is submit button or has no name:
			SKIP to next element

		IF element is checkbox is checked:
			ADD row with name and checkmark to output
		ELSE IF element is radio button and is checked:
			ADD row with name value to output
		ELSE IF element has a non-empty value:
			ADD row with name and value to output

// Alert box display
FUNCTION showAlert():
	GET alert box element
	GET close alert button element

	SET alert box alert display style to “block” to make it visible

	FUNCTION closeAlert():
		SET alert box display style to “none” to hide it

		SET close alert button onclick handler to closeAlert function

// Validate all form fields
FUNCTION validateEverything():
	SET valid dlag to true

	IF NOT validateFirstName():
		SET valid to false
	IF NOT validateMiddle():
		SET valid to false
	IF NOT validateLastName():
		SET valid to false
	IF NOT validateDob():
		SET valid to false
	IF NOT Ssn():
		SET valid to false
	IF NOT validateAddress1():
		SET valid to false
	IF NOT validateCity():
		SET valid to false
	IF NOT validateZipcode():
		SET valid to false
	IF NOT validatePhoneNumber():
		SET valid to false
	IF NOT validateEmail():
		Set valid to false
	IF NOT validateUsid():
		set valid to false
	IF NOT validatepsword():
		SET valid to false
	IF NOT confirmpsword():
		SET valid to false

	IF valid:
		ENABLE submit button
	ELSE:
		CALL showAlert function

	COMPLETE HTML table
	DISPLAY output in “showInput” element

