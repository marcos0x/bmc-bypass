const CryptoJS = require('crypto-js');

class Crypto {
  constructor() {
    this.encryptionSeed = '78e1f9053b706712be7ba06a253d13ba';
  }

  encrypt(data) {
    return CryptoJS.AES.encrypt(data, this.encryptionSeed).toString();
  }

  decrypt(data) {
    return CryptoJS.AES.decrypt(data, this.encryptionSeed).toString(CryptoJS.enc.Utf8);
  }

  hash(data) {
    return CryptoJS.MD5(data);
  }
}

module.exports = new Crypto();
