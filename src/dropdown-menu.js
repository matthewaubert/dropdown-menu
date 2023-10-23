// cache DOM
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

// toggle matching dropdown menu on hamburger button click
function toggleDropdown(e) {
  dropdownMenus.forEach(menu => {
    if (datasetsMatch(e.target, menu)) menu.classList.toggle('visible');
  });
}

// hide dropdown menu when anything other than matching hamburger button is clicked
function hideDropdown(e) {
  dropdownMenus.forEach(menu => {
    if (!datasetsMatch(e.target, menu)) menu.classList.remove('visible');
  });
}

// return whether event target's dataset.for matches menu's dataset.id
function datasetsMatch(eventTarget, menu) {
  return (eventTarget.dataset.for === menu.dataset.id);
}

export { toggleDropdown, hideDropdown };