'use strict';

const { Service } = require('egg');

class WxBizDecryptMsgService extends Service {
    
  constructor(sToken, sEncodingAESKey, sAppid) {  
    // jiemi



  }
  // 解密
  async decode(sMsgSignature, sTimeStamp, sNonce, sPostData, sMsg){
    // 

  }
  // 加密
  async encode(sReplyMsg, sTimeStamp, sNonce, sEncryptMsg){


  }
}

module.exports = WxBizDecryptMsgService;
