//space-slider
if(document.querySelector('.js-space-slider')) {
  if(window.innerWidth > 1023) {
    var effect = "coverflow"
  } else {
    var effect = "slide"
  }

  var spaceSlider = new Swiper(".js-space-slider .swiper", {
    loop: true,
    spaceBetween: 16,
    effect: effect,
    slidesPerView: 'auto',
    breakpoints: {
      768: {
        slidesPerView: 2.5,
        spaceBetween: 16
      },
      1024: {
        grabCursor: true,
        centeredSlides: true,
        effect: effect,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: -100,
          depth: 450,
          modifier: 2,
          slideShadows: true,
        },
      },
      1300: {
        grabCursor: true,
        centeredSlides: true,
        effect: effect,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: -260,
          depth: 650,
          modifier: 2,
          slideShadows: true,
        },
      }
    }
  });
}

//space-slider-cursor
if(document.querySelector('.space-slider-cursor') && window.innerWidth > 1023) {
  const spaceSlider = document.querySelector('.js-space-slider .swiper-wrapper');
  const cursor = document.querySelector('.space-slider-cursor');
  var cursorX = 0;
  var cursorY = 0;

  document.addEventListener('pointermove', function(e) {
    cursorX = e.clientX;
    cursorY = e.clientY;
    updateCursor();
  });

  function updateCursor() {
    cursor.style.top = `${cursorY - 87}px`
    cursor.style.left = `${cursorX - 87}px`
  }


  spaceSlider.addEventListener('mouseenter', () => {
    cursor.classList.add('is-active');
  });

  spaceSlider.addEventListener('mouseleave', () => {
    cursor.classList.remove('is-active');
  });
}

//advantages-slider
if(document.querySelector('.js-advantages-slider')) {
  var advantagesSlider = new Swiper(".js-advantages-slider .swiper", {
    spaceBetween: 16,
    slidesPerView: 1.4,
    breakpoints: {
      568: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 16
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 16
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 32
      }
    }
  });
}

//product-slider
if(document.querySelector('.js-product-slider')) {
  var productSlider = new Swiper(".js-product-slider .swiper", {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 16,
    speed: 800,
    navigation: {
      nextEl: '.js-product-slider .swiper-button-next',
      prevEl: '.js-product-slider .swiper-button-prev',
    },
    breakpoints: {
      960: {
        centeredSlides: true,
        spaceBetween: 0
      }
    },
  });
}

//hookah-slider 
if(document.querySelector('.js-hookah-slider')) {
  var hookahSlider = new Swiper(".js-hookah-slider .swiper", {
    spaceBetween: 16,
    slidesPerView: 'auto',
    speed: 800,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.js-hookah-slider .swiper-button-next',
      prevEl: '.js-hookah-slider .swiper-button-prev',
    },
    breakpoints: {
      1024: {
        centeredSlides: true,
        spaceBetween: 0,
      }
    },
    on: {
      afterInit: function () {
        setTimeout(() => {
          this.update()
        }, 800);
      },
      transitionStart: function () {
        setTimeout(() => {
          this.update()
        }, 50);
      },
    },
  });
}

//tables-list
if(document.querySelector('.js-tables-list') && window.innerWidth < 960) {
  var tablesSlider = new Swiper(".js-tables-list .swiper", {
    spaceBetween: 16,
    slidesPerView: 'auto',
    loop: true,
  });
}

//services-slider
if(document.querySelector('.js-services-slider')) {
  var servicehSlider = new Swiper(".js-services-slider .swiper", {
    spaceBetween: 16,
    slidesPerView: 'auto',
    initialSlide: 1,
    loop: true,
    breakpoints: {
      1024: {
        navigation: {
          nextEl: '.js-services-slider .swiper-button-next',
          prevEl: '.js-services-slider .swiper-button-prev',
        },
        spaceBetween: 32,
      }
    },
  });
}

//counter
if(document.querySelector('.counter')) {
  function counter() {
    const counters = document.querySelectorAll('.counter');
  
    counters.forEach((counter) => {
      const input = counter.querySelector('.counter__input');
      const upBtn = counter.querySelector('.counter__btn--up');
      const downBtn = counter.querySelector('.counter__btn--down');
  
      upBtn.addEventListener('click', () => {
        input.value = parseInt(input.value) + 1;
        if (input.value < 0) {
          input.value = 0;
        }
      });
  
      downBtn.addEventListener('click', () => {
        input.value = parseInt(input.value) - 1;
        if (input.value < 0) {
          input.value = 0;
        }
      });
    });
  }
  counter();
}

//instagram-slider
if(document.querySelector('.js-instagram-slider')) {
  var instagramSlider = new Swiper(".js-instagram-slider .swiper", {
    slidesPerView: 'auto',
    initialSlide: 1,
    loop: true,
  });
}

// modal
document.querySelectorAll('.modal-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const modal = this.getAttribute("href");
    modalsClose();
    document.body.classList.add('modalOpen');
    document.getElementById(modal).classList.add('active');
  });
});

function modalsClose() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('active');
    document.body.classList.remove('modalOpen');
  });
}

document.querySelectorAll('.modal-close').forEach(close => {
  close.addEventListener('click', modalsClose);
});

document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', modalsClose);

  modal.querySelector('.modal__inner').addEventListener('click',function(e){
    e.stopPropagation();
  });
});

//.js-ingredients
if(document.querySelector('.js-ingredients')) {
  const ingrContainer = document.querySelector('.js-ingredients');
  const ingrBtnsCont = ingrContainer.querySelector('.food-ingridients-cont');
  const ingrPanes = ingrContainer.querySelectorAll('.ingridients-pane');

  ingrContainer.addEventListener('click', function(e) {
    if(e.target.closest('.preview-select')) {
      const ingBtn = e.target.closest('.preview-select');
      const ingredient = ingBtn.dataset.ingridient;

      ingrBtnsCont.classList.add('ingredients--open');
      document.getElementById(ingredient).classList.add('is-active');
    }

    if(e.target.closest('.ingredients-back')) {
      const ingBack = e.target.closest('.ingredients-back');
      ingrBtnsCont.classList.remove('ingredients--open')

      ingrPanes.forEach(pane => {
        pane.classList.remove('is-active');
      });

    }
  });
}

// accordion 
const accordionHeaders = document.querySelectorAll('.accordion__header');
const accordionBodies = document.querySelectorAll('.accordion__body');

accordionHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const activeClass = 'accordion__header--active';
    
    accordionBodies.forEach((otherBody) => {
      const otherHeader = otherBody.previousElementSibling;
      if (otherHeader !== header && otherHeader.classList.contains(activeClass)) {
        otherHeader.classList.remove(activeClass);
        otherBody.style.maxHeight = '0px';
      }
    });

    if (header.classList.contains(activeClass)) {      
      header.classList.remove(activeClass);
      body.style.maxHeight = '0px'
    }else {
      header.classList.add(activeClass);
      const height = body.querySelector('.accordion__inner').scrollHeight + 'px';
      body.style.maxHeight = height
    }
  });
});

// phone mask
Inputmask("+375 (99) 999-99-99").mask(document.querySelectorAll(".phone-mask"));

// file-drop
if(document.querySelector('.file-drop-area')) {
  const fileInput = document.querySelectorAll('.file-input');

  fileInput.forEach(function(input) {
    input.addEventListener('dragenter', function() {
      input.closest('.file-drop-area').classList.add('is-active');
    });
    input.addEventListener('focus', function() {
      input.closest('.file-drop-area').classList.add('is-active');
    });
    input.addEventListener('click', function() {
      input.closest('.file-drop-area').classList.add('is-active');
    });
  });

  fileInput.forEach(function(input) {
    input.addEventListener('dragleave', function() {
      input.closest('.file-drop-area').classList.remove('is-active');
    });
    input.addEventListener('blur', function() {
      input.closest('.file-drop-area').classList.remove('is-active');
    });
    input.addEventListener('drop', function() {
      input.closest('.file-drop-area').classList.remove('is-active');
    });
  });


  fileInput.forEach(function(input) {
    input.addEventListener('change', function() {
      const files = Array.from(this.files);
      const filesCount = files.length;
      const textContainer = this.previousElementSibling;

      if (filesCount === 1) {
        const fileName = this.value.split('\\').pop();
        textContainer.textContent = fileName;
      } else if (filesCount > 1 && filesCount < 5) {
        textContainer.textContent = `${filesCount} файлa добавлено`;
      } else {
        textContainer.textContent = `${filesCount} файлов добавлено`;
      }

      const maxSize = 3 * 1024 * 1024; // 3 MB
      const oversizedFiles = files.filter(function(file) {
        return file.size > maxSize;
      });

      if (oversizedFiles.length > 0) {
        alert('максимум 3 MB:\n\n' + oversizedFiles.map(function(file) { return file.name }).join('\n'));
        this.value = '';
        textContainer.innerHTML = 'Перетащите сюда или <span class="file-msg-blue">загрузите файлы</span> doc, .docx, .rtf, .pdf, .odt, .jpg, .png менее 3 mb';
      }
    });
    input.addEventListener('drop', function(event) {
      if (event.dataTransfer && event.dataTransfer.files) {
        event.preventDefault();
        const files = event.dataTransfer.files;
        const filesCount = files.length;
        const textContainer = this.previousElementSibling;

    
        if (filesCount === 1) {
          const fileName = files[0].name;
          textContainer.textContent = fileName;
        } else if (filesCount > 1 && filesCount < 5) {
          textContainer.textContent = `${filesCount} файлa добавлено`;
        } else {
          textContainer.textContent = `${filesCount} файлов добавлено`;
        }
    
        const maxSize = 3 * 1024 * 1024; // 3 MB
        const oversizedFiles = Array.from(files).filter(function(file) {
          return file.size > maxSize;
        });
    
        if (oversizedFiles.length > 0) {
          alert('максимум 3 MB:\n\n' + oversizedFiles.map(function(file) { return file.name }).join('\n'));
          this.value = '';
          textContainer.innerHTML = 'Перетащите сюда или <span class="file-msg-blue">загрузите файлы</span> doc, .docx, .rtf, .pdf, .odt, .jpg, .png менее 3 mb';
        }
      }
    });
  });
}

//menubtn
try {
  document.addEventListener('click', function(e){
    if(e.target.closest('.header__menu-btn')) {
      e.preventDefault()
      e.target.closest('.header__menu-btn').classList.toggle('is-active');
      document.querySelector('.menu-wrap').classList.toggle('is-active');
      document.body.classList.toggle('modalOpen');
    }
  });
} catch (error) {
  console.error(error);
}


//map
if(document.querySelector('.map')) {
  function initialize() {
    var LatLng = new google.maps.LatLng(53.13239, 26.0287);
    var LatLng1 = new google.maps.LatLng(53.1325, 26.0289);
    var LatLng2 = new google.maps.LatLng(53.1329, 26.0289);
    var LatLng3 = new google.maps.LatLng(53.1319, 26.0316);
    var LatLng4 = new google.maps.LatLng(53.13245, 26.0274);
    var LatLng5 = new google.maps.LatLng(53.13295, 26.0258);

    var styleArray = [
      {
        stylers: [
          { visibility: "off" }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { color: "#000000" }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          { visibility: "on" },
          { color: "#32353C" },
          { weight: 2 }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          { visibility: "on" },
          { color: "#000000" },
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          { visibility: "on" },
          { color: "#000000" },
        ]
      },
      {
        featureType: "landscape",
        elementType: "labels",
        stylers: [
          { visibility: "on" },
          { color: "#000000" },
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          { visibility: "on" },
          { color: "#000000" },
        ]
      },
      
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          { visibility: "off" },
          { saturation: 36 },
          { color : "#000000" },
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.icon",
        stylers: [
          { visibility: "off" }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          { visibility: "on" },
          { color : "rgba(69, 74, 84, 0.2)" },
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [
          { visibility: "on" },
          { color: "#32353C" },
          { weight: 2 }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text",
        stylers: [
          { visibility: "off" },
          { color: "#000" },
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          { visibility: "on" },
          { saturation: 36 },
          { color : "#727272" },
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [
          { visibility: "on" },
          { color: "#000000" },
        ]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text",
        stylers: [
          { visibility: "on" },
          { color: "#727272" },
          { lightness: 16 }
        ]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          { visibility: "on" },
          { color: "#727272" },
        ]
      }
    ];
  
    var mapOptions = {
      zoom: 17.5,
      center: LatLng,
      disableDefaultUI: true,
      styles: styleArray
    };
  
    function TxtOverlay(pos, txt, cls, map) {
      this.pos = pos;
      this.txt_ = txt;
      this.cls_ = cls;
      this.map_ = map;
      this.div_ = null;
      this.setMap(map);
    }
  
    TxtOverlay.prototype = new google.maps.OverlayView();
  
  
  
    TxtOverlay.prototype.onAdd = function() {
      var div = document.createElement('DIV');
      div.className = this.cls_;
      div.innerHTML = this.txt_;
      this.div_ = div;
      var overlayProjection = this.getProjection();
      var position = overlayProjection.fromLatLngToDivPixel(this.pos);
      div.style.left = position.x + 'px';
      div.style.top = position.y + 'px';
      var panes = this.getPanes();
      panes.floatPane.appendChild(div);
    }

    TxtOverlay.prototype.draw = function() {
      var overlayProjection = this.getProjection();
      var position = overlayProjection.fromLatLngToDivPixel(this.pos);
      var div = this.div_;
      div.style.position = 'absolute';
      div.style.left = position.x + 'px';
      div.style.top = position.y + 'px';
      var currentZoom = map.getZoom();
      div.style.transform = `scale(${0.04 * currentZoom})`;
      div.style.marginLeft = 0;
      div.style.marginTop = 0;
      if(currentZoom == 16) {
        div.style.transform = `scale(${0.028 * currentZoom})`;
        div.style.display= 'block';
        div.style.marginLeft = -20 + 'px';
        div.style.marginTop = -20 + 'px';
      } else if(currentZoom <= 15) {
        div.style.display= 'none';
      }
    }
  
    var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
  
    var marker = new google.maps.Marker({
      position: LatLng,
      map: map,
      title: "Smoke House",
      icon: "img/map-logo.svg",
    });
  
    customTxt = "<div><span class='map-label-brand'>smoke house</span><span class='map-label-text'>ул. ленина, 16 «Б»</span><span class='map-label-text'>+375 (33) 506–79–79</span></div>";
    customTxt2 = "<div><span class='map-label-brand'>магазин </br> «1 000 мелочей»</span><span class='map-label-text'>ул. ленина, 21</span>";
    customTxt3 = "<div><span class='map-label-brand'>стадион </br> «локомотив»</span><span class='map-label-text'>ул. ленина, 22</span>";
    customTxt4 = "<div><span class='map-label-brand'>швейная </br> фабрика</span><span class='map-label-text'>ул. войкова, 2</span>";
    customTxt5 = "<div><span class='map-label-brand'>магазин </br> «сапфир»</span><span class='map-label-text'>ул. ленина, 15</span>";
  
  
    txt = new TxtOverlay(LatLng1, customTxt, "customBox", map);
    txt2 = new TxtOverlay(LatLng2, customTxt2, "customBox", map);
    txt3 = new TxtOverlay(LatLng3, customTxt3, "customBox", map);
    txt4 = new TxtOverlay(LatLng4, customTxt4, "customBox", map);
    txt5 = new TxtOverlay(LatLng5, customTxt5, "customBox", map);
  
    window.addEventListener('resize', function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, 'resize');
      map.setCenter(center);
    });
  
  }
  
  window.addEventListener('load', initialize);
}

//aos
AOS.init({
  duration: 2000,
})

//food menu
if(document.querySelector('.food-menu__link')) {
  const menuItems = document.querySelectorAll('.food-menu__link');
  const menuPanes = document.querySelectorAll('.food-menu__decore-wrapper');

  menuItems.forEach(menuItem => {
    menuItem.addEventListener('mouseenter', function(e){
      menuPanes.forEach(el => el.classList.remove('active'));
      menuItems.forEach(el => el.classList.remove('active'));

      const paneActive = document.getElementById(menuItem.dataset.target);

      menuItem.classList.add('active');
      paneActive.classList.add('active');
      
    })
  });
}