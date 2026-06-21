// Year
document.getElementById('year').textContent = new Date().getFullYear();

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
