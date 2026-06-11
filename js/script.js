/**
 * Web Projects Playground - Main Script
 * Handles clock updates and documentation button navigation
 */

(function() {
    'use strict';
  
    /**
     * Update live clock in status bar
     */
    function updateTime() {
      const timeElement = document.getElementById('liveTime');
      if (timeElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
      }
    }
  
    /**
     * Initialize clock and set interval
     */
    function initClock() {
      updateTime();
      setInterval(updateTime, 1000);
    }
  
    /**
     * Handle documentation button click
     * Opens docs.altgr.ee in a new tab
     */
    function initDocsButton() {
      const docsBtn = document.getElementById('docsBtn');
      if (docsBtn) {
        docsBtn.addEventListener('click', () => {
          window.open('https://docs.altgr.ee', '_blank', 'noopener,noreferrer');
        });
      }
    }
  
    /**
     * Log project link clicks for analytics
     */
    function initProjectTracking() {
      const projectLinks = document.querySelectorAll('.project-row');
      projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          const projectName = link.querySelector('.project-name')?.textContent?.trim() || 'Unknown Project';
          const href = link.getAttribute('href');
          console.log(`[Web Projects Playground] Opening project: ${projectName} → ${href}`);
        });
      });
    }
  
    /**
     * Initialize all functionality when DOM is ready
     */
    function init() {
      initClock();
      initDocsButton();
      initProjectTracking();
    }
  
    // Start the application when DOM is fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();