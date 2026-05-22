window.addEventListener('DOMContentLoaded',()=>{
  const style=document.createElement('style');
  style.textContent='.brand-loader{position:fixed;inset:0;z-index:999;background:#050505;display:grid;place-items:center;transition:opacity .45s ease,visibility .45s ease}.brand-loader.done{opacity:0;visibility:hidden}.loader-box{text-align:center}.loader-mark{width:92px;height:92px;margin:0 auto 18px;border-radius:26px;background:#050505 url(../Svlogo.PNG) 50% 38%/285% no-repeat;box-shadow:0 0 70px rgba(200,255,0,.24),inset 0 1px 0 rgba(255,255,255,.12)}.loader-ring{width:64px;height:64px;margin:18px auto;border-radius:50%;border:3px solid rgba(255,255,255,.12);border-top-color:#c8ff00;animation:svspin .9s linear infinite}.loader-copy{font-size:11px;font-weight:1000;letter-spacing:.24em;text-transform:uppercase;color:#c8ff00}@keyframes svspin{to{transform:rotate(360deg)}}';
  document.head.appendChild(style);
  const loader=document.createElement('div');
  loader.className='brand-loader';
  loader.innerHTML='<div class="loader-box"><div class="loader-mark"></div><div class="loader-ring"></div><div class="loader-copy">Verifying Authenticity</div></div>';
  document.body.prepend(loader);
  window.setTimeout(()=>loader.classList.add('done'),650);
  window.setTimeout(()=>loader.remove(),1250);
});