const hamburger = document.querySelector('.hamburger'),
      navMobile = document.querySelector('.nav_mobile'),
      seoBtn = document.querySelectorAll('.seo_btn'),
      seoContent = document.querySelectorAll('.seo_content'),
      switchCars = document.querySelectorAll('.gallery_cars'),
      body = document.querySelector('body'),
      sliders = document.querySelectorAll('.mySwiper'),
      mobileLinks = document.querySelectorAll('.link-mobile');


hamburger.addEventListener('click', () =>  {
    body.classList.toggle('overflow-hidden');
    hamburger.classList.toggle('hamburger-active');
    navMobile.classList.toggle('nav_mobile-active');
});

mobileLinks.forEach(item => {
    item.addEventListener('click', () => {
        body.classList.remove('overflow-hidden');
        hamburger.classList.remove('hamburger-active');
        navMobile.classList.remove('nav_mobile-active');
    });
});


seoBtn.forEach((btn, i) => {
    let newContent = document.createElement('div');
    newContent.textContent = 'Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.';

    btn.addEventListener('click', () => {
        const currentContent = seoContent[i]; 

        if (currentContent.contains(newContent)) {
            currentContent.removeChild(newContent); 
        } else {
            currentContent.appendChild(newContent); 
            const seoDescr = document.querySelector('.seo_descr');
            seoDescr.classList.forEach(cls => {
                newContent.classList.add(cls);
            });
        }
    });
});

switchCars.forEach((item, i) => {
    item.addEventListener('click', () => {
        switchCars.forEach((item, i) => {
            item.classList.remove('gallery_active');
            sliders[i].classList.add('hidden');
        });
        item.classList.add('gallery_active');
        sliders[i].classList.remove('hidden');
    });
});