document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const yearNode = document.querySelector('[data-year]');

  if (yearNode) {
    yearNode.textContent = String(year);
  }

  document.querySelectorAll('details').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        document.querySelectorAll('details').forEach((other) => {
          if (other !== item) {
            other.open = false;
          }
        });
      }
    });
  });
});
