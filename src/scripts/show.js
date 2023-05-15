document.body.style.position = 'fixed';
document.body.style.width = '100%';

const clickOutside = (e) => {
  if (e.target.classList.contains('popover-overlay')) {
  closeDialog()
  document.querySelector('.popover-overlay').removeEventListener('click', clickOutside);
  }
}

const closeOnEscape = (e) => {
  if (e.keyCode === 27) {
    window.removeEventListener('keyup', closeOnEscape)
    return closeDialog();
  }
}

const closeDialog = () => {
  document.body.style.position = '';
  document.body.style.width = '';
  document.querySelector('.popover-overlay').classList.add('hide');
}

document.querySelector('.popover-close').addEventListener('click', closeDialog)

document.querySelector('.popover-overlay').addEventListener('click', clickOutside);

window.addEventListener('keyup', closeOnEscape);
