document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItems = document.querySelector('.cart-items');
  const totalAmount = document.querySelector('.total-amount');
  const checkoutButton = document.querySelector('.checkout');

  let total = 0;

  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          const product = this.parentElement;
          const productName = product.querySelector('h3').innerText;
          const productPrice = parseFloat(product.querySelector('.price').innerText.replace(' руб.', ''));

          const li = document.createElement('li');
          li.innerText = `${productName} - ${productPrice} руб.`;
          cartItems.appendChild(li);

          total += productPrice;
          totalAmount.innerText = total;
      });
  });

  checkoutButton.addEventListener('click', function () {
      alert('Заказ оформлен! Сумма заказа: ' + total + ' руб.');
      // Здесь можно добавить дополнительную логику, например, отправку данных о заказе на сервер
      clearCart();
  });

  function clearCart() {
      cartItems.innerHTML = '';
      total = 0;
      totalAmount.innerText = total;
  }
});
