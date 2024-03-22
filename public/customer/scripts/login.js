var form = document.getElementById("form-login");
console.log(form);
form.addEventListener("submit", (event) => {
    event.preventDefault();
})

var btn_submit_login = document.getElementById("submit");
btn_submit_login.addEventListener("click", () => {
    var input = {
        un: document.getElementById("username").value,
        pass: document.getElementById("password").value
    }
    fetch('/login', {
            method: 'POST', // Đặt phương thức là POST
            headers: {
                'Content-Type': 'application/json' // Đặt loại dữ liệu bạn gửi đi (ví dụ: JSON)
            },
            body: JSON.stringify({
                input
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
                window.location.href = "/sale"
            } else {
                toastError(message.message);
            }
            // Xử lý dữ liệu đã lấy được
            console.log(message.message);
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            toastError(error.message);
        });
})