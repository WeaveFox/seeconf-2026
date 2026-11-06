// SEE Conf 2026 数据配置

export const conferenceInfo = {
  name: 'SEE Conf 2026',
  title: '蚂蚁终端体验科技大会',
  slogan: '创造力复兴，探索AI时代的用户体验与工程实践',
  date: '2026.11.28',
  location: '中国·杭州',
  venue: '中国·杭州',
  applyDeadline: '2026.01.10',
  capacity: '名额有限，先到先得',
}

export const navItems = [
  // { label: '分享嘉宾', anchor: 'speakers' },
  { label: '会议议程', anchor: 'agenda' },
  { label: '特邀嘉宾', anchor: 'guests' },
  { label: '特色展台', anchor: 'expo' },
  { label: '参会指南', anchor: 'guide' },
  { label: '合作伙伴', anchor: 'partners' },
]

// 专题列表
export const sessions = [
  {
    id: 'main',
    name: '主会场',
    subtitle: '创造力复兴',
    isLive: true,
    color: '#f3584c',
    producers: [{ name: '徐达峰（达峰）', title: '蚂蚁集团 · 平台体验技术部负责人', avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/fckbRapByFQAAAAAUKAAAAgADiiDAQFr/original', avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/VWIITqdL1_oAAAAAUxAAAAgADiiDAQFr/original' }],
    description: '主会场以“创造力复兴”为主题，围绕模型前沿、产品创新、终端体验与开源协作，通过主题分享、关键发布与圆桌对话，探讨如何借助 AI，让更多人跨越专业、成本与协作的门槛，把构想变成有价值的产品、内容与服务。你和我既是创造者，也是体验者，一个人的创造，也可以成为另一个人的新体验——我们不仅可以改善已有的体验，更有机会创造过去没有的体验。大量生成不等于创造繁荣，技术突破也不会自动成为好体验。体验科技的价值主张是：以人为出发点，以科技拓展创造的边界，把创造的增量转化为你我能够感受到的体验价值。'
  },
  {
    id: 'ai-experience',
    name: '专题',
    subtitle: 'AI 创新体验',
    color: '#0f83d3',
    producers: [
      { name: '张婧', title: '蚂蚁集团 · AI 创新硬件负责人', avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/S3JXSYOWYjwAAAAARpAAAAgADiiDAQFr/original', avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/tg4aQ5hGgFEAAAAAR5AAAAgADiiDAQFr/original' },
      { name: '张玉瑜（勾玉）', title: '蚂蚁集团 · 支付宝资深技术专家', avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/J5qbQK8547QAAAAARtAAAAgADiiDAQFr/original', avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/Y3DSRJjtMB8AAAAARxAAAAgADiiDAQFr/original' },
    ],
    description: 'AI 的价值不只在技术突破，更在于开启全新体验。本专题聚焦 AI 帮人跨过专业、成本、协作门槛，把想法变成可感知的作品与服务。我们聊多模态界面、跨端协同、具身交互，看智能融入日常；也探讨个人 Agent、人机协同、群体智能，拓宽创造边界。一线产品与工程团队分享原型到产品的落地经验，让 AI 带来的创造力增量，化作我们真切可感的体验价值。',
    infoImage: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/I5iyQYRzl40AAAAAZSAAAAgADiiDAQFr/original',
  },
  {
    id: 'ai-engineering',
    name: '专题',
    subtitle: '卓越 AI 工程实践',
    color: '#12a7df',
    producers: [
      { name: '陈成（云谦）', title: '阿里巴巴 · QoderCLI 高级技术专家', avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/V9ZWRanRv3EAAAAARqAAAAgADiiDAQFr/original', avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/TdnPQ5x4K8MAAAAARoAAAAgADiiDAQFr/original' },
      { name: '曹磊（明是）', title: '蚂蚁集团 · 技术专家', avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/sy1XRrlnAbEAAAAASGAAAAgADiiDAQFr/original', avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/F1HdTpfKBTcAAAAAR4AAAAgADiiDAQFr/original' },
    ],
    description: '当下 AI 基础模型能力持续提升，考验在于工程落地。模型调优、推理部署、稳定上线、成本管控，每一环都考验硬功夫。本专题聚焦一线难题，抛开纸面理论，探讨研发范式、复杂 Agent 架构与线上 Badcase 理，覆盖工具链和客户端工程实践。汇集蚂蚁、阿里、字节与高校专家经验，拆解 AI 业务闭环，帮从业者把 Demo 推向高质量上线，让 AI 真正跑起来、用起来、创造价值。',
    infoImage: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/RfqVRJOSuwgAAAAAZDAAAAgADiiDAQFr/original',
  },
  {
    id: 'ai-interaction',
    name: '专题',
    subtitle: 'AI 新交互与多端',
    color: '#29bae5',
    producers: [
      { name: '李彦男（竹光）', title: '蚂蚁集团 · 高级技术专家', avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/jfkCRqX7woIAAAAARlAAAAgADiiDAQFr/original', avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/aL-ZS4FAp1sAAAAAR7AAAAgADiiDAQFr/original' },
      { name: '施桢屹（祯逸）', title: '蚂蚁集团 · 高级技术专家', avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/EtdET6IlOzgAAAAARiAAAAgADiiDAQFr/original', avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/mhrQT7zwAjsAAAAAR3AAAAgADiiDAQFr/original' },
    ],
    description: '当 Agent 开始参与软件的创造与使用，交互方式和终端技术也在发生变化，从用户行为驱动交互往可被 Agent 理解感知调度的智能化交互演进。从自然语言构建数字世界、数据分析与可视化，到沙箱中的任务执行、桌面端/云端/移动端的协同、多模态 AI 协同交互，我们将走进这些探索背后的技术实践，共同思考：如何为人和 Agent 设计更好的工具与界面，让新的交互方式成为可用的日常体验。',
    infoImage: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/dvWESKT8iIYAAAAAZTAAAAgADiiDAQFr/original',
  },
  {
    id: 'see-next',
    name: '专题',
    subtitle: 'SEE Next',
    color: '#f3584c',
    producers: [
      { name: '黄挺（鲁直）', title: '蚂蚁集团 · 平台技术事业群总架构师', avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/k5u5QK0pGkoAAAAARmAAAAgADiiDAQFr/original', avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/mhrQT7zwAjsAAAAAR3AAAAgADiiDAQFr/original' },
      { name: '徐达峰（达峰）', title: '蚂蚁集团 · 平台体验技术部负责人', avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/fckbRapByFQAAAAAUKAAAAgADiiDAQFr/original', avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/Ag4uRLU4660AAAAARxAAAAgADiiDAQFr/original' },
    ],
    description: '从技术周期来看，我们处于这一轮 AI 变革的早期，许多可能尚是 Undefined，许多习以为常的事物也等待被 Redefine。SEE Next 场不做预设，也不以既有分类限制选题。我们带着好奇与判断，寻找值得看见的人、作品与想法，分享真实的尝试与不同的视角，在尚无定论的地方，探索新的可能。',
    infoImage: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/yPHWTYNxEu4AAAAAZQAAAAgADiiDAQFr/original',
  },
]

// 议程数据
export const agendaData = {
  main: [
    {
      time: '9:30 - 9:45',
      title: '大会致辞',
      description: '',
      speaker: '骆骥（谦持）',
      speakerTitle: '蚂蚁集团 · 平台技术事业群总裁',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/nARtQ6mEjPkAAAAARaAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/VCSKR6_0VZMAAAAASRAAAAgADiiDAQFr/original',
    },
    {
      time: '9:45 - 10:10',
      title: 'AI 时代的端体验与创新',
      description: '过去一年，基座模型能力的高速提升为终端智能化打开了全新的想象空间。本分享将介绍支付宝 App 在这一背景下，如何持续构建 AI 时代的新交互体验与终端能力创新——涵盖以自然语言交互与生成式 UI 为代表的新人机交互形态、跨多端与端云协同的 Agent 架构演进、云沙箱等 AI 基建建设，以及生成式渲染的持续演进。',
      speaker: '李彦男（竹光）',
      speakerTitle: '蚂蚁集团 · 支付宝终端引擎负责人',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/jfkCRqX7woIAAAAARlAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/aL-ZS4FAp1sAAAAAR7AAAAgADiiDAQFr/original',
    },
    {
      time: '10:10 - 10:35',
      title: '人人都能做产品了？然后呢？',
      description: 'AI 正在让「人人都是产品经理」从一种理念变成现实，但当产品越来越容易被创造，新的问题也随之出现：做出来的东西，真的有人需要吗？\n\n从实体产品到数字化产品，再到 AI 生成的产品，创新的风险、瓶颈和流程正在发生怎样的变化？当个人提效不再等于组织增长，当客户也能自己创造产品，大公司和小团队又该如何应对？\n\n结合近期对全球 AI 辅助产品创新的前沿探索与企业实践，本次分享将重新思考产品创新的未来，并最终回到每个人：当创造的能力不再稀缺，什么才是我们真正的竞争力？',
      speaker: '苏杰',
      speakerTitle: '产品创新顾问，良仓孵化器创始合伙人，《人人都是产品经理》丛书作者',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/kmU_Rp4e55MAAAAASNAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/7WiwTY5M2oQAAAAAR0AAAAgADiiDAQFr/original',
    },
    {
      time: '10:35 - 11:00',
      title: '创造力的引擎，从 Token 到 World',
      description: '从 Foundation Model 角度分享创造力如何涌现。',
      speaker: '张志强（零幺）',
      speakerTitle: '蚂蚁集团 · 百灵语言基座负责人',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/UPgyRpwAyDMAAAAARXAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/K4ujSrbi2AAAAAAASJAAAAgADiiDAQFr/original',
    },
    {
      time: '11:00 - 11:15',
      title: 'AI 生游戏：Galacean 带来的新体验',
      description: '',
      speaker: '李俊奎（向秀）、郭磊（尘沫）',
      speakerTitle: '向秀：蚂蚁集团 · 平台工程与技术风险部负责人 / 尘沫：蚂蚁集团 · Galacean 引擎架构师',
      avatarBlue: ['https://mdn.alipayobjects.com/huamei_m96plz/afts/img/kCI0Tq2EOREAAAAARUAAAAgADiiDAQFr/original', 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/YKKrS6m6mSkAAAAAQYAAAAgADiiDAQFr/original'],
      avatarRed: ['https://mdn.alipayobjects.com/huamei_m96plz/afts/img/jYqFR7DegdoAAAAAR_AAAAgADiiDAQFr/original', 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/Bb5kToJNMr8AAAAARlAAAAgADiiDAQFr/original'],
    },
    {
      time: '11:15 - 11:30',
      title: '主题演讲',
      description: '',
      speaker: '',
      speakerTitle: '',
      avatarBlue: '',
      avatarRed: '',
    },
    {
      time: '',
      title: '大会发布',
      description: '',
      speaker: '',
      speakerTitle: '',
      avatarBlue: '',
      avatarRed: '',
    },
    {
      time: '',
      title: '圆桌论坛',
      description: '',
      speaker: '',
      speakerTitle: '',
      avatarBlue: '',
      avatarRed: '',
    },
  ],
  'ai-experience': [
    {
      time: '14:00 - 14:25',
      title: '从工具到伙伴 - 蚂蚁灵光的 AI Agent 实践',
      description: '分享蚂蚁灵光在 AI Agent 方向的一些思考和实践。',
      speaker: '杨诚（漠念）',
      speakerTitle: '蚂蚁集团 · 灵光产品经理',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/u0eUS6vbAtIAAAAARwAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/wOYURI-InNMAAAAASWAAAAgADiiDAQFr/original',
    },
    {
      time: '14:25 - 14:50',
      title: '让技术隐去，让生命感浮现 - 具身时代的虚实交互设计与实现',
      description: '',
      speaker: '项臻（泽西）',
      speakerTitle: '镭萌科技联合创始人',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/RGeySYNiY6MAAAAARXAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/7V04S7YxSsgAAAAARjAAAAgADiiDAQFr/original',
    },
    {
      time: '14:50 - 15:15',
      title: '从"帮你选"到"帮你买"：智能体支付如何落地',
      description: '当 AI 能理解需求、推荐商品，如何进一步完成下单与支付？智能体支付正在成为连接 AI 服务与商业交易的重要环节。本场直播将围绕智能体支付的应用场景与接入思路，拆解从用户表达需求、授权委托，到订单创建、支付确认和结果反馈的完整流程。我们将重点探讨如何兼顾交易便利与用户控制，如何处理身份核验、授权边界和异常情况，以及商户与开发者需要做好哪些接入准备，一起看清 AI 从"帮你选"走向"帮你买"的落地路径。',
      speaker: '黄文林（沐桔）',
      speakerTitle: '蚂蚁集团 · AI 支付产品经理',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/g8c9SpPe5e8AAAAARvAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/kwmASK_FGs8AAAAASGAAAAgADiiDAQFr/original',
    },
    {
      time: '15:40 - 15:55',
      title: '茶歇逛展',
      description: '',
      speaker: '',
      speakerTitle: '',
      avatarBlue: '',
      avatarRed: '',
    },
    {
      time: '15:55 - 16:20',
      title: '从内部工具到商业化产品：QMuse 的产品演进与实践',
      description: '分享用户群体的变化、使用场景的变化，以及商业化考虑、成本考虑，促使产品发展中的一系列实践和思考。',
      speaker: '彭佩乔（乔杨）',
      speakerTitle: '蚂蚁集团 · 技术专家',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/oEzYQY1z_kwAAAAASHAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/uRKzTK2TZ4oAAAAASPAAAAgADiiDAQFr/original',
    },
    {
      time: '16:20 - 16:45',
      title: '如何面向 Agent 构建工具 - 来自 ego lite 的产品实践',
      description: '一直以来在科技界都有一个专门的学问叫做人际交互，但今天使用软件的不再仅仅是人，还包含了agent，本分享将围绕着如何面向 agent 构建一个符合agent 最佳体验，实现更快的速度更少的 token 和更高的成功率进行展开',
      speaker: 'Aute',
      speakerTitle: 'ego(lite) Founder',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/2HiaRpLC_g0AAAAARgAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/fJXJQK8Fo3wAAAAARgAAAAgADiiDAQFr/original',
    },
    {
      time: '16:45 - 17:10',
      title: '当设计经验开始自我进化：TaoDesign 的探索与实践',
      description: '如何让设计师积累的专业经验，成为更多人可以使用的创作能力，并推动业务想法快速落地？本次分享将以 TaoDesign 在淘天电商场景中的探索为例，介绍如何将设计师的经验与方法沉淀为 AI 可理解、可调用的设计资产，通过使用反馈与持续评估推动资产自进化；如何让 AI 工具运用这些资产，帮助专业人士提升创作效率，让非设计专业人士也能表达、验证想法，拓展职能边界；以及如何将 AI 创作的设计稿连接到需求表达、方案确认、研发实现与验收交付，贯通电商企业的需求交付流程。为设计、产品与研发团队提供从经验沉淀到业务交付的实践参考。',
      speaker: '刘晨凌（卓凌）',
      speakerTitle: '阿里巴巴 · AI 研发工程师',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/x0F0TYTa3RUAAAAARRAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/_JY1SIF8YI0AAAAARVAAAAgADiiDAQFr/original',
    },
  ],
  'ai-engineering': [
    {
      time: '14:00 - 14:25',
      title: '一天一版的工程密码：QoderCLI 如何重塑研发范式',
      description: 'Coding Agent 加速代码产出的同时，也让质量验证、版本交付与持续演进面临更大压力。本次分享将结合“用 QoderCLI 迭代 QoderCLI”、实现一天一版的实践，介绍如何通过 Harness Engineering，为 Agent 建立贯穿上下文、工具执行、真实环境验证与交付反馈的工程环境。围绕开发、修复、发布与演进四个 Loop，重点展示 Agent 如何操作真实终端完成验证、依据失败证据持续修正，以及如何将代码审查、文档同步和版本发布接入日常流水线。同时，探讨执行状态与历史经验如何跨任务复用、线上信号如何驱动下一轮迭代，以及人在目标、风险与发布决策中的职责边界。',
      speaker: '姜子玥（安枝）',
      speakerTitle: '阿里巴巴 · QoderCLI 技术专家',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/2OLiRK6BCFQAAAAAU4AAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/17-BS6l1WDsAAAAAVLAAAAgADiiDAQFr/original',
    },
    {
      time: '14:25 - 14:50',
      title: '多模态编程智能体：从看懂界面到完成复杂任务',
      description: '从一张截图生成网页，到理解交互、操作软件并完成复杂任务，多模态智能体正在拓展数字世界中的行动边界。本次分享将结合蚂蚁百灵在多模态Coding 与 Computer Use Agent 方向的探索，介绍智能体如何从界面与交互中理解需求，生成可运行的应用，再通过自主操作、观察结果和持续修正完成复杂任务。围绕“理解—生成—执行—验证”的完整过程，分享模型能力演进中的关键实践与挑战，探讨融合视觉、编程与行动能力的下一代智能体，如何走向真实场景中的可靠交付。',
      speaker: '彭晗（鹏函）',
      speakerTitle: '蚂蚁集团 · 百灵大模型多模态代码负责人',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/alOaRrArSrkAAAAARQAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/r7r1SrPTl7kAAAAARNAAAAgADiiDAQFr/original',
    },
    {
      time: '14:50 - 15:15',
      title: 'nanoMuse: Personal Agent 的系统架构与算法实践',
      description: '随着多模态大模型的演进，终端智能应用的形态正从单轮问答窗口转向长期驻留、跨设备协同、可自主操作真实应用的个人智能体（Personal Agent）。本次分享将围绕开源个人智能体 nanoMuse 的系统架构与核心算法展开：在系统层，介绍跨安卓、iOS、桌面与网页端的多端协同架构、屏幕操作与安全管控实践；在算法层，介绍如何通过少量人类示范提取可复用知识以解决长尾冷启动、如何将历史折叠与状态维护内化为模型自身的强化学习动作以治理长程上下文膨胀，以及如何在无人工标注下通过自主探索与分层反馈适应应用演进。',
      speaker: '刘广义',
      speakerTitle: '浙江大学 · APRIL 实验室博士生',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/p0x6Sby3fmIAAAAAReAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/3L2DT5dpokkAAAAARjAAAAgADiiDAQFr/original',
    },
    {
      time: '15:15 - 15:40',
      title: '从 Harness 到 Loop：阿福 Agent 小队如何处理持续涌入的线上 Badcase',
      description: '蚂蚁阿福上线后，随着用户量增长，线上 badcase 持续增加，依赖人工串联全链路的处理模式已难以应对。为此，我们分两阶段推进：先通过 Harness Engineering 为 Agent 接入开发、部署和评测工具，结合执行与评测约束实现自主修复与验证；再通过 Loop Engineering 将流程组织为"内循环（修复、验证）"与"外循环（发现、归因、分派、回流）"，仅保留异常改派和上线由人工把关。本次分享将结合真实案例，完整展示 badcase 入池、分派、修复与验证的演进实践及人机边界。',
      speaker: '肖汉松（萧恺）',
      speakerTitle: '蚂蚁集团 · 阿福 Harness 架构组负责人',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/aoRoR63nU-sAAAAARjAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/rZJpTpQWUPsAAAAARwAAAAgADiiDAQFr/original',
    },
    {
      time: '15:40 - 15:55',
      title: '茶歇逛展',
      description: '',
      speaker: '',
      speakerTitle: '',
      avatarBlue: '',
      avatarRed: '',
    },
    {
      time: '15:55 - 16:20',
      title: 'Rstack: 从高性能工具链到 Agent 友好',
      description: 'Rstack 是一组面向 JavaScript 开发者的高性能工具链，底层基于 Rspack。过去，工具链的服务对象主要是人；而在 Agent 时代，工具链还需要服务于 Agent，这带来了新的挑战，也对工具链的设计提出了更高要求。本次分享将介绍团队在高性能工具链与 Agent 结合方面的探索，并结合 Rspress、SWC-next 的项目开发与 Rstack 生态建设实践，分享相关的设计思路与实践经验。',
      speaker: '孙奕腾',
      speakerTitle: '字节跳动 · Web Infra Rstack 团队成员，Rspress 负责人',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/q8VDT6EiAfEAAAAARPAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/6GhxR4pTENkAAAAARPAAAAgADiiDAQFr/original',
    },
    {
      time: '16:20 - 16:45',
      title: 'Agent 重构组织协作：从人机接力到全链路自动化',
      description: 'AI 写代码越来越快，团队怎样才能交付得更快、更好？本次分享将结合真实业务案例，带你理解"自动化滑块"的实践方法：围绕不同场景选择合适的自动化程度，把 Agent 的能力转化为团队整体的交付提速。你将看到，团队如何从局部尝试走向更大范围的自动化，并根据 Agent 能力升级和业务实践持续调整，让自动化融入日常研发，逐步构建一座越用越强的 AI 软件工厂。',
      speaker: '王建明（涧鸣）',
      speakerTitle: '蚂蚁集团 · 技术专家',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/pzNmR4IlF2sAAAAARgAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/FWLOS5_VqukAAAAARfAAAAgADiiDAQFr/original',
    },
    {
      time: '16:45 - 17:10',
      title: '支付宝客户端 HAKU AI 工程',
      description: '本次分享结合支付宝客户端 HAKU 的建设实践，拆解在存量复杂客户端工程下，面向 AI Native 的研发工程体系设计与落地思路。将重点介绍如何沉淀与组织工程知识、串联研发工具链、打通全链路研发流程，让 AI 读懂跨端、跨模块的大型客户端工程，支撑从需求分析、开发、测试到交付的全环节研发任务，以及面向 AI 研发能力的持续评测体系与效果度量方案，保障 AI 研发交付工程持续迭代；并探讨如何打造 AI 友好的工程架构，适配跨端、跨模块协同开发。分享将搭配真实落地案例，展示这套体系在客户端大规模研发中的运行模式，为大型客户端团队落地 AI Native 工程体系提供可复用的实践思路。',
      speaker: '齐普（远睎）',
      speakerTitle: '蚂蚁集团 · 无线开发专家',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/VOr7S7mrAFAAAAAARRAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/9MSFQ4jtPPsAAAAARVAAAAgADiiDAQFr/original',
    },
    {
      time: '17:10 - 17:35',
      title: '高质量上下文 - 从共识原型-共识系分-Coding Loop 到发布',
      description: '"业产研新范式"以共享上下文为主线，推动产品、设计与研发从共识原型、共识系分到编码、联调、自测和上线审批形成完整 Loop。通过统一工作空间、知识库、任务状态与过程轨迹，让需求意图准确传递、跨系统协作高效衔接，形成高质量的上下文，并借助 Human in Loop 机制保障关键操作安全可控、任务可暂停恢复、结果全程可追溯，最终实现从业务构想到高质量交付的一体化协作。',
      speaker: '吕晨晨（励学）',
      speakerTitle: '网商银行 · 筋斗云体验高级专家',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/EmnQQKNlnDkAAAAAVUAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/cIxkRZczaWEAAAAAVIAAAAgADiiDAQFr/original',
    },
  ],
  'ai-interaction': [
    {
      time: '14:00 - 14:25',
      title: '从 cnpm 到 Vite+：AI 时代的开发者体验演进',
      description: '从 cnpm 到 Vite+，"快"始终是开发者体验的核心追求：从让依赖安装更快，到让整个 Web 开发工具链尽可能地快。随着 AI 深入参与开发，提速的空间也从单个工具延伸到了整个工作流程。本次分享将以 cnpm 和 Vite+ 的研发实践为线索，回顾开发者工具的演进，介绍 Vite+ 在性能、工具链整合与自动化方面的设计，并通过实际工程案例，探讨开发工具如何更好地服务开发者与 AI，减少重复工作、缩短反馈周期，让开发既高效又可靠。',
      speaker: '袁锋（苏千）',
      speakerTitle: 'VoidZero 软件工程师',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/1lpsRqpGsBoAAAAARdAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/pZkfTKiqoUoAAAAARmAAAAgADiiDAQFr/original',
    },
    {
      time: '14:25 - 14:50',
      title: 'Galacean Next：从想象到世界',
      description: '从一个念头，到一片可以走入的世界。本次分享将展示 Galacean Next 的下一代实时图形技术，让创作者用自然语言生成 3D 内容、构建场景与玩法，将想象变成高质量、可探索、可交互的 3D 虚拟世界与游戏。',
      speaker: '顾金跃（小耀）、曾言（罐子）',
      speakerTitle: '小耀：蚂蚁集团 · Galacean Harness 负责人 / 罐子：蚂蚁集团 · Galacean 世界引擎负责人',
      avatarBlue: ['https://mdn.alipayobjects.com/huamei_m96plz/afts/img/vnz8SplowLcAAAAARpAAAAgADiiDAQFr/original', 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/LXbTRJ0DWgMAAAAARqAAAAgADiiDAQFr/original'],
      avatarRed: ['https://mdn.alipayobjects.com/huamei_m96plz/afts/img/hpAPQKilO8kAAAAARxAAAAgADiiDAQFr/original', 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/49nnTYQ32UYAAAAARzAAAAgADiiDAQFr/original'],
    },
    {
      time: '14:50 - 15:15',
      title: 'Agentic Web 的终端底座：浏览器内核如何演进为可控的 Agent Runtime',
      description: '随着 AI Agent 开始代表用户理解页面、调用工具并完成跨页面任务，Web 的交互主体与信任边界正在重构。本分享从 W3C Agentic Web 议题及 Chromium 的页面理解、端侧模型和结构化操作出发，分析浏览器成为 Agent 控制面的技术趋势，提出由 Context、Model、Capability、Task、Trust 组成的运行时架构，并结合京东自研内核实践，介绍多端复用、任务持续与可信执行的实现思路。',
      speaker: '何逢',
      speakerTitle: '京东 · 零售端内核负责人',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/FWrvT7q4yCgAAAAARxAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/mFr7Sre9_ecAAAAAR5AAAAgADiiDAQFr/original',
    },
    {
      time: '15:15 - 15:40',
      title: 'AVA, AI-Native Visual Analytics, Built for Data Agent',
      description: '"净销售额下降了，是否应该加大广告投放？"面对这样的业务问题，Data Agent 如何理解业务指标、探索数据、分析原因，并提供可信的决策依据？本次分享将结合 AntV AVA 的设计与 Sive 数据分析 Agent 的建设实践，围绕数据上下文构建、分析策略与 Benchmark 评测、异构数据源统一执行及智能可视化，拆解从自然语言到分析结论的关键技术链路，并通过真实评测数据与工程案例，探讨分析准确性、Agent 自主性与执行效率之间的设计取舍。',
      speaker: '朱禹歆（半璇）',
      speakerTitle: '蚂蚁集团 · AntV 可视化工程师',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/rU0vQ79rhvAAAAAAR8AAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/ChCtTrG_BPoAAAAASZAAAAgADiiDAQFr/original',
    },
    {
      time: '15:40 - 15:55',
      title: '茶歇逛展',
      description: '',
      speaker: '',
      speakerTitle: '',
      avatarBlue: '',
      avatarRed: '',
    },
    {
      time: '15:55 - 16:20',
      title: '支付宝 App 灵动执行及小程序 AI',
      description: 'AI 如何从"回答问题"走向"帮用户办事"？本次分享将介绍支付宝小程序 AI 探索两条路线：1. 灵动执行复用已有小程序，由 AI 代用户完成页面操作，任务可在屏、离屏推进，用户按需查看或接管；2. 小程序 Agent 支持开发者将业务功能和交互组件封装为 AI 可调用的技能，在对话中提供服务。结合政务查询、餐饮点单、购券核销等场景，分享两条路线的关键设计与落地经验，探索更自然、便捷的智能服务体验。',
      speaker: '张戈弋（崚枫）',
      speakerTitle: '蚂蚁集团 · 支付宝应用容器负责人',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/nt2QS5S2J0MAAAAARgAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/sYQ0Tr9-enUAAAAARpAAAAgADiiDAQFr/original',
    },
    {
      time: '16:20 - 16:45',
      title: '从草案到大规模实践：MoQ/RTQ 在 AI 多模态实时交互中的落地',
      description: '如何让新一代媒体传输协议跟上 AI 多模态实时交互对低延迟、可靠性和多端一致体验的要求，并让 IETF 草案阶段的 MoQ 真正走向大规模生产落地？本次分享将以 MoQ/RTQ 在 AI 语音助手、实时数字人、多模态 Agent 等交互场景中的实践为例，介绍如何基于 XQUIC 落地 Media over QUIC，用 0-RTT、FEC、目录协商、码率自适应与时间同步等能力把端到端建连与传输延迟压至百毫秒级，让 AI 会话获得"开口即响应"的体验，为实时打断、连续对话等交互范式提供传输层保障',
      speaker: '彭玉堂（巴格）',
      speakerTitle: '阿里巴巴 · 高级技术专家',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/ybagQapTtEYAAAAARgAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/u_5dTKszQHIAAAAAR5AAAAgADiiDAQFr/original',
    },
    {
      time: '16:45 - 17:10',
      title: 'Agent 研发工作台 —— WeaveFox 的设计与实践',
      description: 'Agent 正在承担越来越多的编码工作，如何让它持续推进需求、交付成品，人又如何和 Agent 深入协作？本次分享将介绍 WeaveFox 在 Agent 研发工作台上的探索：通过 Loop develop 建立开发、验证与修复的循环，通过领域专家 Agent 的分工接力推进复杂任务，通过支线会话、信息呈现与并发管理支持人的便捷掌控，并连接桌面端、云端与移动端。我们将分享 WeaveFox Agent 工作台在企业研发场景的落地实践，以及通过开源与可定制化，打造小微企业和个人专属的 Agent 工作台。',
      speaker: '朱文涛（亦池）',
      speakerTitle: '蚂蚁集团 · WeaveFox 客户端负责人',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/_gpPRpel2i8AAAAAR1AAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/j_4CS6jB1tYAAAAASEAAAAgADiiDAQFr/original',
    },
    {
      time: '17:10 - 17:35',
      title: '多模态 AI 交互-蚁小保 VUI',
      description: '蚁小保 VUI 是融入用户现场的多模态 AI 保险助手，通过实时语音、同屏理解与视频交互，结合前后台 Agent 协同，让用户边说、边看、边办，将理解场景、组织信息的复杂性交给 AI，降低提问与沟通负担，打造少解释、更自然、有陪伴感的保险服务体验。',
      speaker: '郁玉涛（郁哉）',
      speakerTitle: '蚂蚁集团 · 蚁小保VUI端侧负责人',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/SECjTpOeALsAAAAARtAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/h60gQY2_krsAAAAARsAAAAgADiiDAQFr/original',
    },
  ],
  'see-next': [
    {
      time: '14:00 - 14:25',
      title: 'AI Native 组织通往“无人驾驶”之路',
      description: '',
      speaker: '徐文彬（闻冰）',
      speakerTitle: 'LobeHub 创始人 & CEO',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/DjrgR52TrgUAAAAAR6AAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/5fU_R6BXtu8AAAAARaAAAAgADiiDAQFr/original',
    },
    {
      time: '14:25 - 14:50',
      title: '企业级 Vibe 应用平台：下一代全栈理念助力从一周排期到一小时上线',
      description: 'WeaveFoxVibe 是 WeaveFox 品牌下的 Vibe Coding 智能创作平台，面向蚂蚁内部小二，让非技术同学无需感知代码与数据库，“输入灵感—多轮创作—发布上线”即可一小时内完成产品上线，过去需一周以上排期对齐的工具，如今半天即可交付。凭借自研 Agentic “既好又省”的生成效果、99% 的稳定性保障、真实可用的 1-5-10 监控告警，产品已覆盖蚂蚁内部所有 BG、触达 80%+ 同学，并承接 527 技术日等公司级活动。团队以超级单元全栈组织践行“客户第一、精益经营”，基于全栈的 nextack 框架支撑高效迭代。项目即将开源，把平台能力、Agentic 生成链路与 nextack 全栈框架沉淀开放，借助社区的力量共同成长、共建共享。',
      speaker: '王安然（桐童）、郑耀钧（靴猫）',
      speakerTitle: '桐童：蚂蚁集团 · WeaveFoxVibe 架构师 / 靴猫：蚂蚁集团 · AI 全栈工程师',
      avatarBlue: ['https://mdn.alipayobjects.com/huamei_m96plz/afts/img/0yWyR4GZ1IsAAAAAR5AAAAgADiiDAQFr/original', 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/5LkdQJgOFfoAAAAARMAAAAgADiiDAQFr/original'],
      avatarRed: ['https://mdn.alipayobjects.com/huamei_m96plz/afts/img/2i0VR6LAq_wAAAAARbAAAAgADiiDAQFr/original', 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/FrBhQoqfX_MAAAAARWAAAAgADiiDAQFr/original'],
    },
    {
      time: '14:50 - 15:15',
      title: 'AI 时代下，普通人也能享受创造的乐趣',
      description: 'AI 的出现，以及 Vibe Coding 的兴起，将创造的成本降低到普通人也可以负担的程度。本次分享从一个生活中的真实小需求着手，分享自己是如何一步步将需求落地成为一个产品，获得第一个用户的好评，从而在 AI 创造中获得乐趣。',
      speaker: '梁朝凯（朝凯）',
      speakerTitle: 'OPC，AI 产品经理 & 独立开发者',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/M5loTb7x7twAAAAARxAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/v8nqQapTJ4gAAAAASGAAAAgADiiDAQFr/original',
    },
    {
      time: '15:15 - 15:40',
      title: '小萨，主动式 Agent 的企业级设计与 PA 架构思考',
      description: '企业协同发生在持续流动的沟通、决策与行动之中。如何让 Agent 理解协作现场、连接分散的信息，并在合适的时机主动参与，是 AI 融入组织的一项重要课题。本次分享将以小萨的实践为线索，介绍我们如何通过驻扎一线钉群、连接企业内部平台，以及对上下文工程与主动式能力的持续探索，让 Agent 在真实协作中理解背景、承接任务、参与跟进。围绕上下文的延续、组织注意力的消耗与 AI 能力的日常应用，分享其中的产品思考、技术实践与经验，探索 Agent 从被动响应走向主动协同，以及企业在 AI 时代演进协作方式的可能。',
      speaker: '丁文涛（石骆）',
      speakerTitle: '蚂蚁集团 · AI 全栈工程师',
      avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/z2tyR4jX9PgAAAAARLAAAAgADiiDAQFr/original',
      avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/HYFHR6s0kaEAAAAARbAAAAgADiiDAQFr/original',
    },
    {
      time: '15:40 - 15:55',
      title: '茶歇逛展',
      description: '',
      speaker: '',
      speakerTitle: '',
      avatarBlue: '',
      avatarRed: '',
    },
    {
      time: '15:55 - 16:20',
      title: '从意图识别到主动服务：构建效果驱动的 Agent 服务闭环',
      description: '用户的问题往往具体而分散。同样是“退款去哪了”，有人关心退款抵扣了哪期账单，有人不明白退款后为什么仍要还款。这类中长尾需求数量多、变化快，逐项提需求、排期开发，很难兼顾覆盖与成本。本次分享以花呗退款主动服务为例，介绍一套从意图识别到主动服务的 Agent 闭环：从用户行为中形成有证据的理解并沉淀为意图资产，经多智能体推演和可靠交付转化为服务，再通过分层效果验证把反馈转化为持续改进。分享还将探讨模型与规则如何分工，以及自动化与人工把关的边界。',
      speaker: '姚晨阳（黄霸）、张泽（拾迹）',
      speakerTitle: '黄霸：蚂蚁集团 · 技术专家 / 拾迹：蚂蚁集团 · 技术专家',
      avatarBlue: ['https://mdn.alipayobjects.com/huamei_m96plz/afts/img/1bs6R4IPqjwAAAAARVAAAAgADiiDAQFr/original', 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/QSFARowBULIAAAAAR2AAAAgADiiDAQFr/original'],
      avatarRed: ['https://mdn.alipayobjects.com/huamei_m96plz/afts/img/4u-JSLNoTTEAAAAASFAAAAgADiiDAQFr/original', 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/nIsBQKobgL0AAAAAR_AAAAgADiiDAQFr/original'],
    },
  ],
}

// 讲者列表
export const speakers = [
  { name: '李俊奎', nickname: '向秀', title: '支付宝技术部负责人', company: '蚂蚁集团', session: 'main', avatar: '' },
  { name: '翁欣旦', nickname: '钱唐', title: '终端技术委员会负责人', company: '蚂蚁集团', session: 'main', avatar: '' },
  { name: '徐达峰', nickname: '达峰', title: '平台体验技术部负责人', company: '蚂蚁集团', session: 'main', avatar: '' },
  { name: '朱兴民', nickname: '偏右', title: '支付宝前端平台负责人', company: '蚂蚁集团', session: 'main', avatar: '' },
  { name: '江波', nickname: '菠酱', title: '开源技术增长负责人', company: '蚂蚁集团', session: 'main', avatar: '' },
  { name: '赵利超', nickname: '鬼畏', title: '支付宝终端基础技术负责人', company: '蚂蚁集团', session: 'frontend', avatar: '' },
  { name: '徐文彬', nickname: '闻冰', title: '创始人', company: 'LobeHub', session: 'see-next', avatar: '' },
  { name: '许德刚', nickname: '', title: '产品负责人', company: 'Rokid', session: 'terminal', avatar: '' },
  { name: '李亚飞', nickname: '', title: 'CEO', company: 'Clacky.ai', session: 'ai-coding', avatar: '' },
  { name: '叶震杰', nickname: '', title: 'Co-Founder & Product Lead', company: 'ZenMux.ai', session: 'ai-coding', avatar: '' },
  { name: '党宇航', nickname: '', title: '产品研发负责人', company: 'Tripo VAST', session: 'visualization', avatar: '' },
  { name: '张明', nickname: '', title: '高级技术专家', company: '蚂蚁集团', session: 'ai-coding', avatar: '' },
  { name: '陈伟', nickname: '', title: '技术专家', company: '蚂蚁集团', session: 'ai-coding', avatar: '' },
  { name: '吴峰', nickname: '', title: '可视化技术负责人', company: '蚂蚁集团', session: 'visualization', avatar: '' },
  { name: '孙磊', nickname: '', title: '跨端引擎技术专家', company: '蚂蚁集团', session: 'terminal', avatar: '' },
  { name: '林晓', nickname: '', title: '创意编程专家', company: '蚂蚁集团', session: 'visualization', avatar: '' },
]

// 特邀嘉宾
export const specialGuests = [
  {
    name: '何征宇',
    nickname: '梁纥',
    title: '蚂蚁集团 · CTO',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/ETOVSLjIvU8AAAAAT7AAAAgADiiDAQFr/original',
    avatarRed: ''
  },
  {
    name: '郑叶飞',
    nickname: '圆心',
    title: '阿里国际 · AliExpress CTO',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/aBCqS6Aod14AAAAAUjAAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/My63RoF3vQ0AAAAAVTAAAAgADiiDAQFr/original'
  },
  {
    name: '王保平',
    nickname: '玉伯',
    title: 'YouMind · 创始人 & CEO',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/ItyQS5pPFywAAAAAUAAAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/tDmxT4tWA7oAAAAAUNAAAAgADiiDAQFr/original'
  },
  {
    name: '翁欣旦',
    nickname: '钱唐',
    title: '蚂蚁集团 · 终端技术委员会负责人',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/o0bkSYCqwhsAAAAAT5AAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/6OiZQ7eDyMUAAAAAUqAAAAgADiiDAQFr/original'
  },
  {
    name: '曹恺',
    nickname: '钟繇',
    title: '蚂蚁集团 · 平台技术事业群副总裁',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/0FHJSJXyaMAAAAAARWAAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/6PWdSL3Qe9wAAAAARlAAAAgADiiDAQFr/original'
  },
  {
    name: '郭虹宇',
    nickname: '老郭',
    title: '淘天集团 · 淘宝终端技术负责人',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/z_12Q7JUxhoAAAAAReAAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/Nl0jSLG5oRIAAAAAVjAAAAgADiiDAQFr/original'
  },
  {
    name: '王姣',
    nickname: '杜素',
    title: '蚂蚁集团 · 支付宝设计负责人',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/r4_iTYS0OP0AAAAAUjAAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/-VTqRbVyF80AAAAAUZAAAAgADiiDAQFr/original'
  },
  {
    name: '郭旻桢',
    nickname: '臻儿',
    title: '蚂蚁集团 · 支付宝 AI 创新产品中心负责人',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/AEw4R6TeJz8AAAAAT4AAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/2wYgTIWsUMkAAAAAReAAAAgADiiDAQFr/original'
  },
  {
    name: '徐达峰',
    nickname: '达峰',
    title: '蚂蚁集团 · 平台体验技术部负责人',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/fckbRapByFQAAAAAUKAAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/VWIITqdL1_oAAAAAUxAAAAgADiiDAQFr/original'
  },
  {
    name: '于海泽',
    nickname: '镜同',
    title: '蚂蚁集团 · AI 支付产品总监',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/gUmuQJYf8uoAAAAAWVAAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/WDd1R4MiNCIAAAAAUCAAAAgADiiDAQFr/original'
  },
  {
    name: '朱华军',
    nickname: '阿大',
    title: 'Qoder · 客户端技术团队负责人',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/vua7Qr8I_Z4AAAAAUtAAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/K0kVTIIF97sAAAAAUqAAAAgADiiDAQFr/original'
  },
  {
    name: '舒文亮',
    nickname: '舒文',
    title: '中国计算机学会 TF 智能前端 SIG 主席，蚂蚁集团 · 财富保险事业群终端负责人',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/nN6FQIa_JGAAAAAAT5AAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/a6MATKvK0xkAAAAAUTAAAAgADiiDAQFr/original'
  },
  {
    name: '王卓',
    nickname: '完颜',
    title: '蚂蚁集团 · 消费金融新体验技术部负责人',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/HZHJR5D4guQAAAAATsAAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/_FXqR6AQLUYAAAAAUDAAAAgADiiDAQFr/original'
  },
  {
    name: '管维刚',
    nickname: '古云',
    title: '网商银行 · 普惠信贷体验技术部负责人',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/movBRaaXmNQAAAAAUHAAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/wSP0Q6m_ALkAAAAARhAAAAgADiiDAQFr/original'
  },
  {
    name: '朱兴民',
    nickname: '偏右',
    title: '蚂蚁集团 · 阿宝产品评测负责人',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/dCTHSqpNwAUAAAAAT5AAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/AJZERKSeXDUAAAAAUPAAAAgADiiDAQFr/original'
  },
  {
    name: '夏炎',
    nickname: '莫非',
    title: '阿里巴巴 · 资深技术专家',
    avatarBlue: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/Sld-RLjH_-oAAAAATPAAAAgADiiDAQFr/original',
    avatarRed: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/_TMuQ5A9mG0AAAAAVaAAAAgADiiDAQFr/original'
  },
]

// 特色展台
export const exhibitions = [
  { name: '蚂蚁阿福', description: '你的 AI 健康朋友。', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/Q86OQ455uroAAAAAS2AAAAgADiiDAQFr/256w_256h', link: '' },
  { name: '灵光', description: '灵光，能管事的个人助理。', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/HPFmQKfPO1oAAAAAQEAAAAgADiiDAQFr/original', link: 'https://www.lingguang.com/' },
  { name: '百灵', description: '为真实世界而生的开放智能。Open intelligence for the real-world.', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/lXz6Safe1GcAAAAAQWAAAAgADiiDAQFr/original', link: 'https://www.ant-ling.com/' },
  { name: '', description: '以创新的 AI 支付助力AI时代。Powering the AI Era with Innovative AI Payments.', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/JwfPSq2DBxQAAAAAQFAAAAgADiiDAQFr/original', link: 'https://aipay.alipay.com/' },
  { name: '阿宝', description: '作为 AI 版支付宝，阿宝是你的专属 Personal Agent 生活助手，现设立千万奖池发起智能体涌现奖大赛，旨在征集有用、有趣的生活消费智能体和 Agent、Skill，赋能开发者及其智能体作品商业潜力，落地支付宝生态。', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/hpbmSKcqrngAAAAAgEAAAAgADiiDAQFr/512w_512h', link: 'https://abaoemerge.alipay.com' },
  { name: '', description: '千问办公是阿里巴巴全新推出的一站式 AI 办公平台。当前深度融入钉钉生态，实现与钉钉功能体系的无缝衔接；未来将进一步打通企业数据库及主流 åIM 工具，构建更广泛的连接能力。', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/DzCTTra6k4MAAAAAQFAAAAgADiiDAQFr/original', link: 'https://qwenwork.cn', logoHeight: 36 },
  { name: 'WeaveFox', description: 'AI 全栈应用创作平台，通过自然语言对话，自由创造个人专属的工具与独立应用，快速实现创意变现。', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/ZAv4TKvxmvYAAAAAQEAAAAgADiiDAQFr/original', link: 'https://www.weavefox.cn/' },
  { name: 'Ant Design', description: 'Ant Design 是蚂蚁集团开源的企业级设计体系，提供设计规范、高质量 React 组件及配套生态。通过灵活的主题定制与 AI 友好的开发能力，帮助设计者和开发者高效构建风格统一、富有个性的产品体验。', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/2eedSL8R2lUAAAAAQLAAAAgADiiDAQFr/original', link: 'https://ant.design/' },
  { name: 'AntV', description: '蚂蚁企业级 AI 数据可视化解决方案，让人们在数据世界里获得视觉化思考能力。Turning data into a visual language for better thinking.', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/RSVoSYTISmYAAAAAQDAAAAgADiiDAQFr/original', link: 'https://antv.antgroup.com/' },
  { name: 'Galacean', description: 'Galacean Engine 是蚂蚁集团开源的 AI-Native 图形与游戏引擎，秉承 AI-First、移动端优先、Web 优先的设计理念，让创作者通过 Harness，以自然语言构建游戏与 3D 互动应用，将一个念头变成可探索、可交互的数字世界。', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/8eM2T5UX840AAAAAQwAAAAgADiiDAQFr/original', link: 'https://galacean.antgroup.com/engine' },
  { name: 'Qoder', description: 'Qoder 是一个面向真实工作的 Agentic 平台，将 AI 带入软件开发、终端工作流、云端托管执行、日常办公和持续运行的数字岗位。', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/29jjRZAGimcAAAAAQOAAAAgADiiDAQFr/original', link: 'https://qoder.cn/' },
  { name: '', description: 'QMuse 是支付宝旗下的 AI 原生生产力平台，融合自然语言与多模态生成能力，支持PC/移动双端低门槛创作网页/小程序/PPT 等多类型产物，出品即精品、产物即交付', logo: 'https://mdn.alipayobjects.com/huamei_eyqazd/afts/img/xKQ6QpslSfIAAAAAQzAAAAgADlqOAQJr/original', link: 'https://qmuse.cn/' },

  { name: '画眉', description: 'AI Native 创意生产平台，全面助力 超级个体 和 业务 快速生产高质量的图片、动效、视频、UI，用好创意驱动业务增长。过去一年累计完成 3.6 亿次生成。', logo: 'https://mdn.alipayobjects.com/huamei_9ip1jn/afts/img/A*tyd5RKlUt5IAAAAAAAAAAAAADn95AQ/original', link: 'https://idesign.alipay.com/' },
  { name: '哆啦', description: '意图发生，供给抵达。哆啦是面向消费金融场景的 AI Native 生产与经营平台，围绕用户意图，连接需求理解、服务生成与按需交付，让合适的服务在用户需要时抵达。', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/KHScQqyLEFAAAAAAQKAAAAgADiiDAQFr/original', link: 'https://dora.antgroup.com' },
  { name: '', description: 'AiWork 是蚂蚁数科旗下面向开发者、OPC 以及企业侧、覆盖端到端工作的通用智能体工作台。', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/HZGBSKacAOIAAAAAQzAAAAgADiiDAQFr/original', link: 'https://aiwork.dtagi.cn/', logoHeight: 36 },
]

// 合作伙伴（hideName 表示 logo 已含品牌名，不再重复显示名称）
export const partners = [
  { name: '蚂蚁阿福', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/Q86OQ455uroAAAAAS2AAAAgADiiDAQFr/256w_256h', link: '' },
  { name: '蚂蚁开源', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/ddpmRqQj3uEAAAAAQQAAAAgADiiDAQFr/fmt.avif', link: 'https://github.com/antgroup', hideName: true },
  { name: '魔搭社区', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/PZfcSp9US2wAAAAAQHAAAAgADiiDAQFr/fmt.avif', link: 'https://www.modelscope.cn', hideName: true },
  { name: '百灵', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/lXz6Safe1GcAAAAAQWAAAAgADiiDAQFr/fmt.avif', link: 'https://www.ant-ling.com/' },
  { name: 'InfoQ', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/e9eqSpHVRFYAAAAAQJAAAAgADiiDAQFr/fmt.avif', link: 'https://www.infoq.cn', hideName: true },
  { name: '观猹', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/my9eTaylR4kAAAAAQMAAAAgADiiDAQFr/original', link: 'https://watcha.cn/', hideName: true },
  { name: 'WeaveFox', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/ZAv4TKvxmvYAAAAAQEAAAAgADiiDAQFr/original', link: 'https://www.weavefox.cn' },
  { name: '量子位', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/aKh8RIPWwj8AAAAAQFAAAAgADiiDAQFr/fmt.avif', link: 'https://www.qbitai.com/', hideName: true },
  { name: 'CSDN', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/mm4OSpNGpGUAAAAAQJAAAAgADiiDAQFr/fmt.avif', link: '', hideName: true },
  { name: '开源江湖', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/IVGSRIjfq6oAAAAAQ2AAAAgADiiDAQFr/fmt.avif', link: '', hideName: true },
  { name: '极星会', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/HMQGS4WP8WIAAAAAQMAAAAgADiiDAQFr/fmt.avif', link: 'https://www.gitfund.cn', hideName: true },
  { name: 'AiWork', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/HZGBSKacAOIAAAAAQzAAAAgADiiDAQFr/original', link: 'https://aiwork.dtagi.cn/', hideName: true },
  { name: 'DBAplus', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/MUk0QKztWnMAAAAAQGAAAAgADiiDAQFr/original', link: 'https://dbaplus.cn', hideName: true },
  { name: '理想汇宝厅', logo: 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/iK4dSqnXLXgAAAAARCAAAAgADiiDAQFr/original', link: 'https://www.xiaohongshu.com/user/profile/66b0c50e000000001d03308f?xsec_token=YBB6wslBByarX1M1q2D0zKrYnsP5MXeutYEyb0ljfyzdY=&xsec_source=app_share&xhsshare=CopyLink&shareRedId=N0g1OUQ5PE46TEZFSkoxOTc0Tj49SDY5&apptime=1793866605&share_id=042b03b0b5b14a9f8bc501b817c8ecae&track_code=2t77uouGVaP', hideName: true },
]

// 往届回顾
export const pastConferences = [
  { year: '2025', url: 'https://seeconf2025.antgroup.com/' },
  { year: '2022', url: 'https://seeconf2022.alipay.com/' },
  { year: '2021', url: 'https://seeconf2021.antfin.com/' },
  { year: '2020', url: 'http://seeconf2020.antfin.com/' },
  { year: '2019', url: 'https://seeconf2019.antfin.com/' },
  { year: '2018', url: 'https://seeconf2018.alipay.com/' },
]

// 购票链接
export const ticketBuyUrl = 'https://www.bagevent.com/event/SEEConf2026'

// 票档信息
export const ticketTiers = [
  { id: 'super-early-bird', name: '超级早鸟票', badge: '1024限定', startDate: '2026-10-22T00:00:00', endDate: '2026-10-24T23:59:59', price: 79, quantity: 200 },
  { id: 'early-bird', name: '早鸟票', badge: '限时', startDate: '2026-10-25T00:00:00', endDate: '2026-11-08T23:59:59', price: 99, quantity: 200, originalPrice: 199 },
  { id: 'regular', name: '普通票', badge: '', startDate: '2026-11-08T00:00:00', endDate: '2026-11-27T12:00:00', price: 199, quantity: 200, groupNote: '团购票买5赠1 ≈ ¥166/张' },
  { id: 'group', name: '团购票', badge: '买5赠1', startDate: '2026-11-08T00:00:00', endDate: '2026-11-27T12:00:00', price: 199, quantity: 100, effectivePrice: 166 },
]

// 获取当前生效的优先票档（按数组顺序返回第一个在有效期内的，排除团购票）
export function getActiveTicketTier() {
  const now = Date.now()
  for (const tier of ticketTiers) {
    if (tier.id === 'group') continue
    const start = new Date(tier.startDate).getTime()
    const end = new Date(tier.endDate).getTime()
    if (now >= start && now <= end) return tier
  }
  return null
}

// 计算倒计时（返回天/时/分/秒和总毫秒）
export function getCountdown(endDate) {
  const total = new Date(endDate).getTime() - Date.now()
  if (total <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    total,
    days: Math.floor(total / 86400000),
    hours: Math.floor((total % 86400000) / 3600000),
    minutes: Math.floor((total % 3600000) / 60000),
    seconds: Math.floor((total % 60000) / 1000),
  }
}

// 紧迫度等级（none / medium / high / critical）
export function getUrgencyLevel(endDate) {
  const total = new Date(endDate).getTime() - Date.now()
  if (total <= 0) return 'none'
  if (total <= 24 * 3600000) return 'critical'   // < 24h
  if (total <= 3 * 86400000) return 'high'       // < 3 days
  if (total <= 7 * 86400000) return 'medium'     // < 7 days
  return 'none'
}

// 整数补零（用于倒计时显示）
export function pad2(n) {
  return String(n).padStart(2, '0')
}
