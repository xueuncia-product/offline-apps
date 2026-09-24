/* Curated source-backed context; example dialogues and translations are original. */
window.CULTURE_DATA={
 checked:'2026-09-23',
 sources:{
  greetings:['惠灵顿维多利亚大学 · Māori greetings and phrases','https://www.wgtn.ac.nz/maori-at-victoria/rauemi/te-reo-at-university/maori-greetings-and-phrases'],
  sounds:['毛利语言委员会 · 发音指南','https://www.reomaori.co.nz/pronunciation'],
  office:['毛利语言委员会 · 办公室用语','https://www.reomaori.co.nz/reo-for-the-office'],
  slang:['新西兰旅游局 · 当地俚语','https://www.newzealand.com/ca/new-zealand-slang/'],
  arrival:['Te Ara · 最早的定居者','https://teara.govt.nz/en/history/page-1'],
  treaty:['文化与遗产部 · 怀唐伊条约简介','https://nzhistory.govt.nz/politics/treaty/the-treaty-in-brief'],
  suffrage:['文化与遗产部 · 女性选举权','https://nzhistory.govt.nz/politics/womens-suffrage'],
  reo:['文化与遗产部 · 毛利语复兴','https://nzhistory.govt.nz/culture/maori-language-week/waitangi-tribunal-claim'],
  ngai:['Ngāi Tahu · 南岛历史','https://ngaitahu.iwi.nz/ngai-tahu/creation-stories/'],
  settlement:['Te Ara · Ngāi Tahu 和解','https://teara.govt.nz/en/ngai-tahu/page-9'],
  religion:['Stats NZ · 2023 年人口普查','https://www.stats.govt.nz/information-releases/2023-census-population-dwelling-and-housing-highlights/'],
  faith:['Te Ara · Ringatū 与 Rātana','https://teara.govt.nz/en/nga-hahi-maori-and-christian-denominations/page-7'],
  marae:['新西兰旅游局 · Marae 与参访礼仪','https://www.newzealand.com/nz/feature/marae-maori-meeting-grounds/'],
  matariki:['Te Papa · Matariki 的三重意义','https://blog.tepapa.govt.nz/2023/07/13/matariki-a-time-to-share-your-aspirations-for-the-coming-year/'],
  manners:['Te Ara · 日常礼仪','https://teara.govt.nz/en/manners-and-social-behaviour/page-7'],
  arrow:['DOC · 箭镇华人聚居地','https://www.doc.govt.nz/chinese-settlement']
 },
 phrases:[
  {id:'kia',group:'问候与邮件',lang:'mi',text:'Kia ora',en:'Hello / thank you',zh:'你好；也可用于感谢',sound:'ki-a · o-ra',tip:'r 轻弹舌尖。自然问候和普通邮件都可用，感谢的含义取决于上下文。',example:'Kia ora, Sam!',translation:'你好，Sam！',source:'greetings'},
  {id:'koe',group:'问候与邮件',lang:'mi',text:'Tēnā koe',en:'Formal greeting to one person',zh:'您好（对一个人）',sound:'tē-nā · ko-e',tip:'ē、ā 是长元音；koe 内的两个元音都要留意。适合较正式的邮件开头。',example:'Tēnā koe, Sam.',translation:'Sam，您好。',source:'greetings'},
  {id:'korua',group:'问候与邮件',lang:'mi',text:'Tēnā kōrua',en:'Formal greeting to two people',zh:'两位好（恰好两人）',sound:'tē-nā · kō-ru-a',tip:'kōrua 指听话的两个人，ō 要读长，不适用于三人群组。',example:'Tēnā kōrua.',translation:'两位好。',source:'greetings'},
  {id:'koutou',group:'问候与邮件',lang:'mi',text:'Tēnā koutou',en:'Formal greeting to three or more people',zh:'各位好（三人及以上）',sound:'tē-nā · kou-tou',tip:'ou 是滑动衔接的元音组合；给三人以上团队写信时可用。',example:'Tēnā koutou.',translation:'各位好。',source:'greetings'},
  {id:'mihi',group:'问候与邮件',lang:'mi',text:'Ngā mihi',en:'Regards / acknowledgements',zh:'致意；常见邮件结尾',sound:'ngā · mi-hi',tip:'ng 像 singer 中的 ng，不额外加一个 g；ā 拉长。语气接近 regards，不是开场问候的固定替代。',example:'Ngā mihi,\nAlex',translation:'致意，\nAlex',source:'greetings'},
  {id:'morena',group:'问候与邮件',lang:'mi',text:'Mōrena',en:'Good morning',zh:'早上好',sound:'mō-re-na',tip:'ō 是长元音，r 轻弹。用于上午打招呼。',example:'Mōrena!',translation:'早上好！',source:'greetings'},
  {id:'kakite',group:'问候与邮件',lang:'mi',text:'Ka kite anō',en:'See you again',zh:'再见；下次见',sound:'ka · ki-te · a-nō',tip:'anō 的 ō 拉长。可以用于结束一次轻松交谈。',example:'Ka kite anō!',translation:'下次见！',source:'greetings'},
  {id:'sweet',group:'本地口语',lang:'en',text:'Sweet as!',en:'Great / all good / no worries',zh:'好啊；没问题；太好了',sound:'/swiːt æz/',tip:'很随意的口语，不必等 as 后面再接一个词。初次正式邮件用 That sounds good 更稳妥。',example:'We can meet at ten. — Sweet as!',translation:'我们十点见。——好啊！',source:'slang'},
  {id:'chur',group:'本地口语',lang:'en',text:'Chur',en:'Thanks / appreciation',zh:'谢啦；表示赞赏',sound:'/tʃɜː/（近似，口音会有差异）',tip:'很口语化。听懂即可，不必为了显得本地化而反复使用。',example:'Chur, thanks for your help.',translation:'谢啦，谢谢你的帮助。',source:'slang'},
  {id:'choice',group:'本地口语',lang:'en',text:'Choice!',en:'Excellent / great',zh:'棒极了！',sound:'/tʃɔɪs/',tip:'作感叹语时是称赞，不是在让你做一个 choice。',example:'That view is choice!',translation:'那景色真棒！',source:'slang'},
  {id:'jandals',group:'本地口语',lang:'en',text:'Jandals',en:'Flip-flops',zh:'人字拖',sound:'/ˈdʒændəlz/',tip:'商店或出游聊天里可能听到；不是徒步鞋。',example:'I left my jandals at the beach.',translation:'我把人字拖落在海滩上了。',source:'slang'},
  {id:'togs',group:'本地口语',lang:'en',text:'Togs',en:'Swimwear',zh:'泳衣；泳裤',sound:'/tɒɡz/',tip:'听到 Bring your togs，通常是在提醒带泳装。',example:'Bring your togs.',translation:'带上泳装。',source:'slang'},
  {id:'dairy',group:'本地口语',lang:'en',text:'Dairy',en:'A small convenience shop',zh:'街角小便利店（也可指乳制品）',sound:'/ˈdeəri/',tip:'说 go to the dairy 时，常指去小商店；根据语境判断。',example:'There is a dairy down the road.',translation:'沿路有一家小便利店。',source:'slang'},
  {id:'coffee',group:'旅行沟通',lang:'en',text:'Could I have a flat white, please?',en:'Ordering politely',zh:'请给我一杯馥芮白，可以吗？',sound:'Could I have · a flat white · please?',tip:'按短语分组读。下单后常需要回答堂食还是外带。以下旅行句子是自编练习。',example:'To take away, please.',translation:'请帮我打包。'},
  {id:'repeat',group:'旅行沟通',lang:'en',text:'Sorry, could you say that again more slowly?',en:'Asking someone to repeat',zh:'不好意思，可以再慢一点说一次吗？',sound:'Sorry · could you say that again · more slowly?',tip:'不需要假装听懂。对方说完后复述重点，可以减少误解。',example:'So, we meet at nine at the visitor centre?',translation:'所以，我们九点在游客中心见，对吗？'},
  {id:'name',group:'旅行沟通',lang:'en',text:'How do you pronounce this place name?',en:'Asking about a name',zh:'这个地名怎么读？',sound:'How do you pronounce · this place name?',tip:'可以指给对方看，然后跟读一次。地名可能有地方读法。',example:'Could you say it once more, please?',translation:'能请您再说一遍吗？'},
  {id:'recommend',group:'旅行沟通',lang:'en',text:'What would you recommend around here?',en:'Asking for local suggestions',zh:'这附近您有什么推荐？',sound:'What would you recommend · around here?',tip:'可以接上你的时间和兴趣，让问题更好回答。',example:'We have two hours and enjoy short walks.',translation:'我们有两个小时，喜欢短途散步。'},
  {id:'photo',group:'旅行沟通',lang:'en',text:'Is it okay to take photos here?',en:'Asking permission',zh:'这里可以拍照吗？',sound:'Is it okay · to take photos here?',tip:'参访 marae、宗教场所或拍摄他人时，先问、再拍；现场指引优先。',example:'Of course. I will put my phone away.',translation:'当然，我会把手机收起来。',source:'marae'},
  {id:'help',group:'旅行沟通',lang:'en',text:'Could you help me find the bus stop?',en:'Asking for directions',zh:'能帮我找一下公交站吗？',sound:'Could you help me find · the bus stop?',tip:'同一句式也能替换为 entrance、toilets 或 information desk。',example:'Is it within walking distance?',translation:'走路能到吗？'},
  {id:'plate',group:'旅行沟通',lang:'en',text:'What would you like me to bring?',en:'Clarifying an invitation',zh:'您希望我带些什么？',sound:'What would you like me · to bring?',tip:'若聚会邀请写 bring a plate，通常是带一份分享的食物；不确定时直接问。',example:'Would a salad be okay?',translation:'带一份沙拉可以吗？',source:'manners'},
  {id:'intro',group:'旅行沟通',lang:'en',text:'I am visiting from China. This is my first time here.',en:'Starting a conversation',zh:'我从中国来旅行，这是我第一次来这里。',sound:'I am visiting from China · this is my first time here.',tip:'这是可按自己的情况修改的示例，不需要套用身份称谓或背诵别人的族谱介绍。',example:'What do you enjoy most about living here?',translation:'您最喜欢在这里生活的哪一点？'},
  {id:'checkin',group:'旅行沟通',lang:'en',text:'Could you please confirm the check-in time?',en:'A written request',zh:'可以请您确认一下入住时间吗？',sound:'Could you please confirm · the check-in time?',tip:'适合给住宿方写邮件。邮件中补上自己的实际预订信息。',example:'Thank you for your help.',translation:'谢谢您的帮助。'}
 ],
 cards:[
  {id:'arrive',category:'历史',title:'历史不是从欧洲人抵达开始',front:'最早的远航者从哪里来？',body:'考古与历史研究通常将来自东波利尼西亚的定居放在约 1250—1300 年。星象、风与洋流是航海知识的一部分；不要把 Māori 的祖先想象成偶然漂流而来。',talk:'How did people navigate across the Pacific?',zh:'人们当时如何跨越太平洋航行？',source:'arrival'},
  {id:'tiriti',category:'历史',title:'1840：两种文本，一段持续的关系',front:'为什么博物馆里总出现 Te Tiriti？',body:'Te Tiriti o Waitangi / Treaty of Waitangi 于 1840 年首次签署，涉及英国王室与 Māori rangatira。毛利语与英语文本对权力等概念的表述存在重要差异；条约、违约及补偿至今仍是理解新西兰的重要线索。',talk:'What does this exhibition say about the Treaty?',zh:'这个展览如何介绍条约？',source:'treaty'},
  {id:'vote',category:'历史',title:'1893：女性取得议会选举投票权',front:'新西兰的选举史有什么特别？',body:'1893 年，新西兰成为首个让女性取得议会选举投票权的自治国家。运动与 Kate Sheppard 等人的组织和请愿有关；投票权与参选权并不是同一年获得。',talk:'I would like to learn about the suffrage movement.',zh:'我想了解女性选举权运动。',source:'suffrage'},
  {id:'revival',category:'语言',title:'邮件里的毛利语，不只是装饰',front:'为什么英语邮件会以 Kia ora 开头？',body:'毛利语经历了流失与复兴运动，1987 年获得官方语言地位。今天在日常问候、机构名称和邮件中使用它，也是让语言进入日常生活的一种方式；不代表发信人必然具有某一种族裔身份。',talk:'I am learning a few words in te reo Māori.',zh:'我正在学习一些毛利语。',source:'reo'},
  {id:'ngai',category:'南岛',title:'在南岛认识 Ngāi Tahu / Kāi Tahu',front:'为什么南岛资料里反复出现这个名字？',body:'Ngāi Tahu 的历史交织着 Waitaha、Ngāti Māmoe 和 Ngāi Tahu 的迁徙、婚姻与联盟，其联系覆盖南岛很大区域。南岛并非只有一个 iwi；不同地点的 mana whenua 与故事应听当地的介绍。',talk:'Whose stories are connected with this place?',zh:'这里与哪些群体的故事有关？',source:'ngai'},
  {id:'settled',category:'南岛',title:'1998：和解不是“历史被清空”',front:'南岛的双语地名与和解有联系吗？',body:'1998 年 Ngāi Tahu 和解立法是长期索赔历程中的关键节点，包含补偿、道歉及文化承认。旅行时看到的双名和文化解说，可以是继续了解这段历史的入口。',talk:'Where can I learn more about the local history?',zh:'在哪里可以更多了解当地历史？',source:'settlement'},
  {id:'chinese',category:'南岛',title:'箭镇：淘金者也是移民与家人',front:'一间小屋能讲出什么历史？',body:'箭镇华人聚居地保存着华人淘金者的生活与社区记忆。除了财富与淘金热，也值得留意劳动、排斥、互助，以及与远方家庭的联系。',talk:'What was daily life like in this settlement?',zh:'这个聚居地当时的日常生活是什么样？',source:'arrow'},
  {id:'belief',category:'信仰',title:'有教堂，不等于人人信教',front:'新西兰人主要信什么？',body:'2023 年人口普查中，51.6% 的通常居住人口填报无宗教，32.3% 填报基督教；也有印度教、伊斯兰教等群体。这是当年的自我认同统计，不能据此判断你面前某个人的信仰。',talk:'Is this building still used by a community?',zh:'这座建筑现在仍由某个社群使用吗？',source:'religion'},
  {id:'maorifaith',category:'信仰',title:'文化、灵性与宗教并非一个标签',front:'Māori 的信仰是单一的吗？',body:'Māori 社群中的信仰有多种历史路径。Ringatū 与 Rātana 是有自身发展历程的 Māori 宗教运动，与基督教也有联系。不要把所有 Māori 文化实践归结为同一种宗教，也不要从外貌推断信仰。',talk:'Could you tell me about the meaning of this symbol?',zh:'可以给我讲讲这个符号的含义吗？',source:'faith'},
  {id:'matariki',category:'文化',title:'Matariki：记得过去，也面向未来',front:'它只是一次看星星的活动吗？',body:'Matariki 与毛利新年有关。常见主题包括纪念逝去的人、与家人朋友珍惜当下、思考未来。不同 iwi 的观星与新年传统有差异；参与当地活动时，先听主持人的介绍。',talk:'How does your community mark Matariki?',zh:'你们的社群怎样庆祝 Matariki？',source:'matariki'},
  {id:'marae',category:'文化',title:'Marae 是活着的社区空间',front:'看到会堂，可以直接走进去吗？',body:'Marae 是 Māori 社群的重要聚会空间，不只是供游客拍照的建筑。先确认是否欢迎访客，并遵循当地安排。进入 wharenui 通常要脱鞋，不在里面饮食，拍照先征求许可。',talk:'Is there anything I should know before entering?',zh:'进去之前，有什么需要我注意的吗？',source:'marae'},
  {id:'names',category:'语言',title:'长音符号也是名字的一部分',front:'Māori、Ngāi、kōrua 上面的横线能省吗？',body:'长音符号称为 macron，标记长元音；读法与含义都可能受影响。写名字和问候语时尽量保留 ā ē ī ō ū。ng 常如 singer 中的 ng；wh 在常见读法中近似 f，也存在地区差异。',talk:'Could you help me pronounce your name correctly?',zh:'能教我正确读您的名字吗？',source:'sounds'},
  {id:'smalltalk',category:'生活',title:'从一个具体的小问题开始聊天',front:'除了“你好”，接下来能聊什么？',body:'天气、沿途景色、食物或当地推荐都可以作为轻松开场。这是交流建议，不是所有人的固定喜好。观察对方是否愿意继续，初见时不急于询问收入、信仰或代表整个族群表态。',talk:'Have you got a favourite short walk nearby?',zh:'这附近您有喜欢的短步道吗？'},
  {id:'invite',category:'生活',title:'邀请里不懂的词，问清楚就好',front:'Bring a plate，是带一个空盘子吗？',body:'在分享食物的聚会语境里，通常是请你带一份食物。可以先问人数、是否有忌口、适合带什么。文化理解的目标是交流顺畅，不是一次猜中所有潜台词。',talk:'Would you like me to bring some food to share?',zh:'需要我带一些食物来分享吗？',source:'manners'},
  {id:'slangcard',category:'生活',title:'听懂俚语，比硬用俚语更重要',front:'Sweet as 后面为什么没词了？',body:'Sweet as 可以单独表达“很好、没问题”等意思；Choice 可表示“真棒”，Chur 常表示感谢。它们较口语化，正式邮件用清楚的普通英语即可，不必模仿每一个本地表达。',talk:'That sounds good, thank you.',zh:'听起来不错，谢谢。',source:'slang'}
 ],
 timeline:[
  {year:1300,label:'约 1250—1300',text:'东波利尼西亚航海者定居',source:'arrival'},
  {year:1840,label:'1840',text:'怀唐伊条约首次签署',source:'treaty'},
  {year:1893,label:'1893',text:'女性取得议会选举投票权',source:'suffrage'},
  {year:1987,label:'1987',text:'毛利语获官方语言地位',source:'reo'},
  {year:1998,label:'1998',text:'Ngāi Tahu 和解立法',source:'settlement'}
 ],
 scenes:[
  {id:'cafe',title:'咖啡馆的一分钟',place:'皇后镇 · 点单',steps:[
   {who:'Barista',en:'Hi! What can I get for you?',zh:'你好！想点什么？',choices:[['Could I have a flat white, please?','请给我一杯馥芮白。',true,'Could I have… 是清楚、礼貌的请求。'],['Give me coffee.','给我咖啡。',false,'能被理解，但语气直接且未说清品类。加上具体饮品和 please 更自然。']]},
   {who:'Barista',en:'For here or to take away?',zh:'堂食还是外带？',choices:[['To take away, please.','请打包。',true,'take away 在这里是外带的意思。'],['Yes, I like it here.','是的，我喜欢这里。',false,'对方在问用餐方式，不是在问你喜不喜欢这家店。']]}
  ]},
  {id:'host',title:'民宿门口的寒暄',place:'瓦纳卡 · 初次见面',steps:[
   {who:'Host',en:'Hi, how is your trip going?',zh:'你好，旅途怎么样？',choices:[['Great, thanks! The lake is beautiful.','挺好的，谢谢！湖很美。',true,'先回应，再给一个具体的小话题，方便对方接话。'],['How much money do you make?','你赚多少钱？',false,'第一次见面问收入可能让人不自在，先聊旅途更合适。']]},
   {who:'Host',en:'There is a lovely short walk nearby.',zh:'附近有条很不错的短步道。',choices:[['How long does it usually take?','通常走多久？',true,'询问时长，再另外确认路况与自己的能力。'],['Sweet as! I will go without checking anything.','好啊！我不查信息就去。',false,'俚语不能代替准备。可以说 Sweet as，再问时长、入口和路况。']]}
  ]},
  {id:'pronounce',title:'把名字念得更准确',place:'游客中心 · 询问地名',steps:[
   {who:'Guide',en:'The name on the map has a long vowel.',zh:'地图上这个名字有一个长元音。',choices:[['Could you say it slowly so I can practise?','您能慢一点说，让我练习吗？',true,'坦诚请教，比凭拼写套用英语读法更有帮助。'],['I will just use an English nickname.','我直接给它起个英语绰号吧。',false,'先尝试正确称呼，必要时请对方示范。']]},
   {who:'Guide',en:'Would you like me to write it down?',zh:'需要我写下来吗？',choices:[['Yes please, including the macron.','好的，请连长音符号一起写。',true,'把符号一并保留，有助于之后继续学习。'],['No, those lines never matter.','不用，那些横线都不重要。',false,'长音符号可能影响读音与词义。']]}
  ]},
  {id:'visit',title:'受邀参访会堂',place:'Marae · 遵循当地安排',source:'marae',steps:[
   {who:'Host',en:'Please wait here before we welcome you in.',zh:'请先在这里等候，我们随后迎接你们入内。',choices:[['Of course. Is there anything else I should know?','当然，还有其他需要注意的吗？',true,'尊重当地的流程；不同 marae 的安排可能不同。'],['I will go in now to get a better photo.','我先进去找个好角度拍照。',false,'这不是随意进出的摄影布景，先遵循主人的安排。']]},
   {who:'Host',en:'Please remove your shoes before entering the wharenui.',zh:'进入会堂前请脱鞋。',choices:[['Of course. Where should I leave them?','好的，鞋放哪里合适？',true,'把不确定的细节问清楚即可。'],['My shoes are clean, so I will keep them on.','我的鞋很干净，就不脱了。',false,'这是现场礼仪要求，不只是清洁问题。']]},
   {who:'Host',en:'Some parts of the visit are not for photography.',zh:'参访中的部分环节不能拍照。',choices:[['I understand. I will ask before taking photos.','明白，我拍之前会先问。',true,'尊重许可，也尊重拒绝。'],['I will only take one quick photo.','我只快速拍一张。',false,'只拍一张也仍需许可。']]}
  ]},
  {id:'dinner',title:'收到聚餐邀请',place:'日常生活 · 问清邀请',source:'manners',steps:[
   {who:'Friend',en:'Come over for dinner and bring a plate.',zh:'来一起吃饭吧，带一份食物来分享。',choices:[['What would you like me to bring?','你希望我带什么？',true,'问清楚，避免重复准备，也能照顾忌口。'],['I will bring an empty plate.','我带一个空盘子。',false,'在这类聚会里，通常指带分享的食物，而不是空餐具。']]},
   {who:'Friend',en:'A salad would be great.',zh:'带一份沙拉就很好。',choices:[['Sure. Does anyone have any dietary requirements?','好的，有谁有饮食要求吗？',true,'让对方具体说明，比根据身份猜测饮食习惯更好。'],['I will guess what everyone can eat.','我猜一下大家能吃什么。',false,'直接询问更可靠。']]}
  ]}
 ]
};
