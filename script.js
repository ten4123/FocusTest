const container = document.querySelector('.container');

container.addEventListener('scroll', () => {
  const panels = container.querySelectorAll('.panel');
  const scrollPos = container.scrollTop;
  let closestPanel = panels[0];

  panels.forEach((panel) => {
    if (Math.abs(panel.offsetTop - scrollPos) < Math.abs(closestPanel.offsetTop - scrollPos)) {
      closestPanel = panel;
    }
  });

  container.scrollTo({
    top: closestPanel.offsetTop,
    behavior: 'smooth'
  });
});
