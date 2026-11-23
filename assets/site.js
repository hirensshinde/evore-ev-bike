document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.getElementById('menu-btn');
  var mobileNav = document.getElementById('mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('show');
      mobileNav.classList.toggle('hidden', !isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('#model-grid .model-card');
  var noResults = document.getElementById('no-results');

  if (filterBtns.length && cards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var filter = btn.getAttribute('data-filter');
        var visibleCount = 0;
        cards.forEach(function (card) {
          var match = filter === 'all' || card.getAttribute('data-type') === filter;
          card.style.display = match ? '' : 'none';
          if (match) visibleCount++;
        });
        if (noResults) {
          noResults.classList.toggle('hidden', visibleCount !== 0);
        }
      });
    });
  }
});
