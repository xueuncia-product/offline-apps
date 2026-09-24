/* Original teaching scenes. Art is schematic, not an archaeological reconstruction. */
Object.assign(window.CULTURE_DATA.sources,{
 tasman:['NZ History · 1642 年的相遇','https://nzhistory.govt.nz/page/first-contact-between-maori-and-europeans'],
 cook:['NZ History · 欧洲航行与相遇','https://nzhistory.govt.nz/page/european-voyaging-and-discovery'],
 miners:['Te Ara · 最早的华人移民','https://teara.govt.nz/en/chinese/page-2'],
 poll:['新西兰族裔社区部 · 华人入境税与道歉','https://www.ethniccommunities.govt.nz/resources/research-and-reports/chinese-poll-tax'],
 petition:['NZ History · 女性选举权运动','https://nzhistory.govt.nz/politics/womens-suffrage/brief-history'],
 stand:['NZ History · 1919 年女性参选权','https://nzhistory.govt.nz/page/women-can-stand-parliament'],
 pounamu:['Te Ara · Pounamu 的名称与联系','https://teara.govt.nz/en/pounamu-jade-or-greenstone/page-1'],
 mahika:['Ngāi Tahu · Mahinga kai 教育资料','https://ngaitahu.iwi.nz/assets/Documents/Mahinga_Kai_most_recent_version.pdf'],
 akaroa:['NZ History · 阿卡罗阿的多重历史','https://nzhistory.govt.nz/french-pipped-at-akaroa-british-sovereignty-proclaimed-over-the-south-island-again'],
 scots:['Te Ara · 奥塔哥的苏格兰定居者','https://teara.govt.nz/en/scots/page-3'],
 claim:['NZ History · Ngāi Tahu 的长期索赔','https://nzhistory.govt.nz/politics/treaty/the-treaty-in-practice/ngai-tahu'],
 hangi:['Te Ara · 传统烹调与保存','https://teara.govt.nz/en/maori-foods-kai-maori/page-2'],
 introduced:['Te Ara · 引入的食材','https://teara.govt.nz/en/maori-foods-kai-maori/page-4'],
 kaitiaki:['Te Ara · 理解 kaitiakitanga','https://teara.govt.nz/en/kaitiakitanga-guardianship-and-conservation/page-1'],
 kohanga:['NZ History · 第一所 kōhanga reo','https://nzhistory.govt.nz/page/first-kohanga-reo-opens'],
 reo1972:['NZ History · 1972 年毛利语请愿','https://nzhistory.govt.nz/media/photo/maori-language-petition-1972'],
 pacific:['Te Ara · 太平洋移民教会','https://teara.govt.nz/en/pacific-churches-in-new-zealand/page-1'],
 holiday:['Te Papa · 首个 Matariki 公共假日','https://www.tepapa.govt.nz/about/press-and-media/press-releases/2022-media-releases/bright-optimistic-and-hopeful-matariki']
});
window.CULTURE_DATA.cards.push(
 {id:'tasman1642',category:'历史',title:'1642：相遇不等于“发现无人之地”',front:'Abel Tasman 与黄金湾有什么关系？',body:'1642 年，塔斯曼船队在 Mohua / Golden Bay 与 Ngāti Tūmatakōkiri 接触。双方信号没有带来理解，随后发生致命冲突。这是已知的 Māori 与欧洲人的最早接触，不是这片土地历史的起点。',talk:'Whose perspective does this account represent?',zh:'这段叙述呈现的是谁的视角？',source:'tasman'},
 {id:'cook1769',category:'历史',title:'地图上的航线，也带来了权力',front:'讲库克航行时，谁容易被漏掉？',body:'1769 年库克抵达时，同行的塔希提航海者 Tupaia 也有重要的太平洋知识。接触中既有交流，也有 Māori 伤亡。把历史只讲成一位欧洲人的发现故事，会漏掉原有社会与其他参与者。',talk:'What role did Tupaia play in the voyage?',zh:'Tupaia 在航行中发挥了什么作用？',source:'cook'},
 {id:'gold1866',category:'历史',title:'1866：从维多利亚州来到奥塔哥',front:'华人矿工为什么会到南岛？',body:'达尼丁商会招募华人重新开采一些矿地，首批 12 人于 1866 年从澳大利亚维多利亚州抵达。许多早期矿工来自广东珠江三角洲，盼望挣钱回乡；现实往往是艰苦劳动与长期分离。',talk:'Where had these miners travelled from?',zh:'这些矿工是从哪里过来的？',source:'miners'},
 {id:'polltax',category:'历史',title:'入境税：制度也会制造排斥',front:'为什么华人历史展会出现税单？',body:'19 世纪开始的针对华人的入境税，是歧视性移民限制的一部分。它给个人、家庭和后代留下经济与情感负担。看旧税单时，除了金额，也要问：为何只有某些人必须付出这种代价？',talk:'How did this policy affect families?',zh:'这项政策怎样影响家庭？',source:'poll'},
 {id:'apology2002',category:'历史',title:'2002：一次迟来的公开道歉',front:'政府道歉为什么值得了解？',body:'2002 年，新西兰政府向遭受入境税不公的华人作出公开道歉。道歉承认伤害，但不是说历史从此消失；社区记忆、记录与后人的声音仍然重要。',talk:'How is this history remembered today?',zh:'今天人们怎样记住这段历史？',source:'poll'},
 {id:'petition1893',category:'历史',title:'一张签名，如何汇成改变',front:'选举权是某一天突然“送给”女性的吗？',body:'选举权运动者多年组织、写作和请愿，1891、1892、1893 年都有大规模请愿。Kate Sheppard 是重要组织者之一。成就来自许多人长期投入，不能只用一个英雄名字概括。',talk:'How did people organise the petitions?',zh:'人们怎样组织这些请愿？',source:'petition'},
 {id:'stand1919',category:'历史',title:'能投票之后，仍有新的门槛',front:'1893 年的女性也能当议员吗？',body:'投票权与参选权是两回事。新西兰女性在 1919 年才取得众议院参选权；这一变化也没有立刻消除政治参与中的各种障碍。沿着时间线看，社会权利常是逐步争取的。',talk:'When could women stand for election?',zh:'女性什么时候才能参加竞选？',source:'stand'},
 {id:'greenstone',category:'南岛',title:'Pounamu：不只是漂亮的绿色石头',front:'为什么它常出现在南岛故事里？',body:'Pounamu 与 Ngāi Tahu 有深厚联系，也与器物、身份和家族传承有关。它是理解南岛的一条线索。面对一件饰物，问制作者、来源和故事，往往比只问价格更能了解它。',talk:'Could you tell me about the maker and the stone?',zh:'能讲讲制作者和这块石头吗？',source:'pounamu'},
 {id:'mahinga',category:'南岛',title:'Mahinga kai：食物连着水土与知识',front:'它只是“去找吃的”吗？',body:'Mahinga kai / mahika kai 涉及食物资源、生态系统，以及获取、生产与守护资源的实践。对 Ngāi Tahu 而言，河流、季节、家庭知识和食物的联系不能拆开来看。',talk:'How is food gathering connected to this place?',zh:'食物采集与这个地方有什么联系？',source:'mahika'},
 {id:'frenchakaroa',category:'南岛',title:'阿卡罗阿不只有法式招牌',front:'法国人、英国人和 Kāi Tahu 如何交会？',body:'1840 年法国定居者抵达阿卡罗阿前，当地已有 Kāi Tahu 的生活与历史，条约也已在当地签署。欧洲殖民计划之间的竞争是一层故事，原有社群的处境是另一层。',talk:'What was here before the European settlement?',zh:'欧洲人定居以前，这里是什么样的？',source:'akaroa'},
 {id:'scottishotago',category:'南岛',title:'达尼丁：苏格兰联系从哪里来',front:'城市为什么常提起 Edinburgh？',body:'1848 年的奥塔哥定居计划带来明显的苏格兰与自由教会背景，达尼丁的名字也与爱丁堡有关。但殖民定居并非当地历史的开始，移民动机也不只有宗教。',talk:'How has the Scottish connection shaped this city?',zh:'苏格兰联系怎样影响了这座城市？',source:'scots'},
 {id:'landclaim',category:'南岛',title:'土地之外，还失去了什么',front:'Ngāi Tahu 的索赔为何持续那么久？',body:'争议涉及土地边界、保留地、被违背的承诺，也涉及 mahinga kai 的损失。若只把和解当作一笔钱，就难以理解土地、生活方式和文化延续之间的关系。',talk:'Why were food-gathering places central to the claim?',zh:'为什么食物采集地是索赔的重要部分？',source:'claim'},
 {id:'earthoven',category:'文化',title:'Hāngī：食物与一起劳作的人',front:'它和普通烧烤有什么不同？',body:'Hāngī 是地炉烹调，热石等形成的热与蒸汽使食物熟透。它也常与集体准备和分享相连。了解一道食物时，可以问谁一起准备、在哪种聚会中分享，而不只问配方。',talk:'Is this usually prepared for a special gathering?',zh:'这通常是为特别的聚会准备的吗？',source:'hangi'},
 {id:'introducedfood',category:'文化',title:'传统饮食也会不断变化',front:'传统菜中的食材，全部都自古存在吗？',body:'与欧洲人接触后，Māori 接纳了马铃薯、猪肉和小麦等新食材，并发展出新的做法。传统不是冻结在某一个年代的菜单；人们会选择、改造并赋予它新的意义。',talk:'How has this dish changed over time?',zh:'这道菜随着时间发生了哪些变化？',source:'introduced'},
 {id:'guardianship',category:'文化',title:'Kaitiakitanga：关系带来责任',front:'它等同于一句“环保”吗？',body:'这个概念涉及守护与延续，建立在人与自然的联系之上；kaitiaki 的身份也与当地社群的认可有关。旅行者可以尊重指引、了解当地守护工作，不必因此自称当地的 kaitiaki。',talk:'Who looks after this place, and how can visitors help?',zh:'谁在照护这里，游客可以怎样帮忙？',source:'kaitiaki'},
 {id:'petitionreo',category:'语言',title:'1972：让语言走进学校',front:'日常双语背后有哪些行动？',body:'1972 年毛利语请愿被提交给议会，推动人们正视语言传承。今天看到的双语标识与问候，不是凭空出现的时尚，背后有倡议者、家庭与社群长期的坚持。',talk:'How did the language movement begin to grow?',zh:'语言运动怎样逐渐发展起来？',source:'reo1972'},
 {id:'languagenest',category:'语言',title:'1982：孩子们的“语言巢”',front:'Kōhanga reo 是普通翻译课堂吗？',body:'第一所 kōhanga reo 于 1982 年开办，以毛利语环境陪伴幼儿成长。这种“语言巢”把学习放回日常关系与生活中，语言复兴也因此连起不同世代。',talk:'What does a language nest mean for families?',zh:'语言巢对家庭意味着什么？',source:'kohanga'},
 {id:'pacificfaith',category:'信仰',title:'教会也可能是一张互助网络',front:'太平洋移民社群为何重视教会？',body:'新西兰的太平洋移民教会回应了宗教与社群照护的需要，也帮助人们建立联系。不同岛屿、教派和个人的经历并不相同，不能把一个人的信仰当作整个群体的答案。',talk:'What activities bring this community together?',zh:'哪些活动让这个社群聚在一起？',source:'pacific'},
 {id:'ringatu',category:'信仰',title:'Ringatū：有自身历史的 Māori 教会',front:'为什么不能把所有教会都混为一谈？',body:'Ringatū 与 Te Kooti 的经历及教导相连，吸收了圣经传统，又有自己的历史与实践。了解它时，需要放在 Māori 与殖民社会相遇的处境中，而非只从建筑外观判断。',talk:'Where can I read about this church’s history?',zh:'哪里可以读到这个教会的历史？',source:'faith'},
 {id:'ratana',category:'信仰',title:'Rātana：信仰与公共生活的交会',front:'Rātana 仅仅是一个教堂名字吗？',body:'Rātana 是一场具有独立历史的 Māori 宗教运动，也与公共和政治生活发生联系。它与 Ringatū 并非同一个教会。理解宗教时，可以分别看信念、社群与历史，而不是给所有 Māori 套一个标签。',talk:'How has this movement influenced public life?',zh:'这一运动怎样影响公共生活？',source:'faith'},
 {id:'newyear2022',category:'文化',title:'2022：Matariki 进入全国假日日历',front:'一个节日被共同承认意味着什么？',body:'2022 年 6 月 24 日是首个 Matariki 公共假日。它给更多人一个认识 te ao Māori 的机会。庆祝形式有差异，记忆、相聚与面向未来也比单纯“多放一天假”更丰富。',talk:'What does Matariki mean to your family?',zh:'Matariki 对您的家庭意味着什么？',source:'holiday'}
);
window.CULTURE_PLAY_DATA={
 eras:[
  {id:'voyage',year:'约 1250—1300',title:'海上的来路',sub:'航海知识，让远方成为家。',art:'sea',source:'arrival',items:[
   {icon:'boat',name:'远航的船',x:30,y:65,title:'迁徙不是偶然漂流',text:'最早定居者来自东波利尼西亚。航海者带着知识与生活经验跨越海洋，Aotearoa 的人类历史由此展开。'},
   {icon:'star',name:'夜空的线索',x:72,y:22,title:'海洋也是可以阅读的世界',text:'星象、风与洋流是传统航海知识的一部分。把“未知海域”换成“熟悉的航海知识”，历史视角也会改变。'},
   {icon:'home',name:'新的家园',x:72,y:67,title:'抵达以后，还要适应',text:'定居意味着面对不同的气候、地貌与资源，建立生活和联系。欧洲人到来以前，这片土地已经有漫长的人类故事。'}]},
  {id:'connections',year:'欧洲定居以前',title:'山水之间的南岛',sub:'沿着资源、亲缘与食物，认识一片土地。',art:'land',source:'ngai',items:[
   {icon:'stone',name:'一块 pounamu',x:24,y:71,title:'资源也是文化联系',text:'Pounamu 与 Ngāi Tahu 的身份和传承关系深厚。这里展示的是学习插画；旅行中应从制作者和当地介绍了解真实器物。',source:'pounamu'},
   {icon:'river',name:'河流与食物',x:66,y:69,title:'认识 mahinga kai',text:'它连着食物资源、生态系统和实践知识。河流与湖泊也承载家庭经验，不能只当作地图上的蓝色线条。',source:'mahika'},
   {icon:'home',name:'交织的社群',x:61,y:29,title:'不是只有一个名字',text:'Waitaha、Ngāti Māmoe 与 Ngāi Tahu 的历史相互交织，迁徙与婚姻构成联系。南岛也有其他 iwi，具体地点应听当地的叙述。'}]},
  {id:'treaty',year:'1840',title:'一份条约，多重理解',sub:'慢一点读，看看文字背后的人。',art:'town',source:'treaty',items:[
   {icon:'scroll',name:'两种文本',x:28,y:61,title:'翻译不是无关紧要的细节',text:'Te Tiriti 的毛利语文本与英语文本对权力等概念的表达存在重要差异。两份文本不能简单视为逐字对应。'},
   {icon:'pen',name:'签署的地点',x:71,y:36,title:'签署也发生在南岛',text:'条约在多个地方收集签名。1840 年 5 月，Kāi Tahu rangatira 在阿卡罗阿签署，南岛并非置身这一历史之外。',source:'akaroa'},
   {icon:'book',name:'后来发生的事',x:74,y:73,title:'承诺与实践之间',text:'要理解条约，既要看文本，也要看其后的土地交易、违约、抗争和补偿。这种关系不是 1840 年就结束的。',source:'claim'}]},
  {id:'miners',year:'1860 年代以后',title:'金矿之外的家书',sub:'在箭镇，把目光从金子移到人。',art:'town',source:'miners',items:[
   {icon:'boat',name:'跨海而来',x:24,y:65,title:'一段接着一段的迁徙',text:'1866 年首批受招募的华人矿工从澳大利亚维多利亚州来到奥塔哥。很多人原籍广东，也把回乡的盼望带在身上。'},
   {icon:'letter',name:'远方的家人',x:69,y:30,title:'谋生与分离',text:'矿区生活艰苦，许多人的家人留在中国。去箭镇看旧小屋时，也可以想一想居住、互助和远方家庭。',source:'arrow'},
   {icon:'scroll',name:'制度留下的痕迹',x:76,y:70,title:'记住排斥，而非美化苦难',text:'针对华人的入境税等限制造成长期伤害。2002 年政府作出公开道歉；这提醒我们，移民史也是权利与尊严的历史。',source:'poll'}]},
  {id:'suffrage',year:'1893 → 1919',title:'把声音写进公共生活',sub:'一张张签名，汇成长期的行动。',art:'garden',source:'petition',items:[
   {icon:'pen',name:'请愿的笔',x:23,y:61,title:'改变需要组织',text:'Kate Sheppard 等运动者多年组织请愿和宣传。1893 年的结果，有赖许多人持续推动，而非突然的馈赠。'},
   {icon:'box',name:'投票箱',x:69,y:30,title:'1893：取得投票权',text:'新西兰成为首个让女性取得议会选举投票权的自治国家。了解这项成就，也要看参与者和当时的社会环境。',source:'suffrage'},
   {icon:'door',name:'下一扇门',x:75,y:71,title:'1919：取得众议院参选权',text:'拥有选票，还不等于有资格竞选议员。两个年份相差 26 年，提醒我们权利并不总是同时到来。',source:'stand'}]},
  {id:'language',year:'1972 → 1987',title:'让语言重新长大',sub:'从请愿，到家庭，再到公共空间。',art:'garden',source:'reo',items:[
   {icon:'scroll',name:'1972 的请愿',x:22,y:61,title:'让人们听见诉求',text:'语言倡议者提交请愿，推动毛利语在学校与社会中得到重视。今天的双语问候背后有长期努力。',source:'reo1972'},
   {icon:'home',name:'1982 的语言巢',x:68,y:32,title:'孩子在语言里生活',text:'Kōhanga reo 用毛利语环境陪伴幼儿。学习发生在与家庭和长辈的关系里，并不只在一本词表中。',source:'kohanga'},
   {icon:'book',name:'1987 与此后',x:74,y:73,title:'地位与日常都重要',text:'1987 年毛利语获得官方语言地位。语言要延续，也需要人们在家庭、学校与日常交流中使用。'}]},
  {id:'redress',year:'1990 年代',title:'重新理解和解',sub:'不只是一笔补偿，也关乎关系与承认。',art:'land',source:'claim',items:[
   {icon:'scroll',name:'长期的索赔',x:24,y:63,title:'承诺为何没有兑现',text:'Ngāi Tahu 的索赔历经多代，涉及土地、保留地和食物采集地等损失。不能只用补偿金额概括。'},
   {icon:'mountain',name:'1998 年的立法',x:68,y:26,title:'一个重要节点',text:'1998 年的 Ngāi Tahu 和解立法包含经济与文化方面的补偿和承认。它是漫长历程中的节点。',source:'settlement'},
   {icon:'river',name:'仍然流动的河',x:73,y:71,title:'文化也在当下延续',text:'今天的 mahinga kai 实践仍连着资源、环境和社群知识。理解历史，也要听见仍在生活于此的人。',source:'mahika'}]},
  {id:'today',year:'今天的文化生活',title:'许多种生活，同一片天空',sub:'去倾听一个人，而不是替一群人下结论。',art:'festival',source:'religion',items:[
   {icon:'star',name:'Matariki',x:23,y:28,title:'新年里的记忆与期盼',text:'2022 年出现首个 Matariki 公共假日。它承载追忆、相聚与面向未来的意义；社群之间也有不同传统。',source:'holiday'},
   {icon:'home',name:'信仰与社群',x:75,y:60,title:'身份不能靠外表猜',text:'2023 年普查中，无宗教者超过一半。宗教也依然是许多人的重要生活部分；一个人的答案，要由本人来讲。'},
   {icon:'plate',name:'一张分享的餐桌',x:37,y:74,title:'从一句邀请开始',text:'Bring a plate 在聚餐语境里通常指带食物分享。先问要带什么、有没有饮食偏好，就是很好的一次交流。',source:'manners'}]}
 ],
 puzzles:[
  {id:'sea',title:'星光下的远航',subtitle:'把散开的海图拼回去',era:'voyage',art:'sea',source:'arrival',facts:['先把天与海连起来：最早定居者来自东波利尼西亚。','远航带着知识与经验，不能简单讲成偶然漂流。','抵达以后，人们在新的环境中建立生活；历史在欧洲人到来前就已开始。']},
  {id:'town',title:'箭镇的一条街',subtitle:'修复插画，走近移民生活',era:'miners',art:'town',source:'arrow',facts:['小屋之间住着谋生的人；街道也是社区生活的空间。','箭镇华人历史值得从劳动、互助和家庭联系来理解。','画面是原创示意插画。到访遗址时，对照现场史料继续了解具体人物。']},
  {id:'garden',title:'让语言开花',subtitle:'把语言巢的花园拼完整',era:'language',art:'garden',source:'kohanga',facts:['第一所 kōhanga reo 于 1982 年开办。','学习语言可以发生在生活中，而不只是翻译和背诵。','这幅花园是学习的比喻，并非某一所真实语言巢的复原图。']}
 ],
 kitchen:[
  {id:'share',title:'先准备一份心意',en:'Bring a plate!',zh:'请带食物来分享。',intro:'朋友请你参加聚餐。给分享盘选两样食物吧。',needed:2,accept:['salad','bread','fruit'],options:['salad','bread','fruit','empty','flowers'],success:'带的是食物，不是空盘子。你也可以先问主人想让你带什么。',phrase:'What would you like me to bring?',translation:'你希望我带什么？',source:'manners'},
  {id:'vegetarian',title:'听一听客人的偏好',en:'Could we have something vegetarian?',zh:'可以准备素食吗？',intro:'按这次明确的请求，选两样不含肉或鱼的食物。',needed:2,accept:['salad','bread','fruit'],options:['fish','salad','chicken','fruit','bread'],success:'这份练习菜单中的沙拉、面包和水果适合这个请求。现实中先询问具体饮食要求，别根据身份猜。',phrase:'Does anyone have any dietary requirements?',translation:'有人有饮食要求吗？'},
  {id:'thanks',title:'把感谢带回家',en:'A lovely evening.',zh:'一个愉快的夜晚。',intro:'点选词块，拼出“谢谢你招待我”。也可以点已选词块撤回。',words:['Thank','you','for','having','me.'],success:'自然地表达感谢就很好。文化交流不是一次表演，而是关注面前的人。',phrase:'Thank you for having me.',translation:'谢谢你招待我。'}
 ],
 food:{salad:['沙拉','Salad','leaf'],bread:['面包','Bread','bread'],fruit:['水果','Fruit','fruit'],empty:['空盘子','Empty plate','plate'],flowers:['花束','Flowers','flower'],fish:['鱼','Fish','fish'],chicken:['鸡肉','Chicken','chicken']}
};
