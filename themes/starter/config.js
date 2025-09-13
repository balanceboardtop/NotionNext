/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'Balance Training Full Body Benefits', // 英雄区文字
  STARTER_HERO_TITLE_2: 'Balance Training Improves Everything', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Get started', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://www.amazon.com/dp/B0D29K5WDC?maas=maas_adg_260472CD1A7F5389C6D46E346628CD3F_afap_abs&ref_=aa_maas&tag=maas', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/public/images/starter/hero/3.png', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '/public/images/starter/hero/1.png', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/sign-in',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '', // 特性
  STARTER_FEATURE_TEXT_1: 'Benefits of Balance Training.', // 特性
  STARTER_FEATURE_TEXT_2:
    'More Exercise style for Balance board, Focus more on maintaining your balance', // 特性

  STARTER_FEATURE_1_TITLE_1: 'Trains stability, motor skills and mobility. The possibilities are endless.', // 特性1
  STARTER_FEATURE_1_TEXT_1: '', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: 'More', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'balanceboard.top', // 特性1

  STARTER_FEATURE_2_TITLE_1: 'Use it at home, outdoors, at the office, anywhere.', // 特性2
  STARTER_FEATURE_2_TEXT_1: ' ', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: 'More', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    'balanceboard.top', // 特性2

  STARTER_FEATURE_3_TITLE_1: 'Made from sustainably sourced American maple, built to last.', // 特性3
  STARTER_FEATURE_3_TEXT_1: ' ', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: 'More', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'balanceboard.top', // 特性3

  STARTER_FEATURE_4_TITLE_1: 'Improved Core Strength and Posture.', // 特性4
  STARTER_FEATURE_4_TEXT_1: ' ', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: 'More', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'balanceboard.top', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: false, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '一套轻量实用的建站解决方案',
  STARTER_ABOUT_TEXT:
    'NotionNext的愿景是帮助非技术人员的小白，最低成本、最快速地搭建自己的网站，帮助您将自己的产品与故事高效地传达给世界。 <br /> <br /> 功能强大的Notion笔记，简单快速的Vercel托管平台，组成一个简单的网站',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: 'https://docs.tangly1024.com/about',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '7000+',
  STARTER_ABOUT_TIPS_2: '博客站点',
  STARTER_ABOUT_TIPS_3: '正在线上运行',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（NotionNext免费开源，这里仅演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '所有的主题,免费更新,帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: 'Feedback',
  STARTER_TESTIMONIALS_TEXT_1: 'What our users say',
  STARTER_TESTIMONIALS_TEXT_2:
    'Thousands of fans choose to use toibena to train their balance. Through the help manual, communication community and technical consultation, everyone enjoys the joy of mastering balance.',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'This thing is amazing! It is fun to use and you don’t even think about working out. It’s enjoyable for the whole family, which is excellent. It’s helping me with my balance and equilibrium problems. The size of it is perfect for small or large feet. It’s easy to slide in tight areas to put it away. Definitely worth the money. The glowing in the dark helps you if you’re in a darker room would definitely recommend this product! ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'I originally got this balance board to ease my way back into skateboarding after a 15-year hiatus; and bought another one after my family kept gravitating toward it. The boards have become a favorite daily activity - we see who can balance longer, or play catch while balancing on our respective boards. I highly recommend one - or two!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Jimmy B',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'The kids love it too,Definitely lives up to the hype and is at an unbelievable price compared to others. It came well packaged, too.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'ALex',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'ALex',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Excellent for Core Strength and Stability!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'dishenge ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Brooks Prettyman',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Great Board at a Great Price',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'Family loves them',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Mr LUCEN',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: 'FAQ',
  STARTER_FAQ_TEXT_1: 'Any questions? See here',
  STARTER_FAQ_TEXT_2: 'We have collected common user questions',

  STARTER_FAQ_1_QUESTION: 'Is the balance board suitable for beginners？',
  STARTER_FAQ_1_ANSWER:
    'Yes! The low-to-the-ground design makes the balance board great for beginners. Even though balancing on the line is challenging, your foot is so close to the ground that it’s easy to get restarted once you lose your balance.',

  STARTER_FAQ_2_QUESTION: 'Is there any setup required?',
  STARTER_FAQ_2_ANSWER:
    'there’s nothing to assemble—the balance board comes fully assembled and ready for use right out of the box.',

  STARTER_FAQ_3_QUESTION: 'Can I use it outdoors？',
  STARTER_FAQ_3_ANSWER:
    'Yes! The balance board can be used indoors, outdoors, at the beach, in the living room—basically wherever you would like. Since it is wood, avoid getting it wet or leaving it in direct sunlight for long periods.',

  STARTER_FAQ_4_QUESTION: 'How to buy the product？',
  STARTER_FAQ_4_ANSWER:
    'balanceboard.top',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: 'Team members',
  STARTER_TEAM_TEXT_1: 'Our Developer Team',
  STARTER_TEAM_TEXT_2:
    'Toibena is a collaboration between many fans. Thanks to everyone who contributed.',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: 'Thomas',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: false, // 首页博文区块开关
  STARTER_BLOG_TITLE: 'team',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    'please wait',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: 'Contact Us',
  STARTER_CONTACT_TEXT: 'Tell us about your problem',
  STARTER_CONTACT_LOCATION_TITLE: 'US',
  STARTER_CONTACT_LOCATION_TEXT: 'TX',
  STARTER_CONTACT_EMAIL_TITLE: 'How we can help you？',
  STARTER_CONTACT_EMAIL_TEXT: 'toibenaonline@gmail.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: '', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: 'Leave us a message',
  //   STARTER_CONTACT_MSG_NAME: 'name',
  //   STARTER_CONTACT_MSG_EMAIL: 'email',
  //   STARTER_CONTACT_MSG_PHONE: 'number',
  //   STARTER_CONTACT_MSG_TEXT: 'message',
  //   STARTER_CONTACT_MSG_SEND: 'Send Message',
  //   STARTER_CONTACT_MSG_THANKS: 'Thank you for your message',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: 'Trains stability, motor skills and mobility. The possibilities are endless.。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'about ',
      LINK_GROUP: [
        { TITLE: 'Official Homepage', URL: 'balanceboard.top' },
        { TITLE: 'Operational Documentation', URL: 'https://drive.google.com/drive/folders/1Szkb2tGtnoVdsnqEFn2sCWZ8l-xSTJuY?usp=drive_link' },
        {
          TITLE: 'Help & Support',
          URL: 'https://drive.google.com/drive/folders/1Szkb2tGtnoVdsnqEFn2sCWZ8l-xSTJuY?usp=drive_link'
        },
        {
          TITLE: '',
          URL: 'balanceboard.top'
        }
      ]
    },
    {
      TITLE: 'property',
      LINK_GROUP: [
        {
          TITLE: 'Improved Core Strength and Posture',
          URL: 'balanceboard.top'
        },
        {
          TITLE: 'Stronger Stabilizing Muscles',
          URL: 'balanceboard.top'
        },
        { TITLE: 'Improved Core Strength and Posture', 
          URL: 'balanceboard.top' }
      ]
    },
    {
      TITLE: '',
      LINK_GROUP: [
        {
          TITLE: 'write',
          URL: ''
        },
        {
          TITLE: '',
          URL: ''
        },
        {
          TITLE: '',
          URL: ''
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Latest Products',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'Privacy Policy',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'legacy-notice',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'terms-of-use',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '',

  // 404页面的提示语
  STARTER_404_TITLE: 'Sorry! The page you are looking for does not exist. It may have been moved or deleted',
  STARTER_404_TEXT: 'Sorry! The page you are looking for does not exist. It may have been moved or deleted',
  STARTER_404_BACK: 'go home',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: 'What are you waiting for？',
  STARTER_CTA_TITLE_2: 'Get started now',
  STARTER_CTA_DESCRIPTION:
    'More Exercise style for Balance board, Focus more on maintaining your balance',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://www.amazon.com/dp/B0D29K5WDC?maas=maas_adg_260472CD1A7F5389C6D46E346628CD3F_afap_abs&ref_=aa_maas&tag=maas',
  STARTER_CTA_BUTTON_TEXT: 'Start buying',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'balanceboard.top', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
