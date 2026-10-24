(function () {
  var container = document.getElementById('panels');
  var panels = Array.prototype.slice.call(container.querySelectorAll('.panel'));
  var PANEL_MIN = 340; // minimum width of an open panel's content
  var order = []; // open panels, oldest first

  function labelWidth() {
    return panels[0].querySelector('.label').offsetWidth;
  }

  function maxOpen() {
    if (window.innerWidth <= 700) return 1;
    var free = container.clientWidth - panels.length * labelWidth();
    return Math.max(1, Math.floor(free / PANEL_MIN));
  }

  function setOpen(panel, open) {
    panel.classList.toggle('open', open);
    panel.querySelector('.label').setAttribute('aria-expanded', open);
  }

  function trim() {
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
      toggle(panel);
    });
  });

  window.addEventListener('resize', trim);
  panels.forEach(function (panel) {
    if (order.length < maxOpen() && order.indexOf(panel) === -1) {
      order.push(panel);
      setOpen(panel, true);
    }
  });
  trim();
})();
