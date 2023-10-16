// Lắng nghe sự kiện scroll trên toàn bộ trang web
var page = 1;
var load = true;
window.addEventListener("scroll", function() {

    var heightHeader = document.getElementsByTagName("header")[0].offsetHeight;
    var heightFooter = document.getElementsByTagName("footer")[0].offsetHeight;
    var pageHeight = document.documentElement.scrollHeight - heightHeader - heightFooter;
    if (page != 0 && load == true) {
        // Kiểm tra vị trí hiện tại của thanh cuộn
        if (window.scrollY >= (pageHeight / 6) * page || window.scrollY == pageHeight) {
            // Đã cuộn đến đầu trang
            fetch('/sale/more', {
                    method: 'POST', // Đặt phương thức là POST
                    headers: {
                        'Content-Type': 'application/json' // Đặt loại dữ liệu bạn gửi đi (ví dụ: JSON)
                    },
                    body: JSON.stringify({
                        page
                    }) // Gửi dữ liệu trong trường hợp POST
                })
                .then(response => {
                    // Xử lý phản hồi HTTP
                    if (!response.ok) {
                        throw new Error('Lỗi mạng hoặc lỗi HTTP, mã lỗi: ' + response.status);
                    }
                    return response.text();
                })
                .then(products => {
                    if (products) {
                        var list_product = document.getElementById("list-product");
                        list_product.innerHTML = list_product.innerHTML + products;

                        page++;
                    } else {
                        toastInfo("Đã hết sản phẩm");
                        page = 0;
                        document.getElementById("end-product").style.display = "block";
                    }
                })
                .catch(error => {
                    // Xử lý lỗi nếu có
                    console.error('Lỗi: ' + error.message);
                    toastError(error.message);
                    page = 0;
                });
            load = false;
            setTimeout(() => {
                load = true;
            }, 1000)

        }
    }
});