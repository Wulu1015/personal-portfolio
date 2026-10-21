// 替换这里的示例项目；个人介绍与技能在 index.html 中编辑。
const projects = [
  {title:'植间 Plantly', subtitle:'让每一份绿意，都找到自己的日常。', category:'product', type:'产品设计', year:'2025', art:'plant', tags:['用户体验','移动端设计','Figma'], description:'一款帮助城市生活者照顾植物的应用。通过植物识别、个性化养护计划与轻量提醒，让新手也能建立轻松的养护习惯。', mock:'plant'},
  {title:'Forma Studio', subtitle:'为独立创意工作室，构建有个性的线上空间。', category:'web', type:'网站开发', year:'2025', art:'forma', tags:['品牌网站','React','响应式开发'], description:'为独立创意工作室设计的品牌展示网站。以大字号、鲜明色彩与清晰的信息层级呈现作品，并为不同设备提供舒适的浏览体验。', mock:'forma'},
  {title:'拾光 Moments', subtitle:'用更轻盈的方式，记录生活中的小小瞬间。', category:'product', type:'产品设计', year:'2024', art:'moments', tags:['交互设计','日记应用','设计系统'], description:'以日常记录为核心的数字日记概念。结合情绪选择、照片与简短文字，减少记录的负担，让生活中的微小美好被保存。', mock:'moments'},
  {title:'流动的形状', subtitle:'一场关于几何、秩序与随机性的视觉实验。', category:'experiment', type:'创意实验', year:'2024', art:'shapes', tags:['生成艺术','CSS','创意编程'], description:'通过几何形状、色彩与重复关系探索视觉节奏。将简单图形组合为具有空间感的画面，是一次设计和前端表达的自由练习。', mock:'shapes'}
];
const mockups = {
plant:'<div class="plant-word">a little green.<br>a better day.</div><div class="phone"><div class="phone-top">9:41 <span>● ▰</span></div><small>YOUR GREEN COMPANION</small><h4>你好，植物朋友 ☀</h4><div class="plant-drawing"><i></i><i></i><i></i><i></i><b></b></div><div class="plant-card">龟背竹 <span>Monstera deliciosa</span><strong>↗</strong></div><div class="phone-bottom">⌂　 ♧　 ＋　 ♡</div></div><span class="mock-caption">PLANTLY® — GROW WITH YOU</span>',
forma:'<div class="browser-mock"><div class="browser-bar"><span>● ● ●</span> forma.studio ↗</div><div class="forma-nav">forma® <small>Independent design studio ↗</small></div><h4>Ideas.<br>Made <em>bold.</em></h4><div class="forma-shape"></div><div class="forma-foot">GOOD PEOPLE. GREAT WORK. <span>↓</span></div></div>',
moments:'<div class="moments-label">Small moments,<br><em>big feelings.</em><span>拾光 · 留住日常的温度</span></div><div class="journal"><small>OCTOBER 24, FRIDAY</small><h4>今天，也很好。</h4><div class="landscape"><span>☀</span></div><p>慢下来，才发现<br>生活里藏着好多小美好。</p><span class="journal-mood">☻ 心情晴朗</span></div>',
shapes:'<div class="shape-composition"><i></i><i></i><i></i><i></i><i></i><i></i></div><span class="shape-label">EXPERIMENT NO. 004 <b>PLAY<br>WITH<br>FORM.</b></span>'
};
const grid = document.querySelector('#projects');
function render(filter='all') {
  grid.innerHTML = projects.filter(p=>filter==='all'||p.category===filter).map(p=>`<article class="project"><button class="project-visual ${p.art}" data-project="${projects.indexOf(p)}" aria-label="查看${p.title}项目详情">${mockups[p.mock]}<span class="project-open">↗</span></button><div class="project-meta"><h3><button data-project="${projects.indexOf(p)}">${p.title}</button></h3><span>${p.type} / ${p.year}</span></div><p>${p.subtitle}</p></article>`).join('');
}
render();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});render(button.dataset.filter);
}));
const dialog=document.querySelector('#project-dialog');
grid.addEventListener('click',event=>{const button=event.target.closest('[data-project]');if(!button)return; const p=projects[Number(button.dataset.project)];document.querySelector('#dialog-title').textContent=p.title;document.querySelector('#dialog-description').textContent=p.description;document.querySelector('#dialog-tags').replaceChildren(...p.tags.map(t=>{const span=document.createElement('span');span.textContent=t;return span;}));dialog.showModal();});
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelector('#copy-email').addEventListener('click',async()=>{const email=document.querySelector('#email-link').textContent.replace('↗','').trim();try{await navigator.clipboard.writeText(email);document.querySelector('#feedback').textContent='邮箱已复制，期待你的来信。';}catch{document.querySelector('#feedback').textContent=`请复制邮箱：${email}`;}});
document.querySelector('#year').textContent=new Date().getFullYear();
