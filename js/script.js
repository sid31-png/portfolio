// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme (dark mode) — respects saved choice, then system preference
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-toggle__icon');
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'dark' ? '☾' : '☀';
}
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(saved || (prefersDark ? 'dark' : 'light'));
themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

// Nav scrolled state + scroll progress
const nav = document.getElementById('nav');
const progress = document.getElementById('scrollProgress');
function onScroll(){
  const y = window.scrollY;
  nav.classList.toggle('is-scrolled', y > 8);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
}
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

// Mobile menu
const burger = document.getElementById('navBurger');
const links = document.getElementById('navLinks');
burger.addEventListener('click', () => links.classList.toggle('is-open'));
links.addEventListener('click', e => {
  if (e.target.tagName === 'A') links.classList.remove('is-open');
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting){
      e.target.style.transitionDelay = Math.min(i * 60, 240) + 'ms';
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }
  });
}, { threshold:.14, rootMargin:'0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Animated counters
function animateCount(el){
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || '';
  const dur = 1400;
  const start = performance.now();
  function tick(now){
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const countIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting){ animateCount(e.target); countIO.unobserve(e.target); }
  });
}, { threshold:.6 });
document.querySelectorAll('.stat__num').forEach(el => countIO.observe(el));

// Impact bars — animate width + count when in view
function animateBar(bar){
  const val = +bar.dataset.val;
  const fill = bar.querySelector('.bar__fill');
  const out = bar.querySelector('.bar__val');
  fill.style.width = val + '%';
  const start = performance.now(), dur = 1400;
  function tick(now){
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    out.textContent = Math.round(val * eased) + '%';
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const barIO = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting){ animateBar(e.target); barIO.unobserve(e.target); } });
}, { threshold:.5 });
document.querySelectorAll('.bar').forEach(b => barIO.observe(b));

// Showreel: preview plays when card is in view; click opens fullscreen lightbox
(function(){
  const card = document.getElementById('videoCard');
  const lb = document.getElementById('lightbox');
  if (!card || !lb) return;
  const preview = card.querySelector('.card-video');
  const lbVideo = document.getElementById('lightboxVideo');
  const close = document.getElementById('lightboxClose');

  if (preview){
    const vIO = new IntersectionObserver((entries) => {
      entries.forEach(e => { e.isIntersecting ? preview.play().catch(()=>{}) : preview.pause(); });
    }, { threshold:.4 });
    vIO.observe(preview);
  }

  function open(){
    if (!lbVideo.src && preview) lbVideo.src = preview.currentSrc || preview.getAttribute('src');
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    lbVideo.currentTime = 0;
    lbVideo.play().catch(()=>{});
  }
  function shut(){
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    lbVideo.pause();
  }
  card.addEventListener('click', open);
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); } });
  close.addEventListener('click', shut);
  lb.addEventListener('click', e => { if (e.target === lb) shut(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && lb.classList.contains('is-open')) shut(); });
})();

