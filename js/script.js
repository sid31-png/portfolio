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

// Before / After comparison slider
(function(){
  const root = document.getElementById('compare');
  if (!root) return;
  const before = document.getElementById('compareBefore');
  const handle = document.getElementById('compareHandle');
  let dragging = false;
  function setPos(clientX){
    const r = root.getBoundingClientRect();
    let pct = ((clientX - r.left) / r.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    // account for RTL: the "before" panel is clipped from the left edge
    before.style.width = pct + '%';
    handle.style.left = pct + '%';
  }
  setPos(root.getBoundingClientRect().left + root.getBoundingClientRect().width * 0.5);
  const start = () => dragging = true;
  const end = () => dragging = false;
  const move = (x) => { if (dragging) setPos(x); };
  handle.addEventListener('mousedown', start);
  window.addEventListener('mouseup', end);
  window.addEventListener('mousemove', e => move(e.clientX));
  handle.addEventListener('touchstart', start, { passive:true });
  window.addEventListener('touchend', end);
  window.addEventListener('touchmove', e => move(e.touches[0].clientX), { passive:true });
  root.addEventListener('click', e => { if (e.target !== handle) setPos(e.clientX); });
})();

