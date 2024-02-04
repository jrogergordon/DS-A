function base64Decode(encodedWord) {
    try {
        let decodedString;

        if (typeof window !== 'undefined' && typeof window.atob === 'function') {
            // Browser environment
            decodedString = atob(encodedWord);
        } else if (typeof Buffer === 'function') {
            // Node.js environment
            decodedString = Buffer.from(encodedWord, 'base64').toString('utf-8');
        } else {
            throw new Error("Base64 decoding is not supported in this environment.");
        }

        return decodedString;
    } catch (error) {
        return `Error decoding: ${error.message}`;
    }
}

// Example usage:
let encodedWord = "SSdt";
let decodedWord = base64Decode(encodedWord);
console.log(decodedWord);