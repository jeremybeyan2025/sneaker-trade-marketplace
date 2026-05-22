window.addEventListener('DOMContentLoaded',()=>{
  const style=document.createElement('style');
  style.textContent=`
    .brand-loader{position:fixed;inset:0;z-index:999;background:#050505;display:grid;place-items:center;transition:opacity .45s ease,visibility .45s ease}.brand-loader.done{opacity:0;visibility:hidden}.loader-box{text-align:center}.loader-mark{width:92px;height:92px;margin:0 auto 18px;border-radius:26px;background:#050505 center/280% no-repeat;box-shadow:0 0 70px rgba(200,255,0,.24),inset 0 1px 0 rgba(255,255,255,.12)}.loader-ring{width:64px;height:64px;margin:18px auto;border-radius:50%;border:3px solid rgba(255,255,255,.12);border-top-color:#c8ff00;animation:svspin .9s linear infinite}.loader-copy{font-size:11px;font-weight:1000;letter-spacing:.24em;text-transform:uppercase;color:#c8ff00}@keyframes svspin{to{transform:rotate(360deg)}}
  `;
  document.head.appendChild(style);

  const loader=document.createElement('div');
  loader.className='brand-loader';
  loader.innerHTML='<div class="loader-box"><div class="loader-mark"></div><div class="loader-ring"></div><div class="loader-copy">Verifying Authenticity</div></div>';
  document.body.prepend(loader);

  const logoUrl='../solevault-logo-full-lockup.PNG';
  const img=new Image();
  img.crossOrigin='anonymous';
  img.onload=()=>{
    const canvas=document.createElement('canvas');
    canvas.width=img.naturalWidth;
    canvas.height=img.naturalHeight;
    const ctx=canvas.getContext('2d');
    ctx.drawImage(img,0,0);
    const data=ctx.getImageData(0,0,canvas.width,canvas.height);
    const p=data.data;
    for(let i=0;i<p.length;i+=4){
      const r=p[i],g=p[i+1],b=p[i+2];
      const brightness=(r+g+b)/3;
      if(r>232&&g>232&&b>232){p[i+3]=0;}
      else if(brightness>215){p[i+3]=Math.max(0,Math.min(p[i+3],(255-brightness)*3));}
    }
    ctx.putImageData(data,0,0);
    const cleanUrl=canvas.toDataURL('image/png');
    document.querySelectorAll('.mark,.verification-mark,.app-icon-preview,.loader-mark').forEach((el)=>{
      el.style.backgroundImage=`url(${cleanUrl})`;
      el.style.backgroundColor='transparent';
      el.style.backgroundRepeat='no-repeat';
      el.style.backgroundPosition='50% 39%';
      el.style.backgroundSize='285%';
    });
  };
  img.onerror=()=>{
    document.querySelectorAll('.mark,.verification-mark,.app-icon-preview,.loader-mark').forEach((el)=>{
      el.style.backgroundColor='#050505';
      el.style.backgroundSize='285%';
      el.style.backgroundPosition='50% 39%';
    });
  };
  img.src=logoUrl+'?v=cleanbg1';

  window.setTimeout(()=>loader.classList.add('done'),750);
  window.setTimeout(()=>loader.remove(),1300);
});