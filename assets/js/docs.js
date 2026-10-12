/* Make the Docs FAQ easier to scan: keep one disclosure open at a time. */
(() => {
  const details = Array.from(document.querySelectorAll('#docs details'));
  details.forEach(item => item.addEventListener('toggle', () => {
    if (!item.open) return;
    details.forEach(other => { if (other !== item) other.open = false; });
  }));
})();
