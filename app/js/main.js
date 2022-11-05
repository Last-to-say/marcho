$(function(){
  
  $('.commodity-form__count-input').niceNumber({

  });
  
  $('.catalog-view__btn').on('click', function(){
    $('.catalog-view__btn').removeClass('catalog-view__btn--active');
    $(this).addClass('catalog-view__btn--active');
  });

  $('.button-list').on('click', function(){
    $('.products-item').addClass('products-item--list');
  });
  
  $('.button-grid').on('click', function(){
    $('.products-item').removeClass('products-item--list');
  });
  
  $('.slider__inner').slick({
    arrows: false, 
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $('.commodity-slide__small').slick({
    asNavFor: '.commodity-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $('.commodity-slide__big').slick({
    asNavFor: '.commodity-slide__small',
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('.products-rate').rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  //timer
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.querySelector('.day-deal__clock');
    const daysSpan = clock.querySelector('.day-deal__days');
    const hoursSpan = clock.querySelector('.day-deal__hours');
    const minutesSpan = clock.querySelector('.day-deal__minutes');
    const secondsSpan = clock.querySelector('.day-deal__seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = $('.day-deal__clock').attr('data-time');
  initializeClock('day-deal__clock', deadline);

});