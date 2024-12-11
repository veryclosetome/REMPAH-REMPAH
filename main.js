document.addEventListener('DOMContentLoaded', (event) => {
  const btnMinusElements = document.querySelectorAll('.btn-minus');
  const btnPlusElements = document.querySelectorAll('.btn-plus');

  btnMinusElements.forEach(btn => {
    btn.addEventListener('click', function() {
      const input = this.nextElementSibling;
      const currentValue = parseInt(input.value);
      if (currentValue > parseInt(input.min)) {
        input.value = currentValue - 1;
      }
    });
  });

  btnPlusElements.forEach(btn => {
    btn.addEventListener('click', function() {
      const input = this.previousElementSibling;
      input.value = parseInt(input.value) + 1;
    });
  });
});

const quantities = document.querySelectorAll('.quantity');


const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.closeBtn');
const popupBtn = document.querySelector('.buttonBlue');
const popupText = document.querySelector('.popup-content p');


function checkQuantity() {
  let totalQuantity = 0;
  let valueDetails = '';

  quantities.forEach(quantity => {
      const value = parseInt(quantity.value);
      if (value > 0) {
          valueDetails += ` ${quantity.dataset.item}, `;
          totalQuantity += value;
      }
  });

  if (totalQuantity > 0) {
      popupText.innerText = `Terima kasih atas pesanan anda!\nTotal : ${totalQuantity}\n\nDetail:\n${valueDetails}`;
  } else {
      popupText.innerText = 'Maaf, terjadi kesalahan';
  }
}



popupBtn.addEventListener('click', () => {
  checkQuantity();
  popup.style.display = 'block';
});


closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});