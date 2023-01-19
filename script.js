const links = document.querySelectorAll('nav a');

for (let link of links) {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    const targetTop = target.offsetTop;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  });
}
