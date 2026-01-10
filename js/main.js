/**
 * Sal Hernandez - Sleek Minimal Site
 */

(function() {
  'use strict';

  // Rotating taglines
  const lines = document.querySelectorAll('.tagline-line');
  let current = 0;
  
  if (lines.length > 1) {
    setInterval(() => {
      lines[current].classList.remove('active');
      current = (current + 1) % lines.length;
      lines[current].classList.add('active');
    }, 3500);
  }

  // Console message
  console.log('%cHey there 👋', 'font-size: 16px; font-weight: bold;');
  console.log('Curious? Let\'s connect → linkedin.com/in/clickclickonsal');

})();
