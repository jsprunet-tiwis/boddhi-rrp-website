// BODDHI RRP® website — interactions
// Enquiry buttons are a mock (as in the design): they show a confirmation
// toast; no data is sent anywhere.

(function () {
  var isFr = (document.documentElement.lang || '').indexOf('fr') === 0;
  var toastMessage = isFr
    ? 'Demande envoyée, nous revenons vers vous'
    : 'Enquiry sent — we’ll be in touch';

  let toastEl = null;
  let toastTimer = null;

  function ping(message) {
    if (toastEl) toastEl.remove();
    clearTimeout(toastTimer);
    toastEl = document.createElement('div');
    toastEl.className = 'toast';
    toastEl.innerHTML =
      '<i class="ph-fill ph-check-circle" style="font-size:18px;color:var(--teal-500)"></i>' +
      message;
    document.body.appendChild(toastEl);
    toastTimer = setTimeout(function () {
      toastEl.remove();
      toastEl = null;
    }, 2600);
  }

  document.querySelectorAll('[data-enquire]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      ping(toastMessage);
    });
  });

  // Remember an explicit language choice; the EN root page redirects to /fr/
  // only when the visitor previously picked French.
  document.querySelectorAll('[data-lang-link]').forEach(function (a) {
    a.addEventListener('click', function () {
      try { localStorage.setItem('rrpLang', a.getAttribute('data-lang-link')); } catch (e) {}
    });
  });
})();
