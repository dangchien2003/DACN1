var trash = document.getElementsByClassName('trash');
var trashArray = Array.from(trash);
trashArray.forEach(element => {
    element.addEventListener('click', () => {
        console.log(element);
        if (confirm("bạn có muốn xoá không") == true) {
            var order = element.parentElement.parentElement;
            var idDH = order.children[1].innerHTML;


            fetch('/order/cancel', {
                    method: 'POST', // Đặt phương thức là POST
                    headers: {
                        'Content-Type': 'application/json' // Đặt loại dữ liệu bạn gửi đi (ví dụ: JSON)
                    },
                    body: JSON.stringify({
                        idDH
                    }) // Gửi dữ liệu trong trường hợp POST
                })
                .then(response => {
                    // Xử lý phản hồi HTTP
                    if (!response.ok) {
                        throw new Error('Lỗi mạng hoặc lỗi HTTP, mã lỗi: ' + response.status);
                    }
                    return response.json(); // Đọc dữ liệu JSON từ phản hồi
                })
                .then(message => {
                    if (message.status == 1) {
                        order.querySelector(".status").style.cssText = "background-color: rgb(250, 114, 102)"
                        order.querySelector("#trangThai").innerHTML = "Đã huỷ đơn"
                        order.querySelector("#trash").innerHTML = ""
                        toastSuccess(message.message);

                    } else {
                        toastError(message.message);

                    }
                    // Xử lý dữ liệu đã lấy được
                    console.log(message);
                })
                .catch(error => {
                    // Xử lý lỗi nếu có
                    console.error('Lỗi: ' + error.message);
                });
        }
    })
});



