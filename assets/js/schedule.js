/* Search and filter semester schedule rows. */
(() => {
  const search = document.querySelector('#schedule-search');
  const filter = document.querySelector('#schedule-filter');
  const result = document.querySelector('#schedule-result');
  const rows = Array.from(document.querySelectorAll('.schedule-row'));
  if (!rows.length || !search || !filter || !result) return;
  const apply = () => {
    const q = search.value.trim().toLocaleLowerCase();
    const category = filter.value;
    let visible = 0;
    rows.forEach(row => {
      const matchesText = row.textContent.toLocaleLowerCase().includes(q);
      const matchesCategory = category === 'all' || row.dataset.category === category;
      const show = matchesText && matchesCategory;
      row.hidden = !show;
      if (show) visible++;
    });
    result.textContent = `Showing ${visible} of ${rows.length} sessions.`;
  };
  search.addEventListener('input', apply);
  filter.addEventListener('change', apply);
  apply();
})();
