

var trash = document.getElementsByClassName('trash');
var trashArray = Array.from(trash);
trashArray.forEach(element => {
    element.addEventListener('click', () => {
        if(confirm("bạn có muốn xoá không") == true ) {
            var order = element.parentElement.parentElement;
            var idDH = order.children[1].innerHTML;


            fetch('/order/cancel', {
                method: 'POST', // Đặt phương thức là POST
                headers: {
                  'Content-Type': 'application/json' // Đặt loại dữ liệu bạn gửi đi (ví dụ: JSON)
                },
                body: JSON.stringify({ 
                    key1: 'value1', 
                    key2: 'value2' 
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
                if(message == "huỷ thành công") {
                    order.innerHTML = ""
                    toastSuccess();
                    toastSuccess();
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



