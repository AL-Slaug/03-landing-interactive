const specialtiesSwiper = new Swiper('.specialties__swiper', {

    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
  });

function openModal(element) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = element.querySelector('img').src;
    modalImg.classList.add('enlarged'); // Добавляем класс для увеличения
}

function closeModal() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "none";
    modalImg.classList.remove('enlarged'); // Убираем класс при закрытии
}

