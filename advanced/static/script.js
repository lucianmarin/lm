(function () {
  var container = document.getElementById('panels');
  var panels = Array.prototype.slice.call(container.querySelectorAll('.panel'));
  var PANEL_MIN = 340; // minimum width of an open panel's content
  var order = []; // open panels, oldest first

  function labelWidth() {
    return panels[0].querySelector('.label').offsetWidth;
  }

  function isMobile() {
    return window.innerWidth <= 639;
  }

  function maxOpen() {
    if (isMobile()) return 1;
    var free = container.clientWidth - panels.length * labelWidth();
    return Math.max(1, Math.floor(free / PANEL_MIN));
  }

  function setOpen(panel, open) {
    panel.classList.toggle('open', open);
    panel.querySelector('.label').setAttribute('aria-expanded', open);
  }

  function fill() {
    var max = maxOpen();
    panels.forEach(function (panel, idx) {
      if (isMobile() && idx === 0) return;
      if (order.length < max && order.indexOf(panel) === -1) {
        order.push(panel);
        setOpen(panel, true);
      }
    });
  }

  var wasMobile = isMobile();

  // on mobile the first panel is only a logo handle and never opens
  function trim() {
    var mobile = isMobile();
    if (mobile) {
      var i = order.indexOf(panels[0]);
      if (i !== -1) order.splice(i, 1);
      setOpen(panels[0], false);
      if (!order.length) {
        order.push(panels[1]);
        setOpen(panels[1], true);
      }
    } else if (wasMobile) {
      if (order.indexOf(panels[0]) === -1) {
        order.push(panels[0]);
        setOpen(panels[0], true);
      }
      fill();
    }
    wasMobile = mobile;
    var max = maxOpen();
    while (order.length > max) setOpen(order.shift(), false);
  }

  function toggle(panel) {
    var i = order.indexOf(panel);
    if (i === -1) {
      order.push(panel);
      setOpen(panel, true);
      trim();
    } else if (order.length > 1) {
      order.splice(i, 1);
      setOpen(panel, false);
    }
  }

  panels.forEach(function (panel) {
    if (panel.classList.contains('open')) order.push(panel);
    panel.querySelector('.label').addEventListener('click', function () {
      if (isMobile() && panel === panels[0]) return;
      toggle(panel);
    });
  });

  window.addEventListener('resize', trim);
  fill();
  trim();
})();
