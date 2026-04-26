const PERSONAS = {
  director: {
    title: '《云里雾里但我拍板》', job: '局长', image: 'assets/director.svg',
    tagline: '你不一定懂每个技术细节，但你懂怎么让所有人动起来。',
    description: '你是混乱现场的定盘星，擅长定方向、拉协同、压节奏。',
    roast: '我不生产焦虑，我只是把焦虑排进时间表。'
  },
  forecaster: {
    title: '《猜天不如猜我心情》', job: '预报员', image: 'assets/forecaster.svg',
    tagline: '别人看云图像抽象画，你看云图像连续剧。',
    description: '你对天气变化敏感，习惯给出主方案+备选方案。',
    roast: '我最怕的不是下雨，是你拿上次没下雨来考古。'
  },
  network: {
    title: '《网一抖我先抖》', job: '网管', image: 'assets/network.svg',
    tagline: '平时像透明人，出故障时全员@你。',
    description: '你对稳定性执念极深，关键时刻总能把系统扛住。',
    roast: '我不怕加班，我怕“马上就好”。'
  },
  weather_mod: {
    title: '《看天吃饭但我会加特效》', job: '人影专家', image: 'assets/weather_mod.svg',
    tagline: '窗口期猎人，抢时间也抢精度。',
    description: '你擅长把计划变动作，现场执行力极强。',
    roast: '别人以为我会法术，其实我会流程和复盘。'
  },
  observer: {
    title: '《凌晨四点我比鸡先醒》', job: '测报员', image: 'assets/observer.svg',
    tagline: '数字不对，你就睡不着。',
    description: '你是数据诚实派，追求可验证、可追溯、零缺测。',
    roast: '我不是起得早，我只是还没睡。'
  },
  law: {
    title: '《嘴上普法手上劝架》', job: '执法队员', image: 'assets/law.svg',
    tagline: '会讲规则，也会讲人话。',
    description: '你守底线、有分寸，能在现场把冲突降级。',
    roast: '先讲法，再讲理，最后讲“别上头”。'
  },
  finance: {
    title: '《算盘一响全局冷静》', job: '财务', image: 'assets/finance.svg',
    tagline: '预算结界守护者。',
    description: '你擅长把“差不多”变成“对得上”。',
    roast: '我没拖你进度，我在救你年终汇报。'
  },
  admin: {
    title: '《我发通知你回收到》', job: '文秘', image: 'assets/admin.svg',
    tagline: '流程中枢，信息翻译官。',
    description: '你能把混乱事项排队推进，保持统一口径。',
    roast: '我每天都在“再提醒一次”和“最后提醒一次”之间横跳。'
  }
};

const QUESTIONS = [
  { stem:'项目群里突然说“今晚可能有强对流”，你第一反应是？', options:[['先拉齐各组，明确谁负责啥','director'],['打开最新资料，立刻复盘趋势','forecaster'],['先看系统和链路稳不稳','network'],['先确认观测数据有没有异常','observer']]},
  { stem:'突发任务要20分钟内给方案，你会？', options:[['给一个可执行框架，边走边补细节','director'],['先写最可能情景+备选情景','forecaster'],['先保证平台能跑，再谈优化','network'],['先查流程合规和责任边界','law']]},
  { stem:'同事说“差不多就行”，你内心是？', options:[['行，但先把风险写清楚','director'],['不行，我再算一版','forecaster'],['看预算，超了就不行','finance'],['看发文口径，不能含糊','admin']]},
  { stem:'周末临时加班，你最像？', options:[['组织者：把人和事排好','director'],['研判者：盯图盯到眼干','forecaster'],['保障者：不让系统掉链子','network'],['执行者：现场就位马上开干','weather_mod']]},
  { stem:'遇到“大家都在等别人开口”的会，你会？', options:[['我先定个讨论顺序','admin'],['我先给判断结论','director'],['我先给数据证据','observer'],['我先讲规则底线','law']]},
  { stem:'对可控风险的理解，你更偏向？', options:[['风险可接受但要可追踪','director'],['模型误差在范围内即可','forecaster'],['系统有冗余才叫可控','network'],['账目可核验才叫可控','finance']]},
  { stem:'被误解时你通常会？', options:[['先不解释，先把事做完','observer'],['拿事实和流程说话','law'],['发一版更清晰的通知','admin'],['拉个短会一次讲明白','director']]},
  { stem:'你最怕哪种“突发”？', options:[['预测窗口很短','forecaster'],['网络突然抖动','network'],['资金节点卡住','finance'],['现场沟通失焦','law']]},
  { stem:'跨部门协作时你会先做？', options:[['先定沟通节奏和纪要模板','admin'],['先定目标和时间节点','director'],['先定技术接口规范','network'],['先定观测与反馈机制','observer']]},
  { stem:'工作最有成就感的瞬间是？', options:[['预案赶在变化前落地','forecaster'],['作业窗口抓得刚刚好','weather_mod'],['现场问题被规则化解','law'],['报销流程一次过','finance']]},
  { stem:'你在团队里最常被拜托的是？', options:[['你来拍板吧','director'],['你再看看这走势','forecaster'],['你快看看为啥连不上','network'],['你帮我润一下这通知','admin']]},
  { stem:'你做事最像哪种节奏？', options:[['先框架后迭代','director'],['先证据后结论','observer'],['先流程后执行','law'],['先预算后采购','finance']]},
  { stem:'看到一份表格，你先看？', options:[['关键趋势有没有跳点','forecaster'],['数据源是否可信','observer'],['金额与科目是否匹配','finance'],['是否需要归档和转发','admin']]},
  { stem:'稳定对你意味着？', options:[['大方向稳定','director'],['系统在线稳定','network'],['现场组织稳定','weather_mod'],['规则执行稳定','law']]},
  { stem:'你最不能忍的是？', options:[['关键时刻没人负责','director'],['模糊表述误导判断','forecaster'],['线缆乱插没人标识','network'],['文件版本满天飞','admin']]},
  { stem:'同事夸你靠谱，多半因为？', options:[['总能给出可执行时间表','admin'],['能把复杂情况说清','forecaster'],['盯现场细节很稳','weather_mod'],['对数字非常诚实','finance']]},
  { stem:'你最常说的一句话可能是？', options:[['先别慌，按预案走','director'],['我再核一遍数据','observer'],['重启前先备份','network'],['请按规定提交材料','law']]},
  { stem:'遇到“锅”时你更倾向？', options:[['先接住，再复盘','director'],['先定位，再修复','network'],['先补证据链，再沟通','law'],['先补记录，再归档','admin']]},
  { stem:'你对创新的态度是？', options:[['有效就试，但要可控','director'],['能提升命中率就上','forecaster'],['提高作业窗口利用率就上','weather_mod'],['不破坏预算平衡就上','finance']]},
  { stem:'你对加班最真实的感受是？', options:[['为关键节点值得','director'],['预报窗口不等人','forecaster'],['设备告警不看不行','network'],['观测时次到了就得上','observer']]},
  { stem:'你更喜欢哪种被认可方式？', options:[['团队说有你在就稳了','director'],['用户说这次报得真准','forecaster'],['同事说系统真丝滑','network'],['领导说材料很规范','admin']]},
  { stem:'面对不确定性，你更相信？', options:[['组织协同','director'],['数据演化','forecaster'],['现场经验','weather_mod'],['制度边界','law']]},
  { stem:'你觉得专业首先是？', options:[['对结果负责','director'],['对事实负责','observer'],['对系统负责','network'],['对资金负责','finance']]},
  { stem:'你最适合带哪类新人？', options:[['综合协调型','director'],['数据分析型','forecaster'],['实操执行型','weather_mod'],['文档流程型','admin']]},
  { stem:'你最常获得的隐藏称号是？', options:[['会议终结者','director'],['模型驯兽师','forecaster'],['机房守夜人','network'],['发票侦探','finance']]},
  { stem:'你觉得最浪漫的工作状态是？', options:[['关键时刻全员同频','director'],['天气变化被你提前看见','forecaster'],['所有设备都亮绿灯','network'],['观测记录零缺测','observer']]},
  { stem:'如果做一次岗位体验，你最想试？', options:[['去现场执行任务','law'],['去云下抓作业窗口','weather_mod'],['去后台排预算计划','finance'],['去办公室统筹收发','admin']]},
  { stem:'你对细节的态度最像？', options:[['影响结论的细节必须抠','forecaster'],['影响可靠性的细节必须抠','network'],['影响合规性的细节必须抠','law'],['影响可追溯的细节必须抠','observer']]},
  { stem:'一天结束前你最可能在做？', options:[['看明日工作面并排优先级','director'],['更新口径并发出提醒','admin'],['对账并留痕','finance'],['巡检设备状态','network']]},
  { stem:'如果只能保留一种超能力，你选？', options:[['一句话让团队动起来','director'],['一眼看出天气关键拐点','forecaster'],['一分钟排除网络故障','network'],['一次性把复杂材料写明白','admin']]}
];
