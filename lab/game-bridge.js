(function(){
'use strict';
const trust=location.pathname.includes('/trust/');
const chapters=trust?['intro','oneoff','iterated','tournament','evolution','distrust','noise','sandbox','conclusion','credits']:['Introduction','Networks','Simple','Complex','BB','SmallWorld','Conclusion','Credits','Sandbox'];
const requested=new URLSearchParams(location.search).get('chapter');
const target=chapters.includes(requested)?requested:chapters[0];
let booting=true,current=target;
function send(type,extra={}){parent.postMessage({source:'thinking-lab-game',type,game:trust?'trust':'crowds',...extra},location.origin)}
function chapter(id){if(!chapters.includes(id))return;current=id;if(!booting)send('chapter',{chapter:id})}
window.LabGame={sound(on){Howler.mute(!on);if(trust&&on&&Loader.sounds.bg_music&&!Loader.sounds.bg_music.playing())Loader.sounds.bg_music.volume(.5).loop(true).play()},reading(){return Array.from(document.querySelectorAll(trust?'#slideshow .textbox':'#slideshow .box')).filter(el=>el.getClientRects().length&&getComputedStyle(el).visibility!=='hidden').map(el=>el.innerText.trim()).filter(Boolean).join('\n\n')}};
Howler.mute(true);
function ready(){booting=false;send('ready',{chapter:current});send('chapter',{chapter:current})}
if(trust){subscribe('slideshow/slideChange',chapter);subscribe('preloader/done',()=>setTimeout(()=>{publish('start/game');if(target!==chapters[0])slideshow.gotoSlide(target);ready()},50))}
else{subscribe('slideshow/goto/',chapter);const timer=setInterval(()=>{if(window.PRELOAD_PROGRESS>=1&&window.slideshow&&!slideshow.IS_TRANSITIONING){clearInterval(timer);publish('START');const settle=setInterval(()=>{if(slideshow.IS_TRANSITIONING)return;clearInterval(settle);if(target!==chapters[0]){slideshow.gotoChapter(target);const after=setInterval(()=>{if(!slideshow.IS_TRANSITIONING){clearInterval(after);ready()}},100)}else ready()},100)}},100)}
document.addEventListener('click',e=>{const a=e.target.closest('a');if(a&&a.href&&!a.href.startsWith('javascript:')){a.target='_blank';a.rel='noopener noreferrer'}},true);
})();
