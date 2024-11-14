// Import the library
const PhoneNumber = require('libphonenumber-js');

// Function to validate a phone number with respect to a specific country
function validatePhoneNumber(phoneNumber, countryCode) {
    try {
        // Parse the phone number
        const parsedPhoneNumber = PhoneNumber.parse(phoneNumber, countryCode);

        // Check if the parsed phone number is valid
        if (PhoneNumber.parsePhoneNumberFromString(phoneNumber, countryCode)) {
            // The phone number is valid for the specified country
            return true;
        } else {
            // The phone number is not valid for the specified country
            return false;
        }
    } catch (error) {
        // An error occurred during parsing (e.g., invalid format)
        return false;
    }
}
// country code: +91

// number: 9656685085

// country code: +971

// number: 965668508
// Example usage:
let phoneNumber
let countryCode

phoneNumber = '+9188675';
countryCode = 'IN';

if (validatePhoneNumber(phoneNumber, countryCode)) {
    console.log(`${phoneNumber} Valid phone number`);
} else {
    console.log(`${phoneNumber} Invalid phone number`);
    console.log('Invalid phone number');
}
phoneNumber = '+918867544254';
countryCode = 'IN';

if (validatePhoneNumber(phoneNumber, countryCode)) {
    console.log(`${phoneNumber} Valid phone number`);
} else {
    console.log(`${phoneNumber} Invalid phone number`);
    console.log('Invalid phone number');
}

phoneNumber = '+1 650-555-1234'; // Example US phone number
countryCode = 'US'; // Country code for the United States

if (validatePhoneNumber(phoneNumber, countryCode)) {
    console.log('Valid phone number');
} else {
    console.log('Invalid phone number');
}

phoneNumber = '+668867544254'; // Example US phone number
countryCode = 'IN'; // Country code for the United States

if (validatePhoneNumber(phoneNumber, countryCode)) {
    console.log('Valid phone number');
} else {
    console.log('Invalid phone number');
}

phoneNumber = '+918867544254'; // Example US phone number
countryCode = 'IN'; // Country code for the United States

if (validatePhoneNumber(phoneNumber, countryCode)) {
    console.log(`${phoneNumber} Valid phone number`);
} else {
    console.log(`${phoneNumber} Invalid phone number`);
    console.log('Invalid phone number');
}
