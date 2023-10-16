(function() {
    'use strict'

    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation')

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    }, false)
}())


var form = document.getElementById("form_pay");
form.addEventListener('submit', function(event) {
    event.preventDefault();
})
btn_pay = document.getElementById("submit");
btn_pay.addEventListener("click", function() {
    var phuongthucthanhtoan = document.getElementsByName("phuongthucthanhtoan");
    for (var i = 0; i < phuongthucthanhtoan.length; i++) {
        if (phuongthucthanhtoan[i].checked) {
            phuongthucthanhtoan = phuongthucthanhtoan[i].value;
            break;
        }
    }
    var input = {
        ten: document.getElementById("ten").value,
        sdt: document.getElementById("sdt").value,
        diachi: document.getElementById("diachi").value,
        phuongthucthanhtoan
    }

    if (!input.ten || !input.sdt || !input.diachi || !input.phuongthucthanhtoan) {
        return;
    }

    fetch("/cart/checkout/done", {
            method: 'POST', // Đặt phương thức là POST
            headers: {
                'Content-Type': 'application/json' // Đặt loại dữ liệu bạn gửi đi (ví dụ: JSON)
            },
            body: JSON.stringify({
                input
            }) // Gửi dữ liệu trong trường hợp POST
        }).then(response => {
            if (!response.ok) {
                throw new Error("Có lỗi xảy ra");
            }
            return response.json();
        }).then(message => {
            if (message.status == 1) {
                toastSuccess(message.message);
                setTimeout(function() {
                    window.location.href = "/order"; // Thay thế "URL_của_trang_chủ" bằng đường dẫn đến trang chủ của bạn
                }, 3000);

            } else {
                toastError(message.message);
            }
            // Xử lý dữ liệu đã lấy được
            console.log(message);
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error('Lỗi: ' + error.message);
            toastError(error.message);
        });
})