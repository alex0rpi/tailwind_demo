const burgerBtn = document.getElementById('burger');
const menu = document.getElementById('menu');

burgerBtn.addEventListener('click', () => {
  const isHidden = menu.classList.contains('hidden');
  if (isHidden) {
    menu.classList.remove('hidden');
    return;
  } else {
    menu.classList.add('hidden');
  }
});
