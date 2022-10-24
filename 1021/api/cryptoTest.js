const crypto = require("crypto-js");

console.log(crypto.SHA256("jsdflkj").toString());

console.log(crypto.SHA256("1").toString());

console.log(crypto.MD5("asuehrblkuesbvr").toString());

console.log(crypto.SHA1("dasdsa").toString());

console.log(crypto.SHA512("1").toString());

console.log(crypto.RIPEMD160("jsdflkjsadsad").toString());

const tempAES = crypto.AES.encrypt("dsakdsod", "key").toString();

console.log(tempAES);

console.log(crypto.AES.decrypt(tempAES, "key").toString(crypto.enc.Utf8));
