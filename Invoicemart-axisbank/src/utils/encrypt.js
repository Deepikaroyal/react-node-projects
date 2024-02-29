import { JWE } from "node-jose";
import CryptoJS from "crypto-js";

/*Encrypt AES key using pubserverkey*/
export const EncryptAESKey = async (DEK, skey) => {
  let EncryptDEK = await JWE.createEncrypt({ format: "compact" }, skey)
    .update(DEK)
    .final();
  return EncryptDEK;
};

export const getRandomChar = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.@#$*-_+!";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

/*AES encrytion using crypto js*/
export const EncryptPayload = (data, key, iv) => {
  let encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  });
  return encrypted;
};

/*AES decrytion using crypto js*/
export const DecryptPayload = (data, key, iv) => {
  let decrypted = CryptoJS.AES.decrypt(data, key, {
    iv: iv,
    padding: CryptoJS.pad.ZeroPadding,
  });
  // console.log("decrypted: " + decrypted.toString(CryptoJS.enc.Utf8));
  return decrypted.toString(CryptoJS.enc.Utf8);
};
