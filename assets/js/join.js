/* Accessible QR lightbox. */
(() => {
  const qr = document.querySelector('#instagram-qr');
  if (!qr) return;
  const modal = document.createElement('div');
  modal.className = 'qr-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Instagram QR code enlarged view');
  modal.innerHTML = `<div class="qr-modal__panel"><button type="button" class="qr-modal__close" aria-label="Close enlarged QR code">×</button><img alt="Enlarged Instagram QR code"><p class="qr-modal__caption">Scan to find Del English Club on Instagram</p></div>`;
  document.body.appendChild(modal);
  const enlarged = modal.querySelector('img');
  const close = modal.querySelector('button');
  let priorFocus = null;
  const open = () => {
    priorFocus = document.activeElement;
    enlarged.src = qr.src;
    modal.classList.add('is-open');
    close.focus();
  };
  const shut = () => {
    modal.classList.remove('is-open');
    if (priorFocus && priorFocus.focus) priorFocus.focus();
  };
  qr.addEventListener('click', open);
  qr.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
  close.addEventListener('click', shut);
  modal.addEventListener('click', event => { if (event.target === modal) shut(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('is-open')) shut(); });
})();
