/**
 * =============================================================================
 * Shared Website Footer Component
 * =============================================================================
 * Edit this file to update the footer across all pages automatically!
 * Any changes made here will immediately reflect throughout the entire website.
 * =============================================================================
 */

(function () {
  const footerContent = `
    <div class="container">
      <div class="row">
        <div class="col-sm-6 social">
          <a href="https://www.behance.net/navin-kumar" target="_blank" rel="noopener noreferrer"><span class="bi bi-behance"></span></a>
          <a href="https://github.com/navinmotion" target="_blank" rel="noopener noreferrer"><span class="bi bi-github"></span></a>
          <a href="https://www.instagram.com/navinmotion" target="_blank" rel="noopener noreferrer"><span class="bi bi-instagram"></span></a>
          <a href="https://www.linkedin.com/in/navinkrprasad" target="_blank" rel="noopener noreferrer"><span class="bi bi-linkedin"></span></a>
          <a href="https://vimeo.com/navinmotion" target="_blank" rel="noopener noreferrer"><span class="bi bi-vimeo"></span></a>
        </div>
        <div class="">
          <p class="mb-1">&copy; <span class="name">Navin Kumar.</span> All Rights Reserved</p>
        </div>
      </div>
    </div>
  `;

  function renderFooter() {
    const footerElement = document.querySelector('footer.footer');
    if (footerElement) {
      footerElement.innerHTML = footerContent;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
  } else {
    renderFooter();
  }
})();

