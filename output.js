//Thu Apr 09 2026 11:47:20 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function encrypt(_0x16e835, _0x565be1) {
  const _0x9a17a7 = CryptoJS.enc.Utf8.parse(_0x565be1 || "telecom_wap_2018");
  const _0x3e060a = CryptoJS.enc.Utf8.parse(_0x16e835);
  const _0x5dd390 = CryptoJS.AES.encrypt(_0x3e060a, _0x9a17a7, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return _0x5dd390.toString();
}
function decrypt(_0x5f1e5d, _0x4c5373) {
  const _0x3e70a3 = CryptoJS.enc.Utf8.parse(_0x4c5373 || "telecom_wap_2018");
  const _0x4d1ee1 = CryptoJS.AES.decrypt(_0x5f1e5d, _0x3e70a3, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(_0x4d1ee1).toString();
}