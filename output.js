//Fri Mar 13 2026 14:29:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([[131], {
  13: function (_0x44dff2, _0xf76427, _0x425c68) {
    "use strict";

    var _0x3a6adf = _0x425c68(1);
    var _0x244708 = _0x425c68(316);
    var _0x50ef0b = _0x425c68.n(_0x244708);
    var _0x3dace6 = _0x425c68(32);
    var _0x5342f7 = _0x425c68(127);
    var _0x1f7e0f = _0x425c68(54);
    var _0x16b7db = _0x425c68(11);
    var _0x5f0c4f = _0x425c68(2);
    var _0x175a01 = _0x425c68(14);
    var _0x28faaa = _0x425c68(157);
    var _0x29e14c = _0x425c68(417);
    var _0x264c51 = _0x425c68(197);
    const _0x16d5c9 = function () {
      const _0x427f8 = {
        "Content-Type": (arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "") || "application/json;charset=utf-8"
      };
      return _0x427f8;
    };
    const _0x9e8a4e = () => {
      let _0x114174 = null;
      _0x114174 = Object(_0x3a6adf.a)(Object(_0x3a6adf.a)({}, Object(_0x264c51.b)()), {
        extraHeaderInfos: _0x16d5c9()
      });
      return _0x114174;
    };
    class _0x4b1f52 {
      constructor() {
        this.interceptors = [];
      }
      use(_0x47afcc, _0x3f2c7b) {
        const _0x279534 = {
          onFulfilled: _0x47afcc,
          onRejected: _0x3f2c7b
        };
        this.interceptors.push(_0x279534);
        return this.interceptors.length - 1;
      }
      eject(_0x18a5b8) {
        this.interceptors[_0x18a5b8] && (this.interceptors[_0x18a5b8] = null);
      }
    }
    var _0x51b07f = _0x425c68(20);
    let _0x2cbebf = _0x51b07f.b;
    class _0x3b9152 {
      constructor(_0x4c8c29) {
        this.defaults = null;
        this.interceptors = {
          request: new _0x4b1f52(),
          response: new _0x4b1f52()
        };
        this.defaults = _0x4c8c29;
      }
      request(_0x114add) {
        _0x114add = Object.assign(this.defaults, {}, _0x114add);
        const _0x25dc4a = {
          onFulfilled: this.mgsCallH5,
          onRejected: undefined
        };
        const _0x2eb1f2 = [_0x25dc4a];
        this.interceptors.request.interceptors.forEach(_0x369e73 => {
          _0x369e73 && _0x2eb1f2.unshift(_0x369e73);
        });
        this.interceptors.response.interceptors.forEach(_0x1bceb6 => {
          _0x1bceb6 && _0x2eb1f2.push(_0x1bceb6);
        });
        let _0x1e052d = Promise.resolve(_0x114add);
        for (; _0x2eb1f2.length;) {
          const {
            onFulfilled: _0x39464f,
            onRejected: _0x1ce8cf
          } = _0x2eb1f2.shift();
          _0x1e052d = _0x1e052d.then(_0x39464f, _0x1ce8cf);
        }
        return _0x1e052d;
      }
      async mgsCallH5(_0x447ac2) {
        const {
          urlObj: _0x130405,
          params: _0x157e6f,
          options: _0x5d8f9d,
          cancelToken: _0x591591
        } = _0x447ac2;
        return new Promise(async (_0x4e1254, _0x46b248) => {
          const _0x45181d = _0x9e8a4e();
          _0x591591 && _0x591591.promise.then(_0x3f5776 => {
            _0x46b248(_0x3f5776);
          });
          let _0x536a58 = _0x5d8f9d.headers;
          window.EC_ALL_CLOSE && (window.MGS_ONE_ADD_EC = [], _0x2cbebf = []);
          if (_0x5d8f9d.isNewOneEncrypt || (window.MGS_ONE_ADD_EC || _0x2cbebf).indexOf(_0x5d8f9d.serviceName) > -1) {
            const _0x5bd510 = await _0x3dace6.a.reqQuerySimplePerInfoByAlias(_0x157e6f.env, _0x5d8f9d.isLogin || false, _0x5d8f9d.serviceName).catch(_0x398722 => (_0x46b248(_0x398722), null));
            if (!_0x5bd510) {
              return _0x46b248();
            }
            const {
              session_key: _0x14b060,
              ip_rid: _0x19688b,
              ip_tid: _0xf607dc,
              auth_ssu_code: _0x3bcc7b,
              env: _0x1374da
            } = _0x5bd510;
            const _0x61c234 = {
              env: _0x1374da,
              tntId: "0101",
              ipTId: _0xf607dc,
              ipRId: _0x19688b
            };
            _0x536a58 = Object(_0x3a6adf.a)(Object(_0x3a6adf.a)({}, _0x5d8f9d.headers), {}, {
              "event-context": JSON.stringify(_0x61c234),
              sessionKey: _0x14b060,
              authSsuCode: _0x3bcc7b
            });
            delete _0x157e6f.env;
          } else {
            _0x130405.operationType = _0x130405.operationTypeNotEC;
          }
          const {
            operationType: _0x153ffd
          } = _0x130405;
          try {
            Object(_0x29e14c.a)()(_0x153ffd, _0x157e6f, {
              config: _0x45181d,
              operationType: _0x153ffd,
              method: _0x5d8f9d.method || "post",
              headers: _0x536a58
            }).then(_0xfe3352 => {
              window.offMgsSuccessUserInfoExpire || _0x4fdcb4(_0xfe3352);
              _0x5d8f9d.isNewOneEncrypt && _0xfe3352.ok && _0x4e1254({
                data: {
                  code: "10000",
                  message: "SUCCESS",
                  result: _0xfe3352
                }
              });
              _0x4e1254({
                data: _0xfe3352
              });
            }).catch(_0x4f81ea => {
              _0x4f81ea && "object" === typeof _0x4f81ea && Object.prototype.hasOwnProperty.call(_0x4f81ea, "error") ? (window.offMgsUserInfoExpire || (_0x4f81ea.success = false, _0x4fdcb4(_0x4f81ea)), _0x4e1254({
                data: _0x4f81ea
              })) : _0x46b248(_0x4f81ea);
            });
          } catch (_0x40958f) {
            _0x46b248(_0x40958f);
          }
        });
      }
    }
    function _0x4fdcb4(_0x5d5f53) {
      2000 !== Number(null === _0x5d5f53 || undefined === _0x5d5f53 ? undefined : _0x5d5f53.error) && 2000 !== Number(null === _0x5d5f53 || undefined === _0x5d5f53 ? undefined : _0x5d5f53.status) || (_0x5d5f53.errorCode = "100003", _0x5d5f53.success = false);
    }
    _0x3b9152.create = undefined;
    class _0x4c2d6c {
      constructor(_0x3642b5) {
        this.message = undefined;
        this.message = _0x3642b5;
      }
    }
    function _0x525590(_0x584c30) {
      if ("function" !== typeof _0x584c30) {
        throw new TypeError("executor must be a function.");
      }
      var _0x3545ba;
      this.promise = new Promise(function (_0x44166d) {
        _0x3545ba = _0x44166d;
      });
      var _0x2f8880 = this;
      _0x584c30(function (_0x46da96) {
        _0x2f8880.reason || (_0x2f8880.reason = new _0x4c2d6c(_0x46da96), _0x3545ba(_0x2f8880.reason));
      });
    }
    _0x525590.source = function () {
      var _0x36bcc;
      return {
        token: new _0x525590(function (_0x1eca6e) {
          _0x36bcc = _0x1eca6e;
        }),
        cancel: _0x36bcc
      };
    };
    function _0x95f86f(_0x101323) {
      const _0xb329ce = new _0x3b9152(_0x101323);
      let _0x15acff = _0x3b9152.prototype.request.bind(_0xb329ce);
      _0x15acff = Object.assign(_0x15acff, _0x3b9152.prototype, _0xb329ce);
      return _0x15acff;
    }
    _0x95f86f({});
    _0x3b9152.create = function () {
      return _0x95f86f(arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {});
    };
    const _0x25d31d = _0x3b9152;
    const {
      GibberishAES: _0x10c12b,
      CryptoJS: _0x1654c1,
      JSEncrypt: _0xb19287
    } = window;
    let _0x2fb914 = 0;
    let _0x544263 = 0;
    const _0x364aec = window.MAX_LOOP_COUNT1 || 100;
    const _0x5344ce = window.MAX_LOOP_COUNT2 || 10;
    let _0x24fa2c = 0;
    class _0x53d7c9 {
      static createOpenId() {
        return "".concat(1000 * Number(new Date())).concat(_0x2fb914++ % 1000);
      }
      static dealRes(_0x575b03, _0xefdbe2) {
        const _0x1e0ca0 = _0xefdbe2;
        try {
          _0x1e0ca0.data = _0xefdbe2.data;
          _0x10c12b.size(256);
          const _0x5d4cf2 = _0x10c12b.aesDecrypt(_0xefdbe2.data.result, _0x575b03.aesKey);
          _0x1e0ca0.data.result = JSON.parse(_0x5d4cf2);
        } catch (_0xc80f76) {}
        return _0x1e0ca0;
      }
      constructor() {
        const _0x3a14e9 = {
          complete: 0,
          count: 0
        };
        this.queue = {};
        this.resultFactor = null;
        this.queryQueue = [];
        this.isApplyLoginFactor = false;
        this.isLogin = false;
        this.allSuccess = _0x3a14e9;
        this.queue = {};
      }
      retryRun(_0x17f910) {
        return this.run(_0x17f910.serviceName, _0x17f910.params, _0x17f910.options);
      }
      setTokens(_0x1184b0, _0x23d3a2, _0xa23628) {
        let _0xe306e7 = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {};
        const _0x22da31 = Object(_0x16b7db.a)("cancelTokens") || {};
        "add" === _0x1184b0 && false !== _0xe306e7.isClear ? ("function" === typeof _0x22da31[_0x23d3a2] && _0xe306e7.isClear && _0x22da31[_0x23d3a2](), _0x22da31[_0x23d3a2] = _0xa23628) : delete _0x22da31[_0x23d3a2];
        Object(_0x16b7db.b)("cancelTokens", _0x22da31);
      }
      setInterceptor(_0x481a30, _0x30bad8, _0x2c525a) {
        let _0x10bd78 = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : undefined;
        let _0x38608c = arguments.length > 4 && undefined !== arguments[4] && arguments[4];
        let _0x39e47e = arguments.length > 5 && undefined !== arguments[5] ? arguments[5] : {};
        _0x481a30.interceptors.request.use(_0xf058a7 => {
          const _0x8b9f8 = _0x39e47e.operationType || _0x39e47e.operationTypeNotEC ? _0x525590 : _0x50ef0b.a.CancelToken;
          _0xf058a7.cancelToken = new _0x8b9f8(_0x1a67ce => {
            this.setTokens("add", _0x30bad8, _0x1a67ce, _0x39e47e);
          });
          this.handleLoading(_0x2c525a, _0x30bad8, true, _0x38608c, _0x10bd78);
          return _0xf058a7;
        }, _0x37397d => (this.handleLoading(_0x2c525a, _0x30bad8, false, _0x38608c, _0x10bd78), Promise.reject(_0x37397d)));
        _0x481a30.interceptors.response.use(_0x292a5a => (this.setTokens("close", _0x30bad8), this.handleLoading(_0x2c525a, _0x30bad8, false, false, _0x10bd78), _0x292a5a && _0x292a5a.data && "object" === typeof _0x292a5a.data && (_0x292a5a.data.errorCode || _0x292a5a.data.RESPONSECODE) && ["100003", "100008", "AA0025", "010040", "API018B001"].indexOf(_0x292a5a.data.errorCode || _0x292a5a.data.RESPONSECODE) <= -1 && this.handleLoading(_0x2c525a, _0x30bad8, false, _0x38608c, _0x10bd78), _0x292a5a), _0x582590 => (this.setTokens("close", _0x30bad8), this.handleLoading(_0x2c525a, _0x30bad8, false, _0x38608c, _0x10bd78), Promise.reject(_0x582590)));
      }
      handleLoading(_0x464804, _0x4af3ec, _0x3adbc7, _0x1c4b75) {
        let _0x1f6743 = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : undefined;
        const _0x130c3b = () => {
          _0x464804 && 0 === Object.keys(this.queue).length && _0x5f0c4f.a["".concat(_0x3adbc7 ? "show" : "hide", "Loading")]();
        };
        _0x130c3b();
        _0x3adbc7 && _0x464804 && (this.queue[_0x1f6743 || _0x4af3ec] = _0x4af3ec);
        false === _0x3adbc7 && delete this.queue[_0x4af3ec];
        _0x1c4b75 && false === _0x3adbc7 && delete this.queue[_0x1f6743];
        _0x130c3b();
      }
      getParams() {
        let _0x18dc00 = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "User";
        let _0x2fda2d = arguments.length > 1 ? arguments[1] : undefined;
        let _0x14b276 = arguments.length > 2 ? arguments[2] : undefined;
        let _0x5f4fe6 = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {};
        let _0x3d9f80 = !(arguments.length > 4 && undefined !== arguments[4]) || arguments[4];
        let _0x28e132 = arguments.length > 5 && undefined !== arguments[5] && arguments[5];
        let _0x54a76c = arguments.length > 6 && undefined !== arguments[6] ? arguments[6] : undefined;
        return new Promise((_0x52d8ce, _0xae9032) => {
          BestpayHtml5[_0x18dc00][_0x2fda2d](_0x5f4fe6, _0x5614c5 => {
            const _0x3704e9 = Object(_0x16b7db.a)("GlobalState") || {};
            if (_0x28e132 && ["autoLogin", "getSessionKey"].indexOf(_0x2fda2d) > -1) {
              const _0x29a806 = _0x5f0c4f.a.isAPP();
              const _0x4cedb1 = function () {
                (async () => {
                  let _0x595789 = _0x3704e9.operatorNo;
                  const _0x547253 = {
                    noAutoLogin: true
                  };
                  if (_0x54a76c = _0x54a76c || (await this.getParams("User", "getProductNo", "productNo", _0x547253).catch(() => "")), _0x54a76c && _0x3704e9.productNo !== _0x54a76c || !_0x595789) {
                    const _0x523521 = {
                      noAutoLogin: true
                    };
                    _0x595789 = await this.getParams("User", "getOperatorNo", "operatorNo", _0x523521).catch(() => "");
                    try {
                      _0x595789 && _0x28faaa.b.login(_0x595789);
                    } catch (_0x66b3b9) {}
                  }
                  const _0x4497a0 = {
                    noAutoLogin: true
                  };
                  const _0x5d6f54 = _0x29a806 ? "" : await this.getParams("User", "getAppType", "appType", _0x4497a0).catch(() => "");
                  Object(_0x16b7db.b)("appType", _0x5d6f54 || Object(_0x16b7db.a)("appType"));
                  _0x5614c5.productNo = _0x54a76c;
                  const _0x100f1c = "".concat(+new Date()).concat(Math.floor(10000 * Math.random()));
                  const _0x599f62 = {
                    loginType: "userHand",
                    productNo: _0x54a76c,
                    operatorNo: _0x595789,
                    sessionKey: _0x5614c5.sessionKey,
                    sessionId: _0x100f1c
                  };
                  this.deleteParams();
                  this.setUserInfo(_0x599f62, _0x3d9f80);
                  _0x52d8ce(_0x14b276 ? _0x5614c5[_0x14b276] : _0x5614c5);
                })();
              };
              _0x29a806 && !window.openDelayGet || window.outOffDelayGet ? _0x4cedb1.bind(this)() : setTimeout(() => {
                _0x4cedb1.bind(this)();
              }, window.delayGetUser || 50);
            } else {
              "getProductNo" !== _0x2fda2d && (_0x14b276 && (_0x3704e9[_0x14b276] = _0x5614c5[_0x14b276]), !_0x14b276 && Object.keys(_0x5614c5).map(_0x272a8d => ("sessionKey" === _0x272a8d && (_0x3704e9[_0x272a8d] = _0x5614c5[_0x272a8d]), _0x272a8d)), Object(_0x16b7db.b)("GlobalState", _0x3704e9));
              _0x52d8ce(_0x14b276 ? _0x5614c5[_0x14b276] : _0x5614c5);
            }
          }, _0x36ac0b => {
            !_0x14b276 && _0xae9032(_0x36ac0b);
          });
        });
      }
      setUserInfo(_0x37f06b) {
        let _0x270811 = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
        const _0x1760a9 = _0x5f0c4f.a.getItem("vip_5g_userInfo");
        const _0x3b1827 = _0x1760a9 || {};
        delete _0x3b1827.idInfo;
        const _0x27f25f = Object(_0x3a6adf.a)(Object(_0x3a6adf.a)({
          firstAuthorizeTime: null,
          headFileUrl: null,
          newCustomer: false,
          openId: _0x37f06b.openId || null,
          unionId: _0x37f06b.unionId || null,
          operatorNo: _0x37f06b.operatorNo || null,
          appType: Object(_0x16b7db.a)("appType")
        }, _0x3b1827), _0x37f06b);
        const _0x6bd2e6 = {
          type: "INITIAL_STATE"
        };
        Object(_0x16b7db.b)("GlobalState", _0x27f25f);
        _0x37f06b.sessionKey !== (_0x1760a9 && _0x1760a9.sessionKey) && _0x27f25f.sessionKey && _0x5f0c4f.a.saveKey("vip_5g_userInfo", _0x27f25f, +new Date());
        false === _0x270811 && _0x175a01.a.dispatch({
          type: "SET_USER_INFO",
          payload: _0x27f25f
        });
        _0x27f25f.productNo !== (_0x1760a9 && _0x1760a9.productNo) && _0x270811 && (window.isAllRefresh = true, _0x175a01.a.dispatch(_0x6bd2e6));
      }
      redirectIndex() {
        let _0x29e833 = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
        const _0x180348 = {
          type: "INITIAL_STATE"
        };
        Object(_0x16b7db.b)("errorCount", 0);
        this.isLogin = false;
        this.queryQueue = [];
        localStorage.removeItem("vip_5g_userInfo");
        window.isAllRefresh = true;
        _0x175a01.a.dispatch(_0x180348);
        _0x29e833 && _0x5f0c4f.a.showToast("登录已失效，请重新登录");
      }
      deleteParams() {
        let _0x4fea84 = Object(_0x16b7db.a)("queryOptions") || {};
        const _0x4a7399 = {
          key: "",
          ticket: "",
          oneKeyLogin: ""
        };
        _0x4fea84 = Object.assign({}, _0x4fea84, _0x4a7399);
        Object(_0x16b7db.b)("TicketUserInfo", null);
        Object(_0x16b7db.b)("KeyUserInfo", null);
        Object(_0x16b7db.b)("queryOptions", _0x4fea84);
        sessionStorage.setItem("vip_5g_queryOptions", JSON.stringify(Object(_0x3a6adf.a)({}, _0x4fea84)));
      }
      AgainRequest(_0x187442, _0x4c748b, _0x54e5ce, _0x42618b) {
        ++this.allSuccess.count;
        this.retryRun(_0x187442).then(_0x557d75 => {
          const _0x3ddac2 = {
            complete: 0,
            count: 0
          };
          ++this.allSuccess.complete === _0x42618b && (this.allSuccess = _0x3ddac2) && Object(_0x16b7db.b)("errorCount", 0);
          _0x4c748b(_0x557d75);
        }).catch(_0x455267 => {
          const _0x5d4111 = {
            complete: 0,
            count: 0
          };
          this.allSuccess.count === _0x42618b && (this.allSuccess = _0x5d4111);
          _0x54e5ce(_0x455267);
        });
      }
      flushQueue() {
        this.isLogin = false;
        this.queryQueue.map(_0x574bc5 => _0x574bc5(this.queryQueue.length));
        this.queryQueue = [];
      }
      AddRequest(_0x1c429d, _0x2fe9cc, _0x2e9a3f) {
        const _0x383984 = this;
        this.queryQueue.push(_0x5a37e5 => _0x383984.AgainRequest(_0x1c429d, _0x2fe9cc, _0x2e9a3f, _0x5a37e5));
      }
      getApi(_0x4f867a) {
        let _0x4c8f17 = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        let _0x4a7a3d = _0x5342f7.b[_0x4f867a];
        if (undefined !== _0x5342f7.b[_0x4f867a]) {
          "string" === typeof _0x5342f7.b[_0x4f867a] && (_0x4a7a3d = {
            BASEURL: "https://mapi.bestpay.com.cn/mapi/",
            url: _0x5342f7.b[_0x4f867a],
            authLogin: false,
            extensionData: {}
          });
          return _0x5f0c4f.a.dataClone(_0x4a7a3d);
        }
        _0x4c8f17 && _0x4c8f17(new Error("Api is undefined!!!,未定义".concat(_0x4f867a, "接口")));
      }
      run(_0x4ac6ae) {
        let _0x4ed319 = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        let _0x13b059 = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
        const {
          method: _0x35cb9d = "post",
          isShowMessage: _0x526c27 = true,
          isLoading: _0x523511 = true,
          isOneEncrypt: _0x5854c3 = false,
          isLogin: _0x588f6f = false,
          isMock: _0x3efdf7 = false,
          isShowLog: _0x8f105e = false,
          ContentType: _0x186c78 = "",
          filter: _0x35bf2b = [],
          serviceNameUse: _0x16526d,
          isEncryption: _0xd04483 = false,
          isEncrypt: _0x2bea58 = false,
          isAuth: _0x3528c0 = false,
          timeout: _0x2f4adf = 10000,
          isRefreshKey: _0x3639e5 = false,
          isNewOneEncrypt: _0x34bc46 = false,
          isNewEncrypt: _0x113c60 = false,
          isNewCallOld: _0x21da31 = false
        } = _0x13b059;
        return new Promise(async (_0x18a6ab, _0x4178cd) => {
          var _0x20f1b7;
          if (_0x5854c3 && _0x2bea58) {
            return _0x4178cd(new Error("只能指定一种请求方式"));
          }
          const _0x18627b = _0x35cb9d;
          const _0x3f2d14 = {
            serviceName: _0x4ac6ae,
            params: JSON.parse(JSON.stringify(_0x4ed319)),
            options: _0x13b059
          };
          let _0x183992 = this.getApi(_0x4ac6ae, _0x4178cd);
          if ("function" === typeof window.handleResetUrlObj && (_0x183992 = window.handleResetUrlObj(_0x183992)), !_0x183992) {
            return;
          }
          const {
            closeMgsSwitch: _0x52fc5f
          } = Object(_0x16b7db.a)("queryOptions") || {};
          (!window.isNotmPaasClient || window.MP && window.MP.MGS) && !window.closeMgsSwitch && "true" !== _0x52fc5f || (_0x183992.operationTypeNotEC = null, _0x183992.operationType = null);
          const _0x4653fc = !_0x34bc46 && _0x183992.operationType && !_0x183992.operationTypeNotEC;
          const _0x1b7b61 = (window.MGS_ONE_ADD_EC || _0x51b07f.b).indexOf(_0x4ac6ae) <= -1;
          let _0x3559d3 = _0x4653fc && _0x1b7b61;
          window.EC_ALL_CLOSE && _0x4653fc && (_0x3559d3 = true);
          (Array.isArray(window.closeMgsList) && null !== (_0x20f1b7 = window.closeMgsList) && undefined !== _0x20f1b7 && _0x20f1b7.length || _0x3559d3) && (window.closeMgsList.indexOf(_0x4ac6ae) > -1 || _0x3559d3) && (_0x183992.operationTypeNotEC = null, _0x183992.operationType = null);
          const _0x54d5ab = _0x183992.operationType || _0x183992.operationTypeNotEC;
          if (!_0x54d5ab && !_0x183992.url) {
            return _0x4178cd(null);
          }
          const _0x4557cf = _0x5342f7.a || _0x8f105e || _0x54d5ab;
          if (_0x3f2d14.options.isShowLog = _0x4557cf, [false, 1].indexOf(Object(_0x16b7db.a)("isLoginSuccess")) > -1 && !_0x3528c0 && _0x183992.authLogin) {
            return this.AddRequest(_0x3f2d14, _0x18a6ab, _0x4178cd);
          }
          if (this.isLogin && _0x183992.authLogin) {
            return this.AddRequest(_0x3f2d14, _0x18a6ab, _0x4178cd);
          }
          _0x3efdf7 || _0x183992.isMock;
          let _0x4fc9c2 = {};
          if (_0x5f0c4f.a.isAPP() ? !_0x4ed319.appType && delete _0x4ed319.appType : _0x4ed319.appType = _0x4ed319.appType || Object(_0x16b7db.a)("appType"), "object" === typeof _0x183992.extensionData && null !== _0x183992.extensionData && Object.keys(_0x183992.extensionData).forEach(_0x32a6e0 => {
            const _0x165f4e = {
              NODE_ENV: "production",
              PUBLIC_URL: ".",
              WDS_SOCKET_HOST: undefined,
              WDS_SOCKET_PATH: undefined,
              WDS_SOCKET_PORT: undefined,
              FAST_REFRESH: true,
              REACT_APP_JS_ENV: "prod",
              REACT_APP_API_ENV: "PRD",
              REACT_APP_NODE_ENV: "production",
              REACT_APP_API_URL: "https://mapi.bestpay.com.cn/mapi/",
              REACT_APP_NEW_API_URL: "https://mapi-h5.bestpay.com.cn/gapi/",
              REACT_APP_NEW_BASE_URL: "https://gw.bestpay.com.cn/gwin/",
              REACT_APP_H5_URL: "https://h5.bestpay.cn",
              REACT_APP_QY_AGREEID: "20200814030100033629725645602883",
              REACT_APP_QY_525API_AGREEID: "20200903030100040983812988993549",
              REACT_APP_QYBUSIORDER_AGREEID: "20200903030100040983812988993549",
              REACT_APP_USERINFO_AGREEID: "20210518030100134138528408797188",
              REACT_APP_5G_AGREEID: "20200813030100033341949993813043",
              REACT_APP_VIPPRODUCT_AGREEID: "20210310030100109056788136984665",
              REACT_APP_GOODS_AGREEID: "20201013030100055418786458633268",
              REACT_APP_MERCHANT_AGREEID: "20201030030100061577048795119698",
              REACT_APP_US_AUTH_AGREEID: "20200914030100044906094048314418",
              REACT_APP_YY_BATCH: "20200827030100038416476813657090",
              REACT_APP_NEW_NEW_GOODS: "20210805030100162698325022212187",
              REACT_APP_EQUITY_AGREEID: "20211216030100210919654787383364",
              REACT_APP_BUILD_BUSINESS_ORDER_AGREEID: "20211223030100213484984697094168",
              REACT_APP_PAY_AGREEID: "20211223030100213484984697094168",
              REACT_APP_COMMUNICATION_API_URL: "https://czapp.bestpay.com.cn",
              REACT_APP_CZ_URL: "https://cz.bestpay.com.cn/indexx.html",
              REACT_APP_BIANWA_URL: "https://bestpaylife.bianwa.com/",
              REACT_APP_IMAGE_URL: "https://resource.bestpay.com.cn/",
              REACT_APP_MAS_POINT_API: "https://mas.bestpay.com.cn/loggw/webLog.do",
              REACT_APP_MERCHANT_JS_URL: "https://cdn.bestpay.cn/marketing/personalFinance/subapp/bestpaymall-h5/js/MerchantComponent.prod.min.js",
              REACT_APP_CURRENT_ENV: "prod"
            };
            _0x4ed319[_0x32a6e0] = "agreeId" === _0x32a6e0 ? Object(_0x165f4e)[_0x183992.extensionData[_0x32a6e0]] : _0x183992.extensionData[_0x32a6e0];
          }), _0x4ed319 = await this.asyncBuildParams(_0x4ed319, _0x4ac6ae, _0x35bf2b, _0x3f2d14).catch(_0x4f2a40 => (_0x526c27 && _0x5f0c4f.a.showToast("网络或服务器异常，请稍后再试。"), _0x4178cd(_0x4f2a40), null)), !_0x4ed319) {
            return _0x4178cd(null);
          }
          let _0x36342a;
          const _0x118c43 = (_0x2bea58 || _0x5854c3 || _0x34bc46 || _0x113c60) && !_0x54d5ab;
          if (_0x118c43) {
            var _0x55b232;
            let _0x394a27 = true;
            if (_0x2bea58 && (_0x4fc9c2 = await this.buildParamsOnly(_0x4ed319, _0x523511, _0x4ac6ae).catch(_0x1d9b77 => (_0x4178cd(_0x1d9b77), _0x394a27 = false, _0x1d9b77))), _0x5854c3 && (_0x4fc9c2 = await this.asyncBuildCAParams(_0x4ed319, _0x523511, _0x4ac6ae, _0x3639e5, {
              tempParam: _0x3f2d14,
              resolve: _0x18a6ab,
              reject: _0x4178cd
            }).catch(_0x102172 => (_0x4178cd(_0x102172), _0x394a27 = false, _0x102172))), _0x34bc46 || _0x113c60) {
              var _0x346867;
              const _0x2169b5 = (_0x5f0c4f.a.getItem("vip_5g_userInfo") || {}).sessionId || "2023062716350011";
              if (_0x4fc9c2 = await _0x3dace6.a.upDownlinkEncryptParams(_0x4ed319, _0x2169b5, _0x13b059).catch(_0x41996b => (_0x4178cd(_0x41996b), _0x394a27 = false, _0x41996b)), _0x36342a = (null === (_0x346867 = _0x4fc9c2) || undefined === _0x346867 ? undefined : _0x346867.rk) || "", _0x4fc9c2 && delete _0x4fc9c2.rk, _0x588f6f && "querySimplePerInfoByAlias" !== _0x4ac6ae) {
                const _0x51552d = await _0x3dace6.a.reqQuerySimplePerInfoByAlias(_0x4ed319.env).catch(_0xc2c203 => (_0x4178cd(_0xc2c203), _0x394a27 = false, _0xc2c203));
                _0x4fc9c2 = Object(_0x3a6adf.a)(Object(_0x3a6adf.a)({}, _0x4fc9c2), _0x51552d);
              }
            }
            if (!_0x394a27) {
              return _0x4178cd(null);
            }
            _0x4ed319 = (null === (_0x55b232 = _0x4fc9c2) || undefined === _0x55b232 ? undefined : _0x55b232.lastParams) || _0x4fc9c2;
          }
          if (!_0x4ed319) {
            return _0x4178cd(null);
          }
          const _0x2cf48b = {
            NODE_ENV: "production",
            PUBLIC_URL: ".",
            WDS_SOCKET_HOST: undefined,
            WDS_SOCKET_PATH: undefined,
            WDS_SOCKET_PORT: undefined,
            FAST_REFRESH: true,
            REACT_APP_JS_ENV: "prod",
            REACT_APP_API_ENV: "PRD",
            REACT_APP_NODE_ENV: "production",
            REACT_APP_API_URL: "https://mapi.bestpay.com.cn/mapi/",
            REACT_APP_NEW_API_URL: "https://mapi-h5.bestpay.com.cn/gapi/",
            REACT_APP_NEW_BASE_URL: "https://gw.bestpay.com.cn/gwin/",
            REACT_APP_H5_URL: "https://h5.bestpay.cn",
            REACT_APP_QY_AGREEID: "20200814030100033629725645602883",
            REACT_APP_QY_525API_AGREEID: "20200903030100040983812988993549",
            REACT_APP_QYBUSIORDER_AGREEID: "20200903030100040983812988993549",
            REACT_APP_USERINFO_AGREEID: "20210518030100134138528408797188",
            REACT_APP_5G_AGREEID: "20200813030100033341949993813043",
            REACT_APP_VIPPRODUCT_AGREEID: "20210310030100109056788136984665",
            REACT_APP_GOODS_AGREEID: "20201013030100055418786458633268",
            REACT_APP_MERCHANT_AGREEID: "20201030030100061577048795119698",
            REACT_APP_US_AUTH_AGREEID: "20200914030100044906094048314418",
            REACT_APP_YY_BATCH: "20200827030100038416476813657090",
            REACT_APP_NEW_NEW_GOODS: "20210805030100162698325022212187",
            REACT_APP_EQUITY_AGREEID: "20211216030100210919654787383364",
            REACT_APP_BUILD_BUSINESS_ORDER_AGREEID: "20211223030100213484984697094168",
            REACT_APP_PAY_AGREEID: "20211223030100213484984697094168",
            REACT_APP_COMMUNICATION_API_URL: "https://czapp.bestpay.com.cn",
            REACT_APP_CZ_URL: "https://cz.bestpay.com.cn/indexx.html",
            REACT_APP_BIANWA_URL: "https://bestpaylife.bianwa.com/",
            REACT_APP_IMAGE_URL: "https://resource.bestpay.com.cn/",
            REACT_APP_MAS_POINT_API: "https://mas.bestpay.com.cn/loggw/webLog.do",
            REACT_APP_MERCHANT_JS_URL: "https://cdn.bestpay.cn/marketing/personalFinance/subapp/bestpaymall-h5/js/MerchantComponent.prod.min.js",
            REACT_APP_CURRENT_ENV: "prod"
          };
          const _0x77eae9 = {
            "Content-Type": _0x186c78 || "application/json;charset=utf-8"
          };
          const _0x5851ae = Object(_0x2cf48b)[_0x183992.BASEURL || "REACT_APP_NEW_API_URL"];
          const _0xa0ae73 = _0x18627b.toUpperCase();
          const _0x220b5f = {
            method: _0x18627b,
            headers: _0x77eae9,
            baseURL: _0x5851ae,
            url: _0x183992.url,
            data: "POST" === _0xa0ae73 || "PUT" === _0xa0ae73 ? "application/x-www-form-urlencoded" === _0x186c78 ? _0x5f0c4f.a.queryconcat(_0x4ed319) : _0x4ed319 : null,
            params: "GET" === _0xa0ae73 || "DELETE" === _0xa0ae73 ? _0x4ed319 : null,
            timeout: _0x2f4adf
          };
          let _0x41c62d = _0x50ef0b.a.create();
          _0x54d5ab && (_0x41c62d = _0x25d31d.create());
          this.setInterceptor(_0x41c62d, _0x4ac6ae, _0x523511, _0x16526d, _0xd04483, _0x183992);
          _0x41c62d(_0x54d5ab ? {
            urlObj: _0x183992,
            params: _0x4ed319,
            options: Object(_0x3a6adf.a)(Object(_0x3a6adf.a)({}, _0x13b059), {}, {
              serviceName: _0x4ac6ae,
              headers: _0x220b5f.headers
            })
          } : _0x220b5f).finally(() => {}).then(async _0x4a4a22 => {
            if (!_0x4a4a22.data) {
              return void _0x4178cd(_0x4a4a22);
            }
            if (window.isCacheEncryptFactor && ["API010B008", "A11004", "A11003", "B007", "B008", "9801B007", "9801B008", "9801B004"].indexOf(_0x4a4a22.data.errorCode || _0x4a4a22.data.code || _0x4a4a22.data.RESPONSECODE) > -1) {
              _0x3f2d14.options.isRefreshKey = true;
              return this.retryRun(_0x3f2d14).then(_0x191969 => {
                _0x18a6ab(_0x191969);
              }).catch(_0x390958 => {
                _0x4178cd(_0x390958);
              });
            }
            if (["100003", "100008", "AA0025", "010040", "API018B001"].indexOf(_0x4a4a22.data.errorCode || _0x4a4a22.data.RESPONSECODE) > -1) {
              if (_0x183992.isExistUserInfoNoAuth) {
                _0x4178cd(_0x4a4a22.data);
              } else {
                this.deleteParams();
                const _0x5d782c = Object(_0x16b7db.a)("appType");
                if (["94", "117"].indexOf(_0x5d782c) > -1) {
                  if (this.isLogin) {
                    return;
                  }
                  const _0x531224 = _0x5f0c4f.a.getQueryObject();
                  let _0x44561b = "/pages/logintransit/index";
                  const _0x32f2af = {
                    action: "getNewSessionkey"
                  };
                  "117" === _0x5d782c && (_0x44561b = "/pagesA/xcxlogin/index");
                  wx.miniProgram.navigateTo({
                    url: "".concat(_0x44561b, "?url=").concat(encodeURIComponent("".concat(_0x5f0c4f.a.getH5domain(), "/subapps/telecom-member-h5/rights-prefecture/main.html?key=").concat(encodeURIComponent(_0x5f0c4f.a.genKey(_0x32f2af, "117" === _0x5d782c ? "QYYB" : "5GZQ")), "&isUrlParamMerge=FALSE&").concat(_0x5f0c4f.a.queryconcat(_0x531224), "#").concat(_0x531224.HASH)))
                  });
                  this.isLogin = true;
                  _0x5f0c4f.a.hideLoading();
                  return void setTimeout(() => {
                    this.isLogin = false;
                  }, 3000);
                }
                const _0x4dfe41 = {
                  productNo: null,
                  sessionKey: null,
                  operatorNo: null
                };
                if (Object(_0x16b7db.b)("GlobalState", _0x4dfe41), !_0x5f0c4f.a.isAPP()) {
                  if (this.isLogin) {
                    return;
                  }
                  this.isLogin = true;
                  localStorage.removeItem("vip_5g_userInfo");
                  try {
                    const _0xbb9b56 = {
                      preName: "BestpayHtml5_",
                      key: "sessionKey"
                    };
                    const _0x28f0a4 = {
                      preName: "BestpayHtml5_",
                      key: "userInfo"
                    };
                    BestpayHtml5.Storage.deleteValue(_0xbb9b56, function () {}, function () {}, function () {});
                    BestpayHtml5.Storage.deleteValue(_0x28f0a4, function () {}, function () {}, function () {});
                    BestpayHtml5.deleteLoginInfo && BestpayHtml5.deleteLoginInfo();
                  } catch (_0x200e49) {}
                  _0x5f0c4f.a.showToast("登录已失效，请重新登录");
                  window.isAllRefresh = true;
                  return void setTimeout(() => {
                    if (window.OffOutToLoginReload) {
                      _0x1f7e0f.a.replace("/login");
                      _0x5f0c4f.a.hideLoading();
                      setTimeout(() => {
                        this.isLogin = false;
                      }, 2000);
                    } else {
                      const _0x1742bf = {
                        key: null
                      };
                      const _0x41a612 = window.location.href;
                      const _0x5e3b43 = _0x5f0c4f.a.updateUrlParams(_0x41a612, _0x1742bf, "all");
                      const _0x100e36 = {
                        key: null
                      };
                      _0x5f0c4f.a.updateUrlParams(_0x41a612, _0x100e36, "hash").indexOf("key=") > -1 ? window.location.replace(_0x5e3b43) : (window.location.replace(_0x5e3b43), window.location.reload(), setTimeout(() => {
                        _0x41a612 === window.location.href && (_0x1f7e0f.a.replace("/login"), _0x5f0c4f.a.hideLoading(), setTimeout(() => {
                          this.isLogin = false;
                        }, 2000));
                      }, 1000));
                    }
                  }, 100);
                }
                if (this.isLogin) {
                  return this.AddRequest(_0x3f2d14, _0x18a6ab, _0x4178cd);
                }
                let _0x2e4f8f = Object(_0x16b7db.a)("errorCount") || 0;
                if (Object(_0x16b7db.b)("errorCount", ++_0x2e4f8f), _0x2e4f8f = Object(_0x16b7db.a)("errorCount"), 3 === _0x2e4f8f) {
                  Object(_0x16b7db.b)("errorCount", 0);
                  return this.redirectIndex(false);
                }
                const _0x3d2028 = {
                  loginChannel: _0x4ed319.entranceChannel || "5G"
                };
                this.isLogin = true;
                this.AddRequest(_0x3f2d14, _0x18a6ab, _0x4178cd);
                this.getParams("User", "autoLogin", null, _0x3d2028).then(() => {
                  setTimeout(() => {
                    Object(_0x16b7db.b)("isLoginSuccess", true);
                    this.flushQueue();
                  }, 500);
                }).catch(_0x3c23cc => {
                  window.isOpenNoLogin ? this.flushQueue() : (_0x5f0c4f.a.showToast("登录异常，请稍后重试", undefined, true), setTimeout(() => {
                    _0x5f0c4f.a.AgainLogin();
                    this.isLogin = false;
                  }, 2000));
                });
              }
              return;
            }
            const {
              errorCode: _0xcae70e,
              ERRORCODE: _0x8fdd09,
              RESPONSECODE: _0x58d571,
              success: _0x338ed2,
              message: _0x1e49dd,
              code: _0x4ca52e
            } = _0x4a4a22.data;
            let {
              result: _0x354be4
            } = _0x4a4a22.data;
            if ([_0xcae70e, _0x8fdd09, _0x58d571].indexOf("000000") > -1 || _0x338ed2 || "SUCCESS" === _0x1e49dd) {
              if (_0x2bea58 && null === (_0x4a4a22 = _0x53d7c9.dealRes(_0x4fc9c2, _0x4a4a22)).data.result) {
                _0x526c27 && _0x5f0c4f.a.showToast("数据异常，请稍后再试。");
                return _0x4178cd(_0x4a4a22.data);
              }
              if (_0x113c60) {
                try {
                  const _0x3e33bb = _0x3dace6.a.upDownlinkDecodeParams(_0x354be4, _0x36342a);
                  _0x354be4 = _0x3e33bb && JSON.parse(_0x3e33bb) || {};
                } catch (_0x43f155) {
                  if (_0x544263 < 3 && _0x43f155 instanceof URIError) {
                    _0x544263++;
                    return this.retryRun(_0x3f2d14).then(_0x122b55 => {
                      _0x18a6ab(_0x122b55);
                    }).catch(_0x486f43 => {
                      _0x4178cd(_0x486f43);
                    });
                  }
                }
              }
              if (("10000" === _0x4ca52e || _0x21da31 && _0x338ed2) && "getH5PublicKey" !== _0x4ac6ae) {
                return _0x354be4.ok ? _0x18a6ab(_0x354be4.t) : (_0x526c27 && _0x5f0c4f.a.showToast(_0x354be4.errMsg || "网络或服务器异常，请稍后再试。"), _0x4178cd(_0x354be4));
              }
              _0x18a6ab(_0x4a4a22.data);
            } else {
              _0x526c27 && _0x5f0c4f.a.showToast(_0x4a4a22.data && _0x4a4a22.data.errorMsg || "网络或服务器异常，请稍后再试。");
              _0x4178cd(_0x4a4a22.data);
            }
          }).catch(_0xec5b82 => {
            _0xec5b82 && _0xec5b82.__CANCEL__ ? Object(_0x16b7db.b)("errorCount", 0) : (_0x526c27 && _0x5f0c4f.a.showToast("网络或服务器异常，请稍后再试。"), _0x4178cd(_0xec5b82));
          });
        });
      }
      async asyncBuildParams(_0x1b1079, _0x41c072) {
        let _0xdb62df = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : [];
        let _0x272a81 = arguments.length > 3 ? arguments[3] : undefined;
        const _0x1ac93c = _0x5f0c4f.a.isAPP();
        _0x1b1079.fromchannelId = _0x272a81.params.fromchannelId || (_0x1ac93c ? "APP" : "H5");
        _0x1b1079.fromChannelId = _0x1b1079.fromchannelId;
        _0x1b1079.traceLogId = _0x5f0c4f.a.getTraceLogId();
        const _0x902dbd = _0x5f0c4f.a.getItem("vip_5g_userInfo");
        const _0x3ec403 = Object(_0x16b7db.a)("GlobalState");
        const _0x3bfa93 = _0x272a81.options.isLogin;
        const _0x406414 = {
          noAutoLogin: true
        };
        const _0x461581 = {
          noAutoLogin: true
        };
        (_0x3bfa93 || _0x902dbd || "" === _0x41c072) && (_0x1b1079.productNo = _0x1b1079.productNo || _0x3ec403.productNo || (await this.getParams("User", "getProductNo", "productNo", _0x406414)), "phoneNo" in _0x1b1079 && !_0x1b1079.phoneNo && (_0x1b1079.phoneNo = _0x1b1079.productNo), _0x1b1079.sessionKey = _0x3ec403.sessionKey || (await this.getParams("User", "getSessionKey", "sessionKey", _0x461581)));
        _0x902dbd && _0x3bfa93 && this.setUserInfo({
          productNo: _0x1b1079.productNo,
          sessionKey: _0x1b1079.sessionKey
        });
        return window.offNotUserInfo || !_0x3bfa93 || _0x1b1079.productNo && _0x1b1079.sessionKey ? (_0xdb62df.map(_0x588bea => (delete _0x1b1079[_0x588bea], _0x588bea)), _0x1b1079) : null;
      }
      async asyncBuildCAParams(_0x4d9ee7, _0x228b09, _0x5c880b) {
        let _0x30ba12 = arguments.length > 3 && undefined !== arguments[3] && arguments[3];
        let _0x24edf4 = arguments.length > 4 ? arguments[4] : undefined;
        return new Promise((_0x1a43e9, _0x3a5220) => {
          const _0x2a4802 = this;
          (async () => {
            if (window.isCacheEncryptFactor && this.isApplyLoginFactor) {
              return this.AddRequest(_0x24edf4.tempParam, _0x24edf4.resolve, _0x24edf4.reject);
            }
            if (window.isCacheEncryptFactor && this.resultFactor && !_0x30ba12) {
              try {
                return _0x119a0a(this.resultFactor, this.resultFactor.result.productNo);
              } catch (_0x28049a) {}
            }
            const _0x4870d4 = "".concat(_0x5f0c4f.a.randomNum(1, 99999));
            this.isApplyLoginFactor = window.isCacheEncryptFactor;
            function _0x119a0a(_0x3829fe, _0xcd6d2e) {
              if (null !== _0x3829fe) {
                try {
                  const _0xd63822 = _0x5f0c4f.a.isAPP();
                  const _0x571dd0 = JSON.stringify(_0x4d9ee7);
                  const _0x48279c = _0x3dace6.a.generateMixed();
                  const _0x262ba4 = _0x3829fe.result.nonce;
                  const _0x307d33 = _0x3dace6.a.h5CommonRsa(_0x262ba4, _0x48279c);
                  const _0x5b9b3a = _0x3dace6.a.AES_EncodeForCA(_0x571dd0, _0x48279c).replace(/\n/g, "");
                  const _0x443754 = _0x3dace6.a.h5MD5(_0x571dd0);
                  _0x10c12b.size(256);
                  const _0x62f2cf = {
                    data: _0x5b9b3a,
                    key: _0x307d33,
                    sign: _0x443754,
                    productNo: _0xcd6d2e
                  };
                  _0x4d9ee7.encyType && (_0x62f2cf.encyType = _0x4d9ee7.encyType);
                  _0x62f2cf.traceLogId = _0x4d9ee7.traceLogId;
                  _0x62f2cf.fromchannelId = _0x4d9ee7.fromchannelId || (_0xd63822 ? "APP" : "H5");
                  _0x62f2cf.fromChannelId = _0x62f2cf.fromchannelId;
                  _0x3829fe.result.productNo = _0xcd6d2e;
                  _0x2a4802.resultFactor = _0x3829fe;
                  _0x1a43e9(_0x62f2cf);
                } catch (_0x2b002d) {
                  _0x3a5220(null);
                }
              } else {
                _0x3a5220(null);
              }
            }
            const _0x17362e = {
              productNo: _0x4870d4,
              requestType: "H5",
              callback: ""
            };
            const _0x3bab05 = {
              method: "POST",
              filter: ["sessionKey"],
              isShowMessage: false,
              isLoading: _0x228b09,
              serviceNameUse: _0x5c880b,
              isEncryption: true
            };
            _0x119a0a(await this.run("applyLoginFactor", _0x17362e, _0x3bab05).catch(_0xb9f039 => null), _0x4870d4);
            !this.isLogin && this.isApplyLoginFactor && this.flushQueue();
            this.isApplyLoginFactor = false;
          })();
        });
      }
      buildParamsOnly() {
        let _0x199c87 = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        let _0x320bbd = arguments.length > 1 ? arguments[1] : undefined;
        let _0x11a686 = arguments.length > 2 ? arguments[2] : undefined;
        return new Promise((_0x19f723, _0xee93f3) => {
          let _0x27cfe9 = 0;
          const _0x2d9507 = (_0x5df3ef, _0x3967a5, _0x59665d) => {
            const _0x46cd12 = {};
            const _0x32d383 = {
              openId: _0x5df3ef.productNo ? _0x5df3ef.productNo : _0x53d7c9.createOpenId(),
              encyType: "C006"
            };
            const _0x262eaf = _0x5f0c4f.a.isAPP();
            _0x5df3ef.encyType && (_0x32d383.encyType = _0x5df3ef.encyType);
            _0x5df3ef.fromChannelId = _0x5df3ef.fromChannelId || (_0x262eaf ? "APP" : "H5");
            _0x5df3ef.fromchannelId = _0x5df3ef.fromChannelId || (_0x262eaf ? "APP" : "H5");
            const _0x166d29 = {};
            const _0x1bc905 = {
              isShowMessage: false,
              isLoading: _0x3967a5,
              serviceNameUse: _0x59665d,
              isEncryption: true
            };
            this.run("getPublicKey", {}, _0x1bc905).then(_0x1e308d => {
              const _0x49433b = _0x1e308d.result;
              _0x46cd12.serverRsaPublicKey = _0x49433b;
              const _0x5b810b = new _0xb19287();
              _0x46cd12.clientRsaPublicKey = _0x5b810b.getPublicKeyB64();
              _0x46cd12.clientRsaPrivateKey = _0x5b810b.getPrivateKeyB64();
              const _0x33a8fa = {
                clientRsaPublicKey: _0x46cd12.clientRsaPublicKey,
                openId: _0x32d383.openId
              };
              _0x5b810b.setPublicKey(_0x49433b);
              let _0x1afc04 = _0x5b810b.encrypt(JSON.stringify(_0x33a8fa));
              let _0x59a271 = 0;
              for (; /==$/.test(_0x1afc04) && _0x59a271 < _0x364aec;) {
                _0x1afc04 = _0x5b810b.encrypt(JSON.stringify(_0x33a8fa));
                _0x59a271++;
              }
              const _0x4f403c = {
                encData: _0x1afc04
              };
              const _0x26cb76 = {
                isShowMessage: false,
                isLoading: _0x3967a5,
                serviceNameUse: _0x59665d,
                isEncryption: true
              };
              this.run("getAesKey", _0x4f403c, _0x26cb76).then(_0x548feb => {
                try {
                  const _0x329b36 = _0x548feb.result;
                  _0x5b810b.setPrivateKey(_0x46cd12.clientRsaPrivateKey);
                  const _0x40c355 = JSON.parse(_0x5b810b.decryptLong(_0x329b36));
                  _0x5b810b.setPublicKey(_0x49433b);
                  if (_0x5b810b.verify(_0x46cd12.clientRsaPublicKey, _0x40c355.clientRsaPublicKeySign, _0x1654c1.SHA512)) {
                    const _0x106811 = _0x40c355.aesKey;
                    _0x10c12b.size(256);
                    _0x32d383.encData = _0x10c12b.aesEncrypt(JSON.stringify(_0x5df3ef), _0x106811);
                    _0x5b810b.setPrivateKey(_0x46cd12.clientRsaPrivateKey);
                    const _0x389e31 = _0x5b810b.sign(_0x106811, _0x1654c1.SHA512, "sha512");
                    if (/==$/.test(_0x389e31) && _0x27cfe9 < _0x5344ce) {
                      _0x2d9507(_0x5df3ef, _0x3967a5, _0x59665d);
                      return void _0x27cfe9++;
                    }
                    _0x32d383.aesKeySign = _0x389e31;
                    _0x166d29.lastParams = _0x32d383;
                    _0x166d29.aesKey = _0x106811;
                    _0x19f723(_0x166d29);
                  } else {
                    _0xee93f3(_0x548feb);
                  }
                } catch (_0x501e9a) {
                  _0xee93f3(_0x501e9a);
                }
              }).catch(_0x32c32a => {
                if ("A99999" === _0x32c32a.errorCode && _0x24fa2c < _0x5344ce) {
                  _0x2d9507(_0x5df3ef, _0x3967a5, _0x59665d);
                  return void _0x24fa2c++;
                }
                _0xee93f3(_0x32c32a);
              });
            }).catch(_0x5024ff => {
              _0xee93f3(_0x5024ff);
            });
          };
          _0x2d9507(_0x199c87, _0x320bbd, _0x11a686);
        });
      }
    }
    _0xf76427.a = new _0x53d7c9();
  }
}]);