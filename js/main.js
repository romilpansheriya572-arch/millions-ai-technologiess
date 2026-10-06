const year = new Date().getFullYear(); document.querySelectorAll('[data-year]').forEach(e => e.textContent = year);
const menus = document.querySelectorAll('.menu-btn, .mobile-nav-toggle'); const mobile = document.querySelector('.mobile-nav');
const navHeader = document.querySelector('.navbar');
if (mobile && navHeader && !navHeader.contains(mobile)) navHeader.appendChild(mobile);
menus.forEach(menu => menu.addEventListener('click', () => { if (!mobile) return; const open = mobile.classList.toggle('open'); menu.setAttribute('aria-expanded', open); }));
if (mobile) {
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
  window.addEventListener('resize', () => { if (window.innerWidth > 1000) mobile.classList.remove('open'); });
}
document.querySelectorAll('.reveal').forEach(el => { const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target) } }), { threshold: .12 }); io.observe(el) });
document.querySelectorAll('.faq-q').forEach(btn => btn.addEventListener('click', () => btn.parentElement.classList.toggle('open')));
document.querySelectorAll('.module button').forEach(btn => btn.addEventListener('click', () => btn.parentElement.classList.toggle('open')));
document.querySelectorAll('[data-counter]').forEach(el => { const target = +el.dataset.counter; let done = false; const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !done) { done = true; let n = 0; const step = Math.max(1, Math.ceil(target / 45)); const t = setInterval(() => { n = Math.min(target, n + step); el.textContent = n.toLocaleString() + '+'; if (n >= target) clearInterval(t) }, 25); io.disconnect() } })); io.observe(el) });
