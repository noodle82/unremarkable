// Browser demo has only the free questions in its downloaded library.
window.unremarkableCommerce={owned:false,adFree:false};
window.unremarkableLogoAudio={native:false};
window.dispatchEvent(new Event('unremarkable-logo-ready'));
window.unremarkableCurrency?.mount();
const addDemoLinks=()=>{
  const slot=document.getElementById('question-shop-slot');if(!slot||slot.firstChild)return;
  const note=document.createElement('p');note.className='question-access-note';note.textContent='Free browser demo · 30 questions';
  const links=document.createElement('nav');links.className='shop-actions';links.setAttribute('aria-label','Website information');
  for(const [text,url] of [['About the app','../'],['Privacy','../privacy/'],['Terms','../terms/'],['Support','../support/']]){const a=document.createElement('a');a.textContent=text;a.href=url;links.append(a)}
  slot.append(note,links);
};
new MutationObserver(addDemoLinks).observe(document.getElementById('app'),{childList:true,subtree:true});addDemoLinks();
const settings=document.getElementById('settings-dialog'),home=document.createElement('a');home.href='../';home.className='shop-settings';home.textContent='About UNREMARKABLE! / App availability';settings.append(home);
