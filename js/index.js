$('.baus-t-box-4-1').click(function() {
  $('.thu-gon',this).toggleClass('open');
  $('.mo-rong',this).toggleClass('open');
  $('.baus-p-hide-1').toggleClass('open');
  $('.fas',this).toggleClass('fa-angle-double-down');
  $('.fas',this).toggleClass('fa-angle-double-up');
})
$('.baus-t-box-4-2').click(function() {
  $('.thu-gon',this).toggleClass('open');
  $('.mo-rong',this).toggleClass('open');
  $('.baus-p-hide-2').toggleClass('open');
  $('.fas',this).toggleClass('fa-angle-double-down');
  $('.fas',this).toggleClass('fa-angle-double-up');
})

$('.baus-t-box-4-3').click(function() {
  $('.thu-gon',this).toggleClass('open');
  $('.mo-rong',this).toggleClass('open');
  $('.baus-p-hide-3').toggleClass('open');
  $('.fas',this).toggleClass('fa-angle-double-down');
  $('.fas',this).toggleClass('fa-angle-double-up');
})
const logo1 = document.getElementById("logo1");
const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function (){
  let offset=window.pageYOffset * 0.7;
  let offset1=window.pageYOffset;
  parallax.style.backgroundPositionY = offset  +"px";
  logo1.style.marginTop =247+ offset1 * 0.6  +"px";

  if (offset1 > 589)
    logo1.style.opacity =0;
  else
    logo1.style.opacity =1;
})
