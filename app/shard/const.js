module.exports = {
    //任务类型
    TASK_TYPE: {
        'seeueveryday': 0,//见面礼
        'win': 1,//胜利任务
        'playgame': 2,//玩游戏
        'dobanker': 3,//游戏坐庄
        'recharge': 4,//充值任务
        'bombbanker': 5//坐庄爆庄
    },
    //通知类型
    NOTICE_TYPE: {
        'task': 1,//任务
        'reward': 4,//
        'mail': 2,//邮件
        'mt': 3
    },
    //游戏角标类型
    GAME_CORNER:
        {
            'NONE': 0,//无
            'NEW': 1,//新游戏
            'HOT': 2,//热门游戏
            'RECOM': 3//推荐游戏
        },
    //商城商品类型
    SHOP_PRODUCTTYPE: {
        'goldingots': 1,//元宝
        'monthcard': 2,//月卡
        'gold': 3,//金币
    },
    //玩家类型
    PLAYER_TYPE: {
        'TOURIST': 0,//游客玩家
        'FORMAL': 1,//正式玩家
        'ROBOT': -1 //机器人
    }
    ,
    //编码类型
    MAXID_TYPE: {
        'Player': 1//玩家账号
    },
    //附件类型
    OPTIONS_TYPE: {
        'GOLD': 0,//金币
        'ACER': 1//元宝
    },
    //1开头 百人扑克   2开头 水果机类  3开头 走地百人
    GAME_ID: {
        'NIUNIU_MIN': 10031,   //牛牛初级
        'NIUNIU_MID': 10032,   //牛牛中级
        'NIUNIU_MAX': 10033,   //牛牛高级
        'GOLDEN_MIN': 10021,   //金花初级
        'GOLDEN_MID': 10022,   //金花中级
        'GOLDEN_MAX': 10023,   //金花高级
        'ANIMAL_MIN': 20011,   //金鲨初级
        'ANIMAL_MID': 20012,   //金鲨中级
        'ANIMAL_MAX': 20013,   //金鲨高级
        'TEXAS_MIN': 30011,   //走地德州初级
        'TEXAS_MID': 30012,   //走地德州中级
        'TEXAS_MAX': 30013,   //走地德州高级
    }
};