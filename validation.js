
export const MAX_PHONE_NUMBER_LENGTH = 12;
export const MIN_PHONE_NUMBER_LENGTH = 7;

export const validatePhoneNumber = (phone: string, countryCode: string) => {
    return
    try {
        const phoneNumber = parsePhoneNumberFromString(phone, countryCode);

        if (!phoneNumber) {
            return { valid: false, reason: 'Invalid format' };
        }

        if (!phoneNumber.isValid()) {
            return { valid: false, reason: 'Invalid number for country' };
        }

        return { valid: true, formatted: phoneNumber.formatInternational() };
    } catch (error) {
        return { valid: false, reason: 'Error parsing number' };
    }
};

const emojiRegex =
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{1FC00}-\u{1FFFD}\u{200D}\u{FE0F}]/u;

// const specialCharRegex = /[^a-zA-Z0-9 \u0600-\u06FF]{2,}/;
export const formatInput = (val: string) => {
    return val
        .trimStart()
        .replace(/\s{3,}/g, '  ')
        .slice(0, 45);
};

export const IsValidEmail = (email: string) => {
    const emailRegex =
        /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the email matches the regex and does not contain emojis
    return emailRegex.test(email) && !emojiRegex.test(email);
};

export const isString = (val: string) => {
    if (val.includes('.') && val.length > 1 && val[val.length - 1] !== ' ') {
        return true;
    }
    if (val.length === 1 && val === ' ') {
        return false;
    }
    if (
        val[val.length - 1] === ' ' &&
        val[val.length - 1] !== val[val.length - 2] &&
        val[val.length - 2] !== ' '
    ) {
        return true;
    }
    if (
        val[val.length - 1]?.trim()?.toLowerCase() !==
        val[val.length - 1]?.trim()?.toUpperCase() ||
        val === ''
    ) {
        return true;
    }
    return false;
};

export const isFloat = (val: any) => {
    console.log(val);
    if (val?.includes('-') || val?.includes('+')) {
        return false;
    }
    if (val[val.length - 1] === ' ' || val === '.' || val === '0') {
        return false;
    }
    if (val.includes('.')) {
        val = val.replace('.', '');
        if ((!val.includes('.') && !isNaN(val?.trim())) || val === '') {
            return true;
        }
        return false;
    }
    if (!isNaN(val?.trim()) || val === '') {
        return true;
    }

    return false;
};

export const isNumber = (val: any) => {
    if (val[val.length - 1] === ' ' || val === '0') {
        return false;
    }
    if (val.includes('.')) {
        return false;
    }
    if (!isNaN(val?.trim()) || val === '') {
        return true;
    }
    return false;
};

export const isAlphanumeric = (val: any) => {
    if (val === '') {
        return true;
    }
    if (val.trim() === '' || /[^a-zA-Z0-9.\s]/.test(val)) {
        return false; // Reject if the value is empty, contains special characters, or only consists of whitespace
    }

    if (val.includes('  ') || val.includes('..')) {
        return false; // Reject if there are consecutive spaces or decimals
    }

    if (val?.includes('-') || val?.includes('+')) {
        return false;
    }
    if (
        val[val.length - 1] === ' ' &&
        val[val.length - 1] !== val[val.length - 2] &&
        val[val.length - 2] !== ' '
    ) {
        return true;
    }
    if (val.includes('.')) {
        val = val.replace('.', '');
        if (!val.includes('.') || val === '') {
            return true;
        }
        return false;
    }
    if (!isNaN(val?.trim()) || val === '') {
        return true;
    }
    if (val[val.length - 1] === ' ' || val === '0') {
        return false;
    }
    return true;
};

export const isValidInput = (value: string) => {
    if (value === '') {
        return true;
    }
    if (value.trim() === '') {
        return false; // Reject if the value is empty or only consists of whitespace
    }

    if (value.includes('  ') || value.includes('..')) {
        return false; // Reject if there are consecutive spaces or decimals
    }

    return true; // Accept the input if it meets all the conditions
};

export const validMobileNo = (number: string) => {
    let phone_no = /^[1-9]{1}[0-9]{9}$/;
    if (number) {
        if (phone_no.test(number)) {
            return false;
        }
        return true;
    }
};

export const balanceFormat = (number: string) => {
    return parseFloat(number)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const isValidPassword = (password: string) => {
    if (!password.length) {
        return true;
    }
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(
        password,
    );
};

export const isValidComparedPassword = (
    newPassword: string,
    reEnterPassword: string,
) => {
    if (reEnterPassword.length) {
        if (newPassword != reEnterPassword) {
            return true;
        }
        return false;
    }
    return false;
};

export const isValidname = (text: string) => {
    if (text.length <= 2) {
        return false;
    }
    return true;
};

export const isFieldEmpty = (text: string) => {
    if (text == '') {
        return true;
    }
    return false;
};

export const isValidPhoneNumber = (phoneNo: string) => {
    const reg = /^[0-9]+$/;
    if (reg.test(phoneNo) != true) {
        return true;
    }
    if (phoneNo && phoneNo.length > 6 && phoneNo.length < 14) {
        return false;
    }
    return true;
};

export const isValidAlphaNumeric = (text: any) => {
    const reg = /[^A-Za-z0-9]/g;
    if (reg.test(text) != true) {
        return true;
    }
    return false;
};

const numberToWords = require('number-to-words'); // optional package

export const formatForSpeech = (text: string) => {
    return (
        text
            // Remove markdown symbols
            .replace(/\*\*/g, '')
            .replace(/[_`]/g, ' ')
            // Remove dashes/bullets
            .replace(/[-•*]\s*/g, '')
            // Replace colon with "is"
            .replace(/\s*:\s*/g, ' is ')
            // Fix camelCase or snake_case
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/_/g, ' ')
            // Remove JSON-like keys we don’t want
            .replace(/"status":\s*\d+/g, '')
            .replace(/"modules_to_update":\s*\[\]/g, '')
            .replace(/"tools_used"/g, '')
            .replace(/"is_tool_called":\s*(true|false)/g, '')
            // Replace ranges like 18-25 → "18 to 25"
            .replace(/(\d+)-(\d+)/g, '$1 to $2')
            // Replace newlines with pauses
            .replace(/\n+/g, '. ')
            // Clean multiple spaces
            .replace(/\s\s+/g, ' ')
            .trim()
    );
};

export const formateText = (
    text: string | null | undefined,
    limit?: number,
): string => {
    if (!text || text.trim().length === 0) {
        return '-';
    }
    if (text.length > limit && limit) {
        return text.substring(0, limit) + '..';
    }
    return text;
};






