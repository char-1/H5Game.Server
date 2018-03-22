module.exports = {
    // 状态码(code)
    OK: 200,															// 操作成功
    FAILD: 201,															// 操作失败
    ERROR: 500,															// 操作不合法

    // 错误码(msg)
    GATE_NO_CONNECTOR: '101',						// 无连接服务
    ILLEGAL: '102',						// 参数非法
    FREQUENT_REQUESTS: '103',						// 请求太频繁
    PLAYER_HAS_LOGGED: '201',						// 玩家已经登录
    PLAYER_MISSING_ID: '202',						// 缺少id参数
    PLAYER_NOT_LOGIN: '203',						// 玩家未登录
    PLAYER_NOT_FOUND: '204',						// 玩家不存在
    PLAYER_NOT_READY: '205',						// 有玩家没有准备
    PLAYER_NOT_OWNER: '206',						// 不是房主
    PLAYER_NOT_ENOUGH: '207',						// 玩家人数不足
    PLAYER_NOT_FREE: '208',						// 玩家不在空闲状态
    PLAYER_NOT_CALLING: '209',						// 玩家不在叫倍状态
    PLAYER_NOT_PLAYING: '210',						// 玩家不在游戏状态
    PLAYER_SAME_USERNAME: '211',						// 存在相同的用户名
    PLAYER_PASSWORD_WRONG: '212',						// 密码错误
    PLAYER_HAS_CHANGENAME: '213',						// 已修改过昵称
    PLAYER_IS_FROZEN: '214',						// 玩家已冻结
    PLAYER_WRONG_CHECKCODE: '220',						// 验证码错误
    PLAYER_HAS_BINDED: '221',                     //玩家已绑定
    PLAYER_PASSWORD_NOTALLOW: '222',            //密码不能与旧密码相同或禁止使用
    PLAYER_HAS_CHANGE_SAFEPASS: '223',			 // 今日已修改过保险箱密码
    PLAYER_BANK_FROZEN: '224',			        // 密码错误达到上限,保险箱已锁定
    PLAYER_UNBIND_CASHACCOUNT: '225',			        // 玩家未绑定提现账户
    GAME_PARAM_ERROR: '301',						// 请求参数错误
    GAME_HAS_ALREADY: '302',						// 已经在游戏中
    GAME_NOT_IN_GAME: '303',						// 不在游戏中
    GAME_GOLD_SMALL: '304',						// 下注金币不足
    GAME_GOLD_ERROR: '305',						// 下注金币错误
    GAME_BET_ID_ERROR: '306',						// 下注编号错误
    GAME_BANKER_BET: '307',						// 庄家不能下注
    GAME_ALREADY_BANKER: '308',						// 已经上庄过了
    GAME_NOT_BANKER: '309',						// 并未上庄过
    GAME_NOT_BETING: '310',						// 封盘停止下注
    GAME_NEXT_NOBANKER: '311',						// 下局将不是庄
    GAME_SEAT_HAS_ONE: '312',						// 座位上有人了
    GAME_SEAT_NOT_FOUND: '313',						// 座位未找到
    GAME_BET_NOREDPACK: '314',						// 下注后不能发红包
    GAME_BANKER_NOREDPACK: '315',						// 庄家不能发红包
    GAME_UNENOUGH_REDPACK: '316',						// 不够发红包
    GAME_BANKERS_FULL: '317',						// 上庄列表已满
    GAME_HAS_SEAT: '318',						// 已经坐下了
    GAME_LOW_VIP: '319',						// VIP等级不够
    GAME_CHAT_TOO_SOON: '320',						// 聊天太频繁
    GAME_HAVE_NO_TIMES: '321',						// 比武卡不足
    GAME_WRONG_PWD: '322',						// 游戏密码错误
    GAME_HAS_SET: '323',						// 已经出拳
    GAME_NOT_FULL: '324',						// 未做满
    GAME_BANKER_NOT_SEAT: '325',						// 庄家不能坐座位
    GAME_TBET_OVER_LIMIT: '326',						// 总下注超过限制
    GAME_BET_COOL_DOWN: '327',						// 下注冷却
    GAME_TO_NO_TIMES: '328',						// 21点游戏次数不足
    GAME_CHAT_TACTFUL: '329',                   //提交字符包含系统禁止的敏感字
    GAME_CHAT_LIMIT_FORMAL: '330',                //非正式会员不允许发送聊天信息
    GAME_BANKER_LIMIT_FORMAL:'331',            //游客不允许上庄
    HALL_LOW_VIP: '401',						// VIP等级不够
    HALL_HAS_REWARD: '402',						// 已经发布打赏
    HALL_NO_MONEY_TREE: '403',						// 没有摇钱树
    HALL_NO_ENOUGH_MONEY: '404',						// 没有足够的金币
    HALL_NO_ENOUGH_NODE: '405',						// 没有足够的点卷
    HALL_NOT_FOUND: '406',						// 未找到
    HALL_NOT_COMPLETE: '407',						// 未完成
    HALL_HAS_GET: '408',						// 已获取
    HALL_PARAM_ERROR: '409',						// 请求参数错误
    HALL_UNENOUGH_GOLD: '410',						// 金币不足存入
    HALL_UNENOUGH_BANK: '411',						// 银行不足取出
    HALL_UNENOUGH_MSG: '412',						// 金币不足喇叭
    HALL_REWARD_EXPIRE: '413',						// 打赏过期
    HALL_GAME_NOBANK: '414',						// 游戏中不能存入
    HALL_REDPACK_OVER: '415',						// 红包被抢完
    HALL_REDPACK_NOFOUND: '416',						// 红包未找到
    HALL_NO_THIS_REWARDS: '417',						// 没有该打赏
    HALL_WRONG_REARDS_GOLD: '418',						// 错误的打赏金额
    HALL_NO_REWARD_SELF: '419',						// 不能打赏自己
    HALL_NOT_GET_JJG: '420',						// 不能领取救济金
    HALL_HAS_GET_ALL: '421',						// 已获取所有救济金
    HALL_CARD_NOT_BUY: '422',						// 月卡尚未购买
    HALL_CARD_SENCOND_GET: '423',						// 月卡今日已领取
    HALL_MONTHCARD_OVERDUE: '424',						// 月卡已经过期
    HALL_NO_DRAW: '425',						// 该玩法不存在
    HALL_NOT_TIME: '426',						// 不在抽奖时间内
    HALL_NO_GOLD: '427',						// 金币不足
    HALL_NO_TIMES: '428',						// 没有抽奖次数
    HALL_NO_TICKETS: '429',						// 没有奖券
    HALL_NO_GIFT: '430',						// 没有该ID的奖品
    HALL_NO_PROPOSAL_TIMES: '431',						// 今天没有提交次数
    HALL_REWARD_FULL: '432',						// 当前打赏已满
    HALL_NO_RECHARGE: '433',						// 未充值
    HALL_HAS_FORTUNE: '434',						// 已抽奖
    HALL_FORTUNE_NOT_FOUND: '435',						// 未找到转盘数据
    HALL_HAS_GET_GOLD: '436',						// 已经领取

    TABLE_NOT_FOUND: '501',						// 桌子未找到
    TABLE_HAS_ALREADY: '502',						// 已经在桌子上
    TABLE_NOT_USER: '503',						// 不在桌子上
    TABLE_IS_FULL: '504',						// 桌子已被坐满
    TABLE_NOT_FREE: '505',						// 桌子不是空闲状态
    TABLE_NOT_CALLING: '506',						// 桌子不是叫倍状态
    TABLE_NOT_PLAYING: '507',						// 桌子不是游戏状态
    TABLE_MUL_ERROR: '508',						// 指定倍数非法
    TABLE_NO_HANDCARD: '509',						// 没有手牌
    TABLE_COMMIT_ERROR: '510',						// 提交牌型错误
    TABLE_REPEAT_COMMIT: '511',						// 重复提交
    TABLE_NOT_GOLD: '512',						// 金币不够
    TABLE_NOT_AUTH: '513',						// 牌型错误
    TABLE_SCORE_CHANGED: '514',						// 底分已经修改

    COMPE_NOT_BEGIN: '601',						// 竞猜未开始
    COMPE_HAS_END: '602',						// 竞猜已结束
    COMPE_HAS_BET: '603',						// 竞猜已下注
    COMPE_NO_GOLD: '604',						// 金币不足
    COMPE_ERR: '605',						        // 没有竞猜
    COMPE_NO_ACER: '606',						// 元宝不足
    CLOWN_GAME_OVER: '701',						// 没小丑已结束
    MAIL_OPTIONS_NONE: '801'                     //邮件附件已领取或不存在
};

