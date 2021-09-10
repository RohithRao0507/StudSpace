var downArrow = $(".arrow");
for (var i = 0; i < downArrow.length; i++) {
  downArrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}

var sideBar = document.getElementById('sideBar');

var toogle = $('.sidebar')[0]

var menuBtnOpen = document.getElementById('menubtnOpen');
var menuBtnClose = document.getElementById('menubtnClose');

if (sideBar.className == 'sidebar close') {
  console.log('CloseBtn -Hid')
  menuBtnClose.classList.add('hidden');
}

menuBtnOpen.addEventListener('click', () => {
  if (sideBar.className == 'sidebar close') {
    menuBtnOpen.classList.add('hidden');
  }
  toogle.classList.toggle("close");
  menuBtnClose.classList.remove('hidden');
});

menuBtnClose.addEventListener('click', function () {
  if (sideBar.className == 'sidebar') {
    menuBtnClose.classList.add('visiblity');
  }
  toogle.classList.toggle("close");
  menuBtnClose.classList.add('hidden');
  menuBtnOpen.classList.remove('hidden');
});