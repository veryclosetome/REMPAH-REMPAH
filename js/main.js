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
  
  // Memilih popup dan tombol close
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.closeBtn');
  const popupBtn = document.querySelector('.buttonBlue');
  const popupText = document.querySelector('.popup-content p');
  
  // Fungsi untuk memeriksa value quantity
  function checkQuantity() {
    let totalQuantity = 0;
    quantities.forEach(quantity => {
      totalQuantity += parseInt(quantity.value);
    });
  
    if (totalQuantity > 0) {
      popupText.innerText = 'Terima kasih atas pesanan anda!';
    } else {
      popupText.innerText = ' Maaf, terjadi kesalahan ';
    }
  }
  
  // Menambahkan event listener pada tombol popup
  popupBtn.addEventListener('click', () => {
    checkQuantity();
    popup.style.display = 'block';
  });
  
  // Menambahkan event listener pada tombol close
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });