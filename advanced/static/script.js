// Agent instruction: keep this code human-friendly — clear names, comments, and simple logic.
(function () {
  'use strict';

  // Breakpoint (in px) below which the accordion stacks vertically.
  const MOBILE_BREAKPOINT = 639;
  // Minimum width (in px) needed to show an open panel's content.
  const PANEL_MIN_WIDTH = 340;

  const container = document.getElementById('panels');
  const panels = Array.from(container.querySelectorAll('.panel'));
  const firstPanel = panels[0];

  // Open panels in the order they were opened (oldest first).
  const openPanels = [];

  // Width taken up by one collapsed panel's label.
  function labelWidth() {
    return firstPanel.querySelector('.label').offsetWidth;
  }

  function isMobile() {
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }

  // How many panels can be open at once for the current viewport.
  function maxOpenPanels() {
    if (isMobile()) return 1;
    const freeSpace = container.clientWidth - panels.length * labelWidth();
    return Math.max(1, Math.floor(freeSpace / PANEL_MIN_WIDTH));
  }

  // Toggle a panel's open/closed state and keep its aria-expanded in sync.
  function setOpen(panel, open) {
    panel.classList.toggle('open', open);
    panel.querySelector('.label').setAttribute('aria-expanded', String(open));
  }

  // Open as many not-yet-open panels as the viewport allows.
  function fillOpenPanels() {
    const max = maxOpenPanels();
    panels.forEach(function (panel, index) {
      // On mobile the first panel is only a logo handle and never opens.
      if (isMobile() && index === 0) return;
      if (openPanels.length < max && !openPanels.includes(panel)) {
        openPanels.push(panel);
        setOpen(panel, true);
      }
    });
  }

  let wasMobile = isMobile();

  // Close the oldest panels until we are within the allowed count.
  function trimOpenPanels() {
    const max = maxOpenPanels();
    while (openPanels.length > max) {
      setOpen(openPanels.shift(), false);
    }
  }

  // React to viewport changes, keeping the open set valid.
  function handleResize() {
    const mobile = isMobile();

    if (mobile) {
      // The first panel can't be open on mobile.
      const firstIndex = openPanels.indexOf(firstPanel);
      if (firstIndex !== -1) openPanels.splice(firstIndex, 1);
      setOpen(firstPanel, false);
    } else if (wasMobile && !openPanels.includes(firstPanel)) {
      // Returning to desktop re-opens the first panel.
      openPanels.unshift(firstPanel);
      setOpen(firstPanel, true);
    }

    wasMobile = mobile;

    // If the viewport shrank, drop the most recently opened panels.
    const max = maxOpenPanels();
    while (openPanels.length > max) {
      setOpen(openPanels.pop(), false);
    }

    fillOpenPanels();
  }

  // Open or close a single panel in response to a click.
  function toggle(panel) {
    const index = openPanels.indexOf(panel);
    if (index === -1) {
      openPanels.push(panel);
      setOpen(panel, true);
      trimOpenPanels();
    } else if (openPanels.length > 1) {
      // Keep at least one panel open at all times.
      openPanels.splice(index, 1);
      setOpen(panel, false);
    }
  }

  // Set up initial state and click handlers.
  panels.forEach(function (panel) {
    if (panel.classList.contains('open')) openPanels.push(panel);

    const label = panel.querySelector('.label');
    label.addEventListener('click', function () {
      if (isMobile() && panel === firstPanel) return;
      toggle(panel);
    });
  });

  window.addEventListener('resize', handleResize);
  handleResize();

  // Toggle the black-and-white theme without triggering panel toggles.
  function toggleTheme(event) {
    event.stopPropagation();
    document.body.classList.toggle('bw');
  }

  document.querySelector('#first .logo svg').addEventListener('click', toggleTheme);
  document.querySelector('#first .label-logo').addEventListener('click', toggleTheme);
})();
