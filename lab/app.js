'use strict';
const $=id=>document.getElementById(id);
const games={trust:{title:'信任的进化',chapters:[['intro','序章：信任从何而来'],['oneoff','一次博弈'],['iterated','重复博弈'],['tournament','策略锦标赛'],['evolution','策略如何进化'],['distrust','不信任的代价'],['noise','误解与宽容'],['sandbox','自由实验'],['conclusion','我们学到了什么'],['credits','制作与致谢']]},crowds:{title:'群体的智慧与愚蠢',chapters:[['Introduction','序章：人与人的连接'],['Networks','网络的力量'],['Simple','简单传播'],['Complex','复杂传播'],['BB','连接与隔阂'],['SmallWorld','小世界网络'],['Conclusion','我们学到了什么'],['Credits','制作与致谢'],['Sandbox','自由实验']]}};
let progress={};try{progress=JSON.parse(localStorage.getItem('thinking-lab-progress-v1'))||{}}catch(e){}
let active=null,sound=false,loadTimer;let resourcesReady=false;
const valid=(g,c)=>games[g].chapters.some(([id])=>id===c);
function homeProgress(){for(const [id,g] of Object.entries(games)){const p=progress[id];if(p&&valid(id,p.chapter)){$(id+'-progress').textContent='上次玩到：'+g.chapters.find(c=>c[0]===p.chapter)[1];$(id+'-start').innerHTML='继续实验 <span>↗</span>'}}}
function fit(){const frame=$('game-frame');if(!frame)return;const box=$('stage-viewport').getBoundingClientRect(),scale=Math.min(box.width/960,box.height/540);$('stage').style.width=960*scale+'px';$('stage').style.height=540*scale+'px';frame.style.transform=`scale(${scale})`}
new ResizeObserver(fit).observe($('stage-viewport'));
function openGame(id,chapter){active=id;sound=false;$('sound-toggle').textContent='声音：关';$('sound-toggle').setAttribute('aria-pressed','false');$('home').hidden=true;$('player').hidden=false;$('game-title').textContent=games[id].title;$('chapter-label').textContent='正在打开实验…';$('game-loading').hidden=false;$('reload-game').hidden=true;const iframe=document.createElement('iframe');iframe.id='game-frame';iframe.title=games[id].title;iframe.src=`games/${id}/index.html?chapter=${encodeURIComponent(valid(id,chapter)?chapter:games[id].chapters[0][0])}`;iframe.allow='autoplay';$('stage').replaceChildren(iframe);fit();clearTimeout(loadTimer);loadTimer=setTimeout(()=>{$('game-loading').querySelector('p').textContent='加载时间较长，请确认离线内容已准备好，或联网重试。';$('reload-game').hidden=false},30000)}
function route(){const id=location.hash.slice(1);if(games[id]){if(!resourcesReady&&!navigator.onLine){location.hash='';info('<h2>离线包还没下载完</h2><p>请连上网络，等首页进度走到 100% 后再在飞行模式下玩。</p>');return}openGame(id,progress[id]?.chapter);}else{active=null;clearTimeout(loadTimer);$('stage').replaceChildren();$('player').hidden=true;$('home').hidden=false;homeProgress()}}
window.addEventListener('hashchange',route);
window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==$('game-frame')?.contentWindow||e.data?.source!=='thinking-lab-game'||e.data.game!==active)return;const {type,chapter}=e.data;if(!valid(active,chapter))return;if(type==='ready'){clearTimeout(loadTimer);$('game-loading').hidden=true}if(type==='chapter'){
progress[active]={chapter,updated:Date.now()};let saved=true;try{localStorage.setItem('thinking-lab-progress-v1',JSON.stringify(progress))}catch(e){saved=false}$('chapter-label').textContent=games[active].chapters.find(c=>c[0]===chapter)[1];$('save-status').textContent=saved?'已记住本章 · 下次从本章开头继续。':'浏览器无法保存进度；本次仍可正常游玩。';}});
function info(html){$('info-content').innerHTML=html;$('info-dialog').showModal()}
const help='<h2>起飞前，做一次准备。</h2><ol><li>保持联网，等首页显示「离线内容已就绪」。</li><li>在 iPhone 的 Safari 打开网站，点分享 → 添加到主屏幕。</li><li>从主屏幕重新打开，开启飞行模式，试着进入两个实验。确认都能打开后再出发。</li></ol><p>章节保存在这台设备的浏览器里。清除网站数据会删除进度和离线内容，系统也可能回收缓存，出发前请复查。外部参考链接需要联网。</p><p>首次打开可能需要登录你的飞书账号。请使用 Safari 打开本应用，再添加到主屏幕。</p>';
$('offline-help').onclick=()=>info(help);
$('about-open').onclick=()=>info('<h2>让好奇心多走一步。</h2><p>这是两部互动科普作品的中文合集。亲手选择合作或欺骗、连接或切断网络，再看看规则怎样影响结果。</p><p>它们是可探索的模型，不是对所有现实情况的预测。你可以按故事顺序游玩，也可以从章节进入自由实验。</p><p>合集支持静音、章节续玩、大字阅读和离线缓存。游戏内单次对局、临时画线与沙盒参数不会跨次保存。</p>');
$('credits-open').onclick=()=>info('<h2>原作与翻译致谢</h2><p>两部原作均由 <a href="https://ncase.me/" target="_blank" rel="noopener">Nicky Case</a> 创作。此合集保留原作玩法与署名，新增统一入口、章节保存和离线功能。</p><p>《信任的进化》简体中文：吴桐、唐鳳，使用 <a href="https://sekai.co/trust/" target="_blank" rel="noopener">现有译本</a>。《群体的智慧与愚蠢》采用原仓库简体中文版本，译者：olOwOlo、foxiee、lxdlam、ekse、antfu。</p><p><a href="games/trust/README.md" target="_blank">信任：原作说明与素材来源</a><br><a href="games/crowds/README.md" target="_blank">群体：原作说明与素材来源</a></p><p>原项目代码使用 CC0；第三方音乐、音效与字体另有各自许可，部分含非商业限制。本合集供个人学习体验，商业使用前需逐项核对素材授权。</p>');
$('player-help').onclick=()=>info('<h2>先做选择，再看变化。</h2><p>横屏能看得更清楚。《信任》通过点选按钮做决定；《群体》用手指从一个人物拖到另一个人物建立连接，具体操作会随章节介绍。</p><p>「大字阅读」可放大查看当前屏幕的文字；关闭后回到互动。章节菜单随时可跳转，但会重置当前对局或画线。</p><p>两部作品分别记住章节。声音默认关闭，可随时开启。</p><h3>《信任》角色速查</h3><p>复读机：先合作，此后模仿对方上一轮。<br>老油条：永远欺骗。<br>小粉红：永远合作。<br>黑帮老铁：先合作，一次被欺骗就永远报复。<br>福尔摩星儿：先试探，遇到反击就模仿，否则持续欺骗。<br>复读鸭：连续被欺骗两次才报复。<br>一根筋：上一轮获益就保持行动，否则改变。<br>胡乱来：随机选择。</p>');
$('quick-help').onclick=()=>$('player-help').click();
$('chapters-open').onclick=()=>{if(!active)return;$('chapter-list').replaceChildren(...games[active].chapters.map(([id,label],i)=>{const b=document.createElement('button');b.textContent=String(i+1).padStart(2,'0')+'　'+label;if(progress[active]?.chapter===id)b.className='active';b.onclick=()=>{$('chapters-dialog').close();openGame(active,id)};return b}));$('chapters-dialog').showModal()};
$('read-open').onclick=()=>{let text='内容还在加载，请稍后再试。';try{text=$('game-frame').contentWindow.LabGame.reading()||'这一页以图形互动为主，请返回实验按画面提示操作。'}catch(e){}$('reading-content').textContent=text;$('read-dialog').showModal()};
$('read-close').onclick=()=>$('read-dialog').close();
$('sound-toggle').onclick=()=>{const bridge=$('game-frame')?.contentWindow.LabGame;if(!bridge)return;sound=!sound;bridge.sound(sound);$('sound-toggle').textContent='声音：'+(sound?'开':'关');$('sound-toggle').setAttribute('aria-pressed',String(sound))};
$('reload-game').onclick=()=>openGame(active,progress[active]?.chapter);
document.querySelectorAll('.dialog-close').forEach(b=>b.onclick=()=>b.closest('dialog').close());
function offlineReady(){$('offline-title').textContent='离线内容已就绪';$('offline-status').textContent='两个实验都已保存在此浏览器。出发前请在飞行模式下试开一次。';$('offline-progress').value=100}
async function prepare(){if(!('serviceWorker' in navigator)){ $('offline-status').textContent='当前环境不支持离线缓存，请使用 Safari 的 HTTPS 网站。';return}
const sw=navigator.serviceWorker,wait=ms=>new Promise(r=>setTimeout(r,ms)),show=v=>{$('offline-progress').value=v;$('offline-status').textContent=`正在准备两个实验… ${v}%`};
sw.addEventListener('message',e=>{if(e.data?.type==='cache-progress')show(e.data.value)});
const ask=w=>new Promise(resolve=>{const ch=new MessageChannel(),t=setTimeout(()=>resolve(null),4000);ch.port1.onmessage=e=>{clearTimeout(t);resolve(e.data)};w.postMessage({type:'fill'},[ch.port2])});
let reg=null;
for(;;){try{if(!reg||!(reg.installing||reg.waiting||reg.active))reg=await sw.register('sw.js');const w=reg.installing||reg.waiting||reg.active,s=w&&await ask(w);if(s){show(s.value);if(s.ready&&reg.active&&sw.controller)break}}catch(e){$('offline-status').textContent='网络不稳定，正在自动重试…'}await wait(3000)}
resourcesReady=true;offlineReady();route()}
homeProgress();route();prepare();
