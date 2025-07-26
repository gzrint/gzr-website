// Animation library initialization
AOS.init({
  duration: 1000,
  once: true,
});

// Scroll to top button
const btn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
};
btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};