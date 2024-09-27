//Fri Sep 27 2024 02:54:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x428b09 = _0x351651("电信营业厅"),
  _0x318f46 = require("got"),
  _0x1608e0 = require("fs"),
  _0x3b5d9e = require("crypto-js"),
  {
    CookieJar: _0x3b4983
  } = require("tough-cookie"),
  _0x483b4a = "chinaTelecom",
  _0x39be18 = ["\n", "&", "@"],
  _0x1c90aa = [_0x483b4a + "Account"],
  _0x37bf27 = 8000,
  _0x4868c8 = 3;
let _0x115d10 = null;
const _0x2b01c5 = process.env[_0x483b4a + "Proxy"] || process.env.LEAF_DEBUG_PROXY || "";
const _0x5cfce3 = 4.03,
  _0x2b4dc0 = "chinaTelecom",
  _0x494363 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
let _0x380d2f = {};
const _0x3bd881 = "./chinaTelecom_cache.json",
  _0x465dcd = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
  _0x291ec9 = "34d7cb0bcdf07523",
  _0x5e8435 = "1234567`90koiuyhgtfrdewsaqaqsqde",
  _0x2029bb = "\0\0\0\0\0\0\0\0",
  _0x3820a0 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB",
  _0x214aa7 = "-----BEGIN PUBLIC KEY-----\n" + _0x3820a0 + "\n-----END PUBLIC KEY-----",
  _0x2c05b3 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB",
  _0x31f96d = "-----BEGIN PUBLIC KEY-----\n" + _0x2c05b3 + "\n-----END PUBLIC KEY-----",
  _0x3135f6 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIPOHtjs6p4sTlpFvrx+ESsYkEvyT4JB/dcEbU6C8+yclpcmWEvwZFymqlKQq89laSH4IxUsPJHKIOiYAMzNibhED1swzecH5XLKEAJclopJqoO95o8W63Euq6K+AKMzyZt1SEqtZ0mXsN8UPnuN/5aoB3kbPLYpfEwBbhto6yrwIDAQAB",
  _0x1a6a6c = "-----BEGIN PUBLIC KEY-----\n" + _0x3135f6 + "\n-----END PUBLIC KEY-----",
  _0x28ca0c = require("node-rsa");
let _0x29ede4 = new _0x28ca0c(_0x214aa7);
const _0x28861d = {
  encryptionScheme: "pkcs1"
};
_0x29ede4.setOptions(_0x28861d);
let _0x57081e = new _0x28ca0c(_0x31f96d);
const _0x132fde = {
  encryptionScheme: "pkcs1"
};
_0x57081e.setOptions(_0x132fde);
let _0xfb1ec7 = new _0x28ca0c(_0x1a6a6c);
const _0x40956e = {
  encryptionScheme: "pkcs1"
};
_0xfb1ec7.setOptions(_0x40956e);
function _0x358e19(_0x209401, _0x2ee7c3, _0x2ece82, _0x4e32f3, _0x51b375, _0x1d4e41) {
  return _0x3b5d9e[_0x209401].encrypt(_0x3b5d9e.enc.Utf8.parse(_0x4e32f3), _0x3b5d9e.enc.Utf8.parse(_0x51b375), {
    mode: _0x3b5d9e.mode[_0x2ee7c3],
    padding: _0x3b5d9e.pad[_0x2ece82],
    iv: _0x3b5d9e.enc.Utf8.parse(_0x1d4e41)
  }).ciphertext.toString(_0x3b5d9e.enc.Hex);
}
function _0xcda21d(_0x3a5d69, _0x482458, _0x4e2eff, _0x4dc402, _0x5cf3c8, _0x16eaad) {
  return _0x3b5d9e[_0x3a5d69].decrypt({
    ciphertext: _0x3b5d9e.enc.Hex.parse(_0x4dc402)
  }, _0x3b5d9e.enc.Utf8.parse(_0x5cf3c8), {
    mode: _0x3b5d9e.mode[_0x482458],
    padding: _0x3b5d9e.pad[_0x4e2eff],
    iv: _0x3b5d9e.enc.Utf8.parse(_0x16eaad)
  }).toString(_0x3b5d9e.enc.Utf8);
}
function _0xf8b294() {
  try {
    _0x1608e0.writeFileSync(_0x3bd881, JSON.stringify(_0x380d2f, null, 4), "utf-8");
  } catch (_0x143af6) {
    console.log("保存缓存出错");
  }
}
function _0x413402() {
  try {
    _0x380d2f = JSON.parse(_0x1608e0.readFileSync(_0x3bd881, "utf-8"));
  } catch (_0x1162df) {
    console.log("读取缓存出错, 新建一个token缓存");
    _0xf8b294();
  }
}
class _0x2eef6b {
  constructor() {
    this.index = _0x428b09.userIdx++;
    this.name = "";
    this.valid = true;
    const _0x30ed8d = {
      limit: 0
    };
    const _0x2f90bf = {
      retry: _0x30ed8d,
      timeout: _0x37bf27,
      followRedirect: false
    };
    this.got = _0x318f46.extend(_0x2f90bf);
  }
  log(_0x5df454, _0x1d7b22 = {}) {
    var _0x50b380 = "",
      _0x4de1d0 = _0x428b09.userCount.toString().length;
    if (this.index) {
      _0x50b380 += "账号[" + _0x428b09.padStr(this.index, _0x4de1d0) + "]";
    }
    if (this.name) {
      _0x50b380 += "[" + this.name + "]";
    }
    _0x428b09.log(_0x50b380 + _0x5df454, _0x1d7b22);
  }
  async request(_0x21d779) {
    var _0x2d1dda = null,
      _0x2e2a80 = 0,
      _0x2409f8 = _0x21d779.fn || _0x21d779.url;
    _0x21d779.method = _0x21d779?.["method"]?.["toUpperCase"]() || "GET";
    if (_0x2b01c5) {
      if (!_0x115d10) {
        var _0x37b9cc = require("https-proxy-agent");
        _0x115d10 = new _0x37b9cc(_0x2b01c5);
      }
      const _0x448434 = {
        http: _0x115d10,
        https: _0x115d10
      };
      _0x21d779.agent = _0x448434;
      const _0x528c77 = {
        rejectUnauthorized: false
      };
      _0x21d779.https = _0x528c77;
    }
    while (_0x2e2a80++ < _0x4868c8) {
      try {
        await this.got(_0x21d779).then(_0x28ef66 => {
          _0x2d1dda = _0x28ef66;
        }, _0x50fd38 => {
          _0x2d1dda = _0x50fd38.response;
        });
        if ((_0x2d1dda?.["statusCode"] / 100 | 0) <= 4) {
          break;
        }
      } catch (_0x5ea88d) {
        _0x5ea88d.name == "TimeoutError" ? this.log("[" + _0x2409f8 + "]请求超时，重试第" + _0x2e2a80 + "次") : this.log("[" + _0x2409f8 + "]请求错误(" + _0x5ea88d.message + ")，重试第" + _0x2e2a80 + "次");
      }
    }
    const _0x404681 = {
      statusCode: -1,
      headers: null,
      result: null
    };
    if (_0x2d1dda == null) {
      return Promise.resolve(_0x404681);
    }
    let {
      statusCode: _0x3189af,
      headers: _0x5e9e59,
      body: _0x579be7
    } = _0x2d1dda;
    if (_0x579be7) {
      try {
        _0x579be7 = JSON.parse(_0x579be7);
      } catch {}
    }
    const _0x38ae13 = {
      statusCode: _0x3189af,
      headers: _0x5e9e59,
      result: _0x579be7
    };
    return Promise.resolve(_0x38ae13);
  }
}
let _0x43d5ad = new _0x2eef6b();
class _0x377202 extends _0x2eef6b {
  constructor(_0x489a17) {
    super();
    let _0x4e98a7 = _0x489a17.split("#");
    this.name = _0x4e98a7[0];
    this.passwd = _0x4e98a7[1];
    this.uuid = _0x428b09.randomUuid();
    this.cookieJar = new _0x3b4983();
    this.can_feed = true;
    const _0xb6ea28 = {
      Connection: "keep-alive",
      "User-Agent": _0x465dcd
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0xb6ea28
    });
  }
  load_token() {
    let _0xb6229d = false;
    _0x380d2f[this.name] && (this.userId = _0x380d2f[this.name].userId, this.token = _0x380d2f[this.name].token, this.log("读取到缓存token"), _0xb6229d = true);
    return _0xb6229d;
  }
  encode_phone() {
    let _0xeaeb86 = this.name.split("");
    for (let _0x240afe in _0xeaeb86) {
      _0xeaeb86[_0x240afe] = String.fromCharCode(_0xeaeb86[_0x240afe].charCodeAt(0) + 2);
    }
    return _0xeaeb86.join("");
  }
  async login(_0x19ec7f = {}) {
    let _0x951399 = false;
    try {
      let _0x1a099c = _0x428b09.time("yyyyMMddhhmmss"),
        _0x5d07c7 = "iPhone 14 15.4." + this.uuid.slice(0, 2).join("") + this.name + _0x1a099c + this.passwd + "0$$$0.",
        _0x3b7240 = {
          fn: "login",
          method: "post",
          url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
          json: {
            headerInfos: {
              code: "userLoginNormal",
              timestamp: _0x1a099c,
              broadAccount: "",
              broadToken: "",
              clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
              shopId: "20002",
              source: "110003",
              sourcePassword: "Sid98s",
              token: "",
              userLoginName: this.name
            },
            content: {
              attach: "test",
              fieldData: {
                loginType: "4",
                accountType: "",
                loginAuthCipherAsymmertric: _0x29ede4.encrypt(_0x5d07c7, "base64"),
                deviceUid: this.uuid.slice(0, 3).join(""),
                phoneNum: this.encode_phone(),
                isChinatelecom: "0",
                systemVersion: "15.4.0",
                authentication: this.passwd
              }
            }
          }
        },
        {
          result: _0x4e61bc
        } = await this.request(_0x3b7240);
      if (_0x4e61bc?.["responseData"]?.["resultCode"] == "0000") {
        let {
          userId = "",
          token = ""
        } = _0x4e61bc?.["responseData"]?.["data"]?.["loginSuccessResult"] || {};
        this.userId = userId;
        this.token = token;
        this.log("使用服务密码登录成功");
        _0x380d2f[this.name] = {
          token: token,
          userId: userId,
          t: Date.now()
        };
        _0xf8b294();
        _0x951399 = true;
      } else {
        let _0x4f34be = _0x4e61bc?.["responseData"]?.["resultDesc"] || _0x4e61bc?.["headerInfos"]?.["reason"] || "";
        this.log("服务密码登录失败[" + _0x4e61bc?.["responseData"]?.["resultCode"] + "]: " + _0x4f34be);
      }
    } catch (_0x2ac3e6) {
      console.log(_0x2ac3e6);
    } finally {
      return _0x951399;
    }
  }
  async get_ticket(_0x565834 = {}) {
    let _0x524526 = "";
    try {
      let _0x2ea2f9 = "\n            <Request>\n                <HeaderInfos>\n                    <Code>getSingle</Code>\n                    <Timestamp>" + _0x428b09.time("yyyyMMddhhmmss") + "</Timestamp>\n                    <BroadAccount></BroadAccount>\n                    <BroadToken></BroadToken>\n                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                    <ShopId>20002</ShopId>\n                    <Source>110003</Source>\n                    <SourcePassword>Sid98s</SourcePassword>\n                    <Token>" + this.token + "</Token>\n                    <UserLoginName>" + this.name + "</UserLoginName>\n                </HeaderInfos>\n                <Content>\n                    <Attach>test</Attach>\n                    <FieldData>\n                        <TargetId>" + _0x358e19("TripleDES", "CBC", "Pkcs7", this.userId, _0x5e8435, _0x2029bb) + "</TargetId>\n                        <Url>4a6862274835b451</Url>\n                    </FieldData>\n                </Content>\n            </Request>";
      const _0x477677 = {
        fn: "get_ticket",
        method: "post",
        url: "https://appgologin.189.cn:9031/map/clientXML",
        body: _0x2ea2f9
      };
      let {
        result: _0x5bc89d
      } = await this.request(_0x477677);
      if (_0x5bc89d) {
        let _0x4da39b = _0x5bc89d.match(/\<Ticket\>(\w+)\<\/Ticket\>/);
        if (_0x4da39b) {
          let _0x4bb30d = _0x4da39b[1];
          _0x524526 = _0xcda21d("TripleDES", "CBC", "Pkcs7", _0x4bb30d, _0x5e8435, _0x2029bb);
          this.ticket = _0x524526;
        }
      }
      !_0x524526 && (!_0x565834.retry && (await this.login()) ? (_0x565834.retry = true, _0x524526 = await this.get_ticket(_0x565834)) : (this.log("没有获取到ticket: "), _0x5bc89d && console.log(_0x5bc89d)));
    } catch (_0x4f493f) {
      console.log(_0x4f493f);
    } finally {
      return _0x524526;
    }
  }
  async get_sign(_0x2193d0 = {}) {
    let _0x46b8df = false;
    try {
      const _0x1c4d47 = {
        ticket: this.ticket
      };
      const _0x2ba898 = {
        fn: "login",
        method: "get",
        url: "https://wapside.189.cn:9001/jt-sign/ssoHomLogin",
        searchParams: _0x1c4d47
      };
      let {
        result: _0xcedb57
      } = await this.request(_0x2ba898);
      _0xcedb57?.["resoultCode"] == 0 ? (_0x46b8df = _0xcedb57?.["sign"], this.sign = _0x46b8df, this.got = this.got.extend({
        headers: {
          sign: this.sign
        }
      })) : this.log("获取sign失败");
    } catch (_0x371652) {
      console.log(_0x371652);
    } finally {
      return _0x46b8df;
    }
  }
  async doSign(_0x17109d = {}) {
    try {
      let _0x8396d1 = {
          phone: this.name,
          date: Date.now(),
          signSource: "smlprgrm"
        },
        _0xb44d99 = {
          fn: "doSign",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/api/home/sign",
          json: {
            encode: _0x358e19("AES", "ECB", "Pkcs7", JSON.stringify(_0x8396d1), _0x291ec9, 0)
          }
        },
        {
          result: _0x5b6f42
        } = await this.request(_0xb44d99);
      if (_0x5b6f42.resoultCode == 0) {
        if (_0x5b6f42.data.code == 1) {
          const _0x2d253f = {
            notify: true
          };
          this.log("签到成功，获得" + _0x5b6f42.data.coin + "金豆", _0x2d253f);
        } else {
          const _0x219da4 = {
            notify: true
          };
          this.log("签到失败: " + _0x5b6f42.data.msg, _0x219da4);
        }
      } else {
        this.log("签到失败: " + (_0x5b6f42?.["resoultMsg"] || _0x5b6f42?.["error"]));
      }
    } catch (_0x85a15) {
      console.log(_0x85a15);
    }
  }
  encrypt_para(_0x4c1372) {
    return _0x57081e.encrypt(JSON.stringify(_0x4c1372), "hex");
  }
  async activityMsg(_0x1bf8ce = {}) {
    try {
      const _0x2c0fd7 = {
        phone: this.name
      };
      let _0x329aa1 = {
          fn: "userCoinInfo",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/reward/activityMsg",
          json: {
            para: this.encrypt_para(_0x2c0fd7)
          }
        },
        {
          result: _0x30ca85
        } = await this.request(_0x329aa1);
      _0x30ca85?.["totalDay"] ? (this.log("已连续签到: " + (_0x30ca85?.["totalDay"] || 0) + "天"), this.rewardId = _0x30ca85?.["date"]?.["rewardId"] || "") : this.log("查询签到信息失败: " + (_0x30ca85?.["resoultMsg"] || _0x30ca85?.["error"]));
    } catch (_0x3a4ebd) {
      console.log(_0x3a4ebd);
    }
  }
  async userCoinInfo(_0x5889e3 = {}) {
    try {
      const _0x13e07f = {
        phone: this.name
      };
      let _0x3eb327 = {
          fn: "userCoinInfo",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/api/home/userCoinInfo",
          json: {
            para: this.encrypt_para(_0x13e07f)
          }
        },
        {
          result: _0x12b89a
        } = await this.request(_0x3eb327);
      if (_0x12b89a?.["resoultCode"] == 0) {
        this.coin = _0x12b89a?.["totalCoin"] || 0;
        const _0x3878d7 = {
          notify: true
        };
        this.log("金豆余额: " + this.coin, _0x3878d7);
        if (_0x12b89a.amountEx) {
          let _0xbf61b7 = _0x428b09.time("yyyy-MM-dd", _0x12b89a.expireDate);
          const _0x5897c7 = {
            notify: true
          };
          _0x428b09.log("-- [" + _0xbf61b7 + "]将过期" + _0x12b89a.amountEx + "金豆", _0x5897c7);
        }
      } else {
        this.log("查询账户信息失败: " + (_0x12b89a?.["resoultMsg"] || _0x12b89a?.["error"]));
      }
    } catch (_0x3aad90) {
      console.log(_0x3aad90);
    }
  }
  async getTask(_0x491530 = {}) {
    try {
      const _0x437d87 = {
        phone: this.name
      };
      let _0x314bea = {
          fn: "getTask",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/getTask",
          json: {
            para: this.encrypt_para(_0x437d87)
          }
        },
        {
          result: _0x2ef69f
        } = await this.request(_0x314bea);
      if (_0x2ef69f?.["resoultCode"] == 0) {
        for (let _0x5939dc of _0x2ef69f.data) {
          let _0x1ed90e = _0x5939dc.title,
            _0x192f9d = [];
          switch (_0x5939dc.taskType) {
            case 3:
              _0x5939dc.reward_id ? (console.log("[" + _0x1ed90e + "] -- 未完成"), await this.receiveReward(_0x5939dc)) : console.log("[" + _0x1ed90e + "] -- 已完成");
              break;
            case 6:
              _0x5939dc?.["status"] == 0 || _0x5939dc?.["status"] == 1 ? (console.log("[" + _0x1ed90e + "] -- 未完成"), await this.sharingGetGold()) : console.log("[" + _0x1ed90e + "] -- 已完成");
              break;
            case 10:
              if (_0x5939dc?.["status"] == 0 || _0x5939dc?.["status"] == 1) {
                console.log("[" + _0x1ed90e + "] -- 未完成");
                if (!this.xtoken) {
                  await this.get_usercode();
                }
                if (this.xtoken) {
                  for (let _0x27590a = 0; _0x27590a < _0x5939dc.numOfTimes; _0x27590a++) {
                    let _0x33be12 = Math.floor(Math.random() * 1000) + 1000;
                    _0x192f9d.push(this.watchLiveInit(_0x33be12));
                  }
                  await Promise.all(_0x192f9d);
                }
              } else {
                console.log("[" + _0x1ed90e + "] -- 已完成");
              }
              break;
            case 13:
              if (_0x5939dc?.["status"] == 0 || _0x5939dc?.["status"] == 1) {
                console.log("[" + _0x1ed90e + "] -- 未完成");
                if (!this.xtoken) {
                  await this.get_usercode();
                }
                if (this.xtoken) {
                  for (let _0x24c09f = 0; _0x24c09f < _0x5939dc.numOfTimes; _0x24c09f++) {
                    let _0x47ff20 = Math.floor(Math.random() * 1000) + 3000;
                    await this.watchVideo(_0x47ff20);
                  }
                }
              } else {
                console.log("[" + _0x1ed90e + "] -- 已完成");
              }
              break;
            case 18:
              _0x5939dc?.["status"] == 0 || _0x5939dc?.["status"] == 1 ? (console.log("[" + _0x1ed90e + "] -- 未完成"), await this.polymerize(_0x5939dc)) : console.log("[" + _0x1ed90e + "] -- 已完成");
              break;
            default:
              _0x5939dc?.["status"] == 0 || _0x5939dc?.["status"] == 1 ? console.log("[" + _0x1ed90e + "] -- 未完成") : console.log("[" + _0x1ed90e + "] -- 已完成");
              break;
          }
        }
      } else {
        console.log("获取任务列表失败: " + (_0x2ef69f?.["resoultMsg"] || _0x2ef69f?.["error"]));
      }
    } catch (_0x4a0c04) {
      console.log(_0x4a0c04);
    }
  }
  async receiveReward(_0x11ba61, _0x427728 = {}) {
    try {
      let _0x4095e5 = _0x11ba61?.["title"]?.["split"](" ")?.[0];
      const _0x3eaad6 = {
        phone: this.name,
        rewardId: _0x11ba61.reward_id || ""
      };
      let _0x59ba55 = {
          fn: "receiveReward",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/receiveReward",
          json: {
            para: this.encrypt_para(_0x3eaad6)
          }
        },
        {
          result: _0x4a901c
        } = await this.request(_0x59ba55);
      _0x4a901c?.["resoultCode"] == 0 ? this.log("领取任务[" + _0x4095e5 + "]奖励成功: " + _0x4a901c?.["resoultMsg"]) : this.log("领取任务[" + _0x4095e5 + "]奖励失败: " + (_0x4a901c?.["resoultMsg"] || _0x4a901c?.["error"]));
    } catch (_0x31bdfc) {
      console.log(_0x31bdfc);
    }
  }
  async polymerize(_0x55dea8, _0x349a17 = {}) {
    try {
      let _0x11d991 = _0x55dea8?.["title"]?.["split"](" ")?.[0];
      const _0x4fdd56 = {
        phone: this.name,
        jobId: _0x55dea8.taskId
      };
      let _0x5a1bc3 = {
          fn: "polymerize",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/polymerize",
          json: {
            para: this.encrypt_para(_0x4fdd56)
          }
        },
        {
          result: _0x16dfda
        } = await this.request(_0x5a1bc3);
      _0x16dfda?.["resoultCode"] == 0 ? this.log("完成任务[" + _0x11d991 + "]成功: " + _0x16dfda?.["resoultMsg"]) : this.log("完成任务[" + _0x11d991 + "]失败: " + (_0x16dfda?.["resoultMsg"] || _0x16dfda?.["error"]));
    } catch (_0x1d63ff) {
      console.log(_0x1d63ff);
    }
  }
  async food(_0x3f0426, _0x331ed9 = {}) {
    try {
      const _0x2e53c1 = {
        phone: this.name
      };
      let _0x27e5b7 = {
          fn: "food",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/food",
          json: {
            para: this.encrypt_para(_0x2e53c1)
          }
        },
        {
          result: _0x831d23
        } = await this.request(_0x27e5b7);
      if (_0x831d23?.["resoultCode"] == 0) {
        this.log("第" + _0x3f0426 + "次喂食: " + (_0x831d23?.["resoultMsg"] || "成功"));
        if (_0x831d23?.["levelUp"]) {
          let _0x2bb653 = _0x831d23?.["currLevelRightList"][0]?.["level"];
          const _0x52b410 = {
            notify: true
          };
          this.log("宠物已升级到[LV." + _0x2bb653 + "], 获得: " + _0x831d23?.["currLevelRightList"][0]?.["righstName"], _0x52b410);
          _0x2bb653 >= 6 && (this.can_feed = false);
        }
      } else {
        let _0x45009e = _0x831d23?.["resoultMsg"] || _0x831d23?.["error"] || "";
        this.log("第" + _0x3f0426 + "次喂食失败: " + _0x45009e);
        _0x45009e?.["includes"]("最大喂食次数") && (this.can_feed = false);
      }
    } catch (_0x39cf6f) {
      console.log(_0x39cf6f);
    }
  }
  async getParadiseInfo(_0x3d980a = {}) {
    try {
      const _0x129f20 = {
        phone: this.name
      };
      let _0x5d180e = {
        fn: "getParadiseInfo",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/getParadiseInfo",
        json: {
          para: this.encrypt_para(_0x129f20)
        }
      };
      {
        let {
          result: _0x596835
        } = await this.request(_0x5d180e);
        if (_0x596835?.["resoultCode"] == 0) {
          let _0x41120b = _0x596835?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x41120b?.["level"];
          if (this.level < 6) {
            for (let _0x4fa76a = 1; _0x4fa76a <= 10 && this.can_feed; _0x4fa76a++) {
              await this.food(_0x4fa76a);
            }
          }
        } else {
          let _0x1e41c5 = _0x596835?.["resoultMsg"] || _0x596835?.["error"] || "";
          this.log("查询宠物等级失败: " + _0x1e41c5);
          return;
        }
      }
      {
        let {
          result: _0x55a7e2
        } = await this.request(_0x5d180e);
        if (_0x55a7e2?.["resoultCode"] == 0) {
          let _0x4da0b1 = _0x55a7e2?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x4da0b1?.["level"];
          const _0x76112e = {
            notify: true
          };
          this.log("宠物等级[Lv." + _0x4da0b1?.["level"] + "], 升级进度: " + _0x4da0b1?.["growthValue"] + "/" + _0x4da0b1?.["fullGrowthCoinValue"], _0x76112e);
        } else {
          let _0x1ec90c = _0x55a7e2?.["resoultMsg"] || _0x55a7e2?.["error"] || "";
          this.log("查询宠物等级失败: " + _0x1ec90c);
          return;
        }
      }
    } catch (_0x3068a3) {
      console.log(_0x3068a3);
    }
  }
  async getLevelRightsList(_0x2cc404 = {}) {
    try {
      const _0x40393b = {
        phone: this.name
      };
      let _0x864148 = {
          fn: "getLevelRightsList",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/getLevelRightsList",
          json: {
            para: this.encrypt_para(_0x40393b)
          }
        },
        {
          result: _0x595d28
        } = await this.request(_0x864148);
      if (_0x595d28?.["currentLevel"]) {
        for (let _0x4d863b = 1; _0x4d863b <= this.level; _0x4d863b++) {
          let _0x50ccd3 = "V" + _0x4d863b;
          for (let _0x4f4caa of _0x595d28[_0x50ccd3] || []) {
            this.log("可以用[" + _0x4f4caa.costCoin + "金豆]兑换权益[" + _0x4f4caa.righstName + "]");
          }
        }
      } else {
        let _0xcedb5d = _0x595d28?.["resoultMsg"] || _0x595d28?.["error"] || "";
        this.log("查询宠物兑换权益失败: " + _0xcedb5d);
      }
    } catch (_0x2cbe14) {
      console.log(_0x2cbe14);
    }
  }
  async JinDouMall_independentDetails(_0x3922a4, _0x2fc949, _0x58fb72 = {}) {
    try {
      const _0x348940 = {
        activitieId: _0x3922a4,
        ticket: _0x2fc949
      };
      const _0x2fbb7a = {
        fn: "JinDouMall_independentDetails",
        method: "get",
        url: "https://wapact.189.cn:9001/JinDouMall/JinDouMall_independentDetails.html",
        searchParams: _0x348940
      };
      let {
        result: _0x500b6c
      } = await this.request(_0x2fbb7a);
      console.log(_0x500b6c);
    } catch (_0x44ed16) {
      console.log(_0x44ed16);
    }
  }
  async exchange_login(_0xcad9a5, _0x2e3d76, _0x9064b7 = {}) {
    try {
      const _0x9688d1 = {
        sign: _0x2e3d76
      };
      const _0x515fd8 = {
        activitieId: _0xcad9a5
      };
      const _0x328f53 = {
        fn: "exchange",
        method: "post",
        url: "https://wapact.189.cn:9001/gateway/detail/login",
        headers: _0x9688d1,
        json: _0x515fd8
      };
      let {
        result: _0x475981
      } = await this.request(_0x328f53);
      console.log(_0x475981);
    } catch (_0x579a82) {
      console.log(_0x579a82);
    }
  }
  async exchange(_0x1ab14c, _0x401a46, _0x3c1273 = {}) {
    try {
      const _0x1014e8 = {
        sign: _0x401a46
      };
      const _0x82ff6c = {
        activitieId: _0x1ab14c
      };
      const _0x266050 = {
        fn: "exchange",
        method: "post",
        url: "https://wapact.189.cn:9001/gateway/stand/detail/exchange",
        headers: _0x1014e8,
        json: _0x82ff6c
      };
      let {
        result: _0x44d32b
      } = await this.request(_0x266050);
      console.log(_0x44d32b);
    } catch (_0xb84b84) {
      console.log(_0xb84b84);
    }
  }
  async get_usercode(_0x3d467a = {}) {
    try {
      const _0x109b6e = {
        fn: "get_usercode",
        method: "get",
        url: "https://xbk.189.cn/xbkapi/api/auth/jump",
        searchParams: {}
      };
      _0x109b6e.searchParams.userID = this.ticket;
      _0x109b6e.searchParams.version = "9.3.3";
      _0x109b6e.searchParams.type = "room";
      _0x109b6e.searchParams.l = "renwu";
      let {
          statusCode: _0x13cbbf,
          headers: _0x45cc0d
        } = await this.request(_0x109b6e),
        _0x206988 = _0x45cc0d?.["location"]?.["match"](/usercode=(\w+)/);
      _0x206988 ? await this.codeToken(_0x206988[1]) : this.log("获取code失败[" + _0x13cbbf + "]");
    } catch (_0x5dda91) {
      console.log(_0x5dda91);
    }
  }
  async codeToken(_0x4268e7, _0x47c01d = {}) {
    try {
      const _0x34d61b = {
        usercode: _0x4268e7
      };
      const _0x3e1ec1 = {
        fn: "codeToken",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
        json: _0x34d61b
      };
      let {
        result: _0x4c2cbb
      } = await this.request(_0x3e1ec1);
      if (_0x4c2cbb?.["code"] == 0) {
        this.xtoken = _0x4c2cbb?.["data"]?.["token"];
        this.got = this.got.extend({
          headers: {
            Authorization: "Bearer " + _0xfb1ec7.encrypt(this.xtoken, "base64")
          }
        });
      } else {
        let _0x455dbc = _0x4c2cbb?.["resoultMsg"] || _0x4c2cbb?.["error"] || _0x4c2cbb?.["msg"] || "";
        this.log("获取token失败: " + _0x455dbc);
      }
    } catch (_0x161889) {
      console.log(_0x161889);
    }
  }
  async watchLiveInit(_0x4f49c2, _0x5181f5 = {}) {
    try {
      const _0x55e0d7 = {
        period: 1,
        liveId: _0x4f49c2
      };
      const _0x566d20 = {
        fn: "watchLiveInit",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLiveInit",
        json: _0x55e0d7
      };
      let {
        result: _0xcd9cde
      } = await this.request(_0x566d20);
      if (_0xcd9cde?.["code"] == 0) {
        await _0x428b09.wait(15000);
        await this.watchLive(_0x4f49c2, _0xcd9cde?.["data"]);
      } else {
        let _0x137181 = _0xcd9cde?.["resoultMsg"] || _0xcd9cde?.["error"] || _0xcd9cde?.["msg"] || "";
        this.log("开始观看直播[" + _0x4f49c2 + "]失败: " + _0x137181);
      }
    } catch (_0x962053) {
      console.log(_0x962053);
    }
  }
  async watchLive(_0x52ef80, _0x1adada, _0x597076 = {}) {
    try {
      const _0x4745ef = {
        period: 1,
        liveId: _0x52ef80,
        key: _0x1adada
      };
      const _0x17caa6 = {
        fn: "watchLive",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLive",
        json: _0x4745ef
      };
      let {
        result: _0x185b05
      } = await this.request(_0x17caa6);
      if (_0x185b05?.["code"] == 0) {
        this.log("观看直播[" + _0x52ef80 + "]成功");
      } else {
        let _0x2de31a = _0x185b05?.["resoultMsg"] || _0x185b05?.["error"] || _0x185b05?.["msg"] || "";
        this.log("观看直播[" + _0x52ef80 + "]失败: " + _0x2de31a);
      }
    } catch (_0x593997) {
      console.log(_0x593997);
    }
  }
  async watchVideo(_0x14254e, _0x65b855 = {}) {
    try {
      const _0x510fa5 = {
        articleId: _0x14254e
      };
      const _0x2861f4 = {
        fn: "watchVideo",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchVideo",
        json: _0x510fa5
      };
      let {
        result: _0x2f09b0
      } = await this.request(_0x2861f4);
      if (_0x2f09b0?.["code"] == 0) {
        this.log("观看短视频[" + _0x14254e + "]成功");
      } else {
        let _0x5491f5 = _0x2f09b0?.["resoultMsg"] || _0x2f09b0?.["error"] || _0x2f09b0?.["msg"] || "";
        this.log("观看短视频[" + _0x14254e + "]失败: " + _0x5491f5);
      }
    } catch (_0x2af956) {
      console.log(_0x2af956);
    }
  }
  async like(_0x59e015, _0x55fc89 = {}) {
    try {
      const _0x24086b = {
        account: this.name,
        liveId: _0x59e015
      };
      const _0x1b30ce = {
        fn: "like",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/room/like",
        json: _0x24086b
      };
      let {
        result: _0x21dd94
      } = await this.request(_0x1b30ce);
      if (_0x21dd94?.["code"] == 0) {
        this.log("点赞直播间[" + _0x59e015 + "]成功");
      } else {
        let _0x218dde = _0x21dd94?.["resoultMsg"] || _0x21dd94?.["error"] || _0x21dd94?.["msg"] || "";
        this.log("点赞直播间[" + _0x59e015 + "]失败: " + _0x218dde);
      }
    } catch (_0x1ae53d) {
      console.log(_0x1ae53d);
    }
  }
  async sharingGetGold(_0x447784 = {}) {
    try {
      let _0x256d41 = {
          fn: "sharingGetGold",
          method: "post",
          url: "https://appfuwu.189.cn:9021/query/sharingGetGold",
          json: {
            headerInfos: {
              code: "sharingGetGold",
              timestamp: _0x428b09.time("yyyyMMddhhmmss"),
              broadAccount: "",
              broadToken: "",
              clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
              shopId: "20002",
              source: "110003",
              sourcePassword: "Sid98s",
              token: this.token,
              userLoginName: this.name
            },
            content: {
              attach: "test",
              fieldData: {
                shareSource: "3",
                userId: this.userId,
                account: this.encode_phone()
              }
            }
          }
        },
        {
          result: _0x2cb283
        } = await this.request(_0x256d41);
      if (_0x2cb283?.["responseData"]?.["resultCode"] == "0000") {
        this.log("分享成功");
      } else {
        let _0x327874 = _0x2cb283?.["responseData"]?.["resultDesc"] || _0x2cb283?.["error"] || _0x2cb283?.["msg"] || "";
        this.log("分享失败: " + _0x327874);
      }
    } catch (_0x3e5d2e) {
      console.log(_0x3e5d2e);
    }
  }
  async userTask() {
    const _0x17e4b3 = {
      notify: true
    };
    _0x428b09.log("\n======= 账号[" + this.index + "][" + this.name + "] =======", _0x17e4b3);
    if (!this.load_token() && !(await this.login())) {
      return;
    }
    if (!(await this.get_ticket())) {
      return;
    }
    if (!(await this.get_sign())) {
      return;
    }
    await this.doSign();
    await this.activityMsg();
    await this.getTask();
    await this.getParadiseInfo();
    await this.userCoinInfo();
  }
}
!(async () => {
  if (!(await _0x120bf2())) {
    return;
  }
  _0x428b09.read_env(_0x377202);
  _0x413402();
  for (let _0x24f10e of _0x428b09.userList) {
    await _0x24f10e.userTask();
  }
})().catch(_0xfb0b5d => _0x428b09.log(_0xfb0b5d)).finally(() => _0x428b09.exitNow());
async function _0x120bf2() {
  let _0x19aeb7 = false;
  try {
    const _0x451b9d = {
      fn: "auth",
      method: "get",
      url: _0x494363
    };
    let {
      statusCode: _0x4b9124,
      result: _0x315b8f
    } = await _0x43d5ad.request(_0x451b9d);
    if (_0x4b9124 != 200) {
      return Promise.resolve();
    }
    if (_0x315b8f?.["code"] == 0) {
      _0x315b8f = JSON.parse(_0x315b8f.data.file.data);
      if (_0x315b8f?.["commonNotify"] && _0x315b8f.commonNotify.length > 0) {
        const _0x5b995e = {
          notify: true
        };
        _0x428b09.log(_0x315b8f.commonNotify.join("\n") + "\n", _0x5b995e);
      }
      _0x315b8f?.["commonMsg"] && _0x315b8f.commonMsg.length > 0 && _0x428b09.log(_0x315b8f.commonMsg.join("\n") + "\n");
      if (_0x315b8f[_0x2b4dc0]) {
        let _0x694e60 = _0x315b8f[_0x2b4dc0];
        _0x694e60.status == 0 ? _0x5cfce3 >= _0x694e60.version ? (_0x19aeb7 = true, _0x428b09.log(_0x694e60.msg[_0x694e60.status]), _0x428b09.log(_0x694e60.updateMsg), _0x428b09.log("现在运行的脚本版本是：" + _0x5cfce3 + "，最新脚本版本：" + _0x694e60.latestVersion)) : _0x428b09.log(_0x694e60.versionMsg) : _0x428b09.log(_0x694e60.msg[_0x694e60.status]);
      } else {
        _0x428b09.log(_0x315b8f.errorMsg);
      }
    }
  } catch (_0x585267) {
    _0x428b09.log(_0x585267);
  } finally {
    return Promise.resolve(_0x19aeb7);
  }
}
function _0x351651(_0x2403e6) {
  return new class {
    constructor(_0x4dcfb4) {
      this.name = _0x4dcfb4;
      this.startTime = Date.now();
      const _0xa038bd = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0xa038bd);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x218a29, _0x2294af = {}) {
      const _0x443aff = {
        console: true
      };
      Object.assign(_0x443aff, _0x2294af);
      if (_0x443aff.time) {
        let _0x2a04d9 = _0x443aff.fmt || "hh:mm:ss";
        _0x218a29 = "[" + this.time(_0x2a04d9) + "]" + _0x218a29;
      }
      if (_0x443aff.notify) {
        this.notifyStr.push(_0x218a29);
      }
      if (_0x443aff.console) {
        console.log(_0x218a29);
      }
    }
    read_env(_0x30cd29) {
      let _0x2992fd = _0x1c90aa.map(_0x225881 => process.env[_0x225881]);
      for (let _0x114430 of _0x2992fd.filter(_0x2fa95d => !!_0x2fa95d)) {
        let _0x506b23 = _0x39be18.filter(_0x5c5774 => _0x114430.includes(_0x5c5774)),
          _0x4d0c50 = _0x506b23.length > 0 ? _0x506b23[0] : _0x39be18[0];
        for (let _0x42917c of _0x114430.split(_0x4d0c50).filter(_0x30c91b => !!_0x30c91b)) {
          this.userList.push(new _0x30cd29(_0x42917c));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x1c9725 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x1c90aa.map(_0x2cb527 => "[" + _0x2cb527 + "]").join("或"), _0x1c9725);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x295507, _0x4d8fbb, _0x509ae8 = {}) {
      while (_0x4d8fbb.idx < _0x428b09.userList.length) {
        let _0x45970 = _0x428b09.userList[_0x4d8fbb.idx++];
        if (!_0x45970.valid) {
          continue;
        }
        await _0x45970[_0x295507](_0x509ae8);
      }
    }
    async threadTask(_0x53cad9, _0x1e6c56) {
      let _0x342a92 = [];
      const _0x1b265b = {
        idx: 0
      };
      while (_0x1e6c56--) {
        _0x342a92.push(this.threads(_0x53cad9, _0x1b265b));
      }
      await Promise.all(_0x342a92);
    }
    time(_0x5e2fd7, _0x3eb876 = null) {
      let _0x400698 = _0x3eb876 ? new Date(_0x3eb876) : new Date(),
        _0x5ac71c = {
          "M+": _0x400698.getMonth() + 1,
          "d+": _0x400698.getDate(),
          "h+": _0x400698.getHours(),
          "m+": _0x400698.getMinutes(),
          "s+": _0x400698.getSeconds(),
          "q+": Math.floor((_0x400698.getMonth() + 3) / 3),
          S: this.padStr(_0x400698.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x5e2fd7) && (_0x5e2fd7 = _0x5e2fd7.replace(RegExp.$1, (_0x400698.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x19979b in _0x5ac71c) new RegExp("(" + _0x19979b + ")").test(_0x5e2fd7) && (_0x5e2fd7 = _0x5e2fd7.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5ac71c[_0x19979b] : ("00" + _0x5ac71c[_0x19979b]).substr(("" + _0x5ac71c[_0x19979b]).length)));
      return _0x5e2fd7;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x41cf79 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x41cf79.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x40cca9, _0x4d41ef, _0x3cca21 = {}) {
      let _0x3eff8b = _0x3cca21.padding || "0",
        _0xe0fb63 = _0x3cca21.mode || "l",
        _0x97fa40 = String(_0x40cca9),
        _0x387992 = _0x4d41ef > _0x97fa40.length ? _0x4d41ef - _0x97fa40.length : 0,
        _0x2bb29f = "";
      for (let _0x12e6a4 = 0; _0x12e6a4 < _0x387992; _0x12e6a4++) {
        _0x2bb29f += _0x3eff8b;
      }
      _0xe0fb63 == "r" ? _0x97fa40 = _0x97fa40 + _0x2bb29f : _0x97fa40 = _0x2bb29f + _0x97fa40;
      return _0x97fa40;
    }
    json2str(_0x12f741, _0x2c3b79, _0x51d891 = false) {
      let _0x116021 = [];
      for (let _0x3e5525 of Object.keys(_0x12f741).sort()) {
        let _0x395a01 = _0x12f741[_0x3e5525];
        if (_0x395a01 && _0x51d891) {
          _0x395a01 = encodeURIComponent(_0x395a01);
        }
        _0x116021.push(_0x3e5525 + "=" + _0x395a01);
      }
      return _0x116021.join(_0x2c3b79);
    }
    str2json(_0x148cda, _0x1328b9 = false) {
      let _0x32dcda = {};
      for (let _0x15820d of _0x148cda.split("&")) {
        if (!_0x15820d) {
          continue;
        }
        let _0xefe61 = _0x15820d.indexOf("=");
        if (_0xefe61 == -1) {
          continue;
        }
        let _0x517436 = _0x15820d.substr(0, _0xefe61),
          _0x29e07e = _0x15820d.substr(_0xefe61 + 1);
        if (_0x1328b9) {
          _0x29e07e = decodeURIComponent(_0x29e07e);
        }
        _0x32dcda[_0x517436] = _0x29e07e;
      }
      return _0x32dcda;
    }
    randomPattern(_0x595a1a, _0x2b7c9e = "abcdef0123456789") {
      let _0xb0d9a3 = "";
      for (let _0x48ae2e of _0x595a1a) {
        if (_0x48ae2e == "x") {
          _0xb0d9a3 += _0x2b7c9e.charAt(Math.floor(Math.random() * _0x2b7c9e.length));
        } else {
          _0x48ae2e == "X" ? _0xb0d9a3 += _0x2b7c9e.charAt(Math.floor(Math.random() * _0x2b7c9e.length)).toUpperCase() : _0xb0d9a3 += _0x48ae2e;
        }
      }
      return _0xb0d9a3;
    }
    randomUuid() {
      return [this.randomPattern("xxxxxxxx"), this.randomPattern("xxxx"), this.randomPattern("4xxx"), this.randomPattern("xxxx"), this.randomPattern("xxxxxxxxxxxx")];
    }
    randomString(_0x531f5b, _0x139f94 = "abcdef0123456789") {
      let _0x95e4b7 = "";
      for (let _0x11db04 = 0; _0x11db04 < _0x531f5b; _0x11db04++) {
        _0x95e4b7 += _0x139f94.charAt(Math.floor(Math.random() * _0x139f94.length));
      }
      return _0x95e4b7;
    }
    randomList(_0x9011a8) {
      let _0x5f66c = Math.floor(Math.random() * _0x9011a8.length);
      return _0x9011a8[_0x5f66c];
    }
    wait(_0x514c24) {
      return new Promise(_0x52d39c => setTimeout(_0x52d39c, _0x514c24));
    }
    async exitNow() {
      await this.showmsg();
      let _0x511a94 = Date.now(),
        _0x407098 = (_0x511a94 - this.startTime) / 1000;
      this.log("");
      const _0x52f658 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x407098 + "秒", _0x52f658);
      process.exit(0);
    }
  }(_0x2403e6);
}