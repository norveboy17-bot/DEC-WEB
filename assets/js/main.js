/* Shared navigation and small site-wide interactions. */
(() => {
  const toggle = document.querySelector('#nav-toggle');
  const links = document.querySelector('#primary-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
      links.classList.toggle('is-open', !isOpen);
    });
    links.addEventListener('click', event => {
      if (event.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation menu');
        links.classList.remove('is-open');
      }
    });
  }
  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = new Date().getFullYear();
  const backToTop = document.querySelector('#back-to-top');
  if (backToTop) {
    const update = () => backToTop.classList.toggle('is-visible', window.scrollY > 450);
    window.addEventListener('scroll', update, { passive: true });
    update();
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
})();
