/* Gentle reveal on the activity cards without blocking content if JS is disabled. */
(() => {
  const cards = document.querySelectorAll('.activity-card');
  if (!('IntersectionObserver' in window) || !cards.length) return;
  cards.forEach(card => card.classList.add('reveal-ready'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  cards.forEach(card => observer.observe(card));
})();
