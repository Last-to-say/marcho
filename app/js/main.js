$(function(){
  
  
  $('.slider__inner').slick({
    arrows: false, 
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $('.products__star-rate').rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

});