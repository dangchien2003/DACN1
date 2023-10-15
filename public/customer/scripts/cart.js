var formCart = document.getElementById('form-cart');
var btn_updateCart = document.getElementById('update-cart');

var btnDeletes = document.getElementsByClassName("btn-delete");
btnDeletes = Array.from(btnDeletes);
btnDeletes.forEach(element => {
    element.addEventListener("click", () => {
        var idsp = element.parentNode.querySelector("#idsp").value;

        if (confirm("Bạn có muốn xoá sản phẩm") == true) {
            fetch('/cart/delete', {
                    method: 'PUT', // Đặt phương thức là POST
                    headers: {
                        'Content-Type': 'application/json' // Đặt loại dữ liệu bạn gửi đi (ví dụ: JSON)
                    },
                    body: JSON.stringify({
                        idsp
                    }) // Gửi dữ liệu trong trường hợp POST
                })
                .then(response => {
                    // Xử lý phản hồi HTTP
                    if (!response.ok) {
                        throw new Error('Lỗi mạng hoặc lỗi HTTP, mã lỗi: ' + response.status);
                    }
                    return response.json(); // Đọc dữ liệu JSON từ phản hồi
                })
                .then(res => {
                    if (res.status == 1) {
                        element.parentNode.parentNode.innerHTML = ""
                        toastSuccess(res.message);
                        Array.from(document.getElementsByClassName("tongGia")).forEach(element => {
                            if (res.tongGia)
                                element.innerHTML = res.tongGia + " VNĐ";
                            else
                                element.innerHTML = "0 VNĐ";
                        })
                    } else if (res.status == 2) {
                        toastError(res.message);
                    } else {
                        toastError(res.message);
                    }
                    // Xử lý dữ liệu đã lấy được
                    console.log(res.message);
                })
                .catch(error => {
                    // Xử lý lỗi nếu có
                    toastError(error.message);
                });
        }
    })
});


btn_updateCart.addEventListener('click', function() {

    formCart.submit();
})


// tăng số lư