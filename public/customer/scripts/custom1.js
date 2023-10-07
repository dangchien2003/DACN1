var formCart = document.getElementById('form-cart');
console.log(formCart);
var btn_updateCart = document.getElementById('update-cart');


btn_updateCart.addEventListener('click', function() {
    
    formCart.submit();
})