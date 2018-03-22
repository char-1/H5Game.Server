module.exports = {
    // 状态码(code)
    OK: 200,															// 操作成功
    FAILD: 201,															// 操作失败
    ERROR: 500,															// 操作不合法
    //公共错误代码
    PLAYER_NOT_FOUND: 900000,//玩家不存在
    PLAYER_HAS_LOGED: 900001,//玩家已登录
    PLAYER_HAS_LOCKED: 900002,//玩家不可用
    PLAYER_NOT_LOGIN: 900003,//玩家未登录
    INVALID_PARAMETER: 800000,//参数非法
    MISSING_PARAMETER: 800001,//参数缺失
    // 错误码(msg)
    LOGIN_ACCOUNT_NULL: 100001,//登录帐号为空
    LOGIN_VERIFY_CODE_NULL: 100002//登录验证码为空
};

