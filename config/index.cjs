/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // USE_PASSAGE: 'push-deer',

  /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  IS_SHOW_COLOR: false,
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxae09485bbe0f441b',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e2e475ad5c2dd2fa2c6e0d80b846c01e',

  PROVINCE: '浙江',
  CITY: '杭州',

  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,
    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,
    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: false,
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: false,
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: false,
    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: false,
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: false,
  },

  USERS: [
    {
      // 想要发送的人的名字
      name: '大贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // id: 'PDU22007TWoT0VpV29WfNmYjbGEi8KNcJrUi8uFSK',
      id: 'onLT65_tHrLGobwRVLQNyMNULkdg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // useTemplateId: '0001',
      useTemplateId: 'o0c4NIkb_fqSohGxDwyazFQuldY24Baz2TAdzE4sDhM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-02',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // {
        //   type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        // },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小贝', year: '2001', date: '11-02',
        },
        {
          type: '生日', name: '大贝', year: '2000', date: '10-02',
        },
        {
          type: '节日', name: '相识纪念日', year: '2017', date: '06-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2017-06-07' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-04-17' },
      ],
      /* 自增 */
      city:'杭州',
      cityColor:'#007fff',
      desc:'今天又是爱你的一天',
      descColor:'#32cd32',
    },
    {
      // 想要发送的人的名字
      name: '小贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // id: 'PDU22009TOXy9LqwqmeesaZ5vzUJ0YFj417buD2MI',
      id: 'onLT65zcT-JjpoiFY5xJaU2PnrXo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // useTemplateId: '0001',
      useTemplateId: 'o0c4NIkb_fqSohGxDwyazFQuldY24Baz2TAdzE4sDhM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-02',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // {
        //   type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        // },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小贝', year: '2001', date: '11-02',
        },
        {
          type: '生日', name: '大贝', year: '2000', date: '10-02',
        },
        {
          type: '节日', name: '相识纪念日', year: '2017', date: '06-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2017-06-07' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-04-17' },
      ],
      /* 自增 */
      city:'杭州',
      cityColor:'#007fff',
      desc:'今天又是爱你的一天',
      descColor:'#32cd32',
    }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

