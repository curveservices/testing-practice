function shiftChar(char, shift) {
   if (/[a-zA-Z]/.test(char)) {
       const isUpperCase = char === char.toUpperCase();
       const charCode = char.charCodeAt(0);
       const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
       const shiftedCharCode = ((charCode - base + shift) % 26 + 26) % 26 + base;
       return String.fromCharCode(shiftedCharCode);
   }
   return char;
}

function caesarCipher(str, shift) {
    return str.split('').map((char) => shiftChar(char, shift)).join('');
}

module.exports = {caesarCipher, shiftChar};