var form = document.getElementById("contact_form");
form.addEventListener("submit", function(event) {
    event.preventDefault()
})
var btn_send = document.getElementById("luu");
btn_send.addEventListener("click", function() {
    // Lấy tất cả các ô checkbox với cùng name
    var checkboxes = document.querySelectorAll('input[name="gioiTinh"]');
    var gioitinh;
    // Duyệt qua từng ô checkbox và kiểm tra trạng thái của chúng
    for (var i = 0; i < 2; i++) {
        if (checkboxes[i].checked) {
            gioitinh = i;
        }
    }

    var input = {
        ho: document.getElementById("ho").value,
        ten: document.getElementById("ten").value,
        bietdanh: document.getElementById("bietdanh").value,
        diachi: document.getElementById("diachi").value,
        email: document.getElementById("email").value,
        ngaysinh: document.getElementById("ngaysinh").value,
        sdt: document.getElementById("sdt").value,
        gioitinh
    }
    console.log(input);
    fetch("/customer/suaThongTin", {
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

            } else {
                toastError(message.message);
            }
            // Xử lý dữ liệu đã lấy được
            console.log(message.message);
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error('Lỗi: ' + error.message);
            toastError(error.message);
        });




})