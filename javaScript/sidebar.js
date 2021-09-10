var downArrow =$(".arrow");
for (var i = 0; i < downArrow.length; i++) {
  downArrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}
var sidebar = $(".sidebar")[0];
var sidebarOpenBtn = $(".menu")[0];
var sidebarCloseBtn = $(".left-arrow");


sidebarOpenBtn.addEventListener("click", function(){

//   sidebarCloseBtn.css('visibility',"visible");

  sidebar.classList.toggle("close");
//   sidebarOpenBtn.css('visibility',"hidden");
});
